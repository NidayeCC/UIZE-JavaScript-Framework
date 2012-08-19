/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-18

	http://www.uize.com/reference/Uize.Widget.Dialog.Picker.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Picker',required:'Uize.Widget.Button.Checkbox',builder:function(d_a){var d_b=false,d_c=true;var d_d=d_a.subclass(null,function(){var d_e=this;function d_f(d_g){var d_h=d_e.children.value,d_i=d_h.get('valueDetails'),d_j;d_e.d_k=d_c;d_e.fireSubmissionComplete(d_g,Uize.copyInto({value:d_h.valueOf()},d_i!==d_j?{valueDetails:d_i}:d_j));}d_e.addChild('value',d_e.d_l).wire('Changed.value',function(){!d_e.d_m&&setTimeout(function(){d_f(d_e.d_g);d_e.d_g||d_e.set({shown:d_b});},0);});d_e.addChild('keepOpen',Uize.Widget.Button.Checkbox).wire('Changed.selected',function(d_n){d_e.set({d_g:d_n.source.get('selected')})});function d_o(){d_e.d_k&&d_e.fire({name:'Submission Complete',result:{value:d_e.d_p}});}d_e.wire({Ok:function(){d_f()},Cancel:d_o,Close:d_o,'Before Show':function(){d_e.d_m=d_c;d_e.children.value.set(d_e.get((d_e.d_q||[]).concat('value')));d_e.d_p=d_e.d_r;d_e.d_m=d_e.d_k=d_b;}});d_e.d_s=d_c;d_e.d_t();}),d_u=d_d.prototype;d_u.d_t=function(){
this.d_s&&this.children.keepOpen.set({selected:this.d_g})};d_u.fireSubmissionComplete=function(d_g,d_v){var d_e=this;d_e.get('shown')&&d_e.fire({name:'Submission Complete',result:d_v,keepOpen:d_g});};d_d.registerProperties({d_g:{name:'keepOpen',onChange:d_u.d_t,value:d_b},d_l:'valueWidgetClass',d_w:'picker',d_q:'pipedProperties',d_r:'value'});d_d.set({shieldOpacity:0});return d_d;}});