
## Hexo NexT Darkmode

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue?style=flat-square)
[![lic-image]](LICENSE)

适用于 NexT 主题的暗黑/夜间模式切换插件。

---

[English](https://github.com/rqh656418510/hexo-next-darkmode/blob/main/README.md) | 中文

## 安装

![size-image]
[![dm-image]][npm-url]
[![dt-image]][npm-url]

``` bash
npm install hexo-next-darkmode --save
```

## 配置

首先确保 NexT 主题原生的 `darkmode` 选项设置为 `false`：

``` yml
# Close NexT's darkmode
darkmode: false
```

往 NexT 主题的 `_config.yml` 配置文件里添加以下内容：

``` yml
# Darkmode JS
# For more information: https://github.com/rqh656418510/hexo-next-darkmode, https://github.com/sandoche/Darkmode.js
darkmode_js:
  enable: true
  bottom: '64px' # default: '32px'
  right: 'unset' # default: '32px'
  left: '32px' # default: 'unset'
  time: '0.5s' # default: '0.3s'
  mixColor: 'transparent' # default: '#fff'
  backgroundColor: 'transparent' # default: '#fff'
  buttonColorDark: '#100f2c' # default: '#100f2c'
  buttonColorLight: '#fff' # default: '#fff'
  isActivated: false # default false
  saveInCookies: true # default: true
  label: '🌓' # default: ''
  autoMatchOsTheme: true # default: true
  libUrl: # Set custom library cdn url for Darkmode.js
```

- `isActivated: true`：默认激活暗黑/夜间模式，请始终与 `saveInCookies: false`、`autoMatchOsTheme: false` 一起使用；同时需要在 NexT 主题的 `_config.yml` 配置文件里设置 `pjax: true`，即启用 Pjax。

## 自定义样式

暗黑/夜间模式激活后，插件会将 `darkmode--activated` CSS 类添加到 `body` 标签上，你可以利用它覆盖插件默认自带的样式（如下所示），这样就可以实现暗黑/夜间模式 CSS 样式的高度自定义。

``` css
.darkmode--activated {
  --body-bg-color: #282828;
  --content-bg-color: #333;
  --card-bg-color: #555;
  --text-color: #ccc;
  --blockquote-color: #bbb;
  --link-color: #ccc;
  --link-hover-color: #eee;
  --brand-color: #ddd;
  --brand-hover-color: #ddd;
  --table-row-odd-bg-color: #282828;
  --table-row-hover-bg-color: #363636;
  --menu-item-bg-color: #555;
  --btn-default-bg: #222;
  --btn-default-color: #ccc;
  --btn-default-border-color: #555;
  --btn-default-hover-bg: #666;
  --btn-default-hover-color: #ccc;
  --btn-default-hover-border-color: #666;
  --highlight-background: #282b2e;
  --highlight-foreground: #a9b7c6;
  --highlight-gutter-background: #34393d;
  --highlight-gutter-foreground: #9ca9b6;
}

.darkmode--activated img {
  opacity: 0.75;
}

.darkmode--activated img:hover {
  opacity: 0.9;
}

.darkmode--activated code {
  color: #69dbdc;
  background: transparent;
}
```

## 取消暗黑模式

- 当某个标签不想使用暗黑/夜间模式时，可以添加 `darkmode-ignore` CSS 类到标签上。

``` html
<span class="darkmode-ignore">😬<span>
```

- 当然你也可以使用 `isolation: isolate;` CSS 样式来忽略暗黑/夜间模式。

``` css
.button {
  isolation: isolate;
}
```

- 也可以使用这种 `mix-blend-mode: difference` CSS 样式来还原暗黑/夜间模式。

``` css
.button {
  mix-blend-mode: difference;
}
```

## 博客教程

- [NexT 如何添加暗黑模式](https://www.techgrow.cn/posts/abf4aee1.html)

## 演示效果

- https://www.techgrow.cn

![darkmode-demo](https://www.techgrow.cn/gif/2021/04/darkmode.gif)

## 鸣谢

- [Darkmode.js](https://github.com/sandoche/Darkmode.js)

[npm-url]: https://www.npmjs.com/package/hexo-next-darkmode
[lic-image]: https://img.shields.io/npm/l/hexo-next-darkmode?style=flat-square
[dm-image]: https://img.shields.io/npm/dm/hexo-next-darkmode?style=flat-square
[dt-image]: https://img.shields.io/npm/dt/hexo-next-darkmode?style=flat-square
[size-image]: https://img.shields.io/github/languages/code-size/rqh656418510/hexo-next-darkmode?style=flat-square