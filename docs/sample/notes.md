---
id: notes
title: 加密记事本Dapp
sidebar_label: 加密记事本Dapp
---

[加密笔记](https://github.com/dfinity/examples/tree/master/motoko/encrypted-notes-dapp)是一个实验性的应用程序，用于编写和存储短文形式的机密信息。用户可以通过任何数量的通过[互联网身份](https://smartcontracts.org/docs/ic-identity-guide/what-is-ic-identity.html)认证的自动同步设备访问他们的笔记。由于 dapp 的前端进行了端对端加密，用户不需要相信 dapp 的后端。

你可以玩玩[部署在 IC 上的 dapp](https://cvhrw-2yaaa-aaaaj-aaiqa-cai.ic0.app/)，并在[YouTube](https://youtu.be/DZQmtPSxvbs)上看到一个快速介绍。

## 想法

我们想建立一个简单（但不是太简单）的纯粹在 IC 上运行的 dapp 例子。这个例子依赖于 IC 的*网络服务*和*存储能力*。我们的示例应用程序侧重于以下两个关键特征。(1）客户端，*端到端加密*和（2）*多用户*和*多设备*支持。

为了证明 IC 作为开发此类 dapp 的平台的潜力，我们使用两个不同的合约罐子开发套件（CDK）来实现这个例子。Motoko CDK 允许开发者使用[Motoko](https://smartcontracts.org/docs/language-guide/motoko.html)语言来实现基于角色的 dapp。Rust CDK 允许用[Rust](https://smartcontracts.org/docs/rust/rust-intro.html)实现 dapp。在这两种情况下，合约罐子被编译成 WebAssembly 文件，然后被部署到 IC 上。

## 方法

Encrypted Notes 的基本功能由两个主要部分组成。

首先，我们重新使用了一个名为 `IC-Notes`的（非加密的）dapp 的代码。特别是 IC-Notes 依靠[Internet Identity](https://smartcontracts.org/docs/ic-identity-guide/auth-how-to.html) (II)合约罐子进行用户认证，加密笔记也继承了这一方法。为了开发的目的，我们部署了一个 II 合约罐的本地实例（以及一个加密笔记的本地实例）；当把加密笔记部署到主网上时，II 的现实世界实例被用于认证。

其次，我们为笔记内容启用了客户端的端到端加密，从另一个现有的名为[IC-Vault](https://github.com/timohanke/icvault)的应用程序中借用了这个解决方案。我们的加密笔记应用程序遵循 IC-Vault 的方法，支持管理多个设备。

在本文讨论的合约罐子的上下文中，设备不一定是一个独立的物理设备，而是一个逻辑实例设备，例如，一个网络浏览器，有自己的本地数据存储。例如，我们认为在同一台笔记本电脑上运行的两个网络浏览器是两个独立的设备；这些浏览器产生自己的加密密钥。相比之下，II 合约罐依赖于硬件生成的加密密钥，只区分硬件设备。

为了支持每个用户的多个设备，IC-Vault 采用了一个设备管理器，这个合约罐子可以在与用户相关的所有设备上安全地同步设备特定的密钥。本文件的其余部分重点介绍加密笔记合约罐，它以类似的方式实现设备管理器，但作为其主合约罐的一部分。

关于进一步的细节和用户故事，请参考[README 文件](https://github.com/dfinity/examples/blob/master/motoko/encrypted-notes-dapp/README.md)。

![Encrypted Notes dapp的高层次架构概述图](https://internetcomputer.org/assets/images/encrypted-notes-arch-fff9e1962b908b318afc378bbda02c2a.png)

## 笔记管理

- 用户在前台被链接到 II，得到用户的本金，可以用来调用 API 查询和更新。

- 在内部，我们存储形式为`Principal → [Notes]`和`counter`的地图。

- `counter`存储了合约罐子已经创建的笔记数量（在所有的委托人中）。

- 方法`create`在其委托人的条目中增加一个注释（如果它存在的话），或者在地图中增加委托人的`note_id == counter`，然后增加`counter`。

- 方法`update`为调用者的委托人和所提供的`note_id`调出一个注释，并用所提供的`text`替换它（这个`text`被假定为由前端加密的）。

- 方法`delete`在地图中找到具有给定`note_id`的笔记并将其删除。为了确保笔记的 ID 总是全球唯一的，我们不减少`counter`。

## 密码学

- 笔记的加密完全是客户端的。然而，我们的例子 dapp 仍然不能防止可能的恶意节点提供者的潜在数据泄露攻击。例如，攻击者可以推断出一个特定用户有多少笔记，用户活动统计等。因此，在使用这个 dapp 的任何代码或模式之前，请仔细阅读免责声明。

- 回顾一下，在我们的定义中，设备不一定是一个独立的物理设备，而只是一个具有独立本地存储的网络浏览器实例。

- 该应用程序使用三种不同的密钥。

  - 对称 AES-GCM _秘钥_：用于加密特定委托人的笔记。校长的笔记被存储在用该秘密密钥加密的加密笔记合约罐中。因此，应用程序的前端需要知道这个秘密密钥来解密该用户的笔记，并发送加密的笔记以存储在加密笔记合约罐中。

  - 设备 RSA-OAEP _公钥_：用于加密委托人的对称 AES _秘钥_。加密后的秘钥存储在委托人注册的每个设备的合约罐子里。同一密钥用于使用该设备的不同委托人。

  - 设备 RSA-OAEP _私钥_：用于解密存储在加密笔记合约罐中的特定委托人的对称 AES _秘钥_。一旦前端解密了秘钥，它就可以使用这个密钥来解密存储在加密笔记合约罐中的笔记。

- 我们存储了一个形式为的地图。

```
Principal → (DeviceAlias → PublicKey,
      DeviceAlias → CipherText)
```

- 这个地图用于管理用户设备，接下来会解释。

- 为了注册一个设备，前端会生成一个设备别名、一个公钥和一个私钥（保存在其本地存储中）。

- 添加一个设备。

  - **设备注册：**如果这个身份已经知道，新的设备一开始会保持不同步；这时，只有这个设备的`别名'和`公钥'会被添加到加密笔记合约罐中。

  - **设备同步：**一旦未同步的设备获得这个 II 的所有未同步设备的列表，它将在每个未同步设备的公钥下加密对称 AES _秘钥_。之后，未加入的设备获得加密的对称 AES _秘钥_，对其进行解密，然后用它来解密存储在加密笔记合约罐中的现有笔记。

- 一旦通过 II 的认证。

  - 如果这个身份不知道，那么前端就会生成一个对称的 AES _秘钥_，并用自己的公钥进行加密。然后前端调用`seed(publickey, ciphertext)`，将该密码文本及其相关的`publickey`添加到地图中。

  - 如果用户想注册一个后续设备，前端调用`register_device`，传入该设备的`alias`和`publickey`。然后，前端调用`submit_ciphertexts([publickey, ciphertext])`为所有它需要注册的设备进行注册。这样，注册的设备就可以提取和解密 AES 密钥来加密和解密用户笔记。

## 顺序图

### 添加新设备

![显示设备注册和同步的UML顺序图](https://internetcomputer.org/assets/images/encrypted-notes-seq-228eceb336df9f9c5bdda7a1e16406ea.png)
