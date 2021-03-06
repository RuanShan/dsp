<?php 
$type=$_REQUEST["type"];
if("1"==$type){
	$s='{
		"status":0,
		"message":"",
        "title": "登录账号类型",
		"result":[{
        	"name": "登录账号类型",
            "data": [
                ["手机号", 1],
                ["微信",    59],
                ["QQ",   20],
                ["微博", 20]
            ]
        }]
	}';
}else if("2"==$type){
	$s='{
		"status":0,
		"message":"",
		"title": "用户活跃",
		"result":[{
            "name": "活跃量",
            "color": "#4572A7",
            "type": "column",
            "data": [[
                1383494400000,
                12
            ],
            [
                1383580800000,
                45
            ],
            [
                1383667200000,
                123
            ],
            [
                1383753600000,
                567
            ],
            [
                1383840000000,
                876
            ],
            [
                1383926400000,
                900
            ],
            [
                1384012800000,
                1024
            ],
            [
                1384099200000,
                2509
            ],
            [
                1384185600000,
                1845
            ],
            [
                1384272000000,
                1146
            ],
            [
                1384358400000,
                156
            ]],
            "tooltip": {
                "valueSuffix": ""
            }

        }, {
            "name": "活跃率",
            "color":"#89A54E",
            "type": "spline",

            "yAxis": 1,
            "data": [[
                1383494400000,
                1
            ],
            [
                1383580800000,
                2
            ],
            [
                1383667200000,
                3
            ],
            [
                1383753600000,
                4
            ],
            [
                1383840000000,
                5
            ],
            [
                1383926400000,
                18
            ],
            [
                1384012800000,
                12
            ],
            [
                1384099200000,
                16
            ],
            [
                1384185600000,
                17
            ],
            [
                1384272000000,
                12
            ],
            [
                1384358400000,
                22
            ]],
            "tooltip": {
                "valueSuffix": "%"
            }
        }]
	}';
}else if("3"==$type){
	$s='{
		"status":0,
		"message":"",
		"title":"人群绑定项",
		"result":[{
			"name":"人群绑定项",
			"unit":"%",
			"data":[{
				"name":"微博",
				"y":20
			},{
				"name":"QQ",
				"y":20
			},{
				"name":"微信",
				"y":15
			},{
				"name":"绑定银行卡",
				"y":45
			},{
				"name":"绑定身份证",
				"y":5
			}]
		}] 
	}';
}else if("4"==$type){
	$s='{
		"status":0,
		"message":"",
		"title":"会员浏览品类偏好",
		"result":[{
	        "name": "会员浏览品类偏好",
	        "data": [["品牌1",43000], ["品牌2",190], ["品牌3",60000], ["品牌4",35000], ["品牌5",17000], ["品牌6",100000]]
	    }]
	}';
}else if("5"==$type){
	$s='{
		"status":0,
		"message":"",
		"title":"激活用户占比",
		"unit":"%",
		"result":[ {
            "name": "未激活用户",
            "data": [["总体",10], ["最近七天",13]]
        },{
            "name": "已激活用户",
            "data": [["总体",25], ["最近七天",23]]
        }]
	}';
}else if("6"==$type){
	$s='{
		"status":0,
		"message":"",
		"title":"最近30天消费额",
		"result":[{
			"name":"最近30天消费额",
			"unit":"",
			"data":[{
				"name":"0",
				"y":2000
			},{
				"name":"1-100",
				"y":2000
			},{
				"name":"101-200",
				"y":1500
			},{
				"name":"201-500",
				"y":4500
			},{
				"name":"501-1000",
				"y":5000
			},{
				"name":"1001+",
				"y":9000
			}]
		}] 
	}';
}else if("7"==$type){
	$s='{
		"status":0,
		"message":"",
		"title":"最近30天消费每单均价",
		"result":[{
			"name":"最近30天消费每单均价",
			"unit":"",
			"data":[{
				"name":"0",
				"y":2000
			},{
				"name":"1-100",
				"y":2000
			},{
				"name":"101-200",
				"y":1500
			},{
				"name":"201-500",
				"y":4500
			},{
				"name":"501-1000",
				"y":5000
			},{
				"name":"1001+",
				"y":9000
			}]
		}] 
	}';
}else if("8"==$type){
	$s='{
		"status":0,
		"message":"",
        "title": "代销分析",
		"result":[{
        	"name": "代销分析",
            "data": [
                ["无代销", 59],
                ["有代销",    41]
            ]
        }]
	}';
}else if("9"==$type){
	$s='{
		"status":0,
		"message":"",
		"title":"有代销金额分析（占全部有代销行为人数的5%）",
		"result":[{
			"name":"有代销金额分析",
			"unit":"%",
			"data":[{
				"name":"0",
				"y":5
			},{
				"name":"1-100",
				"y":5
			},{
				"name":"101-200",
				"y":15
			},{
				"name":"201-500",
				"y":20
			},{
				"name":"501-1000",
				"y":10
			},{
				"name":"1001-2000",
				"y":30
			},{
				"name":"2001+",
				"y":10
			}]
		}] 
	}';
}


echo $s;
?>