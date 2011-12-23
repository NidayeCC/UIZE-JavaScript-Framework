/*
	UIZE JAVASCRIPT FRAMEWORK 2011-12-23

	http://www.uize.com/reference/Uize.Widget.Options.Selector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Options.Selector',required:'Uize.Widget.Button.ValueDisplay.Selector',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this,d_d='value',d_e='tentativeValue',d_f={},d_g;function d_h(d_i,d_j){if(d_j!=null)d_f[d_i]=d_j;}function d_k(d_l){var d_m=d_c.get(d_l),d_j=d_f[d_m];if(d_j===d_g){var d_n=Uize.findRecord(d_c.get('values'),{name:d_m});d_h(d_m,d_j=(d_n?d_n.valueDetails:null));}d_c.set(d_l+'Details',d_j);}d_c.wire({'Changed.tentativeValue':function(){d_k(d_e)},'Changed.value':function(){d_k(d_d)},'Changed.tentativeValueDetails':function(){d_h(d_c.get(d_e),d_c.d_o)},'Changed.valueDetails':function(){d_h(d_c.get(d_d),d_c.d_j)},'Changed.values':function(){d_f={};d_h(d_c.valueOf(),d_c.d_j);}});d_k(d_d);d_k(d_e);}),d_p=d_b.prototype;d_p.getOptionProperties=function(d_q,d_n){return Uize.copyInto(d_a.prototype.getOptionProperties.call(this,d_q,d_n)||{},{value:d_n.name,valueDetails:d_n.valueDetails})};d_p.wireUi=function(){var d_c=this;if(!d_c.isWired){
d_c.set({container:d_c.getNode('options')});d_a.prototype.wireUi.call(d_c);}};d_b.registerProperties({d_o:'tentativeValueDetails',d_j:'valueDetails'});d_b.set({optionWidgetClass:Uize.Widget.Button.ValueDisplay.Selector});return d_b;}});