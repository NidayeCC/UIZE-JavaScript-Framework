/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Data.Csv.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Data.Csv',required:'Uize.String',builder:function(){var _a=function(){},_b=true,_c=false,_d;var _e={columns:'all',hasHeader:false,trimPaddingOnParse:false,quoteChar:'"',rowType:'auto',valueDelimiter:',',whenToQuoteValues:'auto'};function _f(_g,_h){var _i=_g?_g[_h]:_d;return _i==_d?_e[_h]:_i;}function _j(_g){return Uize.String.repeat(_f(_g,'quoteChar'),2);}function _k(_l){return new RegExp(Uize.escapeRegExpLiteral(_l),'g');}_a.from=function(_m,_n){var _o=_f(_n,'columns'),_p=_f(_n,'hasHeader'),_q=_f(_n,'trimPaddingOnParse'),_r=_f(_n,'quoteChar'),_s=_f(_n,'rowType'),_t=_f(_n,'valueDelimiter'),_u=_j(_n),_v=_k(_u),_w=Uize.isArray(_o),_x=_s=='object'||(_s=='auto'&&(_p||(_w&&_o.length))),_y=[],_z=0,_A=_p? -1:0,_B=0,_C=_m.length,_D=_C-1;_p&&(_w?(_o.length=0):(_o=[]));function _E(_F){(_A<0?_o:_y[_A]||(_y[_A]=_x?{}:[]))[_x&&_A> -1?_o[_B]:_B]=_q?Uize.String.trim(_F):_F;_B++;}function _G(_H){var _I=_m.indexOf(_H,_z);return _I<0?_C:_I;}function _J(){return Math.min(_G('\n'),_G('\r'),_G(_t),_G(_r));
}var _K,_L,_M,_N,_O;while(_z<_C){_L=_m.charAt(_O=_K=_J());if(_L==_r){_M=_N=_c;while(!_M){_O=_m.indexOf(_r,_O+1);if(_O<0)_O=_C;_O<_D&&_m.charAt(_O+1)==_r?(_O+=(_N=_b)):(_M=_b);}var _P=_m.slice(_K+1,_O);_E(_N?_P.replace(_v,_r):_P);_z=_O+1;_z=_J();_z+=_m.charAt(_z)==_t;}else if(_K==_z&&(_L=='\n'||_L=='\r')){_A++;_B=0;_z+=1+(_L=='\r'&&_z<_D&&_m.charAt(_z+1)=='\n');}else{_E(_m.slice(_z,_K));_z=_K+(_L==_t);}}return _y;};_a.to=function(_Q,_R){var _S=[],_T=_Q[0],_U=_f(_R,'whenToQuoteValues')=='always',_o=_f(_R,'columns'),_p=_f(_R,'hasHeader'),_q=_f(_R,'trimPaddingOnParse'),_r=_f(_R,'quoteChar'),_s=_f(_R,'rowType'),_t=_f(_R,'valueDelimiter'),_V=Uize.String.hasPadding(_t),_u=_j(_R),_W=_k(_r),_x=_s=='object'||(_s=='auto'&&_T&& !Uize.isArray(_T));if(_o=='all')_o= !_T?[]:_x?Uize.keys(_T):Uize.map(_T.length,'key');var _X=_o.length;for(var _A= -1-_p,_Y=_Q.length;++_A<_Y;){var _Z=_A<0?_o:_Q[_A];for(var _B= -1;++_B<_X;){var _P=_Z[_A<0|| !_x?_B:_o[_B]]+'',_0=_P.indexOf(_r)> -1,_1=_0||_U||(_q?Uize.String.hasPadding(_P):_V)||
_P.indexOf(_t)> -1||_P.indexOf('\n')> -1||_P.indexOf('\r')> -1?_r:'';_S.push((_B?_t:'')+_1+(_0?_P.replace(_W,_u):_P)+_1);}_A<_Y-1&&_S.push('\n');}return _S.join('');};return _a;}});