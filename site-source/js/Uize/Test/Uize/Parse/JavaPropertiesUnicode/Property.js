/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Test.Uize.Parse.JavaPropertiesUnicode.Property Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015-2016 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Test
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Test.Uize.Parse.JavaPropertiesUnicode.Property= module defines a suite of unit tests for the =Uize.Parse.JavaPropertiesUnicode.Property= module.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Test.Uize.Parse.JavaPropertiesUnicode.Property',
	superclass:'Uize.Test.ParserTest',
	builder:function (_superclass) {
		'use strict';

		var _unicodeProperty = 'ƀåž=ǫûẋ\\\\u013D';

		return _superclass.subclass ({
			staticProperties:{parserClass:'Uize.Parse.JavaPropertiesUnicode.Property'},

			set:{
				title:'Test for Uize.Parse.JavaPropertiesUnicode.Property Module',
				test:[
					Uize.Test.requiredModulesTest ('Uize.Parse.JavaPropertiesUnicode.Property'),
					Uize.Test.ParserTest.parserTest (
						'A Unicode property can be parsed',
						[_unicodeProperty],
						{
							name:{
								name:'ƀåž',
								isValid:true
							},
							value:{
								value:'ǫûẋ\\u013D',
								isValid:true
							},
							isValid:true
						}
					),
					Uize.Test.ParserTest.serializerTest (
						'A Unicode property can be serialized',
						_unicodeProperty,
						_unicodeProperty
					)
				]
			}
		});
	}
});

