﻿ 
<?php 
$key	= $_GET['key'];
$ids	= explode(',' , $key);
$id		= array_pop($ids);

if($id=="0"){
echo "{
\"1\": \"刮刮卡\",
 \"2\":\"大转盘\"
}";
}
if($id=="1"){
echo "{
\"111\": \"刮刮卡1\",
 \"222\":\"刮刮卡3\"
}";
}
if($id=="2"){
echo "{
\"333\": \"大转盘2\",
 \"444\":\"大转盘9\"
}";
}
if($id=="333"){
echo "{
\"777\": \"大转盘2\",
 \"888\":\"大转盘9\"
}";
}
if($id=="777"){
echo "{
\"899\": \"大转盘2\",
 \"999\":\"大转盘9\"
}";
}
if($id=="899"){
echo "{
\"8199\": \"大转盘2\",
 \"9199\":\"大转盘9\"
}";
}
 
?>