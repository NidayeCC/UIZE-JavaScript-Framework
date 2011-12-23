/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Widget.Options.Tabbed.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Options.Tabbed',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this;d_c.wire('Changed.value',function(){d_c.d_d()});}),d_e=d_b.prototype;d_e.d_f=function(d_g){return Uize.isNumber(d_g)?d_g:this.getValueNoFromValue(d_g);};d_e.d_h=function(d_g){return this.getNode('option'+this.d_f(d_g)+'TabBody')};d_e.d_i=function(d_j){return this.tabExists(d_j)&&this.getOptionButton(d_j).get('enabled')};d_e.d_k=function(d_l,d_m){var d_c=this;if(d_l> -1)d_c.setNodeProperties(d_c.d_h(d_l),{className:d_l==d_m?d_c.d_n:d_c.d_o});};d_e.d_d=function(){var d_c=this;if(d_c.isWired){var d_m=d_c.get('valueNo');if(d_c.d_i(d_m)){d_c.updateUiTabState(d_c.d_p,d_m);d_c.d_p=d_m;}else{for(var d_l= -1,d_q=d_c.get('values'),d_r=d_q.length;++d_l<d_r;){if(d_c.d_i(d_l)){d_c.set({value:d_q[d_l]});break;}}}}};d_e.enableTab=function(d_j,d_s){this.getOptionButton(d_j).set({enabled:d_s?'inherit':false});this.d_d();};d_e.getOptionButton=function(d_g){return this.children['option'+this.d_f(d_g)];};
d_e.getTabBodyNode=d_e.d_h;d_e.tabExists=function(d_g){var d_t=this.getOptionButton(d_g);return(d_t&&(d_t.getNode()||this.d_h(d_g))?true:false);};d_e.updateUiTabState=function(d_p,d_m){this.d_k(d_p,d_m);this.d_k(d_m,d_m);};d_e.wireUi=function(){var d_c=this;if(!d_c.isWired){d_a.prototype.wireUi.call(d_c);var d_l=d_c.d_p=d_c.get('valueNo');Uize.forEach(d_c.get('values'),function(d_j,d_u){d_c.d_k(d_u,d_l)});}};d_b.registerProperties({d_n:'bodyClassActive',d_o:'bodyClassInactive'});return d_b;}});