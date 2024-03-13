javascript:var%20asde=$("<div>da</div>");$("#am_widget_Farm").before

(asde);var%20total=$(".farm_icon_b").length;var%20farms=$(".farm_icon_b");var

%20fasend=function(b){if(b==total)return;$(farms[b]).trigger

("click");asde.html(b+"%20/%20"+total);setTimeout("fasend("+b

+"+1)",200+Math.random(200))};fasend(0)
