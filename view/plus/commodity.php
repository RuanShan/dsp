<?php 
$page=$_POST["pages"];
if(1==$page){
	$s='{
		"status":0,
		"message":"",
		"data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"12345",
					"img":"/assets/images/page/goods/u1418.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋11",
					"price":1142.00
				},{
					"id":"12346",
					"img":"/assets/images/page/goods/u1550.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋12",
					"price":1142.00
				},{
					"id":"12347",
					"img":"/assets/images/page/goods/u1418.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋13",
					"price":1142.00
				}
			]
		}
	}';
}else if(2==$page){
	$s='{
		"status":0,
		"message":"",
		"data":{
		  "count":800,
		  "currentPage":2,
		  "totalPage":89,
		  "data":[
				{
					"id":"22345",
					"img":"/assets/images/page/goods/u1418.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋21",
					"price":2242.00
				},{
					"id":"22346",
					"img":"/assets/images/page/goods/u1550.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋22",
					"price":2242.00
				},{
					"id":"22347",
					"img":"/assets/images/page/goods/u1418.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋23",
					"price":2242.00
				}
			]
		}
	}';
}else{
	$s='{
		"status":0,
		"message":"",
		"data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"32345",
					"img":"/assets/images/page/goods/u1418.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋31",
					"price":3342.00
				},{
					"id":"32346",
					"img":"/assets/images/page/goods/u1550.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋32",
					"price":3342.00
				},{
					"id":"32347",
					"img":"/assets/images/page/goods/u1418.png",
					"name":"新疆吐鲁番 葡萄干 甜过初恋33",
					"price":3342.00
				}
			]
		}
	}';
}


echo $s;
?>