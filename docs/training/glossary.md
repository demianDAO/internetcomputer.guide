---
id: glossary
title: 词汇表
sidebar_label: 词汇表
---

---

```javascript
程序合约罐 = canister;
```

## A

##### 账户

一个账本**账户**是[账本]中的一组条目
canister]（#ledger_canister "wikilink"）中的一组条目，它是一个智能合约，可以
模仿普通银行账户的伪装和行为，其计量单位为
计量单位是[ICP](#ICP 'wikilink') (互联网计算机协议)
实用代币。账本账户由[...]拥有。
委托人](#委托人 "wikilink")，他们的所有权不会随着时间的推移而改变
随时间变化。账本上的每个账户都有一个正的[
余额](#balance 'wikilink')，以 ICP 为单位，精度为 8 个
小数点。

##### 地址

在分类帐上的[交易](#transaction 'wikilink')方面。
**地址**与[账户](#账户 'wikilink')同义。

##### actor

一个**Actor**是[Actor 模型]中的一个基元。
模型](<https://en.wikipedia.org/wiki/Actor_model>)中的一个基元。它是一个具有
它是一个具有封装状态的进程，通过异步消息与其他同时运行的
通过按顺序接收的异步消息与其他并发运行的角色进行通信。该
行为体模型与[IC](<#Internet_Computer_(IC)> 'wikilink') 有关。
因为 IC 上的[程序合约罐](#canister 'wikilink')（一种智能
契约的一种）遵循 Actor 模型的并发和异步的
计算。

## B

##### 余额

账本上一个[账户](#账户 'wikilink')的\*\*余额为
所有存款的总和减去所有提款的总和。作为一种
作为一种退化的情况，有时也可以说，一个不在账簿中的账户
不存在于账簿中的账户，其余额为零。

账簿账户的余额以 ICP 为单位，用八位小数表示
用八位小数表示。因此，一个账户的最小正余额是
0.00000001 或 10^-8 [ICP](#ICP 'wikilink')；这一数额有时被称为
被称为一个**e8**。

##### 批次

一个**批**是一个[消息](#messages 'wikilink')的集合，其顺序由
顺序是由[共识](#consensus 'wikilink')商定的。

##### 受益人

一个[帐户](#帐户 'wikilink')的\*\*受益人是[
委托人](#principal 'wikilink')，他拥有[
余额](#余额 'wikilink')的账户。一个账户的受益人
帐户的受益人不能改变。一个账户的受益人可以或不可以
允许在账户上进行[交易](#交易 'wikilink')。
帐户（见[受托人](#受托人 'wikilink')）。

##### 区块链

一个**区块链**是一个不断增长的加密链接区块的列表。
通过[共识](#consensus 'wikilink')商定。在[ 互联网
计算机](#Internet_computer 'wikilink') 每一个[
子网](#子网 'wikilink')是一个区块链，这些区块链
使用[链密钥加密法](#链_密钥 'wikilink')进行互动。

#### 边界节点

**边界节点**互联网计算机的 Nginx 网关。这些节点
充当 HTTP 路由器，通过它，网络的
[子网](#子网 'wikilink')区块链节点可以到达。这些
边界节点有几个目的：它们有助于发现能力（the
ic0.app 域名指向一组边界节点），他们是
地理感知，可以将传入的请求路由到最近的子网。
[节点](#node 'wikilink')，它承载着[canister](#canister 'wikilink')
参与，它们可以帮助负载平衡查询
[交易](#transaction 'wikilink')，它们可以缓存
加密验证的数据，发挥内容分发网络的作用。
网络的角色，它们可以对来自外部 IP 的过度互动进行节流
地址的过度互动，引导/安装服务工作者，并且它们可以帮助
保护子网免受 DDoS 攻击。

##### 燃烧交易

燃烧交易\*\*是 "燃烧"[...]的过程。
ICP](#ICP "wikilink")的过程，据此销毁一定数量的 ICP。
主要的使用情况是购买[周期](#cycles 'wikilink')。
通过这种方式，ICP 被销毁，而同时相应的
循环的数量，使用 ICP 和 SDR 之间的当前汇率。
和([SDR](#SDR 'wikilink'))之间的汇率，以一种方式，一个 SDR 对应于
一万亿（10E12）个周期。它被表示为一个[
交易](#transaction 'wikilink')从源头[
账户](#账户 'wikilink')到[ICP 供应
帐户](#ICP_supply_account 'wikilink')。

## C

##### Candid

**Candid**是一个专门为互联网计算机精心设计的 IDL。
为应用接口提供了一种通用语言，以方便
用不同的编程语言编写的服务之间的通信
语言

##### 程序合约罐

一个**程序合约罐**是一种智能合约，它捆绑了*代码*和
_状态_。一个程序合约罐可以被部署为[智能
契约](#smart_contract 'wikilink')部署在[ 互联网
计算机](#Internet_Computer 'wikilink')并通过互联网访问。

##### 程序合约罐账户

一个**程序合约罐账户**是一个由[]拥有的分类账账户。
canister](#canister "wikilink")（即其
[受托人](#受托人 'wikilink')是一个程序合约罐）。一个非程序合约罐
账户是一个分类账账户，其受托人是一个非托管人。
[principal](#principal 'wikilink')。

##### canister identifier

程序合约罐标识符**或**程序合约罐 ID\*\*是一个全球唯一的
标识符，用于识别[程序合约罐](#程序合约罐 'wikilink')，并可用于与之互动。
用来与它进行交互。

##### 程序合约罐签名

一个**程序合约罐签名**使用基于[认证的
变量]（#certified_variables "wikilink"）。公共 "钥匙 "包括一个
[canister id](#canister_identifier 'wikilink')加上一个种子（以便
每一个[canister](#canister 'wikilink')都有许多公钥）；签名
是证明程序合约罐已将签名的信息放在其状态树的特定位置的证书
在其状态树中的一个特定位置。详情见[互联网
计算机接口
规范](https://smartcontracts.org/docs/interface-spec/#canister-signatures)。

##### canister state

一个**程序合约罐的状态**是一个
[程序合约罐](#程序合约罐 'wikilink')在某一特定时间点的全部状态。一个程序合约罐的
状态被分为*用户状态*和*系统状态*。用户状态是
一个[WebAssembly](#WebAssembly 'wikilink')模块实例和系统
状态是由[互联网计算机](#Internet_Computer)维护的辅助状态。
计算机](#Internet_Computer "wikilink")代表程序合约罐维护的辅助状态，例如
如它的计算分配、[周期](#cycles 'wikilink')的平衡。
输入和输出队列，以及其他元数据。一个程序合约罐与
它自己的系统状态进行交互，要么是隐式的，比如在消耗周期的时候。
或通过系统 API，如发送消息时。

##### 补给包（CUP）

一个**接续包**是一个数据包，它包含了所有需要
来启动一个[子网](#子网 '维基链接')
[复制](#replica 'wikilink')。

##### 认证查询

一个**认证的查询**是一个查询调用，其响应是经过认证的。
认证的。

##### 认证的变量

一个[canister](#canister 'wikilink')可以存储在其
[子网](#子网 'wikilink')的典型状态中，在处理一个
更新调用（或程序合约罐间调用），因此在处理一个
[query](#query 'wikilink')调用时，程序合约罐可以返回一个证明
给用户，以证明它确实承诺了该值。

##### 链式钥匙

**链式钥匙**密码学由一组密码学协议组成
组成的[节点](#节点 'wikilink')进行协调。
[互联网计算机](#Internet_Computer 'wikilink')。最明显的
链式钥匙加密法最明显的创新是，互联网计算机有一个
单一公钥。这是一个巨大的优势，因为它允许任何设备。
包括智能手表和移动电话，都可以验证来自互联网计算机的文物的真实性。
来自互联网计算机的人工制品。

##### 共识

在分布式计算中，**共识**是一种容错机制，通过
的手段，一些[节点](#节点 'wikilink')可以达成协议
关于一个值或状态。

共识是[副本](#replica 'wikilink')的一个核心组件
软件。共识层选择[消息](#messages 'wikilink')
从点对点工件库中选择[消息](#messages 'wikilink')
其他[子网](#子网 'wikilink')的跨网络流中提取消息，并
将它们组织成一个[批](#batch 'wikilink')，并将其交付给
消息路由](#message_routing "wikilink")层。

##### 控制器

一个[程序合约罐](#程序合约罐 'wikilink')的\*\*控制者是一个人。
有管理权的个人、组织或其他控制者。
控制者。控制者的身份是由他们的
[principals](#principal 'wikilink')。例如，一个控制器的
可以升级[WebAssembly](#WebAssembly 'wikilink')的代码。
的代码，或者删除这个程序合约罐。

##### 循环

在[互联网计算机](#Internet_Computer 'wikilink')上，一个**周期**
是衡量资源消耗的单位，其形式为
处理、内存、存储和网络带宽等形式的资源消耗的计量单位。每个程序合约罐都有一个
循环账户，该账户中的资源消耗是由程序合约罐收取的。
互联网计算机的公用代币（[ICP](#ICP 'wikilink')）可以
转换为周期，并转移到一个存储 canister。循环也可以
循环也可以通过将其附加到一个[inter-canister\]信息中，在程序合约罐之间转移。
信息。

ICP 总是可以用 ICP 的当前价格转换为循环。
用一万亿个周期对应一个特别提款权的惯例，以 \[SDR\]衡量。
相当于一个 SDR。

## D

##### dapp

一个**dapp**，或去中心化的应用程序是一个
[程序合约罐](#canister 'wikilink')运行在[互联网
计算机](#Internet_Computer 'wikilink')。

##### 数据中心

一个**数据中心**(DC)是一个物理站点，承载着
[节点](#节点 'wikilink')，它们对[互联网
计算机](#Internet_Computer 'wikilink')。它包括硬件和
软件基础设施，用于部署节点。一个 DC 被识别为
在互联网计算机上由一个唯一的标识符来识别。

##### 解散延迟

**溶解延迟**是指以下时间
[神经元](#神经元 'wikilink')必须花[的时间。
溶解](#dissolving_state 'wikilink')，然后才变成[...]。
溶解](#dissolved_state "wikilink")。

##### 溶解状态

溶解状态\*\*是一种[神经元](#neuron 'wikilink')状态
其特征是[溶解延迟](#dissolve_delay 'wikilink')等于
零。(通常说来，处于这种状态的神经元没有
有 "溶解延迟"）。正是在这种状态下，一个神经元可以被
在这种状态下，一个神经元可以被 "分散"，因此它的股权被转移到其他地方，而它相应的
[神经元账户](#neuron_account 'wikilink') 关闭。该
溶解的神经元的[年龄](#neuron_age 'wikilink')被认为是
零。

##### 溶解状态

一个**溶解状态**是一个[神经元](#neuron 'wikilink')状态，该状态
在其所有者发出 "开始溶解 "命令后立即出现。
并一直持续到发出 "停止溶解 "命令，或者直到
解散延迟计时器耗尽。溶解的[年龄
神经元](#neuron_age 'wikilink')被认为是零。

## E

##### 执行环境

执行环境是\*\*\*的核心层之一。
[replica](#replica 'wikilink')软件。

## F

##### 信托人

一个[账户](#账户 'wikilink')的\**受托人是
[委托人](#委托人 'wikilink')被允许进行
[交易](#交易 'wikilink')的账户；因此，将其视为
因此，将其视为账户的*所有者可能是有用的，但要注意的是
它可能是也可能不是账户的[受益人](#受益人 'wikilink')
帐户的[受益人](#beneficiary 'wikilink')。神经元账户](#neuron_account "wikilink")就是一个突出的例子。
受益人和受托人不一致的账户的一个突出例子。
并不一致（受托人是[治理
罐](#governance_canister 'wikilink')而受益人是
神经元持有人）。一个（分类账）账户的受托人不会随着时间的推移而改变。
时间而改变。

受托人和受益人之间的区别对于以下情况也很重要
与 IC 分类账互动的 DeFi dapps（程序合约罐）：在这种情况下。
受托人是 DeFi 程序合约罐，而受益人则是
在这种情况下，受托人是 DeFi 程序合约罐，而受益人是使用 DeFi 程序合约罐服务的个人或组织（#principal\|principal）。
的服务的个人或组织(DeFi canister)。

## G

##### governance canister

**治理程序合约罐**是一个[系统
canister](#system_canister 'wikilink')，实现了
[NNS](<#network_nervous_system_(NNS)> 'wikilink')治理系统，即。
其中，存储和管理[神经元](#神经元 'wikilink')和
[建议](#proposal 'wikilink')，并实施 NNS 的
[投票](#voting 'wikilink')环境。

## I

##### ICP

**互联网计算机协议**代币（股票代码 "ICP"）是[互联网计算机]的实用
互联网计算机](#Internet_Computer "wikilink")的实用代币。ICP
允许更广泛的互联网社区参与管理
互联网计算机区块链网络的治理，将 ICP 锁定在
[神经元](#神经元 'wikilink')。ICP 也可以转换为
[循环](#cycles 'wikilink')，然后用来驱动
[程序合约罐](#canister 'wikilink')。

##### ICP 供应账户

ICP 供应账户\*\*是一个准虚构的账本
[账户](#账户 'wikilink')，其余额始终为零。它有一个
它在[ICP](#ICP 'wikilink')[燃烧](#燃烧 'wikilink')中起着核心作用。
和[造币](#minting 'wikilink')操作中起着核心作用。

##### 身份

一个**身份**是一个字节的字符串，用来识别一个实体。
诸如一个[委托人](#principal 'wikilink')，它与
[互联网计算机](#Internet_Computer 'wikilink')。对于用户来说，身份是
身份是用户的 DER 编码的公钥的 SHA-224 哈希值。
[互联网计算机接口
规范](https://smartcontracts.org/docs/interface-spec/)有更多
细节。

##### 互联网身份

**互联网身份**是一个匿名的区块链认证系统
在[互联网计算机](#Internet_Computer 'wikilink')上运行。

##### 归纳池

子网](#子网 "wikilink")区块链的\*\*诱导池是
的所有[输入队列](#input_queue 'wikilink')的集合。
[程序合约罐](#程序合约罐 'wikilink')驻扎在子网的所有[程序合约罐]。

##### 入站信息

一个**入口信息**是一个[信息](#message 'wikilink')，由终端用户发送至
发送给运行在子网的[程序合约罐](#程序合约罐 'wikilink')。
[子网](#子网 'wikilink')区块链。该信息是由
对应于终端用户的秘密密钥。
[身份](#身份 'wikilink')对应的密匙签名，并发送至其中一个
[复制品](#replica 'wikilink')，这些复制品参与子网。

##### 进站消息历史

入站信息历史记录\*\*记录了每一条入站信息的当前状态
[入口消息](#ingress_message 'wikilink')被一个
副本](#replica "wikilink")处理的每一个[入口信息](#ingress_message 'wikilink')的当前状态，并跟踪信息是否
成功纳入[归纳
池](#induction_pool 'wikilink')中，并跟踪消息是否被成功地包含在[感应池](#induction_pool 'wikilink')中，以及被执行的
消息。

##### 输入队列

一个[canister](#canister 'wikilink')的\*\*输入队列包含所有的
[消息](#message 'wikilink')与该程序合约罐绑定。也请参见
[归纳池](#induction_pool 'wikilink')。当程序合约罐被
预定执行时，其输入队列中的消息将被执行。

##### 程序合约罐间消息

一个**程序合约罐间消息**是一个[消息](#message 'wikilink')从一个[程序合约罐](#message 'wikilink')发出的。
从一个[筒子](#筒子 'wikilink')发送到另一个。程序合约罐之间的
信息不同于用户发起的[入口
消息](#ingress_message 'wikilink')。

##### 互联网计算机(IC)

互联网计算机\*\*（IC）是一个去中心化的区块链，它
提供可扩展的计算能力，用于运行
[程序合约罐](#程序合约罐 'wikilink')通过独立的[节点
供应商](#node_provider 'wikilink') 运行[节点](#node 'wikilink')
在地理上分布的[数据中心](#data_center 'wikilink')。

## L

##### ledger canister

账本程序合约罐\*\*是一个[系统
程序合约罐](#system_canister 'wikilink')，其主要作用是存储
[账目](#account 'wikilink')和它们相应的
[交易](#transaction 'wikilink')。

## M

##### 消息

一个**信息**是从一个[程序合约罐](#程序合约罐 'wikilink')发送至
另一个，或者从一个用户到一个程序合约罐。

##### 消息路由

消息路由\*\*层接收[批次](#batch 'wikilink')来自于
共识](#consensus "wikilink")层，并将它们归纳到
[归纳池](#induction_pool 'wikilink')。然后，消息路由
安排一组[程序合约罐](#canister 'wikilink')来执行信息
从它们的[输入队列](#input_queue 'wikilink')。

在[消息](#message 'wikilink')被执行后，消息
路由层从输出队列中获取执行回合中产生的任何消息，并将这些消息放在
输出队列中产生的任何消息，并将这些消息放入流出的流中，以便
被其他[子网](#子网 'wikilink')上的程序合约罐所消耗。

##### 铸币交易

一个**铸币交易**是 "铸币 "的过程
[ICP](#ICP 'wikilink')的过程，通过这个过程，一定数量的 ICP 会出现在
存在。铸造 ICP 的目的是为了奖励
[神经元](#neuron 'wikilink')进行[投票](#voting 'wikilink')，并且
奖励[节点提供者](#node_provider 'wikilink')来参与
奖励[IC](<#Internet_Computer_(IC)> 'wikilink')通过运行[节点]来提供计算能力。
运作的[节点](#node 'wikilink')的计算能力。一个铸币
交易被表示为一个[交易](#交易 'wikilink')
从[ICP 供应账户](#ICP_supply_account 'wikilink') 到一个
目的地[账户](#账户 'wikilink')。

##### Motoko

**Motoko**是一种编程语言，旨在直接支持
的编程模型。
计算机](#Internet_Computer "wikilink")，使其更容易
有效地建立应用程序，并利用这个平台的一些更不寻常的功能。
这个平台的一些不寻常的功能，包括用于智能合约的 Actor 模型和对 WebAssembly 的编译。
契约和编译到 WebAssembly。

## N

##### 非解体状态

一个[神经元](#neuron 'wikilink')，不是
[溶解](#dissolved_state 'wikilink')或[...
溶解](#dissolving_state 'wikilink')被称为处于一个
**非溶解状态**（或 "老化"）。因此，非溶解性神经元
累积 "年龄"，但需要注意的是，在任何时候开始解散
会将这一年龄降低到零。溶解延迟参数
不溶解（又称 "老化"）的神经元的溶解延迟参数不能为零，因为这样一个
神经元必须已经被溶解了。

##### 网络神经系统（NNS）

网络神经系统\*\*（NNS）是一个由[系统
程序合约罐](#system_canister 'wikilink')(又称 "NNS 程序合约罐")的集合。
组成一个系统，管理[互联网]的所有方面。
计算机](#Internet_Computer "wikilink")。

##### 神经元

一个**神经元**是一个[IC](<#Internet_Computer_(IC)> 'wikilink')实体，它
可以提出[建议](#proposal 'wikilink')，并对与[互联网]治理有关的建议进行投票。
治理[互联网]的实体。
计算机](#Internet_Computer "wikilink")平台。

为了提供负责任的治理所需的稳定性，神经元
需要储存（"赌注"）一定数量的[ICP](#ICP 'wikilink')，以便能够进行和投票。
以便能够提出建议并进行投票。这
[锁定](#non-dissolving_state 'wikilink')的代币一段时间。
之后，它开始[溶解](#dissolving_state 'wikilink')。
一个神经元的 ICP 桩被存储在一个[神经元
账户](#neuron_account 'wikilink')。神经元所有者有权利
对治理问题进行提议和投票，并获得奖励
[投票](#voting 'wikilink')的奖励，奖励金额与赌注的 ICP 金额成正比。
和[解散]的持续时间
期间](#non-dissolving_state "wikilink")。

##### 神经元账户

一个**的神经元账户**是一个[程序合约罐
账户](#canister_account 'wikilink')，其
[受益人](#beneficiary 'wikilink') 是一个[神经元](#neuron 'wikilink')
(或该神经元的所有者）。该[治理
程序合约罐](#governance_canister 'wikilink')是指
所有神经元账户的[受托人](#fiduciary 'wikilink')。

##### 神经元年龄

神经元年龄\*\*是一个[神经元](#neuron 'wikilink')参数，大致是指
表明自其创建以来或自其最后一次进入[非删除]状态以来所经过的时间。
它最后一次进入[非溶解
状态](#non-dissolving_state 'wikilink')。计算一个神经元的年龄
需要考虑到该神经元是否花了[...]时间。
溶解](#dissolving_state "wikilink") 或
[溶化](#dissolved_state 'wikilink')，这两种情况都会重置这个
参数。

##### 节点

一个**节点**是一个物理或虚拟的网络终端，它承载了所有的
硬件、[复制](#replica 'wikilink') 软件和配置。
设置，以参与[互联网
计算机](#Internet_Computer 'wikilink')。

##### 节点操作员

一个**节点操作员**(NO)是一个非 canister
[负责人](#principal 'wikilink')，他有权力添加/删除
[节点](#node 'wikilink')到/从
[IC](<#Internet_Computer_(IC)> 'wikilink')。

[节点提供者](#node_provider 'wikilink')来拥有
硬件安全模块（HSM），并将 HSM 注册到
[NNS](<#network_nervous_system_(NNS)> 'wikilink')。(HSM 的注册过程
HSM 的注册过程主要包括从存储在 HSM 上的密钥中获得一个 IC 委托人 ID，并将其持久化。
(HSM 的注册过程主要包括从存储在 HSM 上的密钥中获得一个 IC 委托人的 ID，并将该 ID 持久地保存在 NNS 中)。NPs 将
NP 将注册的 HSM 交给法人，法人现在获得了实际 "操作节点 "的权力。
实际 "操作节点"（又称安装
[复制品](#复制品 '维基链接'))。需要注意的是，相对于
普通的 "委托人"，在那里，我们要非常小心地确保一个委托人的 ID 对应于
一个委托人 ID 只对应于一个人，而 HSM 可以经常性地交换
而 HSM 可以经常换人，因此许多人可以在不同的时间作为同一个 NO 委托人行事。
不同的时间。

##### 节点提供者

一个**节点提供者**(NP)是一个非能动者
主体](#principal "wikilink")，它接收来自于节点参与[IC]的奖励。
从节点参与到[IC](<#Internet_Computer_(IC)> 'wikilink')
(又称 "支付主体")。通常情况下，尽管不一定，一个节点
节点提供者是[节点](#节点 '维基链接')的所有者，也可能是
参与节点操作和相关任务。一个节点提供者可以
从多个[数据中心]的多个节点中获得奖励。
中心](#data_center "wikilink")。

## O

##### 输出队列

每个[程序合约罐](#程序合约罐 'wikilink')都有一个**输出队列**，包括
[messages](#message 'wikilink')为其他程序合约罐绑定。

## P

##### 点对点(P2P)

在通常的用法中，**点对点**（P2P）计算或网络是一种
分布式应用架构，它将工作负载划分到一个
网络中的同等特权的计算机[节点](#节点 'wikilink')划分工作负荷，以便
参与者可以贡献资源，如处理能力、磁盘
存储或网络带宽来处理应用程序的工作负荷。

**点对点层**收集和传播
[消息](#message 'wikilink')和来自用户和其他节点的工件。
节点。

一个[子网](#子网 'wikilink')的[节点](#节点 'wikilink')形成一个
专用的点对点广播网络，促进了安全的
**限定时间/最终交付**广播的工件（如
[入口信息](#ingress_message 'wikilink')、控制信息和
他们的签名共享）。共识](#consensus "wikilink")层
建立在这个功能之上。

##### principal

一个**委托人**是一个实体，可以通过[互联网
计算机](#Internet_Computer 'wikilink')。这与
词的意义与[维基百科
定义](<https://en.wikipedia.org/wiki/Principal_(computer_security)>)。
与互联网计算机互动的委托人是使用
某些[身份](#身份 'wikilink')。

首次使用 DFINITY Canister SDK 时，dfx 命令行工具会 default 使用 PEM 文件中的公钥/私钥对为您创建开发人员身份。此 Internet 计算机开发人员身份在内部由派生的主体数据类型和主体的文本表示形式表示，通常称为主体标识符。开发人员身份还可用于派生**帐户标识符——**类似于比特币或以太坊地址——以代表你在互联网计算机分类账容器中持有 ICP 代币。

##### 提案

一个**建议**是一个描述行动的声明，以修改某些
(#Internet*Computer*(IC) "wikilink")或其任何子系统的参数。
其子系统。它被实现为一个 IC 实体，具有各种
属性，如 ID、URL、摘要等。提案的提交
由符合条件的[神经元](#神经元 'wikilink')所有者提交，供 IC 社区审议。
倡议由符合条件的[神经元](#神经元 'wikilink')所有者提交，供 IC 社区考虑，并经过[投票](#投票 'wikilink')过程。
之后，它们可以被采纳或拒绝。被采纳的提案将被
然后执行。有几个提案的分类法，其中最重要的是将提案分为 "主题"。
其中最重要的是将提案分为 "主题"，这些主题的通过又会触发某些类别的行动。
反过来，这些提案的通过会触发某些类别的行动，例如创建一个
[子网](#子网 '维基链接')，增加一个
[节点](#node 'wikilink')到一个子网，以及修改
[ICP](#ICP 'wikilink')的兑换率。

##### proto-node

一个**原节点**是一个[IC](<#Internet_Computer_(IC)> 'wikilink')实体
由硬件和软件的组合组成，它不同于
一个[节点](#节点 'wikilink')，因为它还没有被注册到
IC 注册。简而言之，原节点是一个 "等待中的节点"，因此具有成为节点的所有条件。
除了[replica](#replica 'wikilink')之外，它拥有成为一个节点的所有条件。
软件。

## Q

##### 查询

一个**查询**是一种优化的方式来执行对一个
[canister](#canister 'wikilink')上执行操作的一种优化方式，其中状态变化不被
保留的。查询是同步的，可以对任何
[节点](#node 'wikilink')上进行。查询不需要
[consensus](#consensus 'wikilink')来验证其结果。

## R

##### replica

在互联网计算机区块链的上下文中，副本是指在网络中的物理计算机节点上运行的互联网计算机进程（例如 replica，nodemanager、 和其他较低级别的互联网计算机协议进程）。对于 DFINITY Canister SDK，您使用 dfx start 和 dfx stop 命令在 replica 本地启动和停止进程，为开发提供本地网络。

##### 注册处

IC 的**注册处**管理着系统的元数据，这些元数据在
网络神经系统（[NNS](<#network_nervous_system_(NNS)> 'wikilink')
并由所有[subnet](#subnet 'wikilink')区块链访问。

## S

##### 智能合约

一个**智能合约**是一个有状态的计算机程序，旨在
自动执行、控制或记录相关事件和行动
根据合同或协议的条款。一个智能合约
可以部署在[互联网
计算机](#Internet_Computer 'wikilink')上，其形式为
[程序合约罐](#程序合约罐 'wikilink')捆绑数据和代码。

一个程序合约罐可以有一个或多个[控制器](#controller 'wikilink')
被允许修改程序合约罐的代码，从而修改了
智能合约的条款。对于一个程序合约罐智能合约来说，要有
不可变的代码，它的控制器列表必须是空的。

##### 状态改变

一个**的状态变化**是任何
[事务](#transaction 'wikilink')、函数调用或操作的结果。
改变存储在[程序合约罐](#程序合约罐 'wikilink')中的信息。
例如，如果一个函数进行了更新调用，将两个数字加在一起
或从一个列表中删除一个名字，其结果是改变了
程序合约罐的状态。

##### 状态管理器

**状态管理器**负责

维护复制的状态（多个版本）。
由[消息路由]实现的确定性状态机
路由](#message_routing "wikilink")和[执行环境](#execution_environment)实现的确定性状态机。
环境](#execution_environment "wikilink")操作的。 2. 在复制的状态和它的
之间来回转换（后者可以被理解为独立于具体实现的
具体实现）。 3.获得规范状态的部分认证，这一点
允许其他利益相关者，如其他[子网](#子网 '维基链接')
和/或用户，来验证某些状态确实来自于一个有效的子网，并且
来自一个有效的子网络，以及 4.提供能力，将规范状态与其他的
[复制品](#replica 'wikilink')在同一子网中同步的能力，以便落后的复制品能够赶上
落后的副本可以赶上。

##### 子网

一个**子网**(subnetwork)是一个[节点](#node 'wikilink')的集合
的集合，它们运行自己的[共识](#共识 'wikilink')实例
算法，以产生一个子网区块链，与其他
(#Internet*Computer*(IC) "wikilink")的子网使用[chain
key](#chain_key 'wikilink')加密技术。

##### 系统程序合约罐

一个**系统程序合约罐**是一个预装的
(#canister "wikilink")，它可以执行某些必要的任务来维护
维护[互联网计算机](#Internet_Computer 'wikilink')。

## T

##### 交易

一个分类帐的**交易**是转移的过程
[ICP](#ICP 'wikilink')从一个[账户](#账户 'wikilink')转移到另一个的过程。
它可以有三种类型：(a) 普通的转移交易，(b)
[烧毁](#烧毁 'wikilink')交易，以及(c)
[minting](#minting 'wikilink')交易。

##### 转账交易

转账交易\*\*是指将 ICP 从任何
常规分类账[账户](#账户 'wikilink')（即任何分类账账户
除了[ICP 供应账户](#ICP_supply_account 'wikilink'))到
另一个普通的分类账账户。

## U

##### 用户

一个**用户**是任何与[互联网]互动的实体
计算机](#Internet*Computer "wikilink")。用户包括以下的最终用户
使用部署在[IC](#Internet_Computer*(IC) "wikilink")上的 dapp 的最终用户、dapp
开发者，[ICP](#ICP 'wikilink')实用代币的持有者，以及
[神经元](#神经元 'wikilink')持有人。

## V

##### 有效集合规则

有效集合规则\*\*是确定一个有效的[归纳
pool](#induction_pool 'wikilink')。[入口
消息](#ingress_message 'wikilink')和[程序合约罐间
消息](#inter-canister_message 'wikilink')必须通过某些检查
以确保有效的集合规则得到维护，然后才能将它们添加到
归纳池。

##### 投票

**投票**是一个过程，通过这个过程
[建议](#proposal 'wikilink')被挑选出来进行采用和
实施。它的直接参与者是
[神经元](#神经元 'wikilink')，他们(a)提交提案和(b)
对提案进行投票。投票过程是一项相当复杂的工作。
涉及的方面包括神经元资格、投票权、神经元追随者的连锁关系等。
神经元的追随者等等。这在设计上考虑了安全性和
这方面的设计考虑到了安全性和可靠性，并且正在不断改进，以便
防止投票权集中在少数几个
神经元所有者手中。

## W

##### WebAssembly

**WebAssembly**（缩写为 Wasm) 是一种低级计算机指令格式。因为 WebAssembly 定义了一种可移植的、开放标准的二进制格式，可以在大多数现代计算机硬件上清晰地抽象出来，所以它广泛支持在 Internet 上运行的程序。用 Motoko 编写的程序被编译为 WebAssembly 代码，以便在 Internet 计算机副本上执行。

##### Wallet

在 Internet 计算机上，钱包是一种专门的应用程序，可让您存储和检索您的数字资产。钱包应用程序被实现为一个在互联网计算机上运行的容器。钱包使您能够管理您的 ICP 代币余额，将 ICP 代币转换为周期，并将周期分发到您自己或其他用户的容器中，作为访问或提供互联网服务的一种方式。
