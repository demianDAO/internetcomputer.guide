---
id: token-transfer
title: 代币转移示例代码
sidebar_label: 代币转移示例代码
---

Tokens Transfer 是一个可以将代币从其账户转移到其他账户的合约罐子。它是一个使用 Ledger 合约罐子的合约罐子的例子。在[Motoko](https://github.com/dfinity/examples/tree/master/motoko/ledger-transfer)和[Rust](https://github.com/dfinity/examples/tree/master/rust/tokens_transfer)中提供了示例代码。

该示例代码围绕着一个核心转移函数，该函数接受要转移的代币数量、要转移代币的账户（以及可选的子账户）作为输入，并返回成功或错误（例如，代币转移合约罐没有足够的代币来进行转移）。在成功的情况下，将返回交易的唯一标识符。这个标识符将被存储在账本的交易备忘录中。
