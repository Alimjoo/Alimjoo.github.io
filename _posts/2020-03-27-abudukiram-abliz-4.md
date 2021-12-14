---
title: ئابدۇكېرەم ئابلىزنىڭ ئىتوتلىرى | ھەۋەسكارنىڭ يەنە بىر ھەۋىسى
author:
    name: Piyazon
    link: https://piyazon.top
date: 2020-03-27 22:34:00 +0800
categories: [Blogging, Video]
tags: [video, ئىتوت, ئۇيغۇرچە]
---

<style>
  @import url(/assets/css/uyghur.css);
</style>



<!-- 4 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ يەنە بىر ھەۋىسى
</h2>
<video id="player4" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0-3.jpg"
  wxv="wxv_1267655505183473665" src="">
  <source src="" type="video/mp4" class="p4s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player4").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const biaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    $("#player4").attr("src", biaoqing);
    $(".p4s3").attr("src", biaoqing);
  });
</script>
<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player4 = new Plyr("#player4", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>
