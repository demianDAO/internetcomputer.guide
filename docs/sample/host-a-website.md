---
id: host-a-website
title: 在互联网计算机上托管一个静态网站
sidebar_label: 托管一个静态网站
---

在你开始之前，请确保你已经用我们的 SDK(DFX)和一个 Cycles 钱包进行了设置，可以从[Faucet Quickstart](https://beta.smartcontracts.org/docs/current/developer-docs/quickstart/cycles-faucet)或者通过购买 ICP 并按照我们的[网络部署](https://beta.smartcontracts.org/docs/current/developer-docs/quickstart/network-quickstart)指南进行设置。

## 设置你的项目

让我们创建一个简单的静态网站，然后将其设置为用 dfx 进行部署。

1. 创建一个名为 static-ic-website 的文件夹

2. 在 static-ic-website 中，创建一个新的文件夹，名为 assets。

3. 在 assets 文件夹中，创建 4 个文件

   - index.html

   - page-2.html

   - script.js

   - style.css

## 添加一些内容

让我们从 index.html 开始。将以下代码粘贴到你的文件中。

**index.html**

    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>StaticICWebsite</title>
       <link rel="stylesheet" href="style.css">
    </head>
    <body>
       <h1>My FirstICWebsite</h1>
       <p>Styles are loaded from a stylesheet</p>
       <p id="dynamic-content"></p>
       <a href="page-2.html">Page 2</a>
       <script src="script.js"></script>
    </body>
    </html>

接下来，打开 page-2.html，添加这个内容。

**page-2.html**

    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Page 2</title>
       <link rel="stylesheet" href="style.css">
    </head>
    <body>
       <h1>This is page 2</h1>
       <a href="/">Back to index</a>
    </body>
    </html>

然后，在 script.js 中添加一些简单的逻辑。

**script.js**

    document.querySelector("#dynamic-content").innerText =
     "This paragraph is dynamically rendered using JavaScript";

然后在 style.css 中添加一些样式。

**style.css**

    body {
       font-family: sans-serif;
       font-size: 1.5rem;
    }

    p:first-of-type {
       color: #ED1E79;
    }

## 配置 DFX 进行部署

为了在 IC 上承载和运行这个网站，你需要配置 DFX 将你的文件上传到认证的资产罐中。在你项目的根目录下，static-ic-website，创建一个新的文件，dfx.json。然后，添加以下内容。

**dfx.json**

    {
       "canisters": {
           "website": {
               "type": "assets",
               "source": ["assets"]
           }
       }
    }

这告诉 DFX，你想创建一个资产罐，它应该上传资产文件夹的内容。如果你想上传额外的静态资产，你可以把它们添加到 asset 文件夹中，或者在源配置中添加额外的文件夹。

现在，你的目录应该看起来像这样:

    ├──assets
    │ ├── index.html
    │ ├── Page-2.html
    │ ├── script.js
    │ └── style.css
    └── dfx.json

## 部署你的网站

要部署你的网站，请确保你在项目根目录下的终端，并运行这个命令。

    dfx deploy --network ic

你应该在控制台中看到一些输出，以及一个类似这样的成功信息。

    ...

    Uploading assets to asset canister...
    Starting batch.
    Staging contents of new and changed assets:
      /index.html 1/1 (501 bytes)
      /index.html (gzip) 1/1 (317 bytes)
      /page-2.html 1/1 (373 bytes)
      /page-2.html (gzip) 1/1 (258 bytes)
      /script.js 1/1 (117 bytes)
      /style.css 1/1 (102 bytes)
    Committing batch.
    Deployed canisters.

## 查看你的实时网站

通过运行以下程序找到你的新合约罐的 ID

    dfx canister --networkicid website

带着这个合约罐的 ID，访问 https://&lt;canister-id&gt;.ic0.app，在 URL 中插入你自己的合约罐 ID 作为子域。

你应该看到你的实时多页面网站，看起来像这样

![静态网站](https://internetcomputer.org/assets/images/static-website-7be61363c823a7ff259822220158deda.png)
