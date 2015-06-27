/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Buttons.Share.Twitter.Widget Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 5
*/

/*?
	Introduction
		The =Uize.Widgets.Buttons.Share.Twitter.Widget= module implements a widget class.

		*DEVELOPERS:* `Chris van Rensburg`

		Visual Sampler
			Below is a visual sampler of the =Uize.Widgets.Buttons.Share.Twitter.Widget= class...

			.............................................................
			<< widget >>

			widgetClass: Uize.Widgets.Buttons.Share.Twitter.VisualSampler
			.............................................................
*/

Uize.module ({
	name:'Uize.Widgets.Buttons.Share.Twitter.Widget',
	superclass:'Uize.Widgets.Buttons.Share.Widget',
	required:[
		'Uize.Widgets.Buttons.Share.Twitter.Css',
		'Uize.Url'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			staticProperties:{
				cssModule:Uize.Widgets.Buttons.Share.Twitter.Css
			},

			instanceMethods:{
				getShareUrl:function (_pageInfo) {
					var _domainParts = Uize.Url.from (_pageInfo.url).hostname.split ('.');
					return [
						'http://twitter.com/home',
						{
							status:'Check out ' + _pageInfo.title + ' @' + _domainParts [_domainParts.length - 2] + ' ' + _pageInfo.url
						}
					];
				}
			}
		});
	}
});

