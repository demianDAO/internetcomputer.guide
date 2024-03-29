---
id: web-speed
title: 网络速度
sidebar_label: 网络速度
---

**网络速度**

用户可以在互联网计算机（IC）上与 dApp 互动，其速度与传统网络应用无异。因此，开发者可以建立更广泛的完全在链上的 dApp，而不需要依赖云服务和承担单点故障的风险。具体来说，查询（读）调用在 200 毫秒内得到响应，而更新（写）调用在 2 秒内得到响应。

### 读与写的调用

计算机科学和数据库的一个常见做法是将任务分为读任务和写任务。由于前者在时间上不那么 "昂贵"，对调用类型进行分类可以大大有助于提高程序的效率。由于区块链部分地充当了分布式数据库，在这种情况下，考虑这种任务的分离也是有用的。按照这种思路，互联网计算机促进了两种类型的交易，查询调用（query）和更新（call）调用。

从区块链的角度来看，性能测试显示，查询调用（读）的 IC 延迟为 200 毫秒，更新调用（写）的延迟为 2 秒。截至 2021 年 12 月 1 日，互联网计算机可以处理每秒 25 万次查询和每秒 11500 次更新调用。

### 链式钥匙加密法

使用区块链或去中心化协议的主要优势是取消了中央信任点。这一优势是要付出代价的；信任没有被移除，它是去中心化的，这意味着多个人（或机器或节点）需要在某个时间点上就 "共识"达成一致。为了让多人/节点达成一致，他们各自签署自己版本的真相，并各自验证所有其他人的签名。在大多数区块链协议中，这是效率低下的主要原因，因为验证许多个人签名会很慢。IC 的关键创新之一是引入了链式密钥（CK）加密技术，这使得 IC 的签名可以用单一的公钥进行验证，从而减少了所有类型的设备（节点机、笔记本电脑、手机）的阻力，这些设备希望与区块链进行有效的互动，具有与 web2 相同的速度和安全性，但没有相对集中化。

### 可扩展性

CK 密码学和互联网计算机的另一个优势在于架构设计。为了达到网络速度(TPS)，IC 需要处理越来越多的交易。这就要求网络能够快速扩展，以处理所有这些交易。CK 密码学也有利于节点的建设、追赶，以及在硬件故障时的恢复，这些都使 IC 能够无限地扩展。去中心化的无限可能性。
