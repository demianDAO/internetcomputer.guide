---
id: ic-0-1-end-en
title: Reading ICP from Zero to One
sidebar_label: Reading ICP from 0 to 1
---

# ICP from 0 to 1

In this article, we take a look at IC from a data and capital perspective.

Author: kk 德米安

Published by: demianDAO

Typeset by: kkdemian

# Contents

0. About demianDAO

1. What is IC

2. Trend=〉Mainly from on-chain data

3. ecology=〉from application data

4. price=〉from trading data

5.Future=〉From development roadmap and completion point

6. What are the reasons why we should hold ICP

## 0. About demianDAO

kkdemian launched the DAO, a community model DAO focused on learning, cognition and technology enhancement, which includes the development of public chains such as IC, Commos, etc. It will also introduce some protocols of the current ecology of ETH, such as RSS3, BANKless, if you are interested you can join this DAO, welcome to learn and share technology together.

Note: This document is completely open source, please feel free to consume it, no need to note the source of copying! The English version has been translated by Deepl PRO and is available to the global community. Any projects, Tokens, NFTs mentioned in this document are not investment advice and should be done at your own risk.

## 1. About ICP

In fact, there are many places about IC, so I won't write it down, but the following is taken from the official document.

### Overview of the Internet Computer

The Internet Computer is a "universal" blockchain that provides a public platform for hosting tokens and decentralized applications (dapps). It acts as a complete technology stack, so systems and services can be built that run entirely from the blockchain.

### What is an internet computer?

Conceptually, an Internet computer is an extension of the existing Internet that enables a global network of computers to provide the computing power to run applications.

Just as the adoption of the Transmission Control Protocol (TCP) and the Internet Protocol (IP) provided rules for transferring data between endpoints, these rules helped to create what we know today as the "network of networks", i.e. the Internet Computer relies on a decentralised protocol called the Internet Computer Protocol to define the software components that enable a global computer network to run applications. These software components allow the global computer network to combine its resources to read, copy, modify and return application state.

- Key to the Internet computing infrastructure is
  - A secure protocol that enables general purpose computing to operate transparently directly over the Internet.
  - A network that runs protocols to provide computing power (e.g. the hardware, CPUs and memory required to run programs) through independently operated data centres.
  - A globally accessible and scalable platform for running software applications.

Why build an Internet computer?

Access to computer-based Internet services is largely transparent to end users, and the experience of interacting with decentralised applications is the same as on a public or private cloud.

However, for those creating and managing these Internet computer-based services, Internet computers eliminate many of the costs, risks and complexities associated with developing and deploying modern applications and microservices. In addition, its security protocols ensure reliable messaging, transparent accountability and resilience without relying on firewalls, backup facilities, load balancing services or failover orchestration.

In some ways, building Internet computers is about restoring the Internet to its roots of openness, innovation and creativity. To focus on a few specific examples, the Internet Computer does the following.

Support interoperability, shared functionality, persistent APIs and masterless applications, thereby reducing platform risk and encouraging innovation and collaboration.
Automatically stores data in memory, thereby eliminating the need for database servers and storage management, improving computing efficiency and simplifying software development.

Simplifies the technology stack that IT organisations need to integrate and manage, thereby increasing operational efficiency.

It has several main components: canister, decentralised applications, internet identity (II), neurons (NNS), tokens, subnets, nodes.

canister (dapps/smart contracts)

Internet computers hosting powerful smart contracts, called containers. Containers are tamper-proof, autonomous, hosted on the chain, and can run and interact with each other simultaneously. Containers can serve HTTP requests created by end users, which allows them to provide an interactive web experience directly. This means that blockchain dapps, systems and services can be created without having to integrate websites running on enterprise cloud hosting services and private servers into their architecture, providing true end-to-end Web 3.0 decentralisation, censorship resistance and superior security.

Decentralised applications

The Internet Computer is designed to improve the user experience of interacting with smart contracts and dapps running on the blockchain. dapps on the IC can provide web content, allowing users to interact with dapps through a browser. dapps themselves are run by containers (dapps/smart contracts) on the IC, with the robustness and security guarantees it provides. Developers create dapps using programming languages such as Rust or Motoko, compile them into WebAssembly bytecode, and deploy the WebAssembly modules into containers on Internet computers. A container contains a WebAssembly module and persistent memory.

Internet Identity

Internet Identity is an anonymous blockchain authentication framework supported by Internet computers. Users can create an identity 'anchor' and assign it to a compatible cryptographic device such as a fingerprint sensor on a laptop, a facial recognition system on a mobile phone or a portable HSM such as a YubiKey or Ledger wallet. This provides a high degree of convenience, allowing users to authenticate with very low friction to the dapp they are interested in, while benefiting from the highest level of encryption security, but without having to directly manage or handle the encryption key material themselves, which prevents errors and theft of key material. The system anonymises dapps so that whenever an anchor is used to interact with a dapp, the dapp sees a specially generated pseudonym, thus preventing users from being tracked across the various dapps they use. Users can create as many identity anchors as they need.

Unlike most authentication methods, Internet Identity does not require the user to set and manage a password or provide any personally identifiable information to the dapp or Internet Identity.

Neural Networks

Internet computers are governed and managed in real time by a governance system that is integrated into its blockchain protocol, called the Network Neural System (or NNS). Anyone can submit proposals to the NNS, which are either rejected or adopted and then automatically executed. Proposals can add additional nodes to run the Internet computer, upgrade the Internet computer protocol by updating the copy software running on the node machines, adjust economic parameters, perform general configuration, and many other things. This provides an advantage over traditional blockchains, which must be manually upgraded by those operating the nodes through a "hard fork". Decentralised internet computer networks are therefore designed to be self-directed.

Tokens

Internet computers use utility tokens, ICPs, which can be pledged by holders to allow them to participate in the governance of the Internet computer and receive voting rewards. ICPs can also be converted into cycles and used to power the computation, communication and storage costs of containers. The blockchain contains a 'reverse gas' model where smart contracts pay for their own computation and must be pre-charged for the cycle to run, much like an electric car must be pre-charged to drive. This ensures that end users of dapps, systems and services can interact with them via the network without tokens to pay for the computations they initiate. Internet computers maintain a floating conversion rate, so 1 trillion cycles in ICP costs about 1 IMF SDR.

Internal building blocks

Internally, the Internet Computer's network consists of individual subnet blockchains. A new subnet blockchain (often referred to as a "subnet") is formed by combining node machines to increase their capacity to host smart contract data and computation. Its protocol uses chain key cryptography to enable subnets to function as individual blockchains so that they are completely transparent to smart contract code and each smart contract on the blockchain can directly invoke any other smart contract. Any number of subnets can be added, with each additional subnet linearly increasing the overall capacity of the network.

Internet computers run on a sovereign network of special node machines dedicated to the task. They are run by independent node providers (node owners/operators), from independent data centres, located in different regions and jurisdictions around the world, without the need for any enterprise cloud services. The new subnets are formed by combining node machines that are computed as independent according to a decentralised hierarchy consisting of node providers, data centres, geography and jurisdiction, which makes it possible to generate the required security and resilience properties with higher determinism and lower levels of replication, thus increasing efficiency.

A node can be understood as a service under a subnet, or as a sub-server.

The first Internet computers were developed by the DFINITY Foundation, which is currently the main contributor to the code, and since its creation on 10 May last year, the ICP ecosystem is still full of uncertainties and infrastructural imperfections, so it seems to have a long way to go.

For a quick overview of how the IC works and what it is made of, I recommend looking directly at the official icig documentation, if you understand the whole architecture of the documentation you will basically understand how the ICP works and hosts the whole dApp interaction.

### The vision of the Internet Computer

The Internet Computer blockchain is a true "world computer" that uses advanced new cryptography and distributed protocols to remove the traditional limitations of smart contracts.

From their official presentation, the main points are:

Unlike Cosmos, Poca and other projects that require a lot of money to keep the whole application running at the beginning of their creation or mainnet launch, ICP is indeed more economical from this point of view, but it also has some inevitable problems, such as the problem of large storage, code upgrades and other issues that test the developer's ability and The original architecture may have to be rebuilt if you are not careful.

The official mention of storage GB / $5, which is obviously bullshit, only storage without resource consumption and computing, that is dead data, what is the use?

The second is the unlimited expansion of the network, here can be analogous to the telegram architecture, basically horizontal expansion, and is completely controlled by the nns in the subnet, can be arbitrarily expanded and reduced, while avoiding the problem of consensus forgery, of course, here involves a lot about the election, Byzantium problem, will not explain in detail, to sum up a sentence is: expansion can be achieved to everyone to build, provided that all the The premise is that all subnets and nns can be put away freely, that is, progressive decentralization is slowly coming, because now the subnets are still controlled by the dfinity foundation.

Third: the reverse gas model, simply put, is to save on fees, said to remove the original eth ecological gas costs, in fact, is essentially in the pos chain to engage in their own transactions, the ghost of it, you see bnb is also very cheap, but not because eth is now pow, and most other public chains are now pos, dpos, it is proved that pos is not so safe and reliable There is a reason why it is expensive.

The fourth: Internet Identity and nns, I feel that these two are an innovation, in fact, II is a webauthn technology, mainly a device identification and authentication, currently doing better is yubikey, you may also see in the security authentication of the coin security, this identification authentication, is purely physical, if you lose that is really lost, just like You can't access your wallet or authorize authentication if you lose it.

nns is a kind of neuron that manages icp pledges and integrates some of the applications of dapp, such as sns, voting, proposals, pledges, rewards and so on, which simply means that it provides a form of governance tool in the form of a dao and grafting in the entire icp ecosystem, even moving the fund model into it, pledging icp for investment in dapp. We'll be watching to see how the token standard is integrated with investment, governance and other functions.

In terms of vision, ICP did make a big pie and covered most of the basic functions of the cryptocurrency community, but a year on, they are still planning and have completed very little, for example, the basic token standard is still under discussion, perhaps because the bear market is slow to move forward, or because they have to wait for the right time to announce it, but it's just slow.

## 2. Trends=" mainly from on-chain data

The most important components are: Dex, stable coins, lending, and of course, the prerequisite for all of these is that there are enough developers, or simply put, they can make money, We can observe from the current rise of public chains, the rapid development of public chains such as SOL, Luna, AVAX, FTM, dot, etc., all of them are giving great subsidies to developers or development teams, and through some epic applications slowly let the ecology expand to more groups, or even erode the ecology of ETH, of course, these ecologies are still younger brothers in front of ETH, if only from the application layer or If you look at it from the application layer or user perspective, as long as it can bring profits, then it is possible for a public chain to rise slowly, but of course it is also inevitable that there is enough infrastructure, that is, some rapid development tools, because the previous public chains are backed by EVM or Solidity, and have accumulated a large number of developers, so the migration between various public chains can be quickly adapted, or even directly transplanted, multiple chains for skinning. Coexistence.

There is no mention of BNB's chain here because it is backed by Coinan's own traffic, which is not comparable at all, for example, let's see how the public chains of the three major exchanges, ok and firecoin, have developed. The one who is the boss will have more resources, still only look at the champion.

After talking about the data of other public chains, let's see what ICP has achieved in this year? Let's take a look at the data of blocks, nodes, subnets, canister, nns, destruction, transfers, active users, etc.

First of all this data is not available from more specialized tools such as nansen, messari and other platforms, because ICP simply doesn't deserve it, it doesn't have that much data on its own worth being accessed!!!

The following data is mainly from the official dashboard:

![icp上线一年的数据总结](/img/media/16462161763681/16515591647138.jpg)

ICP's block out is a very fast, even extreme, so much so that it has reached 781961400 blocks in a year's time, which is a good figure for the whole transaction, but the figure itself is only as important as the success it brings, and at the moment many blocks are not really useful, it's like a timer going on and on. In the long run, the speed of block out and data processing is the bottleneck of a public chain as it depends on the user experience and the actual number of users it can carry, but for a chain that can scale, this can make it faster.

The official definition is: 34.83 Blocks/s, and the speed of block output will increase according to the number of subnets and nodes, which shows the benefits of scaling, but of course it is almost impossible to achieve parallelism. There are not many problems to be seen with block out, as there are not enough transfers and users in the ecosystem to achieve stress tests or a spike in ETH gas fees.

Subnets: In the past year, ICP has added several subnets, and now there are 35 subnets. The number of subnets determines the data processing and applications carried by the whole ecology, and is also a prerequisite to ensure that the consensus of the whole blockchain is quickly confirmed, as well as to improve user experience and security. The subnet is a long process, of course there are different definitions for different subnets, for example, their nns, icp is the existence of a separate subnet, while other applications of the new canister is the existence of some common subnet, or that we share a service space, then the subnet is dragged down, it will affect the smoothness of the entire application and experience, before indeed saw a subnet dragged down all It is said that in the future the automatic election function will be implemented, but this kind of rule matching and subnet migration is really a necessary function, not one application has problems, all of them have problems.

Nodes: There are currently 56 node providers, in fact, most of them are capital, which can be seen in the official data, so it is always capital that is driving the development of the entire icp or blockchain, for different node service providers, the quality may be guaranteed, but in the future there are more and more border nodes, whether the quality can be guaranteed is not certain. There are currently 10 boundary nodes, of which 56 node providers offer 518 node machines, which are distributed around the world in order to achieve decentralisation.

canister is a rental service provided by ic, mainly used to host dapp or contract code, it has 64896 registered since its inception, one of the outbreak was sonic when it was launched on the same day more than 20,000 were created (I can not remember exactly 😂 ), the subsequent applications are created at the time of the outbreak, such as the architecture of openchat In the web3 era, data is controlled by the user, and each user can control their own canister, so canister is an important point in the explosion of the icp ecosystem, and we should always pay attention to this data. If the contract is heavily interacted with, then it may consume several ICPs per day, and if there are thousands of users, then it may consume dozens of ICPs or more. The official guideline is that the larger the computation, the more cycles are consumed.

The first is the pledge of nns, which is the deflation of the entire ecological token. The total amount of ICP in circulation: 480,899,696, now in circulation: 225,638,904, current circulation rate 46.92%, total supply at creation: 469 million, circulation: 123 million, market value of the entire market 0.17%, from last year's inception to the present increase: 44 '890'383 ICPs, with very few destroyed.

Because there is a part of the pledge data in the nns, so from the pledge, the whole ICP hodler is still a lot, the current pledge rate of the whole supply: 55.6%, the current number of pledged ICP 267'204'254, because some of them are not unlocked, so they are also in continuous revenue The pledged portion is partly dissolved.

The pledged portion is partly dissolved and partly undissolved, a concept that can be understood as a simple matter of whether the pledge is for term or short-term finance. At the moment the pledges are dissolved: 98'512'263 and the undissolved 168'691'991, which means that the majority of people are still optimistic about the future development. For more information on pledges and rewards, please refer to the previous videos or articles, so I won't go into them here.

From the blockchain concept, pledge is to ensure the stability of the network, and also to allow more people to reach a certain level of consensus on a public chain, in fact, the essence is whether it can continue to earn money. The chain can be developed in a better way, or in a community model, so that everyone can earn money together.

Destruction: From the destruction data, you can see the activity of a public chain, the interaction of applications, etc. For example, the other day ETH ape issued token and the new NFT OTHR, it consumed 64078.52 ETH fees on the same day, this is the charm of blue-chip projects, or the value of public chains for Token, at present, the daily consumption of ETH ecology is about 8049 [data]. The current consumption of the ETH ecosystem is around 8049 per day [source](https://etherscan.io/chart/dailyethburnt), the destruction of ICP is 280 per day (this data is since 22 years), before that it was less than 100 ICP per day, well, this data is not comparable at all, from the destruction of ICP alone, it is just transfer data, There is not much application interaction.

Transfers: At the moment, the entire ICP ecosystem is still mostly consumed by transfers, which has accumulated 3,470,054 transfers, meaning that a total of 3,470,054 transactions have been generated in the past year, which we average out to 9,506 transactions per day. The fee is sometimes not incurred for the founding bonus mint.

Active users: From the above transfer data we can roughly estimate that the daily active addresses are only around 9500 per day, while the daily active wallet data is around 5600 after de-weighting through scripts and data calculations.

From the above data, we don't need to compare, ICP is still at a very early stage, no quality applications, no users, no transactions and probably most importantly, no profitable projects.

## 3. Ecology => observation from application data

From the second section on on-chain data, we can already roughly deduce that the ICP ecosystem's application data will be extremely ugly, but of course, we can't rule out any dark horses.

Let's start by looking at Dfinity's officially funded projects and slowly dissecting more data to see how the ICP ecosystem is developing.

If we look at dfinity.org/grants we can see that there are 180 projects that have received GRANTEES so far, and of course there are still some that have not been updated, but there are probably no more than 300.

In terms of applications, they actually cover a wide range, such as DeFi, NFT, games, infrastructure, Web3, etc. Most of the projects funded so far are $25,000, and judging by this price, ICP is really stingy! It's typical of ICP to want to work without paying, so maybe it's all about love and power.

From the showcase we can see the applications that are already running, most of them are simple demos, so let's look at a few examples to see the data and see the whole application through the community.

Let's start by looking at the data from ICP's own social media:

Twitter followers: 635.2K, not much increase since last year
reddit followers: 26.93K, less than 300 active users per day
youtube: 20.29k, around 800 views per video
medium:6.5k
github: not a lot of stars, good activity overall, last year's code update was also on the list
telegram: since its inception, it has been criticized for not opening up chat, maybe this is the blockchain
discord: there is only one development group, the number of people 5583, the activity level is not bad.
forum: mainly proposals and technical discussions, activity is okay, but probably still involves most people voting and watching the progress of the icp.

Big Tailor Twitter: 191.2k, up a few thousand since last year 😂

From the various official tweets and community observations, the truth is that ICP as a whole is still a public chain with no users, not enough developers, and not much to say!

Through showcase or from last year's inception, there are several pro-son projects, such as: dscvr, opencaht, origyn, fleek and other projects to see, but also the official first recommended d amount of some applications, the current application d amount of data we can through some content to support the ecological d amount of development.

### dscvr

dscvr can simply be thought of as a forum, providing the ability to post and join a topic.

The vision is to create a decentralised social content aggregation platform where users can control not only the content but also the platform itself. Think Reddit, if Reddit's development was managed by its most dedicated community members.

Say it's analogous to reddit, but the community currently has just 40,000 users? And then with its recommendation algorithm and the amount of spam, the whole community is not creating content at all, it's more about getting airdrops and finding stimulating topics, I don't see the value of the community? Or what value is it creating for ICP? Maybe it's just a place to post information, or a place to collect airdrops.

As a content community or social platform, it doesn't matter who is in control when there is no content, and in the creator economy or WEB3 era, social content where users can generate content will survive, and it needs more content creators in the first place, not airdrops to post information.

Some current data from DSCVR:

Twitter followers: 24.1k,

According to sources, the platform has around 2300 active users per week, so here's an estimate since it's not possible to check the stats on similarweb.

### distrikt

It is a decentralised social media network that empowers its users. It was also one of the early projects in the icp ecosystem, and was mentioned before the release of the main icp network, and then officially announced that it would be managed and maintained on a day-to-day basis by the Open Internet Foundation (launched at the end of August).

The Open Internet Foundation has already received a donation of CHF 6 million and 40,000 ICPs. As a decentralised professional social media network, distrikt helps the Open Internet Foundation to achieve its aims by providing users with sovereignty over their digital presence and identity.

As one of the premium and officially supported projects of the ecology, distrikt has also made some achievements, such as being the first to launch their ios and Android app, as well as releasing a web version of the app, with the following ecological data so far:

![icp上线一年的数据总结](/img/media/16462161763681/16515642800361.jpg)

It has been observed via similarweb that distrikt has seen a lot of user growth recently, probably due to the release of an NFT called POD, which was airdropped to some early active community users.

distrikt currently has a Twitter following of 18.2k, the community is relatively active and the team has a lot of money to support the development of the project, so the floor price is still around 12ICP almost a month after the launch of POD, in the long run pod still has a broader application scenario, such as pass passes, games, DeSo experience, etc., all will make POD add a lot of additional attributes and applications. PODs add a lot of additional attributes and applications.

### origyn

ORIGYN Art is an exclusive community for the blockchain art market. It is poised to enable the connection between physical art and NFT, creating the ultimate marketplace experience for creators, industry experts, collectors and enthusiasts.

Also run by a foundation behind origyn, ORIGYN brings NFT to life through biometric data and a unique ownership experience that provides brands, creators, artists, markets, consumers and the industry with guaranteed certificates of authenticity.

Currently origyn has issued token: OGY, with a total volume of 10 billion

Twitter followers: 67.7k

I was surprised to see a tweet on the website, and suspected it was a home-grown project! But as a luxury project with an NFT attribute, I can only say that rich people really know how to play, but how can I say this, it's always weird to have something physical on the chain, at least this kind of thing is not very realistic in China, because you never know if you're buying all imitations!

### openchat

As a social project, it is actually the easiest place to attract users or to accumulate users, but then, ic has a bunch of restrictions so that the most run oc simply can not carry so many users, now they changed the structure, it is estimated that each user is separated from a different canister, in order to support the current volume of users, but the overall is not much, probably the most or one more than one person The actual fact is that you will never know that there may be 99 drags in a group, and you are the leek!

The actual fact is that you can find a lot of people who are not able to get a lot of money from the internet. [](/img/media/16462161763681/16515660440424.jpg)

The amount of users of oc is a steady growth, the probability is also some people also jack airdrop, before there are some active community, but also support the ICP direct payment, the future is said to support btc, eth and other token, in fact, essentially canister can hold these assets can do.

### psychedelic and toniqlabs

fleek is a service that is actually all over the traditional internet, but there are two similar services in ic, and fleek started early and supports multiple chains and storage, so it looks pretty good at the moment, it's kind of a static hosting site.

Then fleek is now part of psychedelic, which is a DAO that has developed many basic applications for the entire IC ecosystem, as well as DeFi, gaming, NFT, decentralized domains, stablecoins, and many other areas.

The products currently under its umbrella include; Fleek.co, PlugWallet, Terabethia, Dank, Sonic, Jelly, DAB, ICNS, Psychedelic Games, CAP, MetaSports Basketball, Cover, SLY.

IC's entire ecosystem of applications can be summed up in one sentence: NFT, no productivity.

NFT currently revolves around two matrices, one of which is psychedelic's dip protocol, the other is toniqlabs' ext standard, of course, these two are also the entire IC ecological quality and ecological products are more complete, they are involved in the wallet, games, NFT, that is to say, they start from the wallet, cover the infrastructure, and gradually to They are all involved in wallets, games and NFT, which means they start with wallets, cover the infrastructure and gradually extend to the application layer.

As an example: toniqlabs started with stoic wallets, then slowly emerged with entrepot, and released the ext standard, which applies to both NFT and token standards, then released mini-games, and slowly launched basic services based on NFT.

On the other hand, psychedelic, who first released the plug wallet, then started to build up a lot of basic tools, starting with basic services like Dank, DAB, CAP, etc., gradually expanding to the application layer, then taking official basic services across chains to ETH, which they are doing through Terabethia, and recently launching Jelly, a NFT marketplace, and then earlier this year Sonic, a DeFi application, which basically covers the entire IC eco-matrix at the moment and continues to expand.

In terms of ecological application data, we observe that both psychedelic, which operates as a DAO, and distrikt, which is capital driven, are growing rapidly, but of course there are also small workshops like toniqlabs, which started with just two people creating products, and they have achieved amazing results, perhaps this is also the beginning of an industry dividend, or maybe it is the fact that there is less competition that makes it possible to survive. Perhaps this was the beginning of a dividend for the industry, or the fact that there was relatively little competition to survive.

There are currently nearly 200 Grants projects in ICP, and just under 10,000 active users. Perhaps the experience of the application, UI/UX are very important threshold, and for the current IC, one is not good enough application, two no big capital to promote, it is really difficult to make the whole ecological rapid development.

## 4. price=" from the transaction data

![Source CMC](/img/media/16462161763681/16515679207277.jpg)

This data is probably the worst one, since the release of Genesis last year, ICP reached its peak moment, within a week after the release went live the whole head of cryptocurrency exchanges, technically speaking, icp does have a big threshold, because small exchanges do not have the strength to connect to it, but from the start of the launch, the price has fallen all the way, from the release has fallen by more than 97.29%?

In a word, the price of the coin falls until you doubt your life, and then it's time to buy ICP and get admitted to ICU!

Price aside, let's take a look at ICP's trading data (source messari):

Daily turnover: $14.69M
Last week's data: $49.31M
Past month's data: $87.57M

From the historical data, we can see that the volume of icp has been shrinking for the last three months and the price has been falling, but of course we all know that the exchange has access to many robots to place trades, and there are also some fake data, because the K-line looks better. So the volume we see may need to be discounted by 70% or more, which is of course unavoidable, so usually the on-chain data is the most real because it can't be tampered with!

![icp上线一年的数据总结](/img/media/16462161763681/16515685231894.jpg)

Regardless of whether the data is true or false, through the historical data, it can also be observed that in the earliest online trading is very active, so through the trading data is simply to observe whether more robots are activated to trade to grab chips, from the chain data to query some authenticity, and capture some important data to find the right opportunity to enter, look forward to the next ICP daily turnover exceeds 1 billion, perhaps this is the time ICP really The rise of.

## 5. Future =〉 from the development roadmap and completion of the node

![icp上线一年的数据总结](/img/media/16462161763681/16515690525082.jpg)

Each project has a roadmap of progress, for example the various phases of ETH, showing what it has to accomplish at different times and reaching a certain high point through phase upgrades, but also the best time to pull the disk and accumulate users, and of course icp has its own ecological nodes, before the main network was released, they created their own language Motoko, and accumulated users through the test network Then, after the creation of the Genesis block in May 2020, they released the SODIUM phase, which externalised the economic model of the NNS and tokens, and continued to optimise the infrastructure of the NNS in terms of pledging, voting, etc.

On 3 February 2022 they released a new roadmap phase, so let's first review what was said:

Mid Q1: Titanium / DeFi pre-release

Late Q1: Chromium / DeFi enabled

Q2: Carbon

Q3: Vanadium

Q4: lridium (iridium)

2023: Futurium

![icp上线一年的数据总结](/img/media/16462161763681/16515691987600.jpg)

Each stage represents some new progress, and includes some infrastructure, such as the dApp example, the Bitcoin integration demo, the II extension, the canister being able to hold ICPs, etc.

The Titanium milestone was reached on 25 February, with Titanium marking the implementation of the basic building blocks of DeFi, such as zero-gas-fee AMM, atomic swaps, and a fully on-chain based DeFi system, on an Internet Computer.

However, DeFi currently only supports the native WICP, ICP and XTC Tokens, and does not really implement a DeFi system, nor does it allow for multiple Token interactions, nor does it allow for liquidity interactions between individual DeFi's. As of now, DeFi is just a showpiece until there is a Token standard and an SNS system!

Next up will be the Chromium Milestone (aka Satoshi version), featuring direct integration of BTC and ICP, and on May 2nd Internet Computer announced that they will be deploying a new subnet specifically to enable Bitcoin integration. The Bitcoin test network will then be synchronised on this subnet. Once it is confirmed that the system is working as expected, the Bitcoin API will be enabled and made publicly available for testing and development. This goal is expected to be completed by the end of May!

The Chromium phase also saw the introduction of custom subnets, container external requests, boundary nodes, development SNS governance and more. May marks the first anniversary of ICP's creation and the release of many underlying services this month, so perhaps this is a new chapter in which ICP can take off a little.

At the same time, the second quarter is also a time of rapid updates to the entire ic, such as support for 50 subnets, extended canister storage, AMD SEV virtual machine support, EVM support, transaction atomicity, from these attributes, found that this is the real DeFi era, so the previous really is a demo. National Day!

Then there is Q3, mainly to achieve and ETH integration, node auction, subnet container migration, border node security, which in Q3 there is a community fund, that is to say the ecological full issue of Token is probably the end of the third quarter.

Q4 will mainly focus on nodes, subnets, security, backups, ETH2 integration, etc. The most relevant to users may be the storage subnets and ETH2 integration, I wonder if this will bring a wave of dividends to ICP, but also to capture the current L2 market.

Then there is 2023 onwards, which will focus on automated subnet creation, management, MPC for canisters, and post-quantum cryptography?

The most important thing here is the creation and management of subnets, and the real decentralized blockchain will only be realized if the NNS can be automatically expanded and the border nodes can be joined by everyone, otherwise it will not be possible to realize its vision of a global computer. Even if the quantum era, I don't know when it will be realized, but the basic applications are still so far behind, so we are fooling around day by day.

From the entire roadmap planning, this year is a very important year, but also to achieve the ecological application of the explosion of the year, of course, in the web3 era, more is to carry the web2 users to web3, then first of all, we must find the user's pain points, of course, what data sovereignty, user sovereignty is considered part of, but is not the immediate need, but also not so convenient services, on metamask In the mobile internet era, people are getting lazy, and it is impossible to wake them up to try it when there is no better service to replace it.

One final thought, in the web3 era, it is still capital that drives what you use, not what you choose. Unless it's a niche group, they can think for themselves and find out what they need, so that's where independent thinking is important.

## 6. What are the reasons to hold an ICP?

From the above data, there doesn't seem to be any reason to hold ICP, or to want to buy ICP, so why are there still many people bullish on ICP or I am bullish on ICP!

First: it is still in an early stage of development, and for a project born at a high point may not even be as good as EOS, but in general a thing can rise we have to see if it can explode twice or many times, so we are betting on its future, someone also said, if you do not have the capital, then you can only bet, if you do not even have the courage to bet, then doomed to a lifetime of mediocrity.

Second: It is suitable for some startup teams to develop because it is low cost and can follow the growth of the public chain itself, and of course it is also suitable for freelance developers or amateur enthusiasts to develop because the technologies used in ICP are relatively cutting edge, such as Rust, wasm, webauthn, chain key, etc.

Thirdly, the team is a big factor in the success of a public chain, ICP is a star public chain with a team of 250+ people, of course there are many scientists and PhD's involved, but some people say they can't find out the real names of everyone, this may require a field trip to their office, I don't know, anyway, from the capital side, Dfinity has raised a total of three rounds of fundraising, raising about Dfinity has raised about $195 million in three rounds of fundraising, with capital from a16z, polychain, SV Angel and others.

At the end of the day, we should keep a long-term view, buy low on assets that we want to hold for the next decade, and continue to invest in startups that I think have the potential to be worth more than $10 billion by pushing the limits.
