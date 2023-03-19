# Parcel Watch Electron Demo

How to set up Parcel + Electron in development env.

So that, whenever you change anything in the renderer process, it will hot reload the web page.

What's more, whenever you change the electron main process code, it will restart your electron app.

神奇的是，preload.js 的修改能自动 hot reload，就是页面直接更新，不需要重启 electron app.
