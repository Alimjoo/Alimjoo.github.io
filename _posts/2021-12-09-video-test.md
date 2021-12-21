---
title: 网页视频播放器， 支持换字幕(支持维语)， 调整清晰度， 快慢进。。。
author:
  name: Piyazon
  link: https://piyazon.top
date: 2021-12-09 05:32:00 +0800
categories: [Blogging, Video]
tags: [video, test]
---

<video id="player" class="weixin_video" playsinline controls x-webkit-airplay poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/videos/steve.png"
  wxv="wxv_2171681512990048257" src="">
  <!-- Captions are optional -->
  <track kind="captions" label="ئۇيغۇرچە" src="https://piyazon.top/storage/assets/subtitles/ug.vtt" srclang="ug" />
  <track kind="captions" label="English" src="https://piyazon.top/storage/assets/subtitles/en.vtt" srclang="en"
      />
  <track kind="captions" label="汉语" src="https://piyazon.top/storage/assets/subtitles/cn.vtt" srclang="zh-CN" />
</video>
  <script>
    function toHttps(wurl) {
      return (wurl.slice(0, 4) + "s" + wurl.slice(4));
    }
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player").attr("wxv")), function (data) {
      const respon = jQuery.parseJSON(data.contents);
      $("#player").attr("src", respon['url_info'][0]['url']);
    });
  </script>


# 调整字幕

## 打开字幕

1. 首先点击**播放器页面**右下角的 `CC` 符号， 打开字幕。

## 更换字幕

1. 点击**播放器页面**右下角的设置 <span class="fa fa-cog"></span> 符号, 打开设置
2. 然后选择 `Captions` 调到想要的字幕
3. 
  - 维语 ![ug](/jekyll/posts/ug.png)
  - 英语 ![en](/jekyll/posts/en.png)
  - 汉语 ![cn](/jekyll/posts/cn.png)

## 调整清晰度

还是在 设置 <span class="fa fa-cog"></span> 可以更改清晰度。

## 调整快慢

这个可以试着玩一玩

## 悬窗播放

暂时只支持电脑