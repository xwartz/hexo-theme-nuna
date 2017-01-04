# hexo-theme-nuna


![nuna](http://ww4.sinaimg.cn/large/7853084cgw1f7wicln8z1j21kw0vete0.jpg)

## 预览

在线访问 <https://xwartz.github.com/blog>

![qrcode](http://ww2.sinaimg.cn/large/7853084cgw1f7whn1tirsj20am0amwfd.jpg)

## 安装

```bash
npm install
```

各种依赖参考 [Blog](https://github.com/xwartz/blog)

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
