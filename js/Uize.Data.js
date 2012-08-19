/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-18

	http://www.uize.com/reference/Uize.Data.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Data',builder:function(){var _a=function(){},_b='string',_c=true,_d=false,_e=null,_f,_g=Infinity,_h=Uize.totalKeys;var _i={};_a.getColumn=function(_j,_k,_l){var _m=[];if(_j){var _n=_l?{}:_e;for(var _o= -1,_p=_j.length;++_o<_p;){var _q=_j[_o][_k];if(!_l||(!_n[_q]&&(_n[_q]=1)))_m.push(_q);}}return _m;};_a.findRecords=function(_r,_s){var _t=[];if(_r){for(var _u= -1,_v=_r.length,_w;++_u<_v;)Uize.recordMatches(_w=_r[_u],_s)&&_t.push(_w);}return _t;};_a.filter=function(_x,_y){var _z=this,_m={};if(_x&&_y){for(var _A= -1,_B=_y.length;++_A<_B;){var _C=_y[_A];if(_C in _x)_m[_C]=_x[_C];}}return _m;};_a.identical=function(_D,_E,_F){if(!_F)_F=_i;var _G=_F.equality,_H=_G=='loose',_I= !_H&&_G=='type',_J= !_H&& !_I&&_G=='tree',_K= !_H&& !_I&& !_J,_L=_F.allowConjoined!==_d;function _M(_D,_E){var _N,_O=typeof _D,_P=_O=='object',_Q=_P&&_D,_R=_O==typeof _E;function _S(){if(_N=_h(_D)==_h(_E)){for(var _C in _D){if(!(_C in _E)|| !_M(_D[_C],_E[_C])){_N=_d;break;}}}}if(_R&&_Q&&_E){var _T=_D.constructor;
if(_D==_E){_N=_L;}else if(_N=_T==_E.constructor){if(_T==Date||_T==String||_T==Number||_T==Boolean||_T==RegExp){_N=_D+''==_E+'';}else{if(typeof _D.splice=='function'&&typeof _E.splice=='function'){if(_N=_D.length==_E.length){for(var _U=_D.length;--_U>=0;){if(!_M(_D[_U],_E[_U])){_N=_d;break;}}if(_N){var _V=_D.splice(0,_g),_W=_E.splice(0,_g);_S();_D.push.apply(_D,_V);_E.push.apply(_E,_W);}}}else{_S();}}}}else{_N=_J? !_Q&& !(typeof _E=='object'&&_E):((_H?_D==_E:(_R&&(_K?_D===_E:(!_P|| !_D== !_E))))||(_R&&_O=='number'&&_D!=_D&&_E!=_E));}return _N;}return _M(_D,_E);};_a.conjoined=function(_D,_E){function _X(_x){var _Y=[];function _Z(_x){if(typeof _x=='object'){if(!Uize.isIn(_Y,_x)){_Y.push(_x);for(var _C in _x)_Z(_x[_C]);}}}_Z(_x);return _Y;}var _0=_d,_1=_X(_D),_2=_1.length,_3=_X(_E);for(var _4= -1;++_4<_2&& !_0;)_0=Uize.isIn(_3,_1[_4]);return _0;};_a.clones=function(_D,_E){return(_a.identical(_D,_E,{allowConjoined:_d})&& !_a.conjoined(_D,_E));};_a.intersection=function(_D,_E){var _m={};if(_D&&_E){
for(var _C in _D){var _5=_D[_C];if(_E[_C]===_5)_m[_C]=_5;}}return _m;};_a.emptyOut=Uize.emptyOut;_a.getKeys=Uize.keys;_a.getLookup=Uize.lookup;_a.getReverseLookup=Uize.reverseLookup;_a.getTotalKeys=Uize.totalKeys;_a.getValues=Uize.values;_a.isEmpty=Uize.isEmpty;_a.map=function(_6,_7,_8){return Uize.map(_7,_6,_8)};_a.min=Uize.min;_a.max=Uize.max;return _a;}});