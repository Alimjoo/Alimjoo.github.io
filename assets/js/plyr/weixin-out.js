//  Weixin Put Url

$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=' + $("#player").attr("wxv")), function (data) {
    const respon = jQuery.parseJSON(data.contents);
    const chaoqing = respon['url_info'][0]['url'].slice(0, 4) + "s" + respon['url_info'][0]['url'].slice(4);
    const gaoqing = respon['url_info'][1]['url'].slice(0, 4) + "s" + respon['url_info'][1]['url'].slice(4);
    const biaoqing = respon['url_info'][2]['url'].slice(0, 4) + "s" + respon['url_info'][2]['url'].slice(4);
    $("#player").attr("src", chaoqing);
    $(".p1s1").attr("src", chaoqing);
    $(".p1s2").attr("src", gaoqing);
    $(".p1s3").attr("src", biaoqing);
});


// Plyr Video Player 

// <script src="/assets/js/plyr/plyr.js"></script>

const player = new Plyr("#player", {
    fullscreen: { enabled: true, fallback: true, iosNative: true, container: null },
    captions: { active: true, language: 'auto', update: false },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5] },
    quality: { default: 1080, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }
});