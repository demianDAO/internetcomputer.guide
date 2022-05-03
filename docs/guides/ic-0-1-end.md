---
id: ic-0-1-end
title: 从0到1读懂ICP
sidebar_label: 从0到1读懂ICP
---

# 从 0 到 1 读懂 ICP

本文从数据和资本角度出发,解读 IC.

作者：kk 德米安

出品：demianDAO

排版：kkdemian

# 目录

0.关于 demianDAO

1.IC 是什么

2.趋势=》主要从链上数据看

3.生态=〉从应用数据观察

4.价格=》从交易数据看

5.未来=〉从开发路线图和完成的节点

6.什么理由值得我们持有 ICP

## 0.关于 demianDAO

kkdemian 发起的 DAO,一个专注学习、认知、提升技术的社区模式 DAO,其中包括 IC、Commos 等公链的开发,也会介绍一些 ETH 目前生态的协议,比如 RSS3、BANKless,如果你有兴趣可以加入这个 DAO,欢迎一起学习和分享技术.

注：本文档完全开源,请放心食用,抄袭不用备注出处!!! 英文版由 Deepl PRO 翻译并推向全球社区。本文档中提到的任何项目、Token、NFTs 非投资建议,如有操作请自负后果.

## 1.关于 ICP

其实关于 IC,有很多地方都有介绍,我就不瞎写了,以下摘自官方文档.

### 互联网计算机概述

互联网计算机是一种“通用”区块链，为托管代币和去中心化应用程序（dapps）提供公共平台。它充当一个完整的技术堆栈，因此可以构建完全从区块链运行的系统和服务。

### 什么是互联网计算机？

从概念上讲，互联网计算机是现有互联网的扩展，它使全球计算机网络能够为运行应用软件提供计算能力。

就像传输控制协议 (TCP) 和互联网协议 (IP) 的采用提供了在端点之间传输数据的规则一样，这些规则有助于建立我们今天所知的“网络网络”，即互联网计算机依靠称为 Internet 计算机协议的去中心化协议来定义软件组件，这些软件组件使全球计算机网络能够组合其资源以读取、复制、修改和返回应用程序状态。

- 互联网计算机基础设施的关键是：
  - 一种安全协议，使通用计算能够直接在 Internet 上透明地运行。
  - 运行协议以通过独立运营的数据中心提供计算能力（例如，运行程序所需的硬件、CPU 和内存）的网络。
  - 用于运行软件应用程序的全球可访问且可扩展的平台。

为什么要建立互联网计算机？

对于最终用户来说，访问基于计算机的互联网服务在很大程度上是透明的，与去中心化应用程序交互的体验与在公共云或私有云上的交互体验相同。

然而，对于创建和管理这些基于 Internet 计算机的服务的人来说，Internet 计算机消除了与开发和部署现代应用程序和微服务相关的许多成本、风险和复杂性。此外，其安全协议可确保可靠的消息传递、透明的问责制和弹性，而无需依赖防火墙、备份设施、负载平衡服务或故障转移编排。

在某些方面，构建互联网计算机就是要让互联网恢复其开放、创新和创造性的根源。为了专注于几个具体的例子，互联网计算机做了以下事情：

支持互操作性、共享功能、永久 API 和无主应用程序，从而降低平台风险并鼓励创新和协作。
将数据自动保存在内存中，从而消除了对数据库服务器和存储管理的需求，提高了计算效率，并简化了软件开发。

简化 IT 组织需要集成和管理的技术堆栈，从而提高运营效率。

它主要有几大部分构成:canister、去中心化应用、互联网身份(II)、神经元(NNS)、代币、子网、节点.

canister（dapps/智能合约）

互联网计算机托管强大的智能合约，称为容器。容器是防篡改的、自主的、托管在链上的，并且可以同时运行并相互交互。容器可以为最终用户创建的 HTTP 请求提供服务，这使他们能够直接提供交互式 Web 体验。这意味着无需将运行在企业云托管服务和私有服务器上的网站整合到其架构中即可创建区块链 dapp、系统和服务，从而提供真正的端到端 Web 3.0 去中心化、抗审查和卓越的安全性。

去中心化应用

互联网计算机旨在改善与运行在区块链上的智能合约和 dapp 交互的用户体验。IC 上的 Dapps 能够提供 Web 内容，允许用户通过浏览器与 dapps 进行交互。Dapps 本身由 IC 上的容器（dapps/智能合约）运行，具有它提供的稳健性和安全性保证。开发人员使用 Rust 或 Motoko 等编程语言创建 dapp，将它们编译为 WebAssembly 字节码，并将 WebAssembly 模块部署到 Internet 计算机上的容器中。一个容器包含一个 WebAssembly 模块和持久内存。

互联网身份

互联网身份是互联网计算机支持的匿名区块链认证框架。用户可以创建身份“锚”，并为其分配兼容的加密设备，例如笔记本电脑上的指纹传感器、手机上的面部识别系统或便携式 HSM，例如 YubiKey 或 Ledger 钱包。此后，他们可以使用他们分配给他们的锚点的任何设备注册并验证在互联网计算机上运行的任何 dapp。这提供了高度的便利性，允许用户以非常低的摩擦对他们感兴趣的 dapp 进行身份验证，同时受益于最高级别的加密安全性，但无需自己直接管理或处理加密密钥材料，这可以防止错误和关键材料被盗。该系统对 dapp 进行匿名化，每当使用锚点与 dapp 交互时，dapp 都会看到一个专门生成的假名，从而防止用户在他们使用的各种 dapp 中被跟踪。用户可以根据需要创建任意数量的身份锚。

与大多数身份验证方法不同，Internet Identity 不需要用户设置和管理密码或向 dapp 或 Internet Identity 提供任何个人识别信息。

神经网络

互联网计算机由一个治理系统实时治理和管理，该治理系统集成到其区块链协议中，称为网络神经系统（或 NNS）。任何人都可以向 NNS 提交提案，这些提案要么被拒绝，要么被采纳，然后自动执行。提案可以添加额外的节点来运行互联网计算机，通过更新节点机器上运行的副本软件来升级互联网计算机协议，调整经济参数，执行一般配置，以及许多其他事情。这提供了优于传统区块链的优势，传统区块链必须由那些操作节点通过“硬分叉”手动升级。分散的互联网计算机网络因此被设计为自我导向的。

代币

互联网计算机使用实用令牌 ICP。持有者可以质押 ICP，让他们参与互联网计算机的治理并获得投票奖励。ICP 也可以转换为循环并用于为容器的计算、通信和存储成本提供动力。区块链包含一个“反向气体”模型，其中智能合约为自己的计算付费，并且必须预充电循环才能运行，就像电动汽车必须预充电才能驱动一样。这确保了 dapp、系统和服务的最终用户可以通过网络与他们进行交互，而无需代币来为他们发起的计算付费。互联网计算机保持浮动转换率，因此 1 万亿个周期在 ICP 中花费大约 1 个 IMF SDR。

内部构件

在内部，互联网计算机的网络由各个子网区块链组成。新的子网区块链（通常简称为“子网”）是通过组合节点机器来增加其托管智能合约数据和计算的能力而形成的。它的协议利用链密钥加密技术使子网作为单个区块链发挥作用，这样它们对智能合约代码完全透明，并且区块链上的每个智能合约都可以直接调用任何其他智能合约。可以添加任意数量的子网，每个额外的子网都会线性增加网络的整体容量。

互联网计算机在专用于任务的特殊节点机器的主权网络上运行。它们由独立的节点提供商（节点所有者/运营商）、来自独立数据中心、位于全球不同地区和司法管辖区运行，无需任何企业云服务。新的子网是通过组合节点机器形成的，这些节点机器根据由节点提供者、数据中心、地理和管辖权组成的分散层次结构计算为独立的，这使得产生具有更高确定性和更低级别的所需安全性和弹性属性成为可能复制，从而提高效率。

节点可以理解是子网下的一种服务,或者称为一种子服务器.

最早互联网计算机由 DFINITY 基金会开发，该基金会目前是主要代码的贡献者,从去年 5 月 10 号创世以来,ICP 的生态目前还有很多不确定性和基础设施未完善,因此它的路看起来很很远.

如果想要快速了解 IC 的原理和构成,我推荐直接查看官方的 icig 文件,如果看懂整个文件的架构基本就了解了 ICP 是如何运行并承载整个 dApp 交互的.

### 互联网计算机的愿景

互联网计算机区块链是真正的“世界计算机”，它使用先进的新密码学和分布式协议消除了智能合约的传统限制。

从他们官方的介绍来看,主要体现几点:

第一节省成本,如果对于一个小团队,那么它确实是适合的,不像 Cosmos、波卡等项目需要在创立或主网发布初期就需要大量的资金去维持整个应用的运行,ICP 从这个点上确实更节省,但是这也有一些不可避免的问题,比如存储大的问题,代码升级问题等都特别考验开发者的能力和原始架构,一不小心可能就要推倒重来.

其中官方提到存储 GB / 5 美元,这明显是扯淡,只存储不带资源消耗和计算,那就是死数据,有什么用么?

第二是网络的无限扩展,这里可以类比到 telegram 的架构,基本是横向扩容,而且是在子网完全由 nns 控制时,可以随意的扩容和减少,同时避免共识作假问题,当然这里牵扯到很多关于选举,拜占庭问题,就不再详细讲解,总结一句话就是:扩展可以实现到人人自建,前提是所有的子网和 nns 能收放自如,也就是渐进式去中心化慢慢到来,因为现在子网还是由 dfinity 基金会在控制.

第三:反向气体模式,简单说就是可以节省手续费,说是把原本 eth 生态的 gas 费用去除,其实本质上就是在 pos 链搞了自己的交易,篇鬼呢,你看 bnb 也是很便宜,还不是因为 eth 现在是 pow,而目前其它大多数公链都是 pos、dpos,事实证明 pos 确实没有那么安全和靠谱,贵有贵的道理.

第四:Internet Identity 和 nns,感觉这两个算是一种创新吧,其实 II 是一种 webauthn 技术,主要是一种设备的识别和认证,目前做的比较好的是 yubikey,可能你也在币安的安全认证里看到过,这种识别认证,是纯物理的,如果你丢了那就是真丢了,就像助记词丢了一样,无法进入钱包或授权认证.

nns 是一种管理 icp 质押后的神经元,并且里面集成了 dapp 的一些应用,比如 sns、投票、提案、质押、奖励等等功能,简单说就是提供了一种 dao 的形式治理工具,并且把整个 icp 生态的应用嫁接进去,甚至是把基金模式搬进去,质押 icp 可以进行投资 dapp,目前官方还未给出更多解释,可以关注后续是如何把代币标准和投资、治理等等功能集成吧.

从愿景上看,ICP 确实做了一个很大的饼,并且涵盖了币圈大多数基础功能,但是一年过去了,他们仍然在规划,而完成的内容还很少,比如基础的代币标准仍然还在讨论中,也许是因为熊市迟迟不推进,或者是因为要等一个合适的时机公布,反正就是慢.

## 2.趋势=》主要从链上数据看

观察一个区块链公链好不好,当然是从链上数据和交互数据、用户、地址等角度去看,首先我们拿 ETH 举例,对于整个 ETH,它有完备的生态应用,并且有自己的护城河,最重要的几个组成:Dex、稳定币、借贷,当然这些所有的前提就是有足够多的开发者,或者简单的说就是能挣到钱,我们从目前的公链崛起可以观察到,SOL、Luna、AVAX、FTM、dot 等公链的快速发展,无一不是给予开发者或开发团队很大的补助,并且通过一些史诗级应用慢慢让生态扩展到更多的群体,甚至是侵蚀 ETH 的生态,当然这些生态在 ETH 面前仍然是弟弟,如果仅仅从应用层或用户角度看,只要能带来利润,那么就是可以让一条公链慢慢崛起,当然这些也不可避免的是有足够多的基础建设,也就是一些快速开发的工具,因为之前公链都背靠 EVM 或 Solidity,已经积累了大量的开发者,所以在各个公链之间迁移,可以快速的适应,甚至是直接移植,多链换皮共存.

这里没有提到 BNB 的链,是因为背靠币安自带流量,根本无法类比,比如我们看看曾经的三大交易所,ok、火币的公链发展的如何?懂的都懂,谁是老大谁就有更多的资源,仍然还是只看冠军.

说完其它公链的数据,我们来看看 ICP 在这一年有哪些成果?主要从出块、节点、子网、canister、nns、销毁、转账、活跃用户等数据来看.

首先这些数据无法从更专业的工具上获得,比如 nansen、messari 等平台获得,因为 ICP 根本不配,它自身没那么多数据值得被人接入!!

以下数据主要来自官方的 dashboard:

![](/img/media/16462161763681/16515591647138.jpg)

ICP 的出块是一个非常快的,甚至是快到了极致,以至于在一年的时间已经达到了 781961400 的区块,而对于整个交易来看这确实是一个好的数据,但是数据本身的重要性取决于它带来了什么成功,目前看很多块其实没有什么用,就像是定时器一直在走一样毫无意义.从长远的角度看,出块速度和数据处理是一个公链的瓶颈,因为它取决于用户体验和实际可以承载的用户数量,不过对于一个可以扩展的链来说,这可以让它更快.

官方给的定义是:34.83 Blocks/s ,出块的速度会根据子网、节点的增加而增加,这时候也体现了扩容的好处,当然想实现并行几乎是不可能的.对于出块其实目前看不出多少问题,因为这个生态的转账、用户还不多,不足以实现压力测试或是 ETH 的 gas 费飙升.

子网:在过去一年的时间,ICP 增加了数个子网,目前子网数量 35,子网的数量决定了整个生态的数据处理和承载的应用,同时也是保障整个区块链的共识得到快速确认,也是让用户体验和安全提升的前提,在他们年初的路线图中提到,在未来子网可以实现通过 nns 自动扩容和管理,这是一个漫长的过程,当然对于不同子网也有不同定义,比如他们的 nns、icp 是存在单独的子网,而其它应用新建的 canister 是存在一些普通的子网,或者说大家共同租赁了一个服务空间,那么子网被拖垮之后,就会影响整个应用的流畅度和体验,之前确实看到过一个子网拖累所有子网,据说是在未来可以实现那种自动选举功能,不过这种规则匹配、子网迁移确实是刚需功能,不能一个应用出问题,所有的都出现问题.

节点:目前有 56 个节点提供商,其实大多数都是资本,可以在官方的数据看到,所以始终还是资本在驱动整个 icp 的发展或者是区块链的发展,对于不同的节点服务商,质量或许可以得到一些保障,但是未来出现越来越多的边界节点,质量能否保障现在不一定,从公开的数据看到目前有 10 个边界节点,其中 56 个节点服务商提供了 518 个节点机器,他们分布在全世界,以此达到去中心化.

canister 是一种 ic 提供的租赁服务,主要用来托管 dapp 或合约代码,它从创世以来,已经有 64896 个被注册,其中一次爆发期是 sonic 在上线的时候当天被创建 20000 多(具体有点记不住了 😂 ),后续都是每个应用在爆发的时候被创建,比如 openchat 的架构更改,dscvr、distrikt 等应用的爆发,在 web3 时代,数据由用户掌控,同样的每个用户都可以自主控制属于自己的 canister,所以 canister 是作为 icp 生态爆发的重要点,我们应该时刻关注这个数据,当有史诗级应用出现时,我相信 canister 会被大量创建,目前一个 canister 创建需要消耗 0.4 左右 ICP 才可以发布,所以基本每个 canister 被创建从测试到发布至少需要 1ICP 以上,如果这个合约被大量交互,那么它每天可能都要消耗几个 ICP,如果有上千用户,那可能需要消耗几十 ICP 甚至更多,当然官方给的指南是,计算量越大,被消耗的 cycle 就越多.

nns 主要从两个方便看,第一是 nns 的质押,也就是整个生态的 token 通缩情况,目前看整个生态的通胀是远远大于通缩,而且我们按照 eth 的体量预计,icp 至少要进入全民 web3 或者说是有大量的史诗级应用才可能大于通胀速度,所以 icp 的经济模型从这个点上看是需要有优化的,否则通胀永远大于通缩,目前 ICP 的流通总量:480,899,696,现在流通:225,638,904 ,当前流通率 46.92%,创世时总供应量：4.69 亿, 流通量：1.23 亿, 市值占有整个市场的 0.17% ,从去年创始到现在增发:44’890’383 ICP,而销毁则是寥寥无几.

因为 nns 里有一部分质押数据,所以从质押上看,目前整个 ICP 的 hodler 还是很多的,目前整个供应量的质押率:55.6%,当前质押 ICP 数量 267’204’254,因为有一部分是未解锁的,所以他们也是在持续的营收,也就是质押奖励.

质押的部分一部分是溶解的,一部分是未溶解的,这个概念可以简单的理解是定期理财还是短期理财.目前质押溶解的有:98’512’263, 未溶解的有 168’691’991, 意思就是说目前看好后期发展的人仍然是大部分.关于质押几年和奖励问题,可以单独去看以前讲解的视频或文章,此处不在展开.

质押从区块链的概念上看是确保网络的稳定,同时也是让更多的人对一条公链的共识达到一定的高度,其实本质就是能不能持续挣钱,个人理解可以把质押当成一种 ETF,而质押的人可以持续获得分红,比如它可以从质押上作出投票、更正链的发展,一句话就是让你拥有话语权,同时可以让这个链更好的发展,或者是以社区的模式发展,大家一起挣钱.

销毁:从销毁的数据上看,可以看到一个公链的活跃度、应用的交互等,比如 ETH 在前几天 ape 发行 token 和新的 NFT OTHR 看,它当天消耗了 64078.52 个 ETH 的手续费,这就是蓝筹项目的魅力,或者说是公链对于 Token 的价值,目前 ETH 生态每天的消耗是 8049 左右[数据来源](https://etherscan.io/chart/dailyethburnt),ICP 每天的销毁是 280(此数据是在 22 年以来),之前是每天不到 100ICP,好吧,这个数据根本无法对比,单从 ICP 的销毁数据看,它仅仅是转账数据,毫无太多的应用交互.

转账:目前整个 ICP 的生态消耗,多数还是在转账上,目前已经累积转账数据 3470054,意思就是说过去年一共产生了 3470054 笔交易,我们平均到每天是 9506 笔交易,然后通过交易数据我们可以得出转账的手续费是 310ICP,对于创始奖励 mint 的有时候不产生 fee.

活跃用户:从上面的转账数据我们大致推算,每天的日活地址仅仅 9500 左右,而通过脚本和数据计算,去重后每天的活跃钱包数据大概是 5600 左右.

从以上数据看,我们不需要对比,ICP 仍然处于一个非常的早期阶段,没有优质应用,没有用户,没有交易,可能最重要的是没有可以盈利的项目.

## 3.生态=〉从应用数据观察

从第二节讲链上数据,其实我们已经可以大致推断出,ICP 生态的应用数据会无比难看,当然了也不排除有什么黑马.

首先我们从 Dfinity 官方资助的项目看,慢慢剖析更多数据去观察 ICP 生态的发展情况.

我们通过访问 dfinity.org/grants 可以看到,目前已经有 180 个项目已经拿到 GRANTEES,当然应该还有一些没更新的,不过应该也不会超过 300 个.

从应用上看,其实涵盖了各个方面,比如 DeFi、NFT、游戏、基础设施、Web3 等,目前整个资助的项目多数是 25000 美元,从这个价格看,ICP 是真抠门!典型的不给钱还想让干事,或许这就是用爱发电吧.

从 showcase 我们可以看到已经在运行的应用,多数还是一些简单的 demo,我们找几个范例查看数据,并通过社区查看整个应用的情况.

首先我们观察整个 ICP 自身社交媒体的数据:

推特关注: 635.2K,从去年到现在基本没涨多少
reddit 关注:26.93K,活跃用户每天 300 不到
youtube:20.29k, 每个视频浏览 800 左右
medium:6.5k
github:star 数量并不多,整体活跃不错,去年代码更新也是上榜了
telegram: 从创始以来被骂的直接不敢开放聊天了,或许这就是区块链吧
discord:仅仅有一个开发群,目前人数 5583,活跃度还行吧.
论坛:主要是提案和技术讨论,活跃度还行,可能还是牵扯到大部分人的投票和观察 icp 的进度.

大裁缝推特:191.2k,从去年到现在增加了几千人吧 😂

从官方的各种推特、社区观察,其实整个 ICP 目前仍然是没用户,没有足够多的开发者,一言难尽的公链!

通过 showcase 或者是从去年创始以来,有几个亲儿子项目,比如:dscvr、opencaht、origyn、fleek 等项目来看,也是官方最早推荐 d 额一些应用,当前这些应用 d 额数据我们可以通过一些内容去佐证生态 d 额发展.

### dscvr

dscvr 简单可以认为它是一个论坛,提供了发帖、加入某个话题的功能.

愿景是创建一个去中心化的社交内容聚合平台，用户不仅可以控制内容，还可以控制平台本身。想想 Reddit，如果 Reddit 的开发是由其最敬业的社区成员管理的。

说是类比到 reddit,但是这个社区目前用户仅仅有 40000 人?然后它的推荐算法和大量的垃圾内容,整个社区根本不是在创造内容,更多的是在领取空投,寻找一些刺激性的话题,我并没有看到这个社区的价值在哪里?或者它在为 ICP 创造什么价值?也许它的定位仅仅是一个发布信息的渠道,或者说是领取空投的地方.

作为一个内容社区或社交平台,没有内容的时候谁去控制是无所谓的,而且在创作者经济或 WEB3 时代,用户能产生内容的社交内容才能活下去,首先它需要更多的内容创作者,而不是空投发布信息.

目前 DSCVR 的一些数据:

推特关注:24.1k,

据知情人士透露平台周活跃用户 2300 人左右,因为无法通过 similarweb 统计数据查看,所以这里是预估数据.

### distrikt

它的定位是一个去中心化的社交媒体网络，赋予用户自主权力。同时也是 icp 生态比较早的项目之一,在 ic 主网没发布之前,它就一直在被提到,后来官方发布消息说,将由开放互联网基金会(8 月底启动)进行管理和维护日常的运营.

开放互联网基金会已经获得了 600 万瑞士法郎和 40,000 ICP 的捐赠。作为一个去中心化的专业社交媒体网络，distrikt 通过为用户提供有关其数字存在和身份的主权来帮助开放互联网基金会实现其目的。

distrikt 作为生态的优质项目和官方扶持项目之一,也是作出了一些成绩,比如他们最早上线了 ios 和安卓 app,也发布了 web 版的应用,目前的生态数据如下:

![](/img/media/16462161763681/16515642800361.jpg)

通过 similarweb 观察到,distrikt 在最近取得了大量的用户增长,可能的原因是他们发布了一个叫 POD 的 NFT,空投给了一些早期的社区活跃用户.

distrikt 目前推特关注:18.2k,整个社区的活跃相对还算可以,而且团队也有大量的资金支持项目的发展,所以在 POD 上线近一个月的时间地板价还维持在 12ICP 左右,从长远看 pod 仍然有更广阔的应用场景,比如 pass 通行证,游戏、DeSo 的体验等,都会让 POD 增加很多附加属性和应用场景.

### origyn

ORIGYN Art 是区块链艺术市场的专属社区。它准备实现实物艺术品和 NFT 之间的联系，为创作者、行业专家、收藏家和爱好者创造终极市场体验。

origyn 的背后同样是一家基金会在运行,ORIGYN 通过生物识别数据和独特的所有权体验，为品牌、创作者、艺术家、市场、消费者和行业提供有保证的真实性证书，使 NFT 有了生命力。

目前 origyn 已经发行了 token: OGY, 总量 100 亿

推特关注: 67.7k

离奇的是竟然在网站上看到了微博,一度怀疑是国产项目!而且去年他们私募登记的时候有看到在社区里搞过,但是作为一个奢侈品项目而且附加 NFT 属性,只能说有钱人真会玩,但是怎么说呢,实体的东西上链总感觉怪怪的,起码这种东西在中国是不太现实,因为你永远不知道你买的全部都是仿制品!

### openchat

作为一个社交项目,其实是最容易吸引到用户或者是最容易积累用户的聚集地,但是呢,ic 有一堆限制所以导致最咋跑 oc 根本无法承载那么多用户,现在他们改了架构,估计是每个用户都分离了不同的 canister,才可以支撑现在的用户体量,但是整体也不多,可能最多的还是一人多号,没错为了撸空投,你永远不知道一个群里可能有 99 个拖,而你就是那个韭菜!

![](/img/media/16462161763681/16515660440424.jpg)

通过 similarweb 观察到,oc 的用户量是一个平稳增长,大概率也是一些人也撸空投,之前也有一些活跃社区,同时也支持了 ICP 的直接支付,未来说是会支持 btc、eth 等 token,其实本质上是 canister 可以持有这些资产就都可以做.

### psychedelic 和 toniqlabs

fleek 这个服务,其实在传统互联网到处都是,只是在 ic 有俩家在做类似的服务,而 fleek 起家早,并且支持多个链和存储,所以目前看还不错,算是个静态托管网站.

然后 fleek 目前属于 psychedelic, 他们以 DAO 的形式在布局整个 IC 生态,目前已经开发了很多基础应用,同时涉及了 DeFi、游戏、NFT、去中心化域名、稳定币等多个领域.

目前旗下涵盖的产品包括；Fleek.co、PlugWallet、Terabethia、Dank、Sonic、Jelly、DAB、ICNS、Psychedelic Games、CAP、MetaSports Basketball、Cover、SLY。

IC 目前的整个生态应用,其实可以用一句话概括: 只有 NFT,没有生产力.

NFT 目前主要围绕两个矩阵在发展,其中一个是 psychedelic 的 dip 协议,另一个是 toniqlabs 的 ext 标准,当然这俩家也是目前整个 IC 生态质量和生态比较完善的产品,他们都涉及了钱包、游戏、NFT,也就是说他们从钱包出发,涵盖了基础设施,并逐渐向应用层延伸.

举个例子:toniqlabs 最早做了 stoic 钱包,然后慢慢出现了 entrepot,并且发布 ext 标准,同时适用在 NFT 和代币标准,然后发布了小游戏,并慢慢推出基于 nft 的基础服务.

反观 psychedelic,他们最早发行了 plug 钱包,然后开始大量的基础工具积累,从 Dank、DAB、CAP 等基础服务开始,逐渐向应用层扩展,然后并拿下官方的基础服务跨链到 ETH,他们正在通过 Terabethia 实现跨链,同时在近期推出了 Jelly,一个 NFT 市场,然后在今年年初推出了 Sonic,一个 DeFi 应用,旗下基本涵盖了目前整个 IC 的生态矩阵,并且在不断扩展.

从生态的应用数据上,我们观察到,无论是以 DAO 形式运行的 psychedelic,还是资本驱动的 distrikt 都在快速的发展,当然也有 toniqlabs 这样的小作坊,最早仅仅有两个人在创造产品,他们也取得了惊人的成绩,或许这也是一个行业红利的开始,或者是竞争相对较少才有活下去的可能.

目前 ICP 有近 200 个 Grants 项目,而活跃用户仅仅才不到 10000 人,在 Web3 时代,活跃用户将是最大的数据支撑,而对于如何获得用户?或许应用的体验、UI/UX 都是很重要的门槛,而对于当前的 IC,一没有足够好的应用,二没有大资本推动,真的很难让整个生态快速发展.

## 4.价格=》从交易数据看

![数据来源CMC](/img/media/16462161763681/16515679207277.jpg)

这个数据可能是最惨的一个,从去年创世发布后,ICP 达到了巅峰时刻,在发布后的一周内上线了整个加密货币的头部交易所,从技术上看,icp 确实有很大的门槛,因为小交易所连接入的实力都没有,但是从上线开盘,价格就一路下跌,距离发布已经跌幅超过 97.29%?

反正一句话,币价跌到你怀疑人生,然后就是买入 ICP 住进 ICU!

抛去价格,我们从成交观察一波 ICP 的数据(数据来源 messari):

每日成交: $14.69M
过去一周数据: $49.31M
过去一个月数据: $87.57M

从历史数据可以观察到,icp 近三个月成交量一直在微缩,而价格也是在持续的下跌,当然我们都知道交易所是可以接入很多机器人进下交易的,同时也有一些假数据,因为为了让 K 线更好看.所以从我们看到的成交量可能还需要打个 7 折甚至更多,当然这也是无法避免的,所以通常链上数据才是最真实的,因为它不会被篡改!

![](/img/media/16462161763681/16515685231894.jpg)

无论数据真假,通过历史数据,也可以观察到,在最早上线的时候交易非常活跃,所以通过交易数据仅仅是观察是否有更多的机器人被激活交易抢筹码,从链上数据查询一些真实性,并捕捉一些重要数据寻找合适的机会进入,期待下次 ICP 的日成交量突破 10 亿,或许这时候才是 ICP 真正的崛起.

## 5.未来=〉从开发路线图和完成的节点

![](/img/media/16462161763681/16515690525082.jpg)

每个项目的推进都有一个进度的路线图,比如 ETH 的各个阶段,展示了它在不同时期要完成的使命,并且通过阶段性升级达到某一个高点,同时也是拉盘和积累用户的最好时机,当然 icp 也有自己的生态节点,在主网未发布之前,他们创造了自己的语言 Motoko,并通过测试网积累了用户,随后在 2020 年 5 月创世区块产生后,他们发布了 SODIUM 阶段,对外了 NNS 和代币的经济模型,并不断优化 NNS 的质押、投票等基础设施.

在 2022 年 2 月 3 日他们发布了新的路线图阶段,首先让我们回顾一下都说了什么:

Q1 中期：Titanium（钛）/DeFi 预发布

Q1 末期：Chromium（铭）/启用 DeFi

Q2：Carbon（碳）

Q3：Vanadium（钒）

Q4：lridium（铱）

2023 年：Futurium

![](/img/media/16462161763681/16515691987600.jpg)

每个阶段都代表了一些新的进度,其中包括了一些基础设施,比如 dApp 的范例、比特币的集成 demo、II 的扩展、canister 可以持有 ICP 等等

Titanium 里程碑于 2 月 25 日达成。Titanium 标志着在互联网计算机（Internet Computer）上实现 DeFi 基本构件模块，例如零 Gas 费 AMM、原子互换、完全基于链上的 DeFi 系统。

但是目前的 DeFi 仅仅支持原生的 WICP、ICP、XTC 三个 Token,并没有真正实现 DeFi 系统,也无法进行多 Token 的交互,同时也无法在各个 DeFi 之间实现流动性交互等功能,目前来看 DeFi 在没有出现 Token 标准和 SNS 系统之前就是个摆设!

接下来将是 Chromium 里程碑（又名 Satoshi 版本），以 BTC 和 ICP 直接集成为特色，在 5 月 2 日互联网计算机公布了新的消息,他们将部署一个新的子网，专门用来启用比特币集成。随后将在该子网上同步比特币测试网。一旦确认系统按预期工作，将启用比特币 API 并将其公开用于测试和开发。这个目标预计在 5 月底完成!

在 Chromium 阶段,也推出了自定义子网、容器外部请求、边界节点、开发 SNS 治理等功能,5 月是 ICP 创世一周年,同时在本月也发布很多底层服务,或许这是 ICP 能出现一点起色的新篇章.

同时第二季度,也是整个 ic 快速更新的时候,比如要支持 50 个子网、扩展 canister 的存储、AMD SEV 虚拟机支持、EVM 支持、交易原子性,从这些属性上看,发现这才是真正的 DeFi 时代,所以之前的真的是 demo.预计这些全部完成要 7 月份了,万一在拖一拖可能就国庆节了!

然后就是 Q3,主要是实现和 ETH 的集成,节点拍卖、子网的容器迁移、边界节点安全,其中在 Q3 的时候有提供社区基金,也就是说生态全面发行 Token 大概率是第三季度结束了.

Q4 主要是围绕节点、子网、安全、备份、ETH2 集成等方面展开,其中和用户相关最大的可能是存储子网和 ETH2 集成了,不知道会不会给 ICP 带来一波红利,同时也是在抢占当前 L2 的市场.

然后就是 2023 以后,主要实现子网的自动创建、管理、MPC for canisters、和后量子密码学?

这里最重要的是子网的创建、管理,后面 NNS 实现自动扩容、边界节点可人人加入的话,才是真正的去中心化区块链,否则根本无法实现它的愿景全球计算机.量子时代就算了,鬼知道啥时候实现,自己的基础应用还差那么多,一天天瞎搞.

从整个路线图的规划看,今年是很重要的一年,同时也是实现生态应用爆发的一年,当然在 web3 时代,更多的是承载 web2 的用户到 web3,那么首先就要找到用户的痛点,当然什么数据主权、用户主权算是一部分,但是并不是刚需,同时也没有那么便捷的服务,就 metamask 这种授权模式就劝退了 N 个用户,同时在移动互联网时代,人真的越来越懒了,没有更优质的服务去替代的时候根本无法叫醒他们去尝鲜.

最后给一点思考,web3 时代,仍然是资本在驱动你使用什么,而不是你去选择什么.除非是一个小众群体,他们可以自己去思考、去寻找自己需要什么,所以这也是独立思考的重要性.

## 6.什么理由值得我们持有 ICP?

从以上数据佐证,我们没似乎没有任何理由持有 ICP,或者说有想买 ICP 的欲望,那么为什么仍然有很多人看好 ICP 或者我在看好 ICP!

第一: 它还是在一个发展初期,而对于一个出生即高点的项目可能连 EOS 都不如,但是一般情况下一个东西能不能崛起我们要看它能不能二次爆发或多次爆发,所以我们在赌它的未来,某人也说过,如果你没有资本、那么你只能赌,如果你连赌的勇气都没有,那么注定一辈子平庸.

第二: 它适合一些初创团队进行开发,因为它的成本低,同时也可以跟随公链自身进行成长,当然也适合自由开发者或业余有兴趣的爱好者进行开发,因为 ICP 所使用到的技术都是比较前沿的,比如 wasm、webauthn、chain key 等.

第三: 一个公链的好坏取决于团队的因素很大,ICP 作为明星公链,团队人数 250+,当然也有很多什么科学家、博士在参与,但是有人说无法查到所有人的实名,这可能需要去他们办公室实地调查了,本人也不知道,反正从资本方面看,Dfinity 总共经过了三轮募资，募集了约 1.95 亿美元,有 a16z、polychain、SV Angel 等资本.

最后,我们应该保持着长期的视野，逢低买入那些我们想在未来十年持有的资产，并继续投我们我认为通过突破极限而有可能价值超过 100 亿美元的初创公司。