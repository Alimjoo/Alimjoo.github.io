---
title: ئابدۇكېرەم ئابلىزنىڭ ئىتوتلىرى
author:
name: Piyazon
link: https://piyazon.top
date: 2020-03-27 22:32:00 +0800
categories: [Blogging, Video]
tags: [video]
---

<style>
  @import url(/assets/css/uyghur.css);
</style>

# قېرىنداشلار ياخشىمۇسىلەر



بۇگۈن يەنى 3-ئاينىڭ 27-كۈنى، سەنئەتكار ئۇستاز ئابدۇكىرەم ئابلىزنىڭ تۇغۇلغان كۈنى، ئاۋۋال ئادۇكىرىمكامنىڭ تۇغۇلغان كۈنىنى
تەبرىكلەيمەن:

تۇغۇلغان كۈنىڭىزگە مۇبارەك بولسۇن، خۇشاللىق ۋە ساغلاملىق مەڭگۈ سىزگە يار بولسۇن ، كەسىپ ۋە خىزمەت ئىشلىرىڭىز چوڭ
ئۇتۇقلارغا تولسۇن، بىز سىزنى ھەرۋاقىت قوللايمىز ھەم ياخشى كۆرىمىز!



ھەممىمىزنىڭ ئىسىدە بار، بۇرۇن يېڭى يىللاردا، ھىيىت ئايەملەردە، ئابدۇكىرەم ئابلىزنىڭ ئىتوت ۋە كۈلكە-چاقچاقلىرى بىزگە
ھەمرا بولۇپ كەلگەن، ئەمما يېقىنكى يىللاردىن بۇيان، ئابدۇكىرىمكام جەنۇبى شىنجاڭدا كىنو ئىشلەش قاتارلىق ئىشلار بىلەن،
ئىتوت كىچىلىكى ئېلىپ بارالمىدى. بۈگۈن مۇشۇ ۋەجىدىن مەن سىلەرگە ئابدۇكىرەم ئابلىزنىڭ «ھەۋەسكار» دىگەن ئىتوتلىرىنى
ھەمبەھىرلەنمەكچى، ھۇزۇرلانغايسىلە!(ۋىدىيولارنىڭ سۈزۈكلۈك دەرىجىسى ئانچە بەلەن بومماي قالدى، ئەيىپكە بۇيرۇمىغايسىلە).


<!-- 1 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ ھەۋىسى
</h2>
<video id="player1" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0.jpg" wxv="wxv_1267622315538481152"
  src="">
  <source src="" type="video/mp4" class="p1s2" size="720" />
  <source src="" type="video/mp4" class="p1s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player1").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const gaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    const biaoqing = respon['url_info'][1]['url'].slice(0, 4) + "s" + respon['url_info'][1]['url'].slice(4);
    $("#player1").attr("src", gaoqing);
    $(".p1s2").attr("src", gaoqing);
    $(".p1s3").attr("src", biaoqing);
  });
</script>
<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player1 = new Plyr("#player1", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>


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






<!-- 3 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ كىينكى ھەۋىسى
</h2>
<video id="player3" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0-2.jpg"
  wxv="wxv_1267649982241406976" src="">
  <source src="" type="video/mp4" class="p3s1" size="1080" />
  <source src="" type="video/mp4" class="p3s2" size="720" />
  <source src="" type="video/mp4" class="p3s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player3").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const chaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    const gaoqing = respon['url_info'][1]['url'].slice(0, 4) + "s" + respon['url_info'][1]['url'].slice(4);
    const biaoqing = respon['url_info'][2]['url'].slice(0, 4) + "s" + respon['url_info'][2]['url'].slice(4);
    $("#player3").attr("src", chaoqing);
    $(".p3s1").attr("src", chaoqing);
    $(".p3s2").attr("src", gaoqing);
    $(".p3s3").attr("src", biaoqing);
  });
</script>
<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player3 = new Plyr("#player3", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>



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



<!-- 6 -->
<h2 class="sub-title">
  ھەۋەسكارنىڭ ھەسرىتى 1
</h2>
<video id="player6" playsinline controls
  data-poster="https://git.lug.ustc.edu.cn/flame3/images/-/raw/main/old-salon/abdu/0-5.jpg"
  wxv="wxv_1267660769001439232" src="">
  <source src="" type="video/mp4" class="p6s3" size="480" />
</video>
<script>
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player6").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const biaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    $("#player6").attr("src", biaoqing);
    $(".p6s3").attr("src", biaoqing);
  });
</script>
<!-- Plyr Video Player -->
<script src="/assets/js/plyr/plyr.js"></script>
<script>
  const player6 = new Plyr("#player6", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
  });
</script>



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
