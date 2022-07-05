---
id: host-unity-webgl
title: Unity WebGL游戏
sidebar_label: Unity WebGL游戏
---

## 在互联网计算机上托管一个 Unity WebGL 游戏

这个示例项目演示了如何在[Internet Computer](https://github.com/dfinity/ic)上部署一个简单的[Unity](https://unity.com/)WebGL 游戏。该示例代码可在[examples](https://github.com/dfinity/examples/tree/master/hosting/unity-webgl-template)资源库中找到。

## 部署一个 Unity WebGL 构建到 IC 上

让我们创建一个 Unity WebGL 构建，并将其设置为用 dfx 部署。在你开始之前，确保你已经安装了[DFX SDK](https://smartcontracts.org/docs/quickstart/local-quickstart.html#download-and-install)、[Unity](https://unity.com/download)。

### 创建一个 Unity WebGL 构建

- 创建一个新的 Unity 项目，选择 "Universal Render Pipeline "模板。
- 在 "Build Settings "窗口中切换到 "WebGL "构建目标
- 在 "Player Settings "窗口的 "Settings for WebGL "标签下
  - 将 "压缩格式 "暂时设为 "禁用"。
  - 选择 "Minimal "WebGL 模板以减少生成的文件数量。
- 在 "构建设置 "窗口中构建为 WebGL。

### 创建一个 DFX 项目

由于这个例子中没有后台，使用`dfx new project_name`命令来设置模板没有任何好处。`dfx.json`文件是所有需要的。

- 创建一个名为`unity-webgl-sample`的文件夹
- 在`unity-webgl-sample`文件夹下创建一个`dfx.json`。
- 按照[Unity WebGL sample](https://github.com/dfinity/examples/tree/master/hosting/unity-webgl-template)的要求来做
  - 设置`dfx.json`文件
  - 部署你在上一步骤中生成的 Unity WebGL 构建。

### 部署

通过在 DFX 项目的根目录下运行此命令来启动本地网络。

``bash
$ dfx start --background

```

当本地网络启动并运行时，运行这个命令来部署罐子。

``bash
$ dfx deploy
```
