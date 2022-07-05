---
id: hello
title: 你好，世界!
sidebar_label: 你好，世界!
---

这个例子演示了一个由两个合约罐组成的简单的 DAP。

一个简单的后端合约罐，hello，实现应用程序的逻辑，和

一个简单的前端资产合约罐，hello_assets，为 dapp 的 web 用户界面提供资产。

它相当于无处不在的 hello world 的 dapp，可以在 IC 上看到它的运行。

这个例子是基于运行 dfx new 创建的默认项目，如快速入门文档中所述。

示例代码可以从 [Motoko](https://github.com/dfinity/examples/tree/master/motoko/hello) 和 [Rust](https://github.com/dfinity/examples/tree/master/rust/hello) 的样本库中获得。

无论是用 Motoko 还是 Rust 实现的 Canister hello，都呈现出相同的 Candid 界面。

```
service : {
  greet: (text) -> (text);
}
```

前端合约罐，hello_assets，显示一个 HTML 页面，上面有一个参数的文本框和一个按钮，用于用该参数调用函数 greet。调用的结果显示在一个消息框中。

![hello world](https://internetcomputer.org/assets/images/hello-770ba5e911d61719fb4a98e76f404f5c.png)

前端合约罐是由 dfx 提供的通用合约罐，但它提供给浏览器的资产是由 dfx 项目设置和项目文件决定的。

两个项目的前端合约罐和它的资产都是相同的。
