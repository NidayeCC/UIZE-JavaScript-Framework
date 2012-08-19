/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-18

	http://www.uize.com/reference/Uize.Widget.Options.Accordion.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Options.Accordion',required:['Uize.Node','Uize.Fade'],builder:function(d_a){var d_b=true,d_c=false,d_d=Uize,d_e=d_d.Node,d_f=d_d.Fade;var d_g=d_a.subclass(null,function(){var d_h=this,d_i,d_j;function d_k(d_l){d_h.isWired&&d_h.setNodeStyle(d_h.d_m(d_l),{display:'block',position:'relative',overflow:'hidden',visibility:'visible'})}function d_n(d_l,d_o){d_h.isWired&&d_h.setNodeStyle(d_h.d_m(d_l),{height:d_o})}function d_p(d_l,d_q){if(d_h.isWired){var d_r=d_h.d_m(d_l);d_h.displayNode(d_r,d_q);d_h.setNodeStyle(d_r,{height:'',overflow:''});}}(d_h.fade=new d_f).wire({Start:function(){d_k(d_h.d_s);d_k(d_h.get('valueNo'));d_i=d_e.getDimensions(d_h.d_m(d_h.d_s)).height;d_j=d_h.fade.get('endValue');},'Changed.value':function(){var d_t= +d_h.fade;d_i&&d_n(d_h.d_s,(1-(d_t/d_j))*d_i);d_n(d_h.get('valueNo'),d_t);},Done:function(){var d_u=d_h.get('valueNo');d_p(d_h.d_s,d_c);d_p(d_u,d_b);d_h.d_s=d_u;}});d_h.wire('Changed.valueNo',function(){d_h.d_v()});}),d_w=d_g.prototype;d_w.d_x=function(d_y){
return d_d.isNumber(d_y)?d_y:this.getValueNoFromValue(d_y)};d_w.d_m=function(d_y){return this.getNode('option'+this.d_x(d_y)+'TabBody')};d_w.d_v=function(){var d_h=this,d_s=d_h.d_s,d_z=d_h.get('valueNo');if(d_h.isWired){if(d_z> -1&&d_z!=d_s){var d_A=d_h.d_m(d_z),d_B=d_h.getNodeStyle(d_A,'height');d_h.setNodeStyle(d_A,{display:'block',height:'auto',position:'absolute',visibility:'visible'});var d_C=parseInt(d_B)||d_e.getDimensions(d_A).height;d_C&&d_h.fade.start({curve:d_h.d_D||d_f.celeration(0,1),duration:d_h.d_E,startValue:0,endValue:d_C});}else d_h.forAll(function(d_F,d_G){d_h.displayNode(d_h.d_m(d_G),d_G===d_s)});}};d_w.enableTab=function(d_H,d_I){this.getOptionButton(d_H).set({enabled:d_I?'inherit':false});this.d_v();};d_w.getOptionButton=function(d_y){return this.children['option'+this.d_x(d_y)]};d_w.tabExists=function(d_y){var d_F=this.getOptionButton(d_y);return(d_F&&(d_F.getNode()||this.d_m(d_y))?d_b:d_c);};d_w.updateUi=function(){var d_h=this;if(d_h.isWired){var d_J=d_h.getNode();
d_h.getNodeStyle(d_J,'position')=='static'&&d_h.setNodeStyle(d_J,{position:'relative'});d_h.d_v();d_a.prototype.updateUi.call(d_h);}};d_w.wireUi=function(){var d_h=this;if(!d_h.isWired){d_h.d_s=d_h.get('valueNo');d_a.prototype.wireUi.call(d_h);}};d_g.registerProperties({d_D:'animationCurve',d_E:{name:'animationDuration',value:500}});return d_g;}});