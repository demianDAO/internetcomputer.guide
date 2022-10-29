---
id: openchat-whitepaper
title: Openchat 中文版白皮书
sidebar_label: Openchat 白皮书
---

翻译: kk 德米安

原白皮书地址: [whitepaper](https://oc.app/whitepaper)

加入[我的 OC 社区](https://oc.app/#/jiy6e-byaaa-aaaaf-ags5a-cai), 一起撸空投!!

<https://oc.app/#/jiy6e-byaaa-aaaaf-ags5a-cai>

## 1）产品/服务概述

OpenChat 是一个功能齐全的聊天应用程序,运行在 Internet Computer 区块链上,类似于 WhatsApp、Signal 和 Telegram,并且不久的将来会是以"社区"主导的、去中心化的、端到端的、聊天工具,如 Slack 工作区或 Discord 服务器。

它是一个响应迅速、渐进式的 Web 应用程序(dApp)，因此可以适配任何屏幕大小，以与本机应用程序类似的方式与设备集成，从明年开始在台式机和 Android 设备以及 iOS 上进行使用。您可以在这里找到完整的开发路线图。

该应用程序是完全开源的，并作为一个智能合约罐的集合运行。可以在任何时候看到运行在任何合约罐上的代码版本，并有链接回到源控制中的特定版本，并且可以独立验证这是真的。

OC 的每个用户都有一个 合约罐，该 Canister 可以保存他们的直接聊天数据、他们所加入的群组的链接和消息，同时也作为一个钱包，允许 OpenChat 用户持有和管理代币。每个群组（以及即将到来的 "社区"）也被实现为它独立的合约罐。这种架构将使 OpenChat 能够扩展到地球上的每一个人。关于架构的细节，请看这里。

OpenChat 用户可以互相发送消息，其中包含 ICP 和 BTC 等代币，因此可以用于全球汇款。

然而，OpenChat 与其他类似应用程序的开创性区别在于，它很快就会被作为一个 DAO 进行管理，拥有自己的代币 CHAT，类似于 ICP。DAO 将由一个称为 SNS（服务神经系统）的系统实现，类似于 Internet Computer 上的 NNS（网络神经系统）。

创始开发团队的重点首先是建立一个丰富的、功能齐全的聊天应用程序，与 web2 的同行相媲美。只有首先建立一个人们乐于使用的应用程序，代币化的火箭燃料才能使 OpenChat 成长并挑战垄断性的巨无霸科技公司。

## 2）互联网计算机概述

互联网计算机（IC）是一个去中心化的全球计算平台，利用突破性的区块链技术在子网内达成共识。它分布在全球众多独立的数据中心,防篡改且不可阻挡。

它可以完全链上服务于应用程序,而无需任何集中式前端层。它效率极高，运行和存储数据的成本比大多数其他区块链低几个数量级。它使用反向气体模型，因此计算和存储成本由应用程序/服务提供商而不是用户支付。

### Canister smart-contract

IC 上的应用程序由组织成子网的 Canister smart-contract 组成。子网可以包含 100,000 个合约罐,并且由（通常为 13 个）节点计算机组成,每台计算机在全球不同的独立数据中心中运行,以便每个子网中的节点在地理和管辖范围上都尽可能多样化。合约罐可以与其他子网上的合约罐安全通信,使 IC 可以横向扩展。

合约罐在跨子网复制的虚拟机（作为 WASM）上运行。它实现了 actor 模型,所以是单线程,它一次处理一个输入消息队列,有选择地将消息发送到其他合约罐,并向输出队列添加响应消息。

它可以由客户端（或其它合约罐）使用查询或更新调用。一个查询可以从任何节点立即提供服务，但不能改变状态。更新可以更改状态,并经过协商一致的过程,使节点在响应呼叫者之前同意相同的结果。达成共识是区块链发挥作用的地方，但超出了本文件的范围。

智能合约罐具有正交持久性的属性，这意味着作为一个程序员，你只需将数据对象写入内存，它们就会被系统自动持久化。这消除了对数据库的需求，也是在 IC 上编写和运行应用程序比传统 IT 架构简化的原因之一。

### 网络神经系统（NNS）

互联网计算机区块链的一个关键特征是网络神经系统（NNS），这是一个开放的算法治理系统，负责监督网络和代币经济。

Internet Computer 的 ICP 效用代币持有者可以将其代币锁定在神经元中参与治理，并为决策做出贡献，例如投票决定是否应该在网络中添加新的子网。通过参与治理，投票者获得奖励，这些奖励可以转换为 ICP。反过来，他们可以燃烧 ICP 来为其智能合约罐的计算提供 cycle(gas 燃料)。

有关 NNS 的详细信息,请阅读此处。

## 3） OpenChat DAO

- 概要
  - OpenChat DAO 的成立是为了运营和引导 OpenChat 的发展方向，而 OpenChat 应该被认为是公共物品，因此没有人拥有。
  - OpenChat DAO 和 OpenChat 服务完全在链上，不直接依赖链外服务。
  - OpenChat DAO 使用 NNS 中的 SNS 合约罐和 SNS 子网操作。
  - 将向 NNS 提出提案,请求批准创建这个 DAO 和相关的公益事业。

### 创建 DAO

OpenChat SNS 将由创始开发团队根据最新的 NNS 中的 SNS 合约罐创建。其初始配置将由 SNS 永久持有并公开进行检查。此时,现有 OpenChat 操作合约罐的控制权将从创始开发团队转移到 SNS,因此,此后只有 SNS 可以更改 OpenChat。

为开始创建 OpenChat DAO,将提交一份 NNS 提案,具体说明权力下放销售的参数和初始代币分配。如果提案被接受，NNS 将立即开始基于该提案的 CHAT 代币的去中心化销售，以将治理控制权下放给公众，并为持续发展和增长筹集资金。

任何人都可以通过使用 NNS 启动板将 ICP 存入 SNS 来参与代币发行。出售完成后，每个投资者将获得与其存入的比较方桉份额相同比例的 CHAT 代币，销售所得将被存放在 SNS 治理罐拥有的 ICP 分类账账户中。

此时 DAO 创建完成,运行 OpenChat 服务应视为公共物品。

### 对 DAO 的控制

在去中心化销售后，SNS 将控制 dapp，包括其 CHAT 和 ICP 的资金。换句话说，只有 SNS 才能升级 OpenChat 合约罐，只有 SNS 才能访问其金库。

SNS 本身受提案行动控制的。任何人都可以向 SNS 提交提案，然后 CHAT 神经元持有者可以对这些提案进行投票。

在特殊情况下，理论上 NNS 的提案可以用来制裁 SNS，停止 SNS 的罐子。例如，如果一个 IC 应用程序复制了另一个 IC 应用程序的源代码，从而违反了其许可条款。

### DAO 的治理

#### 提案

- SNS 提案有以下类型:

- 动议是意向书，但如果动议成功，则不会自动采取任何实际行动。例如,它们可用于提出用于开发的新特性或新功能,或用于确定开发团队的优先级。
- Canister 升级提案包含 Canister Id 和 wasm 模块,并指示 SNS 将指定的 Canister 代码升级到 wasm 模块。这可用于升级由 SNS 和 SNS 合约罐本身控制的 dapp 合约罐。
- SNS 配置更改提案允许更改各种 SNS 参数。SNS 的引导绑定过程的一部分是为所有这些参数提供初始值,这些值稍后被介绍。
- 代币转移提案允许将代币转入/转出指定的 SNS 自有账户。SNS 的 "金库"有可能包括任何 IC 原生代币，如 ICP，而不仅仅是 CHAT，因此这个提议可以用来转移任何 IC 原生代币。
- 燃烧代币提案将允许燃烧 CHAT 以减少总供应量。
- 自定义功能提案允许 SNS 治理合约罐在给定的合约罐上调用任意功能。在实践中,这允许由 OpenChat 社区 DAO 控制任意复杂的行为。自定义函数的一些示例：

  - 购买 cycle.通过调用 NNS cycles 铸造 合约罐的 API,提案可以将 ICP 燃烧为 cycle,以支付 dApp 的运行费用。
  - 滚动升级.通过调用 OpenChat 合约罐上的升级方法,提案可以提供一个合约罐 WASM+ 版本号,并启动用户合约罐的滚动升级。

- 在去中心化销售后不久，会有一些提案值得关注，包括:
  - 一个或多个提案，将一些 ICP 和 CHAT 转移到一个或多个 DEXes，以创建初始流动性池，从而实现 CHAT 的交易.
  - 核心开发团队将与社区接触，然后用一个动议提案与下一季度的开发路线图，其中可能包括设计和建立社区功能和/或用户奖励系统。

#### 投票和投票奖励

提案用于管理 OpenChat dapp 的所有方面。代币持有者因参与提案的投票而获得奖励，以便决策是分散的，反映社区的意愿。

神经元具有一种叫做溶解延迟的特性，它是将神经元溶解到流通代币中所需的时间长度。投票奖励随着更长的解散延迟而增加，这使选民与 OpenChat 的长期利益保持一致。

如果 CHAT 在一个神经元中被押注，并设置了至少 1 个月的溶解延迟，那么这个神经元就可以被用来对提案进行投票。

你可以使用 NNS Dapp（很快会有一个 SNS 的部分）或 OpenChat dapp 中的 "OpenChat Proposals "组，对一个（几个）神经元进行明确的投票，或者你可以配置你的神经元，使其跟随另一个（几个）神经元的提案类型，在这种情况下，你的投票将在投票时进行隐式投票。默认情况下，新创建的神经元将没有被关注者，所以这需要手动配置。至少会有一个神经元被预先配置为指定的关注者，它本身会关注创始开发团队的神经元。任何人都可以提出额外的命名神经元来添加到 SNS 中。

每个神经元都有"投票权"，以代币值乘以溶解延迟奖金乘以年龄奖金计算。对于 1 年溶解延迟最大的神经元，溶解延迟从 1 x 开始，线性增加到 2 x。年龄奖金从零岁时的 1 倍开始，最长 6 个月时线性增加至 1.25 倍。这意味着对于值相同的神经元，那些花了 6 个月时间，溶解延迟 1 年的神经元将拥有 2.5 倍的投票权。

对于一个提案的通过，"赞成"票的投票权之和必须在 4 天后或安静期后超过 "拒绝 "票的投票权之和。此外，"赞成"票数必须至少占总投票权的 3%。如果 "赞成 "或 "拒绝"票数超过现有投票权的 50%，投票将立即结束。如果仍在 4 天期限内，即使已经解决了，也可以参与提案的投票。因此，神经元仍然可以成为投票奖励的受益者。

投票奖励由 SNS 产生，并在参与过投票的神经元中积累为成熟度。成熟度可以根据成熟度的调制支付给一个账户，或者,它可以被押注或自动押注。对于给定的提案投票，给定神经元获得的投票奖励与其投票权与参与神经元的整体投票权成正比。投票奖励每天发放，并考虑到当天结束的所有选票。如果某一天没有提案，奖励将延续到第二天。每年为投票奖励产生的总代币供应量的比例为 5%。在实践中，考虑到大部分的供应将不会在投票神经元，一个有 1 年溶解延迟的神经元会期望一个投票奖励显着高于这个数字。

有关 SNS 投票和奖励的完整说明,请参阅本文档。

### DAO 的力量

有许多因素会影响 OpenChat 的成功。它必须有一个伟大的开发团队建设一个应用程序，建立一个具有良好用户体验的应用程序。它必须具有聊天应用程序所期望的基础功能,以及使其与竞争对手脱颖而出的新功能和属性。但是，即使这样做是正确的，也很难进入这样一个成熟的市场。OpenChat 帮助其成功的一个关键要素是代币化。

#### 增长

OpenChat 系统将自动以 CHAT 代币奖励积极使用该应用的用户，以及邀请朋友和家人加入，如果他们也继续积极使用该应用。这通过鼓励积极的行为改善了用户体验，同时也建立了一个指数级的病毒增长循环。获得 CHAT 代币奖励的用户对 OpenChat 未来的成功进行了投资，因此创建了一个由 10 万名拥护者组成的强大社区，帮助进一步推动增长。

#### 信任

代币化首先是可行的一个基本条件是信任。OpenChat 在互联网计算机上运行，这是一个去中心化的、不可阻挡的软件平台，使用 NNS 进行去中心化管理。OpenChat 本身将由一个 DAO 控制，这与它的长期成功相一致。甚至在创建 DAO 的过程中，向 NNS 提出去中心化销售，然后由 NNS 自动启动，也确保没有犯规行为。所有这些意味着代币持有人可以相信他们的投资是安全的。

## 4） CHAT 实用代币的目的

- 它可以作为神经元（非常类似于 ICP 的神经元）被抵押，允许代币持有人通过对 SNS 提案进行投票来参与 OpenChat 的管理，并通过这样做获得投票奖励。这些奖励会随着代币持有时间的增加而增加，因此代币持有者会被激励为 OpenChat 的长期利益而行动。
- 它可以被 OpenChat 用户用来支付高级功能。
- 它可以被用来奖励对 OpenChat 服务的发展或增长的贡献，可以通过自动的用户奖励或 SNS 提案。

### 高级功能

OpenChat 可以通过多种方式发展，让用户使用他们的 CHAT 代币来支付 dapp 中的高级功能。高级功能的基础价格可能是 CYCLES，因为这些有一个稳定的价值（相对于 XDR），然后根据 CHAT->ICP 的汇率（我们可以从 DEXes 请求）和 ICP->CYCLES 的汇率（通过调用 NNS 子网的 cycles 铸造合约罐获得），我们将为 CHAT 代币的功能提供一个动态价格。

要为功能付费,用户需要先将 CHAT 代币存入其作为钱包的 OpenChat 用户合约罐中。OpenChat 将把付款从用户的合约罐转移到 SNS 金库帐户，然后授予功能。

### 当前的高级功能

- OpenChat 提供的一些高级功能暂时可以通过使用 ICP 付款或验证电话号码获得。
  - 增加空间: 存储上传/发送/存储 "文件 "信息，如图片和视频
  - 按需翻译内容
  - 群组创建限制从 10 增加到 25

### 社区

我们计划很快建立的一个关键功能叫做"社区"。它们类似于 Slack 工作区或 Discord 服务器,由一组用户、组和配置组成。我们的目标是提供一种将现有 Slack 工作区和 Discord 服务器导入 OpenChat 社区的方法。最初,我们将重点鼓励 IC 社区迁移到 OpenChat,然后再迁移到更广泛的加密空间,然后再迁移到其他所有人。社区可以通过多种方式进行货币化，最简单的是向每个用户收费。社区所有者本身可能通过向社区收取入场费等方式，通过 OpenChat 将其社区和收入分享货币化。

#### 其他可能的未来高级功能

- 下面是 OpenChat 将来可以提供和收费的一些功能:
  - 自定义表情、主题、贴纸等
  - OpenChat NFTs
  - 短用户名
  - 语音和视频聊天
  - "特色"公共团体/社区
  - 自定义机器人（例如,由机器人控制的聊天可以支持使用消息进行代币交换）
  - 额外的潜在收入
  - 通过 OpenChat 集成为其他 IC 应用程序提供聊天功能
  - 将代币作为消息发送的交易费用
  - 使用综合代币交换服务的交易费用
  - 用户奖励

用户奖励系统的设计尚未确定，我们将先咨询 OpenChat 社区，然后再敲定设计并提出实施提案。这一制度当然可以随着时间的推移而演变，并提出进一步的提案。一旦准备就绪，将提出将保留的 38%的 CHAT 从 SNS 治理合约罐转移到 OpenChat 根合约罐，在那里 OpenChat 可以通过算法奖励 dapp 用户。

创建一个有效的奖励系统是有挑战的。我们的目标是通过奖励那些促进这一目标的用户，来激励 OpenChat 的使用和增长，并最终提高 CHAT 代币的价值。一个重要的障碍是，有了经济上的奖励，就会刺激僵尸用户试图玩弄这个系统，通过创建多个带有垃圾内容的账户来 "撸" CHAT 代币。这一挑战变得更加困难，因为任何旨在奖励用户的系统，就像所有 OpenChat 的代码一样，都是开源的，任何人都可以看到。

#### 用户声誉

我们认为奖励系统应该是基于声誉的。每个用户都会有一个声誉评分，考虑到在应用程序上的积极和消极活动。积极的信号可以包括邀请其他用户（如果他们自己获得足够高的声誉），受欢迎的群体的所有者/管理员，发送消息和反应，对内容和用户进行审核，等等。负面信号可能包括交叉发帖、发送垃圾信息、创建多个账户等。我们期望增加一个功能，允许用户将信息标记为垃圾邮件（或更普遍的不需要的内容）。

如果用户在其 OpenChat 帐户中持有代币（ICP、CHAT、BTC、DMD、NDP），甚至更好的神经元，我们也可以为他们得出一个积极的信号。

#### 奖励

奖励算法可以利用声誉来确定哪些用户获得奖励以及奖励的价值。我们可以给很多用户一个小小的奖励，或者给一个较小的群体一个较大的奖励，也许如果你的名声足够高，你就可以参加彩票抽奖，或者两者兼而有之。获得更多奖励的好处是，这些用户更有可能成为 OpenChat 长期成功的有力倡导者，而一个小小的奖励可能无法提供足够的激励。

如果用户有资格获得奖励,则 CHAT 代币将从 OpenChat 根合约罐转移到其 OpenChat 用户合约罐。然后,用户可以使用 dapp 访问他们的 CHAT 代币并将其发送给其他用户,撤回这些代币以便在交换机上销售,或者购买高级功能。使用 SNS 用户界面，用户还可以将他们的 CHAT 作为神经元入股，参与 OpenChat 管理并获得投票奖励。

## 5) SNS 创世时的代币分配

### 初始代币分配

SNS 初始化时将有 10 亿 CHAT 代币，按以下比例分配:

![openchat代币](/img/media/1014/occhat.png)

### NNS 控制（黄色）

NNS 最初将获得 CHAT 代币总供应量的 29%。20%将被立即出售，以实现治理的分散化并筹集资金。剩余的 9%将被保留，直到未来的某个时间，将有后续的 NNS 提议出售储备或烧毁。

分权销售的投资者将把 ICP 存入 SNS，一旦销售完成，他们将收到与他们存入的 ICP 份额相同比例的 CHAT 代币。每个投资者将收到他们的 CHAT 作为一篮子的 13 个等值的神经元。第一个神经元的溶解延迟为零，因此可立即发放为流通 CHAT 代币。随后的每个神经元的溶解延迟将比前一个神经元大一个月，所以从 1-12 个月。

### 创始人和资助者（粉色）

自 2021 年 1 月以来，OpenChat 由 3 名开发人员组成的团队建立，并从 DFINITY 基金会获得种子资金。3 个创始开发者中的每一个都将被分配 4%的 CHAT 代币份额，DFINITY 基金会将被分配 6%的份额。如上所述，每一方将以一篮子 13 个等值的神经元的形式获得他们的份额，第一个是流动的，其余的溶解时间从 1-12 个月不等。然而，这些 "创始开发团队和种子出资人 "的神经元有两个特殊的属性。

首先，它们被配置成这样，它们的投票权随着 CHAT 的销售量占总销售储备的比例而减少。在 OpenChat 的案例中，我们在 29%的总销售储备中销售了 20%，所以每个创始开发团队和种子基金的神经元的投票权将减少 20/29 的系数（约 69%）。如果将来再有 5%的储备出售，那么这些神经元的投票权将增加到标准值的 25/29。这样一来，创始开发团队和种子资助者的投票权就会小于社区其他成员所持有的投票权。这也意味着这些神经元的投票奖励会以相同的比例减少，此外，如果他们在所有的储备金被卖出之前就被发放，那么就只能得到相同比例的流动性 CHAT。

![openchat代币](/img/media/1014/chat-pink.png)

其次，这些神经元将有一个额外的锁定期（或归属期），然后才能开始解散（这并不影响第 1 个神经元，因为它已经解散了）。DFINITY 基金会的神经元将有 1 年的归属期，开发团队的神经元将有 3 年的归属期。这是为了确保创始团队长期致力于该项目，不能 "拉拢 "投资者。

### SNS 金库（蓝色）

在去中心化销售后，SNS 将留下剩余 53%的 CHAT 代币的国库。

随着时间的推移,将使用 38%的批量数据自动奖励积极贡献并帮助 OpenChat 发展的用户。

SNS 提案将保留 13%支付社区赏金,以更普遍地补偿为 OpenChat 做出贡献的人员。例如，这可以用来奖励第三方开发人员的代码贡献。

剩下的 2%将用于为 DEXes（去中心化交易所）提供初始流动性池。为了使 CHAT 代币能够被交易，有必要将 CHAT 在一个或多个交易所上市。我们的目的是在基于 IC 的 DEXes 上进行交易。为了在实施 AMM 的 DEX 上列出 CHAT，有必要提供一个由另一个代币支持的 CHAT 的流动性池，在我们的例子中是由去中心化销售筹集的 ICP。我们计划在几个 DEX 上提供 CHAT，当它们可用时。对于每个 DEX 来说，有必要创建一个提案，将一些 CHAT 从 SNS 转移到 DEX，另一个提案将同等价值的 ICP 从 SNS 转移到 DEX。计划是用为此目的预留的 2%的 CHAT 代币作为这些 DEX 的 "初使流动"，尽管这可能不会一下子全部发生。

### 最初的 SNS 配置

SNS 最初将被配置成下表所示的数值，这些数值随后都可以通过提案进行更改:

![openchat代币](/img/media/1014/sns-config.png)

### SNS 去中心化销售的配置

去中心化销售将被配置成如下所示的数值:

![openchat代币](/img/media/1014/sale-nns.png)

### 估值范围

实施最高目标的理由是，给投资者一个最低限度的限制，即他们的 ICP 投资将获得 CHAT 代币的数量。0.1M ICP 的下界和 1 M ICP 的上界为 20%的代币提供了 OpenChat DAO 在 ICP 和 5 M ICP 之间 0.5M 初始总估值。对于 1 个 ICP,您将收到 200->2000 个 CHAT 代币。

## 6） OpenChat SNS 金库

SNS 将持有 ICP 代币和 CHAT 代币的库房。

在去中心化销售后，SNS 将立即拥有一个 ICP 分类账账户和一个在销售中筹集的 ICP 分类账账户，以及一个带有 530M 代币的 CHAT 分类账账户。上面介绍了这些 CHAT 代币的计划,但 DAO 可以通过其认为合适的提案来使用金库。

在去中心化销售后不久，当 DEX 可用时，将提出提案，将 CHAT 从 20M 储备中转移到少数 AMM 流动性池中，同时提案将 ICP 的相应价值从国库转移到 AMM 流动性池中。这将使 CHAT 的交易成为可能。

我们计划创建一个提案，将 ICP 的很大一部分，比如 80%，作为 8 年的神经元入股。这个神经元将通过跟随一个 OpenChat 信标神经元参与 NNS 投票，该神经元将寻求影响 IC 的议程以适应 OpenChat DAO 的长期利益。它还将为 DAO 赚取投票奖励，这些奖励可用于支付持续成本或建立储备。这一切都取决于是否对 IC 进行了一个小但重要的改变，以允许合约罐控制神经元。

储备金中的任何流动 ICP 都可以直接使用，或者 DAO 可以将 CHAT 储备金中的 CHAT 换成一个 DEX 的 ICP，并用它来支付费用，例如托管 cycle、第三方服务，以及可能在以后支付开发团队的费用。

### 为 Cycle 提供资金托管的比较方案

最初,将创建提案,根据需要将 ICP 转移到指定开发人员的帐户,该开发人员将使用该帐户购买 cycle 并补充根 OpenChat 合约罐。展望未来,根 OpenChat 合约罐可以编程为在低于 cycle 阈值的情况下自动创建一个提案,以便将 ICP 传输到自身并将其刻录为运行 dapp 的 cycle。

### 第三方服务

- 其目的是让 OpenChat 没有离链依赖关系，从而不需要信任任何人工代理，例如以 FIAT 货币进行交易。目前,我们具有以下离链依赖性：
  - 电话号码验证（我们用它作为独特人性的证据,并奖励具有某些高级功能的经过验证的用户）。编写时,使用 AWS 上的小型可执行文件实现此操作,该文件轮询一个 OpenChat 合约罐,并使用 AWS 服务发送排队的文本消息（每个文本都包含验证代码）。我们计划与 NFID（来自 Identity Labs）集成,并使用它们的服务验证用户电话号码。然后,我们可以使用 SNS 提案将 ICP 持续发送到 Identity Labs 作为付款。
  - 向浏览器（以及以后的本机设备）发送推送通知。同样，我们使用 AWS 上的可执行文件查询 OpenChat 合约罐并推送任何排队通知。这将被即将推出的直接从 IC 合约罐发出 HTTP 请求和忘记 HTTP 呼叫的功能所取代
  - 在 oc.app（主机在 AWS 上）上提供 dapp 服务。最终,此功能将内置到边界节点中-请参见此处

### 支付开发团队的费用

最初，至少 DFINITY 将继续资助 OpenChat 开发团队，从而成为 OpenChat 开源项目的核心贡献者。DFINITY 期望将其日常业务从现有的 web2 聊天解决方案（即 Slack）迁移到使用基于 IC 的 web3 解决方案来满足其需求，通过资助 OpenChat 开源项目，能够影响项目的路线图，帮助确保其需要的企业功能被优先考虑。这并不意味着 DFINITY 是唯一的贡献者，OpenChat 欢迎社区贡献。

在某个时候，这笔资金可能会停止，OpenChat DAO 需要为自己的发展提供资金。在这种情况下，开发小组可以向 SNS 提出提案，以获得 ICP 的持续资助。例如，开发组可以每季度提出一项提案，其中包括一项发展计划和一项资金申请。

## 7) 经济模型

### 总供应上限

在创始时,CHAT 代币的总供应量将为 1 B。如果铸造了更多的代币,供应量将会增加,如果销毁了代币,供应量将会减少。

SNS 配置为每年产生总供应量的 5%，向参与的神经元支付投票奖励。这个 5%的数值随后可以通过提议加以改变。投票奖励随着成熟度累积在参与的神经元中。在一个神经元的成熟度被支付的时候，它被烧毁，相应价值的 CHAT 代币将由 SNS 分类账铸造到一个账户。SNS 也可以通过提议来铸造代币，尽管 OpenChat DAO 不太可能会选择这样做。

SNS 可以销毁代币的唯一方法是通过提议。

### 收入和支出

在创世之初，SNS 将拥有来自去中心化销售的 ICP 和 5.3 亿 CHAT 代币的资金。

SNS 将从高级功能、交易费、第三方集成等方面获得 CHAT 代币的收入。如果进展顺利，SNS 还将从其大型 ICP 神经元的 NNS 投票奖励中获得 ICP 收入。

SNS 将有各种支出。它将使用 ICP 来支付 OpenChat dapp 的托管费用（Cycle），第三方的服务，以及未来可能的核心开发团队。它将使用 CHAT 来支付用户的奖励和社区的赏金。

在最初几年，支出将超过收入，国库将主要用于资助用户奖励和社区赏金。人们的期望是，随着收入的不断增长，最终将平衡支出。较高的收入也将允许较高的用户奖励和赏金率，以鼓励更高的用户和使用率增长。

当 OpenChat DAO 认为合适时,可以选择销毁 CHAT 代币以减少总供应量。预计在几年内，SNS 将有能力以越来越高的速度燃烧 CHAT，直到燃烧率与投票奖励的铸造率相匹配,并且总供应量保持不变。

下图描述了 CHAT 的总供应量随时间推移的预测。为了这个预测的目的，我们假设奖励率将保持在 5%，燃烧率将从 0.125%开始，每年增加 1.5 倍，直到平衡奖励率:

![openchat代币](/img/media/1014/burn.png)

### 代币价格

- 有多种因素会影响 CHAT 代币的价格，如:
  - 供应总量
  - 市场情绪
  - 收入
  - 花费
  - 流通供应

我们已经讨论了总供应量，但可以说流通供应量是考虑象征性价格的一个更大的因素。

在去中心化销售后，参与者将收到一篮子不同溶解延迟的神经元，只有 1/13 立即处于流通。初始化为 5%的投票奖励率有望鼓励代币持有者锁定一定比例的代币，从而至少暂时地将其从流通供应中移除。在种子出资者的情况下，每个神经元都有 1 年的归属期，甚至才能开始溶解。在创始开发团队的情况下，每个神经元都有 3 年的归属期。

有各种代币经济学参数可以影响 CHAT 被锁定的比例。这些参数包括最大溶解延迟、溶解延迟奖金、投票的最小溶解延迟、最大年龄、最大年龄奖金和投票奖励率。我们精心选择了这些参数的初始值，我们认为这些参数提供了良好的激励平衡，但这些都是 DAO 可用的杠杆，允许它影响总的和流动的供应，从而影响价格（如果需要）。

考虑 CHAT 代币的 SNS 金库。这些代币是流动的，但只是作为用户奖励和赏金（按百分比计算）发放给社区，然后只有一部分会进入市场（DEXes）。在 NNS 储备中持有的 CHAT 部分也是类似的情况--它是流动的，但不会进入市场，除非 DAO 决定在未来进行出售。

一般来说，DAO 会希望代币价格随着时间的推移而上涨，但这必须与其他因素（如 APPA 的增长）保持平衡。例如，在某些情况下，最好能提高用户奖励以鼓励更多用户增长，但在短期内，这可能会通过增加流通供应对价格产生负面影响。

### 随时间推移的投票权

- 下图描述了由创始开发团队和种子资助者以及代币持有者社区的其他成员划分的投票权随时间推移的预测。这一预测是根据初始 SNS 参数值、初始代币分布、创始人/资助者神经元的内在特性以及一些假设得出的：
  - SNS 将每年发放 20%的国库
  - 开发团队和种子资助者将保留 92%的神经元
  - 其他 CHAT 持有者将让 50%的神经元向前移动
  - 神经元平均溶解延迟 6.5 个月
  - 20%的 CHAT 在去中心化服务 SNS 销售中销售,其余 9%分配给销售仍未售出。
  - 创始开发团队和种子资助者的投票权减少了，在出售的 CHAT 总分配中的比例= 20/29=69%

用于绘制此图的完整模型可在此[谷歌在线表格中](https://docs.google.com/spreadsheets/d/1-LuBsCXxXdpia0-CDEY5eFveczp3eQdM3BponEX3Tq0/edit#gid=1167954061)找到。

![openchat代币](/img/media/1014/vote-year.png)

在第一年，社区所持有的投票权份额预计会减少，因为假设他们今后只持有 50%的代币，而创始开发团队和种子出资人预计会保持 92%的投票权。然而，此后，随着更多代币的分配，预计投票权将进一步向社区转移。重要的是，投票权的平衡应始终保持在更广泛的社区手中。