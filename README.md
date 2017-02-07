# hexo-theme-nuna [![Build Status](https://travis-ci.org/xwartz/hexo-theme-nuna.svg?branch=master)](https://travis-ci.org/xwartz/hexo-theme-nuna)

![nuna](http://ww4.sinaimg.cn/large/7853084cgw1f7wicln8z1j21kw0vete0.jpg)

## 预览

在线访问 <https://xwartz.github.com/blog>

![qrcode](http://ww2.sinaimg.cn/large/7853084cgw1f7whn1tirsj20am0amwfd.jpg)

## 安装

在博客目录安装以下模块，可参考 [Blog](https://github.com/xwartz/blog/blob/master/package.json#L13)

```json
"dependencies": {
    "hexo": "^3.2.0",
    "hexo-browsersync": "^0.2.0",
    "hexo-deployer-git": "^0.2.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-feed": "^1.1.0",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-sitemap": "^1.1.2",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.2.0",
    "hexo-renderer-jade": "^0.3.0",
    "hexo-renderer-marked": "^0.2.11",
    "hexo-renderer-stylus": "^0.3.0",
    "hexo-server": "^0.2.0",
    "hexo-wordcount": "1.2.3"
}
```

```bash
npm install
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `nuna`:

```yaml
theme: nuna
```

## 主题参数

```yml
# 首页文章默认封面
thumbs: [/thumb/thumb-0.png,
        /thumb/thumb-1.png,
        /thumb/thumb-2.png,
        /thumb/thumb-3.png,
        /thumb/thumb-4.png,
        /thumb/thumb-5.png,
        /thumb/thumb-6.png,
        /thumb/thumb-7.png,
        /thumb/thumb-8.png,
        /thumb/thumb-9.png]

# 评论支持 disqus、多说
# disqus: xwartz
duoshuo: xwartz

# 统计支持 谷歌、百度、qq
# google-analytics:
ga: UA-69822347-1
# baidu-analytics:
ba: //hm.baidu.com/hm.js?b9e5254ddb0a9c4c4cd158df0d05a54c
# qq mta
qq:
    sid: 500303098
    cid: 500303108
```


## 内容显示

### 文章

* 新建文章：`hexo new post 'hello-world'`

* 自定义图片

```markdown
<!-- 首页封面图 -->
thumb: http://ww3.sinaimg.cn/large/7853084cgw1f7vttm4rr9j20dm0amt9i.jpg
<!-- 文章大图 -->
cover: http://ww3.sinaimg.cn/large/7853084cgw1f7vueqesr5j21jk0uh446.jpg
```

* 显示文章简介

```markdown
<!-- Excerpt in index -->
description: hello world
+ <!-- more -->
<!-- The rest of contents -->
```

### 个人页

* 新建个人页：`hexo new page 'about'`

* 自定义图片

```markdown
<!-- 文章大图 -->
cover: http://ww3.sinaimg.cn/large/7853084cgw1f7vueqesr5j21jk0uh446.jpg
```

* 显示简介

```markdown
<!-- Excerpt in index -->
+ <!-- more -->
<!-- The rest of contents -->
```

### 相册

* 新建相册：`hexo new photo 'photo'`

* 编辑图片

```markdown

<!-- 
![](http://ww3.sinaimg.cn/large/7853084cgw1f7vueqesr5j21jk0uh446.jpg)
![](http://ww3.sinaimg.cn/large/7853084cgw1f7vueqesr5j21jk0uh446.jpg)
![](http://ww3.sinaimg.cn/large/7853084cgw1f7vueqesr5j21jk0uh446.jpg)
![](http://ww3.sinaimg.cn/large/7853084cgw1f7vueqesr5j21jk0uh446.jpg) 
-->

```

## 更新

``` bash
cd themes/nuna
git pull
```

## 贡献

欢迎提交 [pr](https://github.com/xwartz/hexo-theme-nuna/pulls)

## 更新日志

[./CHANGELOG.md](CHANGELOG.md)


## License

MIT
