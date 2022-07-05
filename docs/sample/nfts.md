---
id: nfts
title: NFTs铸造
sidebar_label: NFTs铸造
---

这个例子演示了实现一个 NFT 合约罐。NFTs（不可篡改的代币）是唯一的代币，具有任意的
元数据--通常是某种类型的图像--以形成交易卡的数字等价物。目前有几个不同的
互联网计算机的 NFT 标准，但最节省燃料和功能最完整的是[DIP-721](https://github.com/Psychedelic/DIP721)标准，因此
这就是这个合约罐子使用的标准。你可以在[YouTube](https://youtu.be/1po3udDADp4)上看到一个快速介绍。

这个合约罐子是该标准的基本实现，支持造币、刻录和通知接口的扩展。

在[Rust](https://github.com/dfinity/examples/tree/master/rust/dip721-nft-container)的[samples repository](https://github.com/dfinity/examples)中提供了示例代码，Motoko 也即将问世。
一个用于演示的 Rust 合约罐子的运行实例可在[t5l7c-7yaaa-aaaab-qaehq-cai](https://t5l7c-7yaaa-aaaab-qaehq-cai.ic0.app)上找到。
该接口是为了编程，但 Rust 版本还包含 HTTP 功能，所以你可以在`<canister URL>/<NFT ID>/<file ID>`查看元数据文件。
它包含六个 NFT，所以你可以查看从`<canister URL>/0/0`到`<canister URL>/5/0`的项目。

命令行长度的限制会使你无法通过`dfx`铸造一个带有大文件的 NFT，如图像或视频。为此目的。
有一个[命令行造币工具](https://github.com/dfinity/experimental-minting-tool)，用于造币简单的 NFTs。

## 点子

由于[DIP-721](https://github.com/Psychedelic/DIP721)标准主要规定了[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)操作，所以 NFT 合约罐并不十分复杂。
但我们仍然可以用它来解释关于互联网计算机的应用程序开发的三个重要概念。

### 稳定的内存用于合约罐子的升级

互联网计算机采用了[Orthogonal Persistence](https://beta.smartcontracts.org/docs/current/developer-docs/build/languages/motoko#orthogonal-persistence)，所以开发者一般不需要考虑很多关于存储数据的问题。
然而，在升级合约罐子代码时，有必要明确地处理合约罐子数据。NFT 合约罐子的例子显示了如何使用`pre_upgrade`和`post_upgrade`来处理稳定的内存。

### 认证数据

一般来说，当一个函数只读取数据（而不是修改合约罐子的状态）时，使用
有利于使用[查询调用而不是更新调用](https://beta.smartcontracts.org/docs/current/concepts/canisters-code#query-and-update-methods)。
但是，由于查询调用不通过共识，[认证响应](https://beta.smartcontracts.org/docs/current/developer-docs/build/security/general-security-best-practices#certify-query-responses-if-they-are-relevant-for-security)
应该尽可能地使用。Rust 实现的 HTTP 接口显示了如何处理认证数据。

### 下放对资产的控制权

出于多种原因，用户可能想把对其资产的控制权交给其他身份的人，甚至是删除（烧毁）一个项目。
NFT 合约罐子的例子包含了所有这些情况，并展示了它是如何实现的。

## 方法

由于[DIP-721](https://github.com/Psychedelic/DIP721)中要求的基本功能是非常直接的实现，本节只讨论如何处理/实现上述想法。

### 合约罐体升级的稳定存储

在合约罐子代码升级过程中，内存在不同的合约罐子调用之间是不持久的。只有稳定存储器中的内存被带过去。
正因为如此，有必要在升级发生之前将所有数据写入稳定存储器，这通常是在`pre_upgrade`函数中完成。
在升级发生之前，系统会调用这个函数。在升级之后，通常在 "post_upgrade "函数中，将数据从稳定内存加载到内存中。

在 "post_upgrade "函数中。在升级发生后，"post_upgrade "函数被系统调用。
如果在升级的任何部分（包括`post_upgdrade`）发生错误，整个升级会被还原。

Rust CDK（Canister Development Kit）目前只支持稳定内存中的一个值，所以有必要创建一个可以容纳所有你关心的东西的对象。

此外，并不是所有的数据类型都可以存储在稳定内存中；只有那些实现了[CandidType trait](https://docs.rs/candid/latest/candid/types/trait.CandidType.html)
(通常通过[CandidType derive macro](https://docs.rs/candid/latest/candid/derive.CandidType.html))可以被写入稳定内存。

由于我们合约罐子的状态包括一个没有实现 "CandidType "的 "RbTree"，它必须被转换为一个实现 "CandidType "的数据结构（在这里是 "Vec"）。

幸运的是，`RbTree`和`Vec`都实现了允许向/从迭代器转换的函数，所以转换可以很容易完成。
转换之后，一个单独的`StableState`对象被用来在升级期间存储数据。

### 认证数据

要通过 http 为`<canister-id>.ic0.app`而不是`<canister-id>.raw.ic0.app`提供资产，响应必须
[包含一个证书](https://wiki.internetcomputer.org/wiki/HTTP_asset_certification)以验证其内容。

获取这样的证书不能在查询调用中发生，因为它必须通过共识，所以它必须在更新调用中创建。

一个证书的内容是非常有限的。在写这篇文章的时候，合约罐子可以提交不超过 32 字节的数据来进行认证。
为了充分利用这少量的数据，使用了 "哈希树"（上一节的 "RbTree "也是 "哈希树"）。
哈希树 "是一个树形的数据结构，整个树可以被总结（哈希）成一个 32 字节的小哈希值。
每当树上的某些内容发生变化时，哈希值也会发生变化。如果这样一棵树的哈希值被认证，就意味着这棵树的内容可以被认为是被认证的。

要看 NFT 示例合约罐中的数据是如何被认证的，请看`http.rs`中的函数`add_hash`。

为了验证响应，必须检查：a）提供的内容是树的一部分；b）包含该内容的树实际上可以被哈希到认证的哈希值。

函数`witness`负责创建一个具有最小内容的树，该树仍然可以被验证以满足 a)和 b)。
一旦这个最小的树被构建，证书和最小的哈希树被作为`IC-Certificate`头的一部分发送。

关于认证工作的更详细解释，请参阅[这个解释视频](https://dfinity.org/howitworks/response-certification)。

### 管理对资产的控制

[DIP-721](https://github.com/Psychedelic/DIP721)规定了对 NFT 的多层次控制。

- 所有者：这个人拥有一个 NFT。他们可以转让 NFT，增加/删除操作员，或烧毁 NFT。
- 操作员。算是一个被委托的所有者。操作员不拥有 NFT，但可以做与所有者相同的动作。
- 保管人。NFT 集合/合约罐子的创造者。他们可以对 NFT 做任何事情（转移、添加/删除操作者、烧毁、甚至取消烧毁），但也可以铸造新的 NFT 或改变集合的符号或描述。

NFT 示例合约罐使这三个层次的访问控制非常简单。对于每个级别的控制，都有一个单独的负责人名单（或一组）。
然后，每当有人试图做他们需要授权的事情时，这三个级别都会被手动检查。
如果一个用户没有被授权调用某个功能，就会返回错误。

烧毁一个 NFT 是一个特殊的情况。烧毁 NFT 意味着删除 NFT（在 DIP-721 中不打算这样做）或将所有权设置为`null'（或类似的值）。

在互联网计算机上，这个不存在的主体被称为[管理合约罐](https://beta.smartcontracts.org/docs/current/references/ic-interface-spec#the-ic-management-canister)。
引自该链接。"IC 管理合约罐只是一个门面；它实际上并不作为一个合约罐子存在（有隔离的状态，Wasm 代码等）。"它的地址是`aaaaa-aa`。

使用这个管理合约罐的地址，我们可以构建它的本金，并将管理合约罐设置为一个烧毁的 NFT 的所有者。
