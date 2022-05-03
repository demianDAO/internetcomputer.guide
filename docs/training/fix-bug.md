---
id: fix-bug
title: ICP开发中常见bug解决和指南
sidebar_label: IC开发bug指南
---

## 重新启动本地 Internet 计算机网络

在某些情况下，由于复制状态错误，在本地启动 Internet 计算机网络会失败。如果在运行 dfx start 启动本地 Internet 计算机网络时遇到问题：

在显示网络操作的终端中，按 `Control-C` 可中断本地网络进程。

通过运行以下命令停止 Internet 计算机网络：

`dfx stop`

通过运行以下命令，以干净的状态重新启动 Internet 计算机：

`dfx start --clean`

该--clean 选项会从您的项目缓存中删除检查点和陈旧状态信息，以便您可以在干净的状态下重新启动 Internet 计算机副本和 Web 服务器进程。

但是请记住，如果您通过运行重置状态信息`dfx start --clean`，您现有的容器也会被删除。

运行后`dfx start --clean`，通过运行以下命令重新创建您的容器：

`dfx canister create --all`

`dfx build`

`dfx canister install --all`
