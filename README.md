# Parcel Watch Electron Demo

How to set up Parcel + Electron in development env.

So that, whenever you change anything in the renderer process, it will hot reload the web page.

What's more, whenever you change the electron main process code, it will restart your electron app.

但是，preload 的代码没办法动态更新。 甚至不能用 parcel watch. 只能用 parcel build。
不过好在 preload 的代码都很简单。
