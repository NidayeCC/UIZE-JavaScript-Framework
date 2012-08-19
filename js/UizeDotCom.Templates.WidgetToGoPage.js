/*
	UIZE Web Site 2012-08-18

	http://www.uize.com/reference/UizeDotCom.Templates.WidgetToGoPage.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Templates.WidgetToGoPage',required:['Uize.Xml','Uize.Json'],builder:function(){var _a=function(){};_a.process=function(input){var output=[];var _b=input.widget,_c=_b.title.toLowerCase();output.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n	<title>',Uize.Xml.toAttributeValue(_b.title),'</title>');if(input.mobile){output.push('\r\n	<meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>');}output.push('\r\n	<link rel="stylesheet" href="../../css/page.css"/>\r\n	<link rel="stylesheet" href="../../css/page.widget.css"/>');if(input.mobile){output.push('\r\n	<link rel="stylesheet" href="../../css/page.widget.mobile.css"/>');}output.push('\r\n	<link rel="stylesheet" href="../../css/widget.',_c,'.css"/>\r\n	<link rel="stylesheet" href="../../css/widget.',_c,'.widgetstogo.css"/>');if(input.mobile){
output.push('\r\n	<link rel="stylesheet" href="../../css/widget.',_c,'.widgetstogo.mobile.css"/>');}output.push('\r\n</head>\r\n\r\n<body>\r\n\r\n<script type="text/javascript" src="../../js/Uize.js"></script>\r\n\r\n<script type="text/javascript">\r\n\r\nUize.module ({\r\n	required:[\r\n		\'UizeDotCom.WidgetToGoPage.',Uize.capFirstChar(_c),'.library\',\r\n		\'UizeDotCom.WidgetToGoPage\'\r\n	],\r\n	builder:function () {\r\n		(\r\n			window.page = UizeDotCom.WidgetToGoPage ({\r\n				title:',Uize.Json.to(_b.title),',\r\n				widgetToGoClass:',Uize.Json.to(_b.widgetClassModule),',\r\n				widgetToGoHtml:',Uize.Json.to(_b.widgetTemplateModule),'\r\n			})\r\n		).wireUi ();\r\n	}\r\n});\r\n\r\n</script>\r\n\r\n</body>\r\n</html>\r\n\r\n');return output.join('');};_a.input={widget:'object',mobile:'boolean'};return _a;}});