 
<?php 
$k	= $_GET['key'];


if($k=="0"){
echo "{
\"1\": \"亚洲\",
 \"2\":\"欧洲\",
 \"3\":\"大洋洲\"
}";
}
if($k=="0,1"){
echo "{
\"1\": \"中国\",
 \"2\":\"韩国\"
}";
}
if($k=="0,2"){
echo "{
\"1\": \"德国\",
 \"2\":\"英国\"
}";
}
if($k=="0,3"){
echo "{
\"1\": \"澳大利亚\",
 \"2\":\"新西兰\"
}";
}
if($k=="0,1,1"){
echo "{
\"1\": \"上海\",
 \"2\":\"北京\"
}";
}
if($k=="0,1,2"){
echo "{
\"1\": \"首尔\",
 \"2\":\"釜山\"
}";
}
if($k=="0,2,1"){
echo "{
\"1\": \"柏林\",
 \"2\":\"汉堡\"
}";
}
if($k=="0,2,2"){
echo "{
\"1\": \"伦敦\",
 \"2\":\"曼彻斯特 \"
}";
}
if($k=="0,3,1"){
echo "{
\"1\": \"悉尼\",
 \"2\":\"墨尔本\"
}";
}
if($k=="0,3,2"){
echo "{
\"1\": \"惠灵顿\",
 \"2\":\"奥克兰\"
}";
}
 
?>