/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/echarts/init",["$","echarts"],function(a){"use strict";var b=a("$");a("echarts");var c=function(a){var b=new Date(a),c=(new Date,{year:b.getFullYear(),month:b.getMonth()+1,date:b.getDate(),day:b.getDay(),hours:b.getHours()>=10?b.getHours():"0"+b.getHours().toString(),min:b.getMinutes()>=10?b.getMinutes():"0"+b.getMinutes().toString()}),d="";return d=c.hours>0?c.hours+":"+c.min:c.year+"-"+c.month+"-"+c.date};return{line:function(a,d,e){var f=echarts.init(document.getElementById(a)),g=[],h=d[0].unit||"",i=[],j=d[0].xdate;b(d).each(function(){g.push(this.name),this.type="line",this.smooth=!0,void 0!=e&&e.isarea&&(this.stack=!0,this.itemStyle={normal:{areaStyle:{type:"default"}}})});for(var k=0,l=j.length;l>k;k++)isNaN(j[k])||10!=(j[k]+"").length?i.push(j[k]):(j[1],i.push(c(1e3*j[k])));var m={title:{text:"",subtext:""},tooltip:{trigger:"axis"},legend:{y:"bottom",data:g},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},calculable:!1,xAxis:[{type:"category",boundaryGap:!1,data:i}],yAxis:[{type:"value",axisLabel:{formatter:"{value} "+h}}],grid:{borderWidth:0,borderColor:"red"},series:d};m=b.extend(!0,m,e),f.setOption(m)},pie:function(a,c,d){var e=echarts.init(document.getElementById(a)),f=[],g=[],h=0;b(c).each(function(){b(this.data).each(function(){h+=this.value})}),b(c).each(function(){b(this.data).each(function(){f.push(this.name);var a=isNaN((this.value/h*100).toFixed(2))?0:(this.value/h*100).toFixed(2);g[this.name]=this.value+"("+a+"%)"})});var i={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",x:"left",y:"50px",textStyle:{align:"left"},selectedMode:!1,data:f,formatter:function(a){return a+"   "+g[a]}},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},calculable:!1,series:c};i=b.extend(!0,i,d),e.setOption(i)},bar:function(a,d,e){var f=echarts.init(document.getElementById(a)),g=[],h=[],i=d[0].xdate;b(d).each(function(){g.push(this.name)});for(var j=0,k=i.length;k>j;j++)h.push(isNaN(i[j])||10!=(i[j]+"").length?i[j]:c(1e3*i[j]));var l={title:{text:"",subtext:""},tooltip:{trigger:"axis"},legend:{y:"bottom",data:g},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},calculable:!1,xAxis:[{type:"category",data:h}],yAxis:[{type:"value"}],series:d};l=b.extend(!0,l,e),f.setOption(l)}}});