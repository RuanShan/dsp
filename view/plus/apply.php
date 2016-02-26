<?php 
$step=$_REQUEST["step"];
if(1==$step){
	$arr = array("status"=>0,"message"=>"","url"=>"View/activity/apply_goods.html");
}else if(2==$step){
	$arr = array("status"=>0,"message"=>"","url"=>"View/activity/set_info.html");
}else if(3==$step){
	$arr = array("status"=>0,"message"=>"创建活动成功","url"=>"View/activity/activity_tips.html");
}else if("sign"==$step){
	$arr = array("status"=>0,"message"=>"申请报名","url"=>"View/activity/set_info.html");
}else if("complete"==$step){
	$arr = array("status"=>0,"message"=>"报名提交成功","url"=>null,"callback"=>"window.applyComplete('您的商品已成功报名，我们将尽快进行审核。')");
}else if("add"==$step){
	$type=$_POST["type"];
	if($type==1){
		$arr = array("status"=>0,"message"=>"创建秒杀活动","url"=>"/View/activitycenter/department_ed_addsub.html");
	}else if($type==2){
		$arr = array("status"=>0,"message"=>"创建综合专场","url"=>"/View/activitycenter/synthesize_special_ed.html");
	}else if($type==3){
		$arr = array("status"=>0,"message"=>"创建单品牌专场","url"=>"/View/activitycenter/brand_special_ed.html");
	}else if($type==4){
		$arr = array("status"=>0,"message"=>"高佣金","url"=>"/View/activitycenter/gaoyongjin.html");
	}else if($type==5){
		$arr = array("status"=>0,"message"=>"创建内容专场","url"=>"/View/activitycenter/content_special_ed.html");
	}
}
echo json_encode($arr);
?>