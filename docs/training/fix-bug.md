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

### 删除容器

如果在成功连接到 IC 并注册容器标识符后构建或部署容器时遇到问题，则应 canisters 在尝试重新构建或重新部署容器之前删除该目录。

canisters 您可以通过在项目的根目录中运行以下命令来删除项目的目录：

rm -rf ./.dfx/_canisters/_

### Xcode

在 macOS 计算机上创建新项目时，某些版本的 SDK 会提示您安装 Xcode。该提示已被删除，该 dfx new 命令不需要您安装任何 macOS 开发人员工具。但是，如果要为项目创建 Git 存储库，则应该安装 Developer Command Line Tools。

你可以通过运行来检查你是否安装了开发者工具 xcode-select -p。您可以通过运行来安装开发者工具 xcode-select --install。

### 使用

如果您在 Ubuntu 或 CentOS 上使用虚拟机映像运行，则在尝试运行命令 dfx 时可能会看到如下所示的错误消息：dfx build

      Building hello...
      An error occurred:
      Io(
          Os {
              code: 2,
              kind: NotFound,
              message: "No such file or directory",
          },
      )

### 地址使用错误或进程被占用

如果您在本地开发项目，您通常会在单独的终端或后台运行本地容器执行环境。如果本地环境进程未正确终止，您可能会看到操作系统错误，指示地址已在使用中，或者无法使用该 dfx stop 命令正常停止进程。

在多种情况下，您可能会遇到此问题。例如，如果您 dfx start 在本地项目目录中运行，然后在没有先停止容器执行环境进程的情况下切换到不同的本地项目目录，您可能会看到此问题。

如果遇到您怀疑的问题或收到地址已在使用中或进程已在后台运行的消息，请执行以下步骤：

如果您使用默认绑定到 localhost，请运行以下命令以查看哪个进程正在侦听 8000 端口：

`lsof -i tcp:8000`
运行以下命令以终止任何孤立进程：

`killall dfx replica`

关闭当前终端并打开一个新的终端窗口。

在新终端中，运行以下命令，以干净状态运行本地容器执行环境：

`dfx start --clean --background`

### 内存

修复内存泄漏是一个持续的过程。如果您遇到任何与内存泄漏相关的错误消息，您应该执行以下操作：

运行 dfx stop 以停止当前正在运行的进程。

卸载 dfx 以防止进一步退化。

重新安装 dfx

运行 dfx start 以重新启动副本进程。

或者，您可以删除该.cache/dfinity 目录并重新安装最新的 dfx 二进制文件。例如：

`rm -rf ~/.cache/dfinity && sh -ci "$(curl -sSL https://smartcontracts.org/install.sh)"`
