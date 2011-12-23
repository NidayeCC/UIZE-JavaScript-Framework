/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Widget.Drag.Move.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Drag.Move',required:'Uize.Node',builder:function(d_a){var d_b=Uize.Node;var d_c=d_a.subclass(function(){var d_d=this,d_e=[['left','right'],['top','bottom']],d_f=[],d_g=[],d_h=[];d_d.wire({'Drag Start':function(){var d_i=d_d.d_j();function d_k(d_l){function d_m(d_n){var d_o=d_n.match(/(px|%)\s*$/);return d_o?d_o[1]:'px';}var d_p=d_e[d_l],d_q=d_f[d_l]=d_i.style[d_p[1]]?1:0,d_r=d_b.getStyle(d_i,d_p[d_q]),d_s=d_m(d_r);d_h[d_l]=d_s=='%'?(parseFloat(d_r)/100*d_i.offsetParent['offset'+(d_l?'Height':'Width')]):parseFloat(d_r);d_g[d_l]=d_m(d_i.style[d_p[d_q]]);}d_k(0);d_k(1);},'Drag Update':function(){var d_i=d_d.d_j();function d_t(d_l){var d_q=d_f[d_l],d_s=d_g[d_l],d_u=(d_h[d_l]+d_d.eventDeltaPos[d_l]*(d_q? -1:1));if(d_s=='%')d_u=d_u/d_i.offsetParent['offset'+(d_l?'Height':'Width')]*100;d_i.style[d_e[d_l][d_q]]=d_u+d_s;}d_t(0);d_t(1);}});}),d_v=d_c.prototype;d_v.d_j=function(){return this.getNode(this.d_w)||this.getNode();};d_c.registerProperties({d_w:'shellNode'});return d_c;}});