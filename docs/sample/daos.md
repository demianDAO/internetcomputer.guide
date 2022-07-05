---
id: daos
title: 基本的Dao
sidebar_label: 基本的Dao
---

这个示例项目演示了一个基本的 DAO([Decentralized Autonomous Organization](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization))，可以部署到[Internet Computer](https://github.com/dfinity/ic)。基本 DAO 示例代码可以在[Motoko](https://github.com/dfinity/examples/tree/master/motoko/basic_dao)和[Rust](https://github.com/dfinity/examples/tree/master/rust/basic_dao)中找到。你可以在[YouTube](https://youtu.be/3IcYlieA-EE)上看到一个快速介绍。

## 概述

一个 "basic_dao "可以用一组账户进行初始化：从委托人 ID 到代币数量的映射。账户所有者可以通过调用`account_balance`来查询他们的账户余额，并通过调用`transfer`将代币转移到其他账户。任何人都可以调用`list_accounts`来查看所有账户。

账户所有者可以通过调用`submit_proposal`来提交提案。一个提案指定一个罐子，方法和这个方法的参数。账户所有者可以通过调用`vote`对提案进行投票（无论是 "是 "还是 "否"）。投票的数量等于账户所有者拥有的代币数量。如果有足够的 "是 "票，`basic_dao'将通过调用提案的给定方法和给定的 args 来执行提案。如果有足够的 "反对 "票，提案就不会被执行，而是被标记为 "拒绝"。

某些系统参数，比如通过提案所需的 "赞成 "票数，可以通过调用 "get_system_params "进行查询。这些系统参数可以通过提案过程进行修改，也就是说，一个提案可以通过调用`update_system_params`来更新数值。下面的演示正是这样做的。

查看[canister service definition](https://github.com/dfinity/examples/blob/master/rust/basic_dao/src/basic_dao/src/basic_dao.did)了解更多细节。
