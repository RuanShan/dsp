 <?php 
 $page=$_REQUEST["page"];
 if(1==$page){
    $result='{
        "status":0,
        "message":"",
        "data":[ {
            "name":"今日",
            "xdate":[1384099200,1384106400,1384113600,1384120800,1384128000,1384135200,1384142400,1384149600,1384156800],
            "data":[11, 11, 15, 13, 12, 13, 10,12]
           
        },{
            "name":"昨日",
            "xdate":[1384099200,1384106400,1384113600,1384120800,1384128000,1384135200,1384142400,1384149600,1384156800],
            "data":[1, 21, 5, 3, 2, 3, 0,3,6]
           
        }]
    }';
 }else if(2==$page){
    $result='{
        "status":0,
        "message":"",
        "data":[{
            "name":"05-26至06-23",
            "xdate":[1355932800,1356019200,1356105600,1356192000,1356278400,1356364800,1356451200],
            "data":[1100, 6111, 1225, 1333, 1672, 1358, 1240]
        }]
    }';
 }else if(3==$page){
    $result='{
        "status":0,
        "message":"",
        "data":[ {
            "name":"05-26至06-23",
            "xdate":[1355932800,1356019200,1356105600,1356192000,1356278400,1356364800,1356451200],
            "data":[1100, 6111, 1225, 1333, 1672, 1358, 1240]
        },{
            "name":"04-26至05-23",
            "xdate":[1355932800,1356019200,1356105600,1356192000,1356278400,1356364800,1356451200],
            "data":[1222, 2122, 5555, 3211, 2213, 3678, 1230]
        }]
    }';
 }else if(4==$page){
    $result='{
        "status":0,
        "message":"",
        "min":0,
        "max":3000,
        "data":[
            {
                "name": "分销员地域分布",
                "data":[
                    {"name": "北京","value": 1000},
                    {"name": "天津","value": 1200},
                    {"name": "上海","value": 2000},
                    {"name": "重庆","value": 1030},
                    {"name": "河北","value": 1010},
                    {"name": "河南","value": 1200},
                    {"name": "云南","value": 3000},
                    {"name": "辽宁","value": 1200},
                    {"name": "黑龙江","value": 800},
                    {"name": "湖南","value": 700},
                    {"name": "安徽","value": 500},
                    {"name": "山东","value": 500},
                    {"name": "新疆","value": 300},
                    {"name": "江苏","value": 100},
                    {"name": "浙江","value": 30},
                    {"name": "江西","value": 300},
                    {"name": "湖北","value": 50},
                    {"name": "广西","value": 50},
                    {"name": "甘肃","value": 600},
                    {"name": "山西","value": 200},
                    {"name": "内蒙古","value": 100},
                    {"name": "陕西","value": 130},
                    {"name": "吉林","value": 130},
                    {"name": "福建","value": 160},
                    {"name": "贵州","value": 10},
                    {"name": "广东","value": 200},
                    {"name": "青海","value": 300},
                    {"name": "西藏","value": 100},
                    {"name": "四川","value": 250},
                    {"name": "宁夏","value": 330},
                    {"name": "海南","value": 500},
                    {"name": "台湾","value": 440},
                    {"name": "香港","value": 660},
                    {"name": "澳门","value": 0}
                ]
            }
        ]
    }';
 }else if(5==$page){
    $result='{
        "status":0,
        "message":"",
        "data":[{
            "name":"净收入",
            "xdate":[1355932800,1356019200,1356105600,1356192000,1356278400,1356364800,1356451200],
            "data":[1222, 2122, 5555, 3211, 2213, 3678, 1230]
        },{
            "name":"分佣金额",
            "xdate":[1355932800,1356019200,1356105600,1356192000,1356278400,1356364800,1356451200],
            "data":[1100, 6111, 1225, 1333, 1672, 1358, 1240]
        }]
    }';
 }
 
echo $result;
?>