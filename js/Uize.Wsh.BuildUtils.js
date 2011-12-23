/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Wsh.BuildUtils.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Wsh.BuildUtils',required:['Uize.Url','Uize.Template','Uize.Data.Simple','Uize.String','Uize.String.Lines','Uize.Json','Uize.Array.Sort','Uize.Test'],builder:function(){var _a=function(){};var _b={};function _c(_d){return Uize.Url.from(_d).fileName;}function _e(_f,_g,_h){(_g=new RegExp(_g.source,'g'+(_g.multiline?'m':'')+(_g.ignoreCase?'i':''))).lastIndex=_h||0;return _g.exec(_f);}_a.getHtmlFilesInfo=function(_i,_j){var _k=[];if(!_j)_j=Uize.returnX;for(var _l= -1,_m=Uize.Wsh.getFiles(_i),_n=_m.length;++_l<_n;){var _d=_m[_l],_o=Uize.Url.from(_d).file;if(/\.html$/i.test(_o)&&_o.charAt(0)!='~'){var _p=Uize.Wsh.readFile(_d),_q=_p.match(/<meta name="keywords" content="(.*?)"\/>/),_r=_p.match(/<meta name="description" content="(.*?)"\/>/),_s=_p.match(/<link rel="image_src" href="(.*?)"\/>/);_k.push({path:_i+'/'+_o,title:_j(_p.match(/<title>(.*?)<\/title>/)[1]),keywords:_q?_q[1]:'',description:_r?_r[1]:'',imageSrc:_s?Uize.Url.toAbsolute(_i,_s[1]):''});}}
Uize.Array.Sort.sortBy(_k,'value.title.toLowerCase ()');return _k;};_a.readSimpleDataFile=function(_t){return Uize.Data.Simple.parse({simple:Uize.Wsh.readFile(_t),collapseChildren:true});};_a.compileJstFile=function(_u){var _v=_b[_u];if(!_v){if(!Uize.Wsh.fileExists(_u))return;_v=_b[_u]=Uize.Template.compile(Uize.Wsh.readFile(_u),{result:'full'});Uize.module({required:_v.required});}return _v.templateFunction;};_a.processJstFile=function(_u,_w){var _v=_a.compileJstFile(_u);_v&&Uize.Wsh.writeFile({path:_u.replace(/\.jst$/,''),text:_v(_w)});};_a.runScripts=function(_x){var _y;if(!Uize.isArray(_x))_x=[_x];for(var _z= -1,_A=_x.length,_B=new ActiveXObject('WScript.Shell'),_C;++_z<_A&& !_y;)if(_C=_B.Run('WScript '+_x[_z],0,true))_y={script:_x[_z],errorCode:_C};return _y;};_a.testAllModules=function(){var _D=/\.js$/i,_E=/\.library\.js$/i,_F=/^[a-zA-Z_\$][a-zA-Z0-9_\$]*\.Test($|\.)/,_G=Uize.Wsh.getFiles(env.moduleFolderPath,function(_d){return _D.test(_d)&& !_E.test(_d)},_c).sort(),_H=Uize.lookup(_G);var _I={},_J=[];
function _K(_L){if(!_I[_L]){_I[_L]=1;if(_L){var _M;try{Uize.moduleLoader(_L,function(_N){_M=_N});}catch(_y){}if(_M){var _O=_L.substr(0,_L.lastIndexOf('.')),_P=new RegExp('Uize\\s*\\.\\s*module\\s*\\(\\s*\\{\\s*name\\s*:\\s*([\'"])'+Uize.escapeRegExpLiteral(_L)+'\\1'),_Q=_e(_M,_P);_O&&_K(_O);if(_Q){var _R=_Q.index+_Q[0].length,_S=/superclass\s*:\s*(['"])([^'"]*)\1/,_T=_e(_M,_S,_R),_U=/required\s*:\s*((['"])([^'"]*)\2|(\[[^\]]*\]))/,_V=_e(_M,_U,_R);_T&&_K(_T[2]);if(_V){if(_V[4]){var _W=[];try{_W=eval('('+_V[4]+')')}catch(_y){}Uize.forEach(_W,_K);}else{_K(_V[3]);}}}_J.push(_L);}}}}Uize.forEach(_G,function(_L){_F.test(_L)||_K(_L);});var _X,_Y=Uize.Test.declare({title:'Unit Tests Suite',test:Uize.map(_J,function(_L){return(_H[_X=_L.match(/([^\.]*)(\.|$)/)[1]+'.Test.'+_L]?Uize.Test.testModuleTest(_X):Uize.Test.requiredModulesTest(_L));})});_a.runUnitTests(_Y);};_a.runUnitTests=function(_Z){if(typeof _Z=='string'){Uize.module({required:_Z,builder:function(){_a.runUnitTests(eval(_Z))}});}else{var _0=new _Z,_1=[];
_0.wire({Start:function(_2){_1.push(Uize.String.repeat('\t',_2.source.getDepth())+_2.source.get('title'));},Done:function(_2){var _3=_2.source,_4=_3.get('reasonForFailure');_1.push(Uize.String.repeat('\t',_3.getDepth()+1)+(_3.get('result')?('PASSED!!! (duration: '+_3.get('duration')+'ms)'):('*** FAILED *** '+(_4||''))));_4&&_1.push('','',_3.getSynopsis());if(_3==_0|| !_3.get('result')){(WScript.Arguments.Count()&&WScript.Arguments.Item(0)=='silent')||alert(_3.getSynopsis());Uize.Wsh.writeFile({path:WScript.ScriptName.replace(/\.js$/,'.log'),text:_1.join('\n')});_3.get('result')||WScript.Quit(1);}}});_0.run();}};_a.writeDataModule=function(_5,_L,_6){Uize.Wsh.writeFile({path:_5+'\\'+_L+'.js',text:'Uize.module ({\n'+'\tname:\''+_L+'\',\n'+'\tbuilder:function () {\n'+'\t\treturn function () {\n'+'\t\t\treturn '+Uize.String.Lines.indent(Uize.Json.to(_6),3,'\t',false)+';\n'+'\t\t};\n'+'\t}\n'+'});\n'});};return _a;}});