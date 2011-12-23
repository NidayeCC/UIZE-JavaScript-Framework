/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Widget.EdgeHugger.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.EdgeHugger',required:['Uize.Fx','Uize.Fade','Uize.Cookie','Uize.Node'],builder:function(c_a){var c_b=true,c_c=false,c_d;var c_e=c_a.subclass(),c_f=c_e.prototype;c_f.c_g=function(c_h){var c_i=this,c_j=c_i.c_j,c_k=c_j=='left'||c_j=='right'?'width':'height',c_l=Uize.copyInto({},c_i.c_l,c_h?{duration:0}:null),c_m=c_i.c_m,c_n=c_i.c_n;function c_o(c_m,c_p){var c_q=c_m?'maximized':'minimized';c_i.setNodeStyle(c_q,Uize.pairUp(c_j,-50000));c_i.displayNode(c_q,true);return Uize.Fx.fadeStyle(c_i.getNode(c_q),Uize.pairUp(c_j,-c_i.get(c_q+'Height')|| -Uize.Node.getCoords(c_i.getNode(c_q))[c_k]),Uize.pairUp(c_j,0),0,Uize.copyInto(c_l,{reverse:!c_p}));}function c_r(){c_o(c_m,c_b);}c_n!=c_d?c_o(c_n,c_c).wire('Done',function(){c_i.displayNode(c_n?'maximized':'minimized',c_c);c_r();}):c_r();c_i.c_n=c_m;};c_f.c_s=function(){var c_i=this;c_i.c_t&&Uize.Cookie.setCookie(c_i.c_t,c_i.c_u+'|'+ +c_i.c_m,c_i.c_v);};c_f.wireUi=function(){var c_i=this;if(!c_i.isWired){var c_w=c_i.c_x=='always';if(c_i.c_t){
var c_y=Uize.Cookie.getCookie(c_i.c_t),c_z=c_y.split('|'),c_A=c_z[1]!='0';if(!c_y||c_z[0]!=c_i.c_u){c_A=c_b;c_w=c_i.c_x!='never';}c_i.set({c_m:c_A});c_i.c_s();}c_i.wireNode('maximize','click',function(){c_i.set({c_m:c_b})});c_i.wireNode('minimize','click',function(){c_i.set({c_m:c_c})});c_a.prototype.wireUi.call(c_i);if(navigator.appVersion.indexOf('MSIE 6')> -1){function c_B(){var c_C=Uize.Node.getCoords(window);c_i.setNodeStyle('',{left:c_C[c_i.c_j=='right'?'right':'left'],top:c_C[c_i.c_j=='bottom'?'bottom':'top']});}c_i.globalizeNode('');c_i.setNodeStyle('',{left:'',top:'',right:'',bottom:''});c_B();c_i.wireNode(window,{scroll:c_B,resize:c_B});}c_i.c_g(!c_w);}};c_e.registerProperties({c_u:{name:'contentId',value:''},c_t:'cookieName',c_v:{name:'cookiePath',value:'/'},c_j:{name:'edge',value:'bottom'},c_l:{name:'fadeProperties',value:{duration:200,curve:Uize.Fade.celeration(0,1)}},c_m:{name:'maximized',onChange:function(){var c_i=this;if(c_i.isWired){c_i.c_s();c_i.c_g();}},value:c_b},c_D:'maximizedHeight',
c_E:'minimizedHeight',c_x:{name:'whenToFadeOnInit',value:'first'}});return c_e;}});