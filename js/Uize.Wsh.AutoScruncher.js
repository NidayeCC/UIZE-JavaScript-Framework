/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Wsh.AutoScruncher.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Wsh.AutoScruncher',required:['Uize.Scruncher','Uize.Date','Uize.String','Uize.String.Lines'],builder:function(){var _a=function(){};_a.getScrunchedFolderPath=function(_b,_c,_d){var _e=Uize.Wsh.getScriptFolderPath(),_f=_d?_d.length:0;return(_f?(_b.slice(-_f)==_d?_b.slice(0,-_f-1):null):(_c&&_e+'\\'+_c)+_b.substr(_e.length));};_a.perform=function(_g){var _h=Uize.Date.toIso8601(),_i=/\.js$/,_j=WScript.ScriptName,_k=_g.scrunchedHeadComments||{};function _l(_b){return _a.getScrunchedFolderPath(_b,_g.buildFolderPath,_g.sourceFolderName);}Uize.Wsh.buildFiles(Uize.copyInto({logFileName:_j.replace(_i,'-js-files.log'),targetFolderPathCreator:_l,targetFilenameCreator:function(_m){return _i.test(_m)?_m:null;},fileBuilder:function(_m,_n){var _o=_k[_m.slice(0,_m.indexOf('.'))],_p=_o==undefined,_q=Uize.Scruncher.scrunch(_n,_p?'':'KEEPHEADCOMMENT="FALSE"');return{outputText:(_p?'':Uize.substituteInto(_o,{buildDate:_h,moduleName:_m.replace(_i,'')},'{KEY}'))+_q.scrunchedCode,
logDetails:Uize.String.Lines.indent(_q.report,2)+'\n'};}},_g));var _r=/\/\*\s*Library\s*Contents/i,_s=/^[a-zA-Z_$]/,_t=_l(Uize.Wsh.getScriptFolderPath()+'\\'+_g.moduleFolderPath),_u='/*______________\n'+'|       ______  |   B U I L T     O N     U I Z E     F R A M E W O R K\n'+'|     /      /  |   ---------------------------------------------------\n'+'|    /    O /   |   This JavaScript application is developed using the object\n'+'|   /    / /    |   oriented UIZE JavaScript framework as its foundation.\n'+'|  /    / /  /| |\n'+'| /____/ /__/_| |    ONLINE : http://www.uize.com\n'+'|          /___ |   LICENSE : Available under MIT License or GNU General Public License\n'+'|_______________|             http://www.uize.com/license.html\n'+'*/\n\n';Uize.Wsh.buildFiles(Uize.copyInto({targetFolderPathCreator:_l,targetFilenameCreator:function(_m){return/\.library.js$/.test(_m)?_m:null;},fileBuilder:function(_m,_n){function _v(_w){var _x=_w.indexOf('/*');return(_x> -1?(_w.slice(0,_x)+
_w.slice(_w.indexOf('*/',_x+2)+2)):_w);}var _y=[],_z;for(var _A= -1,_B=_n.search(_r),_C=_n.indexOf('*/',_B),_D=Uize.String.Lines.split(_B> -1?_n.slice(_B,_C).replace(_r,''):_n),_E=_D.length;++_A<_E;){var _F=Uize.String.trim(_D[_A]);if(_F&&_s.test(_F)){if(!_z)_z=Uize.String.startsWith(_F,'Uize');_y.push('\n'+_v(Uize.Wsh.readFile(_t+'\\'+_F+(_i.test(_F)?'':'.js'))));}}return{outputText:(_z?_u:'')+_n.slice(0,_B)+_y.join('\n')+_n.slice(_C+2)};}},_g,{alwaysBuild:true,logFileName:_j.replace(_i,'-libraries.log')}));};return _a;}});