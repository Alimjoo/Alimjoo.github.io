---
title: ئابدۇكېرەم ئابلىزنىڭ ئىتوتلىرى | ھەۋەسكارنىڭ ھەسرىتى 2
author:
    name: Piyazon
    link: https://piyazon.top
date: 2020-03-27 22:37:00 +0800
categories: [Blogging, Video]
tags: [video, ئىتوت, ئۇيغۇرچە]
---

<style>
  @import url(/assets/css/uyghur.css);
</style>





<!-- 7 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ ھەسرىتى 2
</h2>
<video id="player7" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0-6.jpg"
  wxv="wxv_1270444608039911424" src="">
  <source src="" type="video/mp4" class="p7s2" size="720" />
  <source src="" type="video/mp4" class="p7s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player7").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const gaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    const biaoqing = respon['url_info'][1]['url'].slice(0, 4) + "s" + respon['url_info'][1]['url'].slice(4);
    $("#player7").attr("src", gaoqing);
    $(".p7s2").attr("src", gaoqing);
    $(".p7s3").attr("src", biaoqing);
  });
</script>

<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player7 = new Plyr("#player7", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>
