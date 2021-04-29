## Hexo NexT Darkmode

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue?style=flat-square)

Add Dark Mode support for NexT, if NexT version < 8.2.0, Nunjucks renderer plugin required.

## Install

``` bash
npm install hexo-next-darkmode --save
```

### Configure

You can add follow options in **theme** `_config.yml`.

``` yml
# close NexT's darkmode
darkmode: false

# Darkmode JS
# For more information: https://github.com/rqh656418510/hexo-next-darkmode, https://github.com/sandoche/Darkmode.js
darkmode_js:
  enable: true
  bottom: '64px' # default: '32px'
  right: 'unset' # default: '32px'
  left: '32px' # default: 'unset'
  time: '0.5s' # default: '0.3s'
  mixColor: '#fff' # default: '#fff'
  backgroundColor: '#fff'  # default: '#fff'
  buttonColorDark: '#100f2c'  # default: '#100f2c'
  buttonColorLight: '#fff' # default: '#fff'
  saveInCookies: true # default: true
  label: '🌓' # default: ''
  autoMatchOsTheme: true # default: true
  libUrl: # Set custom library cdn url for Darkmode.js
```

## Demo

- https://www.techgrow.cn

![darkmode-demo](https://www.techgrow.cn/gif/2021/04/darkmode.gif)

## Thanks

- [Darkmode.js](https://github.com/sandoche/Darkmode.js)
