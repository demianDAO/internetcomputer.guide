---
title: 如何快速查看小号是否获得GHOST空投
author: kkdemian
author_title: Software Engineer @kkdemian
author_url: https://avatars.githubusercontent.com/u/11025090
author_image_url: https://avatars.githubusercontent.com/u/11025090?s=48&v=4
tags: [dao, nnsdao, NDP, icp, web3, ghost]
---

1. 首先查看一个 token 的分布可以使用 swap 本身的工具和第三方的区块浏览器,这里推荐使用 icscan, 在 swap 中通过查看 token 的 canister,然后使用 icscan 查询当前 canister 的一些方法.

2. 第一步,打开 <https://icscan.io/canister/fjbi2-fyaaa-aaaan-qanjq-cai>

3. 第二步找到 holders 这个方法, 然后点击 query 查询功能,会出现

![ghost](/img/media/0822/ghost.png)

4. 然后点击 json 序列化一下数据, 在复制自己的钱包,通过浏览器 command + F,网页内快速查找复制的钱包地址,如果结果有黄色匹配上,证明你的小号有空投,可以登陆后在 icpswap 直接进行交易.

![ghost](/img/media/0822/icscan-check-ghost.png)
