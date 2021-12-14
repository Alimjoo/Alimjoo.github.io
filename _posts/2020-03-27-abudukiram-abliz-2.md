---
title: ئابدۇكېرەم ئابلىزنىڭ ئىتوتلىرى | ھەۋەسكارنىڭ يېڭى ھەۋىسى
author:
  name: Piyazon
  link: https://piyazon.top
date: 2020-03-27 22:32:00 +0800
categories: [Blogging, Video]
tags: [video, ئىتوت]
---

<style>
  @import url(/assets/css/uyghur.css);
</style>


<!-- 2 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ يېڭى ھەۋىسى
</h2>
<video id="player2" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0-1.jpg"
  wxv="wxv_1267648243316523009" src="">
  <source src="" type="video/mp4" class="p2s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player2").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const biaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    $("#player2").attr("src", biaoqing);
    $(".p2s3").attr("src", biaoqing);
  });
</script>
<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player2 = new Plyr("#player2", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>

