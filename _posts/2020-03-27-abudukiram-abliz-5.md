---
title: ئابدۇكېرەم ئابلىزنىڭ ئىتوتلىرى | ھەۋەسكارنىڭ ھازىسى
author:
    name: Piyazon
    link: https://piyazon.top
date: 2020-03-27 22:35:00 +0800
categories: [Blogging, Video]
tags: [video, ئىتوت, ئۇيغۇرچە]
---

<style>
  @import url(/assets/css/uyghur.css);
</style>



<!-- 5 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ ھازىسى
</h2>
<video id="player5" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0-4.jpg"
  wxv="wxv_1267658653109288961" src="">
  <source src="" type="video/mp4" class="p5s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player5").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const biaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    $("#player5").attr("src", biaoqing);
    $(".p5s3").attr("src", biaoqing);
  });
</script>
<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player5 = new Plyr("#player5", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>
