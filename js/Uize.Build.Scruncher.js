/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-18

	http://www.uize.com/reference/Uize.Build.Scruncher.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.Scruncher',required:['Uize.Xml','Uize.String'],builder:function(){var _a=function(){},_b=true,_c=false;function _d(_e,_f){return Uize.lookup(_e.split(''),_f!=null?_f:_b);}var _g=0,_h=1,_i=2,_j=3,_k=4,_l=5,_m=6,_n=7,_o=_d('+-*/%&|^~<>=!?:',_m),_p=_d('.,()[]{};',_j),_q=_d('"\'',_k),_r=_d('\n\r',_n),_s=_d('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$',_h),_t=_d('0123456789',_i),_u=Uize.copyInto(_t,{x:_i}),_v=Uize.copyInto({},_r,_o,_p,_q,_u,_s),_w=Uize.copyInto({},_s,_u),_x=_d(')]'),_y='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''),_z=_y.length,_A=/^(:|!+|\*|-|\+|\||\|\||&|&&|%|>|>>|<|<<|=|==|\?|\^)\/$/;var _B={};_a.scrunch=function(_C,_D){var _E=0,_F=0,_G=0,_H=0,_I=0,_J=0,_K=0,_L,_M=_c,_N=1,_O=_P='',_Q=[],_R={},_S=_c,_T,_U,_V='',_W,_X=_c,_Y=_g,_Z='',_0=_g,_1='',_2=_c,_3='',_4='',_5=Uize.String.startsWith;_B.LINECOMPACTING='TRUE';_B.MAXLINELENGTH=1024;_B.MAPPINGS='';_B.KEEPHEADCOMMENT='TRUE';_B.AUDITSTRINGS='FALSE';function _6(_7,_8){this._7=_7;
this._8=_8||_7;this._9=[];this._ba=0;}function _bb(_D){function _bc(_bd){_bd=(_bd+'').toUpperCase();return _bd=='TRUE'||_bd=='ON'||_bd=='1';}Uize.copyInto(_B,typeof _D=='string'?Uize.Xml.fromAttributes(_D,{nameCase:'upper'}):_D);_B.LINECOMPACTING=_bc(_B.LINECOMPACTING);_B.KEEPHEADCOMMENT=_bc(_B.KEEPHEADCOMMENT);_B.AUDITSTRINGS=_bc(_B.AUDITSTRINGS);_L=[];var _be=_B.MAPPINGS.split(',');for(var _bf= -1;++_bf<_be.length;){var _bg=Uize.String.splitInTwo(_be[_bf],'=');_L[_bf]=new _6(_bg[0],_bg[1]);}}_bb(_D);for(var _bh= -1,_bi=_C.length,_bj=_bi-1;++_bh<=_bi;){_W=_V;if(_bh>_bj){_V='';_2=_b;}else{_V=_C.charAt(_bh);(_V=='\r'||(_V=='\n'&&_W!='\r'))&&_N++;if(_Y==_h){if(!_w[_V])_2=_b;}else if(_Y==_i){if(!_u[_V])_2=_b;}else if(_Y==_j){if(!_p[_V])_2=_b;}else if(_Y==_k){if(_X){_X=_c;}else if(_V=='\\'){_X=_b;}else if(_V==_U){if(_B.AUDITSTRINGS&&_U!='/'){var _bk=_1.slice(1),_bl=_R[_bk];(_bl instanceof Array?_bl:(_R[_bk]=[])).push(_N);}_1+=_V;_V='';_2=_b;}}else if(_Y==_l){if(_T=='//'){if(_V=='\n'||_V=='\r')_2=_b;
}else if(_T=='/*'){if(_1.length>2&&_W+_V=='*/'){_1+=_V;_2=_b;_V='';}}}else if(_Y==_m){if(_1=='/'&&(_V=='/'||_V=='*')){_Y=_l;_T=_1+_V;var _bm;if(_V=='*'){_bm=_C.indexOf('*/',_bh+1);if(_bm<0)_bm=_bi;}else{var _bn=_C.indexOf('\n',_bh+1),_bo=_C.indexOf('\r',_bh+1);_bm=Math.min(_bn<0?_bi:_bn,_bo<0?_bi:_bo);}_1=_C.slice(_bh-1,_bm-1);_V=_C.charAt(_bh=_bm-1);}else if(_1=='/'&&(_0!=_h||_Z=='return')&&_0!=_i&&_0!=_k&& !(_0==_j&&_x[_Z.slice(-1)])){_Y=_k;_U='/';_V='';_bh--;}else if(!_o[_V]||_A.test(_1+_V)){_2=_b;}}else if(_Y==_n){if(_V!='\n'&&_V!='\r')_2=_b;}_M=_M||(_Y&&_Y!=_l&&(_Y!=_n||_1.length>1));}if(_2){if(_Y==_h){for(var _bp= -1;++_bp<_L.length;){var _bq=_L[_bp];if(_5(_1,_bq._7+'_')){_F++;var _br=_bq._9[_1]||'';if(!_br){_E++;var _bs=_bq._ba++;do{_br=_y[_bs-_z*(_bs=Math.floor(_bs/_z))]+_br;}while(_bs>0);_br=_bq._9[_1]=_bq._8+'_'+_br;}_G+=_1.length-(_1=_br).length;break;}}}else if(_Y==_l){_Q.push(_1);_I+=_1.length;var _bt=_c;if(/^\/[\*\/]\s*scruncher/i.test(_1)){if(_1.substr(2,17).toLowerCase()=='scrunchersettings'){
_bt=_b;_bb(_1.slice(2,_1.length-(_T=='/*')*2));_1='';}else if(/^\/[\*\/]\s*scruncher:leave next comment/i.test(_1)){_bt=_S=_b;_1='';}}if(!_bt){if((_M|| !_B.KEEPHEADCOMMENT)&& !_S){_1='';}else if(_T=='/*'){if(_S){if(_B.LINECOMPACTING)_1='\n'+_1+'\n';_S=_c;}_1+='\n';}}if(!_1)_K++;_I-=_1.length;}else if(_Y==_n){_J+=_1.length;_1='';if(!_B.LINECOMPACTING||(_3.length+_4.length>_B.MAXLINELENGTH)){_O+=_3+'\n';_J--;_3='';}_3+=_4;_4='';}if(((_Y==_h||_Y==_m)&&_0==_Y)||(_Y==_i&&_t[_1.charAt(0)]&&_0==_h)){_1=' '+_1;_H--;}_2=_c;if(_1){_4+=_1;_Z=_1;_0=_Y;}_1='';_Y=_g;}if(!_Y&&_V){_Y=_v[_V];if(_Y==_k)_U=_V;}_Y?(_1+=_V):(_H+=_V.length);}return{scrunchedCode:_O+=_3+_4,comments:_Q,stringsMap:_R,report:'Unique Identifiers Scrunched: '+_E+'\n'+'Incidences of Identifiers Scrunched: '+_F+'\n'+'Savings From Scrunched Identifiers: '+_G+'\n'+'Savings From Removed Whitespace: '+_H+'\n'+'Total Comments Removed: '+_K+'\n'+'Savings From Removed Comments: '+_I+'\n'+'Savings From Removed Linebreaks: '+_J+'\n'+
'Supposed Total Savings: '+(_G+_H+_I+_J-_P.length)+'\n'+'Real Total Savings: '+(_C.length-_O.length)+'\n\n'+'FINAL SIZE: '+_O.length};};return _a;}});