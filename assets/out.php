<?php


$wxv = $_GET['wxv'];
$a = file_get_contents("http://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&vid=".$wxv);
$re = json_decode($a, True);
$url = $re['url_info'][0]['url'];
Header("Location:$url");
?>