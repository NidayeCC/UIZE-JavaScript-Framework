/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.String.Discombobulator.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.String.Discombobulator',builder:function(){var _a,_b=function(){};var _c={_d:{},_e:{_f:{'a':[97,64,224,225,226,227,228,229],'A':[65,192,193,194,195,196,197],'B':[66,223],'c':[99,162,169,231],'C':[67,169,199],'e':[101,232,233,234,235],'E':[69,200,201,202,203],'F':[70,163],'i':[105,161,236,237,238,239],'I':[73,124,204,205,206,207],'n':[110,241],'N':[78,209],'o':[111,164,186,242,243,244,245,246,248],'O':[79,210,211,212,213,214,216],'r':[114,174],'R':[82,174],'S':[83,36,167],'u':[117,181,250,251,252],'U':[85,217,218,219,220],'y':[121,255],'Y':[89,165],'.':[46,183],':':[44,184],'?':[63,191],'!':[33,161],'1':[49,185],'2':[50,178],'3':[51,179]}},_g:{_h:{'(':')',')':'(','{':'}','}':'{','[':']',']':'[','<':'>','>':'<','/':'\\','\\':'/'}},_i:{},_j:{}};_b.discombobulate=function(_k,_l){function _m(_n){return _n.charAt(Math.round(Math.random()*(_n.length-1)));}function _o(_p,_q){return'~~~~~~~~~~~~~~~~~~~~'.substr(0,_q).replace(/~/g,_p);}function _r(_s){
var _t=typeof _l=='number'?(_s.degree*_l):_s.degree;return Math.random()<=_t;}var _u='',_v=false;for(var _w= -1,_x=_k.split(/\n|\r|\n\r|\r\n/),_y=_x.length;++_w<_y;){var _z=_x[_w],_A='';if(_z){var _B=/\s+[_\-=]+\s*|[_\-=]+\s+|[\s,\.;:!\?\*&%\$#]+/g,_C=_z.match(_B);for(var _D= -1,_E=_z.split(_B),_F=_E.length;++_D<_F;){var _G=_E[_D],_H=_D>0?_C[_D-1]:'',_I='',_J=[];for(var _K= -1;++_K<_G.length;){var _L=_G.charAt(_K),_M=_G.charCodeAt(_K);if(_r(_c._d))_L=_L.toUpperCase();if(_r(_c._e)&&_c._e._f[_L]!==_a){var _N=_c._e._f[_L],_O=Math.round(Math.random()*(_N.length-2))+1;_L=String.fromCharCode(_N[_O]);}_J.push(_L);}var _P='';if(_r(_c._i)){var _Q=_m(_c._i.chars),_q=_c._i.minLength+Math.round(Math.random()*(_c._i.maxLength-_c._i.minLength));_P=_o(_Q,_q);}var _R=_p='',_S=/[a-zA-Z0-9]/;for(var _K= -1;++_K<_J.length;){_R=_p;_p=_J[_K];_I+=(_S.test(_R)&&_S.test(_p)?_P:'')+_p;}if(_r(_c._g)){if(!_v){var _T=_c._g.chars,_U=_c._g._h,_V='';for(var _K= -1;++_K<_T.length;){var _p=_T[_K];_V+=_p+(typeof _U[_p]=='string'?_U[_p]:'');}
_v=true;}var _W=_m(_c._g.chars),_X=typeof _U[_W]=='string'?_U[_W]:_W,_Y=_I.charAt(0),_Z=_I.substr(-1);if(_V.indexOf(_Y)<0&&_V.indexOf(_Z)<0)_I=_W+_I+_X;}if(_r(_c._j)&&/^\s+$/.test(_H)&&_A&&_I){var _0=_m(_c._j.chars),_q=_c._j.minLength+Math.round(Math.random()*(_c._j.maxLength-_c._j.minLength)),_1=_o(_0,_q);if(_1)_H=' '+_1+' ';}_A+=_H+_I;}}_u+=(_w>0?'\n':'')+_A;}return _u;};_b.selectPreset=function(_2){var _3=_4[_2];for(var _5 in _3){var _s=_3[_5];for(var _6 in _s)_c[_5][_6]=_s[_6];}};var _4=_b.presets={classic:{_d:{degree:0},_e:{degree:1},_g:{degree:0},_i:{degree:0},_j:{degree:0}},nutcase:{_d:{degree:.5},_e:{degree:0},_g:{degree:0},_i:{degree:0},_j:{degree:0}},strokey:{_d:{degree:1},_e:{degree:0},_g:{degree:.5,chars:'([<'},_i:{degree:1,chars:'|/\\-_',minLength:1,maxLength:1},_j:{degree:1,chars:' ',minLength:1,maxLength:1}},bracketicious:{_d:{degree:0},_e:{degree:0},_g:{degree:1,chars:'([<>{`":/\\'},_i:{degree:0},_j:{degree:1,chars:' ',minLength:1,maxLength:1}},dotty:{_d:{degree:.5},_e:{degree:0},_g:{degree:1,
chars:':'},_i:{degree:1,chars:'.',minLength:0,maxLength:4},_j:{degree:1,chars:'.',minLength:1,maxLength:5}},obfuscated:{_d:{degree:1},_e:{degree:0},_g:{degree:1,chars:'abcdefghijklmnopqrstuvwxyz'},_i:{degree:1,chars:'abcdefghijklmnopqrstuvwxyz',minLength:1,maxLength:1},_j:{degree:1,chars:'~#$%^&*:?+-|',minLength:1,maxLength:1}},extremes:{_d:{degree:.4},_e:{degree:0},_g:{degree:.4,chars:'[({<|'},_i:{degree:.4,chars:'-_.:',minLength:4,maxLength:5},_j:{degree:.4,chars:' -_.:',minLength:4,maxLength:5}}};return _b;}});