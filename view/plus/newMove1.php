<?php
$page=$_POST["mode"];
if(1==$page){
    $result='{
        "status":0,
        "message":"",
        "url":"View\/goods\/new\/tao2.html"
    }';
}else if(2==$page){
    $result='{
        "status":0,
        "message":"",
        "url":"View\/goods\/new\/move2.html"
    }';
}

echo $result;
?>