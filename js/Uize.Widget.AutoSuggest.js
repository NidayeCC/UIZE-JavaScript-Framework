/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-18

	http://www.uize.com/reference/Uize.Widget.AutoSuggest.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.AutoSuggest',superclass:'Uize.Widget.FormElement.Text',required:['Uize.Data.NameValueRecords','Uize.Node','Uize.Node.Event','Uize.String','Uize.Widget.Options.Selector'],builder:function(e_a){var e_b=true,e_c=false,e_d='',e_e=null,e_f,e_g=Uize,e_h=e_g.Data,e_i=e_g.Node,e_j=e_i.Event,e_k=Uize.String;var e_l=e_a.subclass(e_e,function(){var e_m=this,e_n=e_d;e_m.e_o=e_c;e_m.e_p=e_c;e_m.e_q=e_e;e_m.e_r=e_e;e_m.e_s=function(e_t){var e_u=e_t?e_m.e_v(e_m.e_r,e_t):e_m.e_v(e_m.e_q);e_m.e_p=e_b;if(e_u.text===e_m+e_d)e_m.set('value',e_d);e_m.set('value',e_u.text);e_m.e_p=e_c;e_m.setCaretPosition(e_u.position);e_m.e_r=e_m.e_w(e_u.text,e_u.position);};function e_x(e_y,e_z){if(e_m.e_A){if(e_y.tokenIndex!=e_z.tokenIndex){e_m.e_q=e_z;e_m.children.suggestions.set({tentativeValue:e_e,tentativeValueNo: -1,value:e_e,values:[]});e_m.e_B();}}}e_m.wire({Cancel:function(){e_m.e_p=e_b;e_m.set('value',e_n);e_m.e_p=e_c;},'Changed.focused':function(){var e_C=e_m.children.suggestions;if(e_m.get('focused'))
e_n=e_m+e_d;e_m.e_B();},'Changed.tentativeValue':function(e_D){if(!e_m.e_p&&e_m.get('focused')){clearTimeout(e_m.e_E);if(e_m.e_o){e_m.e_o=e_c;e_m.e_F();}else e_m.e_E=setTimeout(function(){e_m.e_F()},e_m.e_G);}},'Key Up':function(e_D){var e_y=e_m.e_r,e_H=e_D.domEvent;if(e_j.isKeyEscape(e_H)){e_m.e_q=e_m.e_r=e_m.e_w(e_n,-1);}else if(!(e_m.isWired&&e_m.e_I&&e_m.getNodeStyle('suggestionsPalette','display')!='none'&&(e_j.isKeyUpArrow(e_H)||e_j.isKeyDownArrow(e_H)))){e_m.e_r=e_m.e_w(e_m.get('tentativeValue'),e_m.getCaretPosition());if(!e_m.e_p&&e_m.get('focused'))e_m.e_q=e_m.e_r;}e_y&&e_x(e_y,e_m.e_r);e_m.e_J(e_D.domEvent);},Click:function(){var e_y=e_m.e_r;e_m.e_r=e_m.e_w(e_m.get('tentativeValue'),e_m.getCaretPosition());e_y&&e_x(e_y,e_m.e_r);},Ok:function(){e_m.set('focused',e_c)}});}),e_K=e_l.prototype;;var e_L={none:1,query:1,remaining:1};function e_M(e_N){return function(e_O){return Uize.constrain(e_O,e_N,Infinity)}}function e_P(e_Q,e_R){return((e_Q%e_R)+e_R)%e_R}e_K.e_S=function(){var e_m=this,
e_C=e_m.addChild('suggestions',e_m.e_T||Uize.Widget.Options.Selector,Uize.copyInto({built:e_c,html:e_b,optionWidgetProperties:{cssClassActive:'selectedSuggestion',cssClassSelected:'selectedSuggestion',cssClassTentativeSelected:'selectedSuggestion'},values:[]},e_m.e_U));e_C.wire({'Changed.tentativeValue':function(){e_m.e_V&&e_m.e_s(e_C.get('tentativeValue'))},'Option Event':function(e_D){if(e_D.childEvent.name==='Click'){e_m.e_V||e_m.e_s(e_C.get('tentativeValue'));e_m.set('focused',e_b);e_m.e_W(e_D.childEvent.source);}}});e_C.wireUi();return e_C;};e_K.e_W=function(e_X){var e_m=this;e_m.fire({name:'Suggestion Selected',option:e_X});e_m.e_q=e_m.e_r;e_m.children.suggestions.set({tentativeValue:e_e,tentativeValueNo: -1,value:e_e,values:[]});e_m.e_B();};e_K.e_v=function(e_r,e_t){var e_Y=e_r.tokens.concat(),e_Z=e_r.tokenIndex,e_0;if(e_t){e_Y[e_Z]=e_t;e_0=e_Y.join(e_d);}else e_0=e_r.query;return{text:e_0,position:e_Y.splice(0,e_Z+1).join(e_d).length};};e_K.e_1=function(e_r){return e_r?
e_k.trim(e_r.tokens.concat()[e_r.tokenIndex]).replace(/\s+/g,' '):e_d};e_K.e_w=function(e_2,e_3){var e_4=this.e_A,e_5=this.e_6,e_7=e_2.length,e_8=e_3,e_Y=[],e_Z= -1,e_9=e_d,e_ba=e_d,e_bb=e_c,e_bc=e_d,e_bd=0;if(e_4){e_4=Uize.lookup(Uize.isArray(e_4)?e_4:[e_4]);e_5=e_5?e_h.NameValueRecords.toHash(e_g.isArray(e_5)?typeof e_5[0]==='object'?e_5:e_g.map(e_5,function(e_be){return{open:e_be,close:e_be}}):typeof e_5==='object'?[e_5]:[{open:e_5,close:e_5}],'open','close'):{};while(++e_Z<e_7){e_ba=e_2[e_Z];if(!e_bb&&(e_bc=e_5[e_ba])){e_bb=true;e_9+=e_ba;}else if(e_bb&&e_ba===e_bc){e_bb=false;e_9+=e_ba;}else if(!e_bb&&e_4[e_ba]){e_Y.push(e_9);e_Y.push(e_ba);e_9=e_d;}else{e_9+=e_ba;}}if(e_9|| !e_Y.length)e_Y.push(e_9);}else e_Y.push(e_2);if(e_3== -1)e_bd= -1;else while(e_bd<e_Y.length-1&&(e_3-=e_Y[e_bd].length)>0)e_bd++;return{query:e_2,queryIndex:e_8,tokens:e_Y,tokenIndex:e_bd};};e_K.e_J=function(e_H){var e_m=this,e_bf=e_m.e_A,e_C=e_m.children.suggestions;if(e_m.isWired){if(e_m.e_I&&e_C&&
e_m.getNodeStyle('suggestionsPalette','display')!='none'){if(e_j.isKeyUpArrow(e_H)||e_j.isKeyDownArrow(e_H)){var e_bg=e_C.get('values').length,e_bh=e_j.isKeyUpArrow(e_H)? -1:e_j.isKeyDownArrow(e_H)?1:0,e_bi=e_C.get('tentativeValueNo'),e_bj=e_C.children['option'+e_bi],e_bk=e_C.children['option'+(e_P(e_bi+1+e_bh,e_bg+1)-1)];if(e_bh&&e_bj){e_bj.set('state',e_d);e_bj.fire('Out');}if(e_bh&&e_bk){e_bk.set('state','over');e_bk.fire('Over');}e_m.e_bl||e_m.e_s(e_C.get('tentativeValue'));}else if(e_C.get('tentativeValue')&&(e_j.isKeyEnter(e_H)||e_j.isKeyTab(e_H))){e_m.e_W(e_C.children['option'+e_C.get('tentativeValueNo')]);}else if(e_j.isKeyTab(e_H)){var e_bm=e_C.children['option0'];e_bm.set('state','over');e_bm.fire('Over');e_m.e_W(e_bm);}}}};e_K.e_F=function(){function e_bn(e_0){return'<span class="'+e_m.e_bo+'">'+e_0+'</span>'}var e_m=this,e_bp=e_m.children,e_bq=e_m.e_1(e_m.e_q);;if(e_bq!=e_m.get('defaultValue')&&e_bq.length>=e_m.e_br&&e_m.e_bs){e_m.ajax(Uize.pairUp('serviceUrl',e_m.e_bt,e_m.e_bu,e_bq,
e_m.e_bv,e_m.e_bs),function(e_bw){var e_C=e_bp.suggestions;(e_C||e_m.e_S()).set({tentativeValue:e_e,tentativeValueNo: -1,values:e_g.map(e_m.e_bx(e_bq,e_bw),function(e_t){var e_by=e_t.fullWord,e_bz=e_m.e_bz,e_bA=e_bz==='none'?e_by:e_bz==='query'?e_t.prefix+e_bn(e_bq)+e_t.suffix:e_t.fullWord.indexOf(e_bq)===0?e_bn(e_t.prefix)+e_bq+e_bn(e_t.suffix):e_bn(e_t.fullWord);return e_m.e_bB(e_by,e_bA);})});e_m.e_B();});}else if(e_bp.suggestions){e_bp.suggestions.set({tentativeValue:e_e,tentativeValueNo: -1,values:[]});e_m.e_B();}};e_K.e_B=function(){var e_m=this;if(e_m.isWired){var e_bC=e_m.getNode('input'),e_bD=e_m.getNode('suggestionsPalette'),e_bE=e_m.get('focused'),e_bF=e_m.children.suggestions&&e_m.children.suggestions.get('values').length;if(e_bE&&e_bF){e_m.showNode(e_bD,e_c);e_m.displayNode(e_bD);e_i.setAbsPosAdjacentTo(e_bD,e_bC,'y');e_m.setNodeStyle(e_bD,{minWidth:e_i.getDimensions(e_bC).width});e_m.showNode(e_bD);}else if(e_m.getNodeStyle('suggestionsPalette','display')!='none'){setTimeout(function(){
var e_C=e_m.children.suggestions;e_m.displayNode(e_bD,e_c);e_C&&e_C.set({tentativeValue:e_e,tentativeValueNo: -1,value:e_e,values:[]});},200);}}};e_K.fireOkOnEnter=function(){var e_C=this.children.suggestions;return!(e_C&&e_C.get('tentativeValue'));};e_K.updateUi=function(){var e_m=this;if(e_m.isWired){e_m.e_B();e_a.prototype.updateUi.call(e_m);}};e_K.wireUi=function(){var e_m=this,e_bG=document.body,e_bD=e_m.getNode('suggestionsPalette');if(!e_m.isWired){e_m.wireNode('input',{paste:function(){e_m.e_o=e_b},keydown:function(e_H){var e_C=e_m.children.suggestions;e_m.e_I&&(e_j.isKeyUpArrow(e_H)||e_j.isKeyDownArrow(e_H)||(e_j.isKeyTab(e_H)&&e_C&&e_C.get('values').length)||(e_j.isKeyEnter(e_H)&&e_C&&e_C.get('tentativeValue')))&&e_j.preventDefault(e_H);}});if(e_bD&&e_bD.parentNode!=e_bG){e_bG.insertBefore(e_bD,e_bG.childNodes[0]);e_m.setNodeStyle(e_bD,{display:'none',position:'absolute',zIndex:10000,left:e_d,top:e_d,right:e_d,bottom:e_d});}e_m.setNodeProperties('input',{autocomplete:"off"});
e_a.prototype.wireUi.call(e_m);}};e_l.registerProperties({e_I:{name:'allowKeypress',value:e_b},e_bo:{name:'cssClassHighlight',value:'suggestionHighlight'},e_bz:{name:'highlightMode',conformer:function(e_O){return e_L[e_O]?e_O:'query'},value:'query'},e_br:{name:'numCharsBeforeSuggest',conformer:e_M(1),value:1},e_bs:{name:'numSuggestions',conformer:e_M(0),value:10},e_bB:{name:'optionDataAdapter',value:function(e_by,e_bA){return{name:e_by,valueDetails:{name:e_by,displayName:e_bA}}}},e_T:'optionsWidgetClass',e_U:'optionsWidgetProperties',e_6:'queryQuotes',e_A:'querySeparators',e_bx:{name:'responseAdapter',value:function(e_bq,e_bw){return e_g.map(e_bw,function(e_by){return{prefix:e_d,suffix:e_by.substr(e_bq.length),fullWord:e_by}})}},e_bt:'serviceUrl',e_bu:{name:'serviceQueryParamName',value:'q'},e_bv:{name:'serviceNumSuggestionsParamName',value:'num'},e_bl:{name:'showOnMouseover',value:e_c},e_G:{name:'typeSuggestDelay',conformer:e_M(0),value:10}});return e_l;}});