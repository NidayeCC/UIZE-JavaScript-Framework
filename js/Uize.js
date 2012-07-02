/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-02

	http://www.uize.com/reference/Uize.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
(function(){var _a=Uize=function(){},_b,_c='string',_d='object',_e='number',_f='boolean',_g=Function,_h=Array,_i=false,_j=true,_k=null,_l=Object.prototype.toString;var _m=0,_n=[],_o='[#modulePath]',_p,_q= !!_h.forEach,_r= !!(_h.indexOf&&_h.lastIndexOf),_s={},_t={Uize:_a};function _u(_v){return(_w(_v)?_v:_v?{constructor:_b,toLocaleString:_b,toString:_b,valueOf:_b}:{});}function _x(_y,_z){var _A=_y[0];if(_B(_A)){var _C=_y[1],_D=_y.length;_B(_C)&&_z(_A,_C);if(_D>2){for(var _E=1;++_E<_D;)_B(_C=_y[_E])&&_z(_A,_C);;}}return _A;}_a.capFirstChar=function(_F){return _F.charAt(0).toUpperCase()+_F.slice(1);};var _G=_a.clone=function(_H){if(_H==_b)return _H;var _I=typeof _H;if(_I==_c||_I==_e||_I==_f||_J(_H))return _H;var _K=_H.constructor;if(_K==Date||_K==String||_K==Number||_K==Boolean){return new _K(_H.valueOf())}else if(_K==RegExp){return new RegExp(_H.source,(_H.global?'g':'')+(_H.ignoreCase?'i':'')+(_H.multiline?'m':''));};var _L=_K==Object,_M= !_L&&_N(_H);if(_L||_M){var _O,_P,_Q=_L?{}:[];if(_M)_Q.length=_H.length;
for(var _R in _H)_Q[_R]=(_P=typeof(_O=_H[_R]))==_c||_P==_e||_P==_f||_O==_b?_O:_G(_O);return _Q;}return _H;};var _S=_a.constrain=function(_H,_T,_U){return(_T<_U?(_H<_T?_T:_H>_U?_U:_H):(_H<_U?_U:_H>_T?_T:_H));};_a.inRange=function(_H,_T,_U){return _H==_a.constrain(_H,_T,_U);};var _V=_a.copyInto=function(){return _x(arguments,function(_A,_C){for(var _W in _C)_A[_W]=_C[_W];});};Uize.mergeInto=function(){function _X(_A,_C){var _Y,_Z;for(var _W in _C)(_0(_Z=_C[_W])&&_0(_Y=_A[_W]))?_X(_Y,_Z):(_A[_W]=_Z);}return _x(arguments,_X);};var _1=_a.forEach=function(_2,_3,_4,_5){if(_2){var _6=_N(_2);if(!_6||_2.length){if(typeof _3==_c)_3=new _g('value','key','source',_3);if(_6){if(_q&& !_5){_2.forEach(_3,_4);}else{for(var _7= -1,_8=_2.length;++_7<_8;)(_5||_7 in _2)&&_3.call(_4,_2[_7],_7,_2);}}else if(_w(_2)){for(var _7 in _2)_3.call(_4,_2[_7],_7,_2);}else if(typeof _2==_e){for(var _7= -1;++_7<_2;)_3.call(_4,_7,_7,_2);}}}};var _9=_a.resolveTransformer=function(_ba){var _bb=typeof _ba;return(_ba==_b?_a.returnX:_bb=='function'
?_ba:_bb=='string'?new Function('value','key','return '+_ba):_bb=='object'?(_bc(_ba)?function(_H){return _ba.test(_H+'')}:function(_H){return _ba.hasOwnProperty(_H)?_ba[_H]:_H}):function(){return _ba});};_a.resolveMatcher=function(_bd){return _bd==_b?_a.returnTrue:_9(_bd);};var _be=_a.map=function(_2,_bf,_bg){if(typeof _2==_e){_2=new _h(_2);if(typeof _bg!=_d)_bg=_2;}_bf=_9(_bf);if(typeof _bg!=_d)_bg=_bg===_i?_2:_N(_2)?[]:{};_1(_2,function(_H,_bh){var _bi=_bf.call(_2,_H,_bh);if(_bg)_bg[_bh]=_bi;},0,_j);return _bg;};_a.callOn=function(_bg,_bj,_bk){var _bl=_bm(_bj),_bn= !_bl&&_J(_bj);_bk||(_bk=_n);function _bo(_bg){if(_bg!=_b)_0(_bg)||_N(_bg)?_1(_bg,_bo,0,_j):_bn||(_bl&&_J(_bg[_bj]))?(_bn?_bj:_bg[_bj]).apply(_bg,_bk):0;}if(_bl||_bn)_bo(_bg);};_a.defaultNully=function(_H,_bp){return _H!=_b?_H:_bp;};var _bq=_a.getModuleByName=function(_br){var _bs;return(_t[_br]||(_br=='*'&&_t)||((_bs=(new _g('try {return '+_br+'} catch (e) {}'))())&&(_t[_br]=_bs)));};_a.indexIn=function(_2,_H,_bt,_bu){var _bv=_bw(_2),_Q= -1;
if(_bv||_w(_2)){var _bx=_bv?_2:_by(_2);if((_bu=_bu!==_i)&&_r){_Q=_h[_bt?'lastIndexOf':'indexOf'](_bx,_H);}else{for(var _bz=_bx.length,_7=_bt?_bz: -1,_bA=_bt? -1:1;--_bz>=0;){var _bB=_bx[_7+=_bA];if(_bu?_bB===_H:_bB==_H){_Q=_7;break;}}}if(!_bv&&_Q> -1)_Q=_bC(_2)[_Q];}return _Q;};var _bC=_a.keys=function(_bD){var _Q=[];if(!_bm(_bD))for(var _bh in _bD)_Q.push(_bh);return _Q;};_a.totalKeys=function(_bD){var _Q=0;if(!_bm(_bD))for(var _bh in _bD)_Q++;return _Q;};var _by=_a.values=values=function(_bD){if(_N(_bD))return _bD;var _Q=[];if(!_bm(_bD))for(var _bh in _bD)_Q.push(_bD[_bh]);return _Q;};_a.meldKeysValues=function(_bC,_by){var _Q={};for(var _bE= -1,_bF=Math.min(_bC.length,_by.length);++_bE<_bF;)_Q[_bC[_bE]]=_by[_bE];return _Q;};_a.min=function(_bD){return Math.min.apply(0,_by(_bD));};_a.max=function(_bD){return Math.max.apply(0,_by(_bD));};_a.reverseLookup=function(_bD,_v){var _bG=_u(_v);if(!_bm(_bD))for(var _bh in _bD)_bG[_bD[_bh]+'']=_bh;return _bG;};_a.lookup=function(_by,_bH,_v){var _bG=_u(_v);
if(arguments.length==1)_bH=_j;if(_by!=_b){for(var _bI= -1,_bJ=_by.length;++_bI<_bJ;)_bG[_by[_bI]]=_bH;}return _bG;};var _w=_a.isObject=function(_H){return!!_H&&typeof _H==_d;};var _B=_a.canExtend=function(_H){var _I=typeof _H;return!!_H&&(_I==_d||_I=='function');};var _0=_a.isPlainObject=function(_H){return(_H!=_b&&(_H.constructor==Object||_H.constructor.prototype.hasOwnProperty('hasOwnProperty')));};var _N=_a.isArray=function(_H){return _H instanceof Array||(!!_H&&_J(_H.splice));};var _bw=_a.isList=function(_H){return _w(_H)&&typeof _H.length==_e;};var _J=_a.isFunction=function(_H){var _K=_H!=_b&&_H.constructor;return!!(_K&&_K==_K.constructor);};_a.isNumber=function(_H){return typeof _H==_e&&_H===_H;};var _bm=_a.isString=function(_H){return typeof _H==_c;};_a.isBoolean=function(_H){return typeof _H==_f;};_a.isNully=function(_H){return _H==_b;};var _bK=_a.isPrimitive=function(_H){if(_H==_b)return _i;var _I=typeof _H;return _I==_c||_I==_e||_I==_f;};var _bc=_a.isRegExp=function(_H){
return _l.call(_H)=='[object RegExp]';};_a.isIn=function(_2,_H,_bu){return _a.indexIn(_2,_H,_i,_bu)!== -1;};_a.isEmpty=function(_bD){if(_w(_bD)&&_w(_bD=_bD.valueOf())){if(_N(_bD))return!_bD.length;for(var _bh in _bD)return _i;return _j;}return!_bD;};_a.isNaN=function(_H){return _H!==_H;};_a.isSameAs=function(_H,_bL){return _H===_bL||(_H!==_H&&_bL!==_bL);};_a.emptyOut=function(_2){if(_w(_2)){if(_N(_2)){_2.length=0;}else{for(var _R in _2)delete _2[_R];}}return _2;};var _bM=_a.recordMatches=function(_bN,_bO){if(!_bN)return!_bO;if(_J(_bO))return _bO(_bN);for(var _W in _bO){if(_bN[_W]!==_bO[_W])return _i;}return _j;};var _bP=_a.toNumber=function(_H,_bQ){if(typeof _H==_e){if(_H==_H)return _H;}else{if(_J(_H))_H=_H();if(_w(_H))_H=_H.valueOf();}return((_H=_H==_b||_H===''||_H!==_H|| !_bK(_H)?NaN: +_H)!=_H&&arguments.length>1?_bQ:_H);};_a.findRecordNo=function(_bR,_bO,_bS){for(var _bT= -1,_bU=_bR?_bR.length:0;++_bT<_bU;)if(_bM(_bR[_bT],_bO))return _bT;return _S(_bP(_bS,-1),-1,_bU-1);};
_a.findRecord=function(_bR,_bO,_bS){var _bT=_a.findRecordNo(_bR,_bO,_bS);return _bT> -1?_bR[_bT]:null;};var _bV=_a.getClass=function(_bW){return(_bW==_b?_b:typeof _bW=='function'?_bW:_bW.constructor);};_a.getGuid=function(){return'uizeGuid'+_m++;};var _bX=_a.getPathToLibrary=function(_bY,_bZ){if(typeof document!='undefined'&&document.getElementsByTagName){for(var _b0= -1,_b1=document.getElementsByTagName('SCRIPT'),_b2=_b1.length,_b3,_b4;++_b0<_b2;){if((_b4=(_b3=_b1[_b0].src).indexOf(_bY))> -1)return(_bZ?_b3.replace(_bY,_bZ):_b3.slice(0,_b3.lastIndexOf('/',_b4)+1));}}return'';};var _b5=_a.globalEval=new _g('toEval','return eval (toEval)');var _b6=_a.isInstance=function(_H){return!!(typeof _H==_d&&_H&&_H.constructor.subclass);};_a.nop=new _g;_a.returnFalse=new _g('return false');_a.returnTrue=new _g('return true');_a.returnX=new _g('x','return x');var _b7=_a.resolveModuleDefinition=function(_b8){var _b9=_b8.name=_b8.name||'',_ca=_b8.host=_b9.substr(0,_b9.lastIndexOf('.')),_cb=_b8.superclass=_b8.superclass||_ca,
_cc=_b8.required;_cc=_b8.required=_bm(_cc)?_cc.split(','):_cc||[];_ca&&_cc.push(_ca);_cb!=_ca&&_cc.push(_cb);return _b8;};_a.module=function(_b8){_b7(_b8);var _b9=_b8.name,_cd=[];_s[_b9]||(_s[_b9]=[]);_1(_b8.required,function(_ce){_ce&& !_bq(_ce)&&_cd.push(_ce);});function _cf(_bs){_1(_s[_bs],function(_cg){_cg()});delete _s[_bs];}function _ch(){var _ci=_b8.builder,_bs=_ci&&_ci(_bq(_b8.superclass));_b9&&(new _g('m',_b9+'=m'))(_bs=_t[_b9]=_bs||function(){});if(_J(_bs)){_bs.moduleName=_b9;if(!_bs.subclass)_bs.toString=_cj;}_cf(_b9);}var _ck=_cd.length;if(_ck){var _cl=_a.moduleLoader;if(_cl){var _cm= -1;function _cn(){_cm++;if(_cm<_ck){var _co=_cd[_cm];_bq(_co)?_cn():_s[_co]?_s[_co].push(_cn):_cl(_co,function(_cp){if(_bq(_co)){_cn();}else{_cp&&_b5(_cp);if(_bq(_co)){_cf(_co);_cn();}else{(_s[_co]||(_s[_co]=[])).push(_cn);}}});}else{_ch();}}_cn();}else{_ch();}}else{_ch();}};_a.moduleLoader=function(_co,_cq){_cq();var _cr=document.createElement('script');_cr.type='text/javascript';_cr.src=_a.moduleUrlResolver(_co);
(_p||(_p=document.getElementsByTagName('HEAD')[0])).appendChild(_cr);};_a.moduleUrlResolver=function(_br){return _a.moduleUrlTemplate.replace(_o,_br+'.js');};_a.pairUp=function(_cs){var _Q={},_bk=arguments.length==1&&_N(_cs)?_cs:arguments,_ct=_bk.length;if(_ct<3){_Q[_bk[0]]=_bk[1];}else{for(var _cu= -2;(_cu+=2)<_ct;)_Q[_bk[_cu]]=_bk[_cu+1];}return _Q;};var _cv=_a.escapeRegExpLiteral=function(_cw){return _cw.replace(/([\^\$\|\{\}\[\]\(\)\?\.\*\+\\])/g,'\\$1');};_a.substituteInto=function(_2,_cx,_cy){if(!(_2=_2==_b?'':_2+'')||_cx==_b)return _2;if(_bK(_cx))_cx=[_cx];var _cz=(_cy||'[#KEY]').split('KEY'),_cA=[];for(var _cB in _cx)_cA.push(_cv(_cB));return _2.replace(new RegExp(_cv(_cz[0])+'('+_cA.join('|')+')'+_cv(_cz[1]),'g'),function(_cC,_cB){return _cx[_cB]+''});};_a.noNew=function(_K){var _cD;function _cE(){if(_cD){_cD=_i;return this;}else{var _cF=this;if(_cF==_b||_cF.constructor!=_cE){_cD=_j;_cF=new _cE;}_K.apply(_cF,arguments);return _cF;}}return _cE;};
_a.now=new _g('return '+(Date.now?'Date.now()':'+new Date'));var _cj=_a.toString=function(){var _cF=this,_br=_bV(_cF).moduleName,_cG=_cF.subclass;return('['+(_b6(_cF)||(!_cG&& !_br)?_d:_cG?'class':'package')+' '+(_br||'Function')+']');};_a.moduleName='Uize';_a.moduleUrlTemplate=_bX('Uize.js',_o);_a.pathToResources=_bX('Uize.js');return _a;})();