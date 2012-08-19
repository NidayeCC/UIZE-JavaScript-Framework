/*
	UIZE Web Site 2012-08-18

	http://www.uize.com/reference/UizeDotCom.Delve.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Delve',required:['UizeDotCom.ModulesTree','Uize.Widget.Tree.List','Uize.Widget.TextInput','Uize.Widget.Options.Tabbed','Uize.Widget.Log.InstanceEvents','Uize.Widget.TableSort','Uize.Xml','Uize.Util.Oop','Uize.Node','Uize.String','Uize.Data.PathsTree','Uize.Array.Sort','Uize.Json','Uize.Templates.HashTable','Uize.Tooltip'],superclass:'Uize.Widget.Page',builder:function(d_a){var d_b;function d_c(d_d){return'outerHTML'in d_d?d_d.outerHTML:new XMLSerializer().serializeToString(d_d);}var d_e={},d_f={},d_g=Uize.lookup(Uize.Data.PathsTree.toList(UizeDotCom.ModulesTree(),'.'),1,true),d_h=Uize.lookup(['Array','Boolean','Function','Number','Object','RegExp','String','Window','XMLHttpRequest'],1,true),d_i='-- object is undefined, not valid, or is not loaded on page --',d_j='------------------------------------------------------------------------------',d_k={d_l:'- - - - - - - - - - - - - - - - - - - - - - - - - - - -'},d_m={widgetsOnPageTree:{d_l:'All widgets on the page, as a tree',
d_n:function(){var d_o=this,d_p=[],d_q=d_o.d_r();if(d_q){function d_s(d_t,d_u){var d_v={title:d_o.d_w(d_t),link:d_x,expanded:!d_u,objectPath:d_o.d_y(d_t)},d_z=[];d_u++;for(var d_A= -1,d_B=d_t.children,d_C=Uize.keys(d_B).sort(),d_D=d_C.length;++d_A<d_D;)d_z.push(d_s(d_B[d_C[d_A]],d_u));if(d_z.length)d_v.items=d_z;return d_v;}d_p[0]=d_s(d_q,0);}return d_p;}},widgetsOnPageList:{d_l:'All widgets on the page',d_n:function(){return this.d_E()}},widgetsOnPageGroupedByClass:{d_l:'All widgets on the page, grouped by class',d_n:function(){var d_o=this,d_F=d_o.d_G(),d_H=Uize.keys(d_F);Uize.Array.Sort.sortBy(d_H,function(d_I){return(((10000-d_F[d_I].length)+'').slice(1)+d_I);});var d_p=[];for(var d_J= -1,d_K=d_H.length,d_I,d_L,d_M;++d_J<d_K;){if(d_M=(d_L=d_F[d_I=d_H[d_J]]).length)d_p.push({title:d_I+' ('+d_M+')',link:d_x,expanded:false,objectPath:d_I,items:Uize.map(d_L,function(d_N){var d_O=d_o.d_y(d_N);return{title:d_O,link:d_x,objectPath:d_O};})});}return d_p;}},widgetsDisabled:{
d_l:'Widgets that are in the disabled state',d_n:function(){return this.d_E(function(d_t){return!d_t.get('enabledInherited')});}},widgetsNotWired:{d_l:'Widgets that are not wired',d_n:function(){return this.d_E(function(d_t){return!d_t.isWired});}},wiredWidgetsMissingSomeNodeDOM:{d_l:'Wired widgets that are missing some DOM nodes',d_n:function(){var d_o=this;return d_o.d_E(function(d_t){var d_P=false;if(d_t.isWired){var d_Q=d_o.d_R(d_t);for(var d_S in d_Q){if(!d_Q[d_S]){d_P=true;break;}}}return d_P;});}},wiredWidgetsMissingAllNodeDOM:{d_l:'Wired widgets that appear to missing all DOM nodes',d_n:function(){var d_o=this;return d_o.d_E(function(d_t){var d_P=false;if(d_t.isWired){var d_Q=d_o.d_R(d_t);for(var d_S in d_Q){d_P=true;if(d_Q[d_S]){d_P=false;break;}}}return d_P;});}},widgetsWithLocalizedStringsSpecified:{d_l:'Widgets for which localized strings are specified',d_n:function(){return this.d_E(function(d_t){return!Uize.isEmpty(d_t.get('localized'))});}},widgetsWithRemappedNodes:{
d_l:'Widgets that have some remapped DOM nodes',d_n:function(){return this.d_E(function(d_t){return!Uize.isEmpty(d_t.get('nodeMap'))});}},widgetsWithValueInterface:{d_l:'Widgets that implement the value interface',d_n:function(){return this.d_E(function(d_t){return'value'in d_t.get()});}},divider1:d_k,builtModulesTree:{d_l:'All built modules, as a tree',d_n:function(){var d_o=this;function d_T(d_U,d_V,d_u){if(d_V){var d_p=[],d_W;for(var d_X in d_V)d_p.push({title:d_W=d_U+(d_U&&'.')+d_X,link:d_x,expanded:!d_u,objectPath:d_W,items:d_T(d_W,d_V[d_X],d_u+1)});return d_p;}}return d_T('',Uize.Data.PathsTree.fromList(d_o.d_Y(),'.'),0);}},builtModulesList:{d_l:'All built modules (listed in build order)',d_n:function(){return this.d_Z()}},widgetClasses:{d_l:'All widgets classes',d_n:function(){return this.d_0();}},widgetClassesInstancesCreated:{d_l:'Widget classes with instances created',d_n:function(){return this.d_0(true);}},widgetClassesNoInstancesCreated:{d_l:'Widget classes with no instances created',
d_n:function(){return this.d_0(false);}},nonWidgetClasses:{d_l:'All non-widget built modules',d_n:function(){var d_o=this;return d_o.d_Z(function(d_W){return!d_o.d_1(d_W)});}},uizeModules:{d_l:'All UIZE built modules',d_n:function(){return this.d_Z(d_2)}},nonUizeModules:{d_l:'All non-UIZE built modules',d_n:function(){return this.d_Z(function(d_W){return!d_2(d_W)});}},divider2:d_k,allWidgetDomNodes:{d_l:'All accessed widget DOM nodes',d_n:function(){return this.d_3();}},allPresentWidgetDomNodes:{d_l:'All present accessed widget DOM nodes',d_n:function(){return this.d_3(function(d_d){return d_d});}},allMissingWidgetDomNodes:{d_l:'All missing accessed widget DOM nodes',d_n:function(){return this.d_3(function(d_d){return!d_d});}},unaccessedWidgetDomNodes:{d_l:'All unaccessed widget DOM nodes',d_n:function(){return this.d_4(true)}},domNodesWithIdsNotBelongingToWidgets:{d_l:'DOM nodes with IDs not belonging to widgets',d_n:function(){return this.d_4(false)}}};var d_5='.children.';function d_6(d_7,d_8){return('<a'+
' href="javascript://"'+' class="objectLink"'+' title="'+Uize.Xml.toAttributeValue(d_8||d_7)+'"'+'>'+(d_7.indexOf(d_5)> -1?Uize.String.hugJoin(d_7.split(d_5),'<b>','</b>',d_5):d_7)+'</a>');}function d_2(d_W){return Uize.String.startsWith(d_W,'Uize');}function d_9(d_ba,d_l,d_bb,d_bc,d_bd,d_be){d_ba.push('<div class="objectInspectorTabContentsSectionTitle">'+d_l+(d_bb?('<span class="objectInspectorTabContentsSectionSubtitle">&nbsp;&nbsp;-&nbsp;&nbsp;'+d_bb+'</span>'):'')+'</div>',d_be?'<pre>':'',((Uize.isArray(d_bc)?d_bc.join('\n'):d_bc)||d_bd)+'\n',d_be?'</pre>':'');}var d_bf=d_a.subclass(function(){var d_o=this;d_o.d_bg=d_o.d_bh=d_f;},function(){var d_o=this;d_o.addChild('treeList',Uize.Widget.Tree.List,{levelClasses:['tree-list-level1','tree-list-level2','tree-list-level3','tree-list-level4'],iconTheme:'arrows-black',tooltip:'infoTooltip',tooltipTemplate:function(d_v){return d_o.d_bi(d_o.d_bj=d_v.objectPath);},iconBgColor:'',built:false}).wire({'After Show Tooltip':
function(d_bk){d_o.d_bl(d_bk.item.objectPath)},'After Hide Tooltip':function(){d_o.d_bm()}});var d_bn=d_o.addChild('objectEntry',Uize.Widget.TextInput);d_bn.wire('Changed.value',function(){d_o.set({d_bo:d_bn+''});d_o.d_bp();});d_o.addChild('objectInspectorTabs',Uize.Widget.Options.Tabbed,{bodyClassActive:'tabBodyActive',bodyClassInactive:'tabBodyInactive',value:'summary',values:['summary','state','features','documentation','eventsLog']}).wire('Changed.value',function(){d_o.d_bq()});d_o.addChild('objectInspectorSummary',Uize.Widget);d_o.addChild('objectInspectorState',Uize.Widget);d_o.addChild('objectInspectorFeatures',Uize.Widget).addChild('table',Uize.Widget.TableSort,{headingOverClass:'headingOver',headingLitClass:'headingLit',rowOverClass:'rowOver',cellTooltips:true});d_o.addChild('objectInspectorEventsLog',Uize.Widget.Log.InstanceEvents);d_o.d_br();d_o.d_bs();d_o.d_bt();}),d_bu=d_bf.prototype;d_bu.d_bv=function(d_bw){var d_bx=this.d_bx;if(d_bx&&d_bw){try{return d_bx.eval('('+d_bw+')')}catch(d_by){}}};
d_bu.d_bi=function(d_8){var d_o=this,d_bz=d_o.d_bA(d_8),d_bB=d_bz==d_b?d_bB+'':d_o.d_bC(d_bz)?'widget':Uize.Util.Oop.isUizeClass(d_bz)?'class':Uize.Node.isNode(d_bz)?'DOM node':d_bz.constructor==d_o.d_bx.Object?'simple object':typeof d_bz,d_bD={'what it is':d_bB};if(d_bz!=d_b)d_bD['instance of']=Uize.Util.Oop.getClassName(d_bz.constructor);if(d_bB=='widget'){var d_bE=0,d_bF=d_bz;while(d_bF=d_bF.parent)d_bE++;d_bD['depth in tree']=d_bE||'this is the root widget';d_bD.children=Uize.totalKeys(d_bz.children)||'no children';d_bD.siblings=(d_bz.parent&&(Uize.totalKeys(d_bz.parent.children)-1))||'no siblings';d_bD['localized strings']=Uize.totalKeys(d_bz.get('localized'))||'no localized strings';d_bD['DOM nodes']=d_o.d_bG(d_bz).d_bH;}else if(d_bB=='class'){d_bD.superclass=Uize.Util.Oop.getClassName(d_bz.superclass)||'this is the root class';d_bD['inheritance depth']=Uize.Util.Oop.getInheritanceChain(d_bz).length-1||'this is the root class';d_bD.subclasses=d_o.d_bI(d_bz).length||'no subclasses on this page';
if(d_o.d_1(d_bz))d_bD['widget instances']=d_o.d_bJ(function(d_t){return d_t.constructor==d_bz}).length||'no instances of this class';}else if(d_bB=='DOM node'){d_bD.id=d_bz.id;d_bD.tag=d_bz.tagName;var d_t=d_o.d_bK(d_bz.id);d_bD['owner widget']=d_t?d_o.d_y(d_t):'not owned by a widget';d_bD['owner widget class']=d_t?Uize.Util.Oop.getClassName(d_t.constructor):'not owned by a widget';}if(Uize.Util.Oop.isUizeClassInstance(d_bz)&&'value'in d_bz.get())d_bD.value=d_bz.valueOf();return('<div class="info-tooltip-heading">'+d_8+'</div>'+Uize.Templates.HashTable.process(d_bD));};d_bu.d_r=function(){var d_bx=this.d_bx;return d_bx&&(d_bx.zPage||d_bx.page);};d_bu.d_bL=function(){var d_q=this.d_r();return d_q&&(d_q==this.d_bx.zPage?'zPage':'page');};d_bu.d_w=function(d_t){return(d_t.get('name')||(d_t==this.d_r()?this.d_bL():''));};d_bu.d_Y=function(){var d_bM=this.d_bx.Uize;return((d_bM.getModulesBuilt&&d_bM.getModulesBuilt())||Uize.keys(d_bM.getModuleByName('*')));};d_bu.d_y=function(d_t){var d_o=this,d_O=[];while(d_t){
d_O.unshift(d_o.d_w(d_t));d_t=d_t.parent}return d_O.join('.children.');};d_bu.d_R=function(d_t){var d_o=this;if(!d_o.d_bN){var d_bO='THIS_IS_THE_NAME_FOR_A_NODE_THAT_SHOULD_NEVER_EXIST_IN_PRACTICE',d_Q;d_t.getNode(d_bO);for(var d_bP in d_t){var d_bQ=d_t[d_bP];if(d_bQ!=d_b&&typeof d_bQ=='object'&&d_bO in d_bQ){d_o.d_bN=d_bP;delete d_bQ[d_bO];break;}}}return d_t[d_o.d_bN]||{};};d_bu.d_bG=function(d_t){var d_o=this,d_Q=d_o.d_R(d_t),d_bR=Uize.copyInto({},d_Q),d_bS=d_t.get('idPrefix'),d_bT=d_bS+'-',d_bU=d_bT.length,d_bV={},d_bW=0,d_bX=0,d_bY=0,d_d;for(d_S in d_Q){if(d_d=d_Q[d_S]){d_bV[d_d.id]=1;d_bW++;}else{d_bX++;}}d_o.d_bx.Uize.Node.find({id:function(d_bZ){if(d_bZ&& !(d_bZ in d_bV)&&(d_bZ==d_bS||Uize.String.startsWith(d_bZ,d_bT))){d_bY++;d_bR[d_bZ.slice(d_bU)]=this;}}});var d_b0=d_bW+d_bX,d_b1=d_b0+d_bY,d_b2=d_b0==d_b1;return{d_Q:d_Q,d_bR:d_bR,d_b1:d_b1,d_b0:d_b0,d_bY:d_bY,d_bW:d_bW,d_bX:d_bX,d_bH:d_b1?d_b1+' ('+(d_b2?'all accessed':d_bY==d_b1?'none accessed':d_b0+' accessed, '+d_bY+' unaccessed')+(d_b0?(', '+(
d_b2&&(!d_bW|| !d_bX)?(d_bW?'all present':'all missing'):d_bX+' known missing')):'')+')':'no DOM nodes'};};d_bu.d_bK=function(d_bZ){var d_o=this;if(d_bZ){function d_b3(d_bF){if(d_bF.get('idPrefix')==d_bS){return d_bF;}else{var d_B=d_bF.children,d_t;for(var d_b4 in d_B){if(d_t=d_b3(d_B[d_b4]))return d_t;}}}var d_b5=d_bZ.indexOf('-'),d_bS=d_b5> -1?d_bZ.slice(0,d_b5):d_bZ;return d_b3(d_o.d_r());}};d_bu.d_bA=function(d_bz){return typeof d_bz=='string'?this.d_bv(d_bz):d_bz;};d_bu.d_Z=function(d_b6){var d_o=this,d_p=[],d_b7=d_o.d_Y();Uize.forEach(d_b6?d_b7.sort():d_b7,function(d_b8){d_b8&&(!d_b6||d_b6(d_b8))&&d_p.push({title:d_b8,link:d_x,objectPath:d_b8});});return d_p;};d_bu.d_bI=function(d_bf){var d_o=this;return d_o.d_Z(function(d_W){var d_b9=d_o.d_bA(d_W);return d_b9!=d_bf&&Uize.Util.Oop.inheritsFrom(d_b9,d_bf);});};d_bu.d_G=function(){var d_o=this,d_F={};d_o.d_bJ(function(d_t){var d_I=d_t.constructor.moduleName;(d_F[d_I]||(d_F[d_I]=[])).push(d_t);});return d_F;};d_bu.d_0=function(d_ca){var d_o=this,
d_F=d_o.d_G();return d_o.d_Z(function(d_W){return((d_ca==d_b|| !!(d_F[d_W]||d_e).length==d_ca)&&d_o.d_1(d_W));});};d_bu.d_bJ=function(d_cb){var d_o=this,d_cc=[];function d_cd(d_t,d_O){d_O+=d_o.d_w(d_t);(!d_cb||d_cb(d_t))&&d_cc.push(d_O);d_O+='.children.';var d_B=d_t.children;for(var d_b4 in d_B)d_cd(d_B[d_b4],d_O);}d_cd(d_o.d_r(),'');return d_cc;};d_bu.d_E=function(d_cb){var d_o=this;return Uize.map(d_o.d_bJ(d_cb).sort(),function(d_t){return{title:d_8,link:d_x,objectPath:d_8};});};d_bu.d_3=function(d_ce){var d_o=this,d_p=[];function d_cd(d_t){if(d_t){var d_Q=d_o.d_R(d_t),d_cf;for(var d_S in d_Q){var d_d=d_Q[d_S];(!d_ce||d_ce(d_d))&&d_p.push({title:'#'+(d_d?d_d.id||' [DOM NODE WITH NO ID]':d_t.get('idPrefix')+(d_S&&('-'+d_S))+' [MISSING]'),link:d_x,objectPath:(d_cf||(d_cf=d_o.d_y(d_t)+'.getNode (\''))+d_S+'\')'});}var d_B=d_t.children;for(var d_b4 in d_B)d_cd(d_B[d_b4]);}}d_cd(d_o.d_r());return d_p;};d_bu.d_4=function(d_cg){var d_o=this,d_ch={},d_ci={};function d_cd(d_t){if(d_t){d_ci[d_t.get('idPrefix')]=1;var
 d_Q=d_o.d_R(d_t),d_d,d_bZ;for(var d_S in d_Q){if((d_d=d_Q[d_S])&&(d_bZ=d_d.id))d_ch[d_bZ]=1;}var d_B=d_t.children;for(var d_b4 in d_B)d_cd(d_B[d_b4]);}}d_cd(d_o.d_r());return Uize.Array.Sort.sortBy(Uize.map(d_o.d_bx.Uize.Node.find({id:function(d_bZ){if(!d_bZ||d_ch[d_bZ])return false;var d_cj=d_ci[d_bZ];if(!d_cj){var d_b5=d_bZ.indexOf('-');d_cj=d_b5> -1&&d_ci[d_bZ.slice(0,d_b5)];}return d_cj==d_cg;}}),function(d_d){var d_bZ=d_d.id;return{title:'#'+d_bZ,link:d_x,objectPath:'document.getElementById (\''+d_bZ+'\')'};}),'value.title');};d_bu.d_1=function(d_bf){return Uize.Util.Oop.inheritsFrom(this.d_bA(d_bf),this.d_bx.Uize.Widget);};d_bu.d_bC=function(d_bz){return Uize.isInstance(d_bz)&&this.d_1(d_bz);};d_bu.d_ck=function(d_l,d_cl){var d_bx=this.launchPopup({name:'delveReport',width:980,height:650}),d_cm=d_bx.document;d_cm.open('text/html');d_cm.writeln(['<html>','<head>','<title>REPORT: '+d_l+'</title>','</head>','<body>','<pre>'+Uize.Xml.toAttributeValue(d_cl)+'</pre>','</body>','</html>'].join('\n'));
d_cm.close();d_bx.focus();};d_bu.d_cn=function(){var d_o=this,d_bz=d_o.d_co;if(d_o.isWired&&d_o.children.objectInspectorTabs+''=='summary'&&d_bz!==d_o.d_bg){var d_bo=d_o.d_bo,d_ba=[];if(d_bz!=d_b){var d_cp=d_o.d_bC(d_bz),d_cq= !d_cp&&d_o.d_1(d_bz);d_9(d_ba,'SUMMARY FOR','',d_6(d_bo),'',true);d_9(d_ba,'INSTANCE OF','',d_6(Uize.Util.Oop.getClassName(d_bz.constructor)),'',true);function d_cr(d_l,d_cc,d_bd){d_9(d_ba,d_l,d_cc.length+' widgets',d_cc.length?('<table class="objectInspectorTabContentsInfoTable">'+'<tr class="heading">'+'<td>WIDGET PATH</td>'+'<td>CLASS</td>'+'</tr>'+Uize.map(d_cc,function(d_t){d_t=d_o.d_bA(d_t);return('<tr>'+'<td>'+d_6(d_o.d_y(d_t))+'</td>'+'<td>'+d_6(Uize.Util.Oop.getClassName(d_t.constructor))+'</td>'+'</tr>');}).join('')+'</table>'):('<pre>'+d_bd+'</pre>'));}if(d_cp){var d_bF=d_bz.parent,d_cs=[];while(d_bF){d_cs.push(d_bF);d_bF=d_bF.parent;}d_cr('PARENTAGE',d_cs,'no parents');var d_ct=[],d_B=d_bz.children;for(var d_b4 in d_B)d_ct.push(d_B[d_b4]);d_cr('CHILDREN',d_ct,'no children');
var d_cu=[],d_cv=d_bz.parent&&d_bz.parent.children,d_cw;for(var d_cx in d_cv)(d_cw=d_cv[d_cx])!=d_bz&&d_cu.push(d_cw);d_cr('SIBLINGS',d_cu,'no siblings');var d_cy=d_o.d_bG(d_bz),d_Q=d_cy.d_Q,d_bR=d_cy.d_bR,d_cz=Uize.keys(d_bR).sort(),d_cA=d_o.d_y(d_bz)+'.getNode (\'';d_9(d_ba,'DOM NODES',d_cy.d_bH,d_cz.length?('<table class="objectInspectorTabContentsInfoTable">'+'<tr class="heading">'+'<td>NODE NAME</td>'+'<td>ACCESSED</td>'+'<td>EXISTS</td>'+'<td>ID</td>'+'<td>TAG</td>'+'</tr>'+Uize.map(d_cz,function(d_S){var d_d=d_bR[d_S],d_cB=d_S in d_Q;return('<tr>'+'<td>'+d_6(d_S||'[ROOT NODE]',d_cB?d_cA+d_S+'\')':'document.getElementById (\''+d_d.id+'\')')+'</td>'+'<td style="text-align:center;">'+(d_cB?'yes':'<b>NO</b>')+'</td>'+'<td style="text-align:center;">'+(d_d?'present':'<b>MISSING</b>')+'</td>'+'<td>'+(d_d?d_d.id:'-----')+'</td>'+'<td style="text-align:center;">'+(d_d?d_d.tagName:'-----')+'</td>'+'</tr>');}).join('')+'</table>'):'<pre>no DOM nodes</pre>');var d_cC=d_bz.get('localized'),
d_cD=Uize.keys(d_cC).sort(),d_cE=d_bo+'.localize (';function d_cF(d_cG){var d_cH=d_cC[d_cG],d_cI=0,d_cJ={},d_cK=/\{([^\}]+)\}/g,d_cL;while(d_cL=d_cK.exec(d_cH)){d_cJ[d_cL[1]]='';d_cI++;}return(d_cE+Uize.Json.to(d_cG)+(d_cI?','+Uize.Json.to(d_cJ,'mini'):'')+')');}d_9(d_ba,'LOCALIZED STRINGS',d_cD.length+' strings',d_cD.length?('<table class="objectInspectorTabContentsInfoTable">'+'<tr class="heading">'+'<td>NAME</td>'+'<td>VALUE</td>'+'</tr>'+Uize.map(d_cD,function(d_cG){return('<tr>'+'<td>'+d_6(d_cG,d_cF(d_cG))+'</td>'+'<td>'+d_cC[d_cG]+'</td>'+'</tr>');}).join('')+'</table>'):'<pre>no localized strings specified for this widget</pre>');var d_cM=d_bz.get('container')||d_bz.getNode('shell')||d_bz.getNode();d_9(d_ba,'HTML','',Uize.Xml.toAttributeValue(d_cM?d_c(d_cM):'this widget has no container node, shell node, or root node'),'',true);}else if(Uize.Util.Oop.isUizeClass(d_bz)){var d_cN=Uize.Util.Oop.getInheritanceChain(d_bz);d_9(d_ba,'INHERITANCE CHAIN','inheritance depth: '+(d_cN.length-1),Uize.map(d_cN,
function(d_bf){return d_6(d_bf.moduleName)}).join(' -> '),'this is the root class',true);var d_cO=d_o.d_bI(d_bz);d_9(d_ba,'SUBCLASSES (ON THIS PAGE)',d_cO.length+' subclasses',Uize.map(d_cO,function(d_v){return(d_6(d_v.title)+(d_o.d_bA(d_v.objectPath).superclass==d_bz?' - <b>DIRECT SUBCLASS</b>':''));}),'no subclasses on this page',true);d_cq&&d_cr('INSTANCES OF THIS WIDGET CLASS',d_o.d_bJ(function(d_t){return d_t.constructor==d_bz}),'no widgets of this class instantiated');}else if(Uize.Node.isNode(d_bz)){var d_t=d_o.d_bK(d_bz.id);d_9(d_ba,'OWNER WIDGET','',d_t?d_6(d_o.d_y(d_t)):'','this node does not appear to belong to a widget',true);d_9(d_ba,'ID','',d_bz.id,'no id specified for this node',true);d_9(d_ba,'TAG','',d_bz.tagName,'',true);d_9(d_ba,'HTML','',Uize.Xml.toAttributeValue(d_c(d_bz)),'',true);}else if(Uize.Util.Oop.isUizeClass(d_bz)||Uize.Util.Oop.isUizeClassInstance(d_bz)){}else if(Uize.isFunction(d_bz)){d_9(d_ba,'CODE','',Uize.Xml.toAttributeValue(d_bz.toString()),'',true);}else{d_9(
d_ba,'TO STRING','',Uize.Xml.toAttributeValue(d_bz.toString()),'',true);d_9(d_ba,'JSON SERIALIZATION','',Uize.Xml.toAttributeValue(Uize.Json.to(d_bz)),'',true);}}else{d_ba.push('<br/>'+d_i);}d_o.d_cP(d_o.children.objectInspectorSummary,d_ba);d_o.d_bg=d_bz;}};d_bu.d_cQ=function(){var d_o=this,d_bz=d_o.d_co;if(d_o.isWired&&d_o.children.objectInspectorTabs+''=='state'&&d_bz!==d_o.d_cR){var d_ba=[];if(Uize.Util.Oop.isUizeClass(d_bz)||Uize.Util.Oop.isUizeClassInstance(d_bz)){var d_bo=d_o.d_bo,d_cS=['<table class="objectInspectorTabContentsInfoTable">'+'<tr class="heading">','<td>NAME</td>','<td>ACTIONS</td>','<td>VALUE</td>','</tr>'];for(var d_cT= -1,d_cU=d_bz.get(),d_cV=Uize.keys(d_cU).sort(),d_cW=d_cV.length,d_cX=d_bo+'.get (\'',d_cY=d_bo+'.set (\'',d_X;++d_cT<d_cW;)(d_X=d_cV[d_cT]).indexOf('_')<0&&d_cS.push('<tr>','<td>',d_6(d_X,d_cX+d_X+'\')'),'</td>','<td style="white-space:nowrap; text-align:center;">',d_6('get',d_cX+d_X+'\')'),' | ',d_6('set',d_cY+d_X+'\',#)'),'</td>',
'<td>'+Uize.Xml.toAttributeValue(d_cU[d_X])+'</td>','</tr>');d_cS.push('</table>');d_9(d_ba,'STATE PROPERTIES',d_cW+' properties',d_cW?d_cS.join(''):'<pre>this class has no state properties</pre>');}else{d_ba.push('<br/>'+'-- object does not support a state properties state interface --');}d_o.d_cP(d_o.children.objectInspectorState,d_ba);d_o.d_cR=d_bz;}};d_bu.d_cZ=function(){var d_o=this,d_bz=d_o.d_co;if(d_o.isWired&&d_o.children.objectInspectorTabs+''=='features'&&d_bz!==d_o.d_bh){var d_ba=[];if(d_bz!=d_b){var d_c0=Uize.Util.Oop.getFeatures(d_bz),d_c1=d_c0.length;if(d_c1){var d_8=Uize.Util.Oop.getClassName(d_bz=Uize.Util.Oop.resolveToClass(d_bz));function d_c2(d_bz){return('<td class="moduleName">'+d_6(Uize.Util.Oop.getClassName(d_bz),'',true)+'</td>');}d_ba.push('<table id="'+d_o.children.objectInspectorFeatures.children.table.get('idPrefix')+'" class="data">','<tr class="title">','<td colspan="6">','Features detected for '+d_8,'</td>','</tr>','<tr class="heading">','<td>NAME</td>','<td>ACCESS</td>',
'<td>CONTEXT</td>','<td>TYPE</td>','<td>INTRODUCED IN</td>','<td>LAST OVERRIDDEN IN</td>','</tr>');for(var d_c3= -1,d_c4=d_8+'.prototype.';++d_c3<d_c1;){var d_c5=d_c0[d_c3];d_ba.push('<tr>','<td class="featureName">'+(d_c5.context=='State'?d_c5.name:d_6(d_c5.name,d_c5.context=='Instance'?d_c4+d_c5.name:'',true))+'</td>','<td>'+d_c5.access+'</td>','<td>'+d_c5.context+'</td>','<td>'+d_c5.type+'</td>',d_c2(d_c5.introducedIn),d_c2(d_c5.overriddenIn),'</tr>');}d_ba.push('</table>');}else{d_ba.push('<br/>-- no features could be automatically detected for this object');}}else{d_ba.push('<br/>'+d_i);}d_o.d_cP(d_o.children.objectInspectorFeatures,d_ba);d_o.d_bh=d_bz;}};d_bu.d_bq=function(){var d_o=this;d_o.d_cn();d_o.d_cQ();d_o.d_cZ();d_o.d_c6();};d_bu.d_bt=function(){var d_c7=this.children.objectInspectorEventsLog;d_c7&&d_c7.set({instance:this.d_co});};for(var d_c8 in{d_c9:1});var d_x='javascript:page.'+d_c8+' ()';d_bu.d_c9=function(){this.set({d_bo:this.d_bj});};d_bu.d_br=function(){var d_o=this,
d_da=d_o.children.treeList;if(d_da){var d_n=d_m[d_o.d_db].d_n;d_da.set({items:d_n?d_n.call(d_o):[]})}};d_bu.d_dc=function(){var d_o=this;if(d_o.isWired){d_o.setNodeValue('treeListDropdown',d_o.d_db);}};d_bu.d_bs=function(){var d_bn=this.children.objectEntry;d_bn&&d_bn.set({value:this.d_bo});};d_bu.d_bp=function(){var d_o=this,d_co=d_o.d_co,d_bo=d_o.d_bo,d_dd=d_g[d_bo]&&d_bo;if(!d_dd&&d_co!=d_b){d_dd=Uize.Util.Oop.getClassName(Uize.Util.Oop.resolveToClass(d_co));if(!d_2(d_dd)){var d_bf=d_o.d_bA(d_dd);if(Uize.Util.Oop.isUizeClass(d_bf))while((d_dd=(d_bf=d_bf.superclass).moduleName)&& !d_2(d_dd));}}d_o.set({d_de:d_o.d_df+'/'+((d_dd&&(d_2(d_dd)?'reference/'+d_dd+'.html':d_h[d_dd]?'javascript-reference/'+d_dd+'.html':null))||'explainers/using-the-delve-tool.html')});};d_bu.d_c6=function(){var d_o=this;if(d_o.isWired&&d_o.children.objectInspectorTabs+''=='documentation'){var d_de=d_o.d_de;if(d_de!=d_o.d_dg){var d_dh=d_o.getNode('documentation').contentWindow;if(d_dh)d_dh.location.href=d_de;d_o.d_dg=d_de;}}};
d_bu.d_di=function(){var d_o=this;if(d_o.isWired){var d_bx=d_o.d_bx;d_o.setNodeValue('windowInspected',d_bx?Uize.String.limitLength(d_bx.location.href,120):'no window being inspected');d_o.setNodeProperties('windowInspected',{title:d_bx?d_bx.document.title:''});}};d_bu.d_dj=function(){var d_o=this,d_bo=d_o.d_bo;d_o.d_br();d_o.d_di();d_o.set({d_bo:''});d_o.set({d_bo:d_bo});};d_bu.d_bl=function(d_8){var d_o=this,d_bz=d_o.d_bA(d_8),d_cp=d_o.d_bC(d_bz),d_dk= !d_cp&&Uize.Node.isNode(d_bz);if(d_cp||d_dk){var d_bx=d_o.d_bx,d_dl=d_bx.Uize.Node.getCoords,d_dm;if(d_dk){d_dm=d_dl(d_bz);}else{var d_dn=Infinity,d_do= -Infinity,d_dp=Infinity,d_dq= -Infinity;function d_dr(d_ds){if(d_ds.area&&d_ds.seen){if(d_ds.left<d_dn)d_dn=d_ds.left;if(d_ds.top<d_dp)d_dp=d_ds.top;if(d_ds.right>d_do)d_do=d_ds.right;if(d_ds.bottom>d_dq)d_dq=d_ds.bottom;}}function d_cd(d_t){var d_Q=d_o.d_R(d_t),d_d;for(var d_S in d_Q)if(d_d=d_Q[d_S])d_dr(d_dl(d_d));var d_B=d_t.children;for(var d_b4 in d_B)d_cd(d_B[d_b4]);}d_cd(d_bz);if(d_dn!=Infinity){var
 d_dt=d_do-d_dn+1,d_du=d_dq-d_dp+1;d_dm={left:d_dn,right:d_do,top:d_dp,bottom:d_dq,width:d_dt,height:d_du,area:d_dt*d_du,seen:true};}}if(d_dm&&d_dm.area&&d_dm.seen){d_cm=d_bx.document;d_cm.body.appendChild(d_o.d_dv=d_cm.createElement('DIV'));Uize.Node.setStyle(d_o.d_dv,{position:'absolute',zIndex:1000000,left:d_dm.left,top:d_dm.top,width:d_dm.width,height:d_dm.height,background:'#ffa200'});Uize.Node.setOpacity(d_o.d_dv,.5);}}};d_bu.d_bm=function(){Uize.Node.remove(this.d_dv);this.d_dv=null;};d_bu.d_cP=function(d_dw,d_ba){var d_o=this;function d_dx(d_dy){if(!d_dy.title){d_dy.title=d_dy.UizeDotCom_Delve_a;Uize.Tooltip.showTooltip('infoTooltip',false);d_o.d_bm();}}d_dw.unwireUi();d_dw.setNodeInnerHtml('',d_ba.join(''));d_dw.setNodeProperties('',{scrollTop:0});d_dw.wireUi();d_dw.wireNode(Uize.Node.find({root:d_dw.getNode(),tagName:'a',className:'objectLink'}),{mouseover:function(){var d_l=this.UizeDotCom_Delve_a=this.title;this.title='';Uize.Node.setInnerHtml('infoTooltip',d_o.d_bi(d_l));
Uize.Tooltip.showTooltip('infoTooltip',true);d_o.d_bl(d_l);},mouseout:function(){d_dx(this)},click:function(){d_dx(this);d_o.children.objectInspectorTabs.set({value:'summary'});d_o.set({d_bo:this.title||this.title});}});};d_bu.updateUi=function(){var d_o=this;if(d_o.isWired){d_o.d_di();d_o.d_dc();d_o.d_bq();d_a.prototype.updateUi.call(d_o);}};d_bu.wireUi=function(){var d_o=this;if(!d_o.isWired){d_o.wireNode(window,'unload',function(){d_o.d_bm();d_o.set({objectInspectedPath:''});});d_o.wireNode('refresh','click',function(){d_o.d_dj()});d_o.wireNode('getWidgetFromNodeId','click',function(){var d_bZ=prompt('Enter a DOM node id...','');if(d_bZ){var d_t=d_o.d_bK(d_bZ);d_t?d_o.set({d_bo:d_o.d_y(d_t)}):alert('The DOM node with the ID "'+d_bZ+'" does not appear belong to a widget.');}});d_o.wireNode('help','click',function(){d_o.children.objectInspectorTabs.set({value:'documentation'});d_o.set({d_bo:''});});d_o.wireNode('close','click',function(){top.close()});var d_dz=d_o.getNode('treeListDropdown');if(d_dz){
var d_dA=d_dz.options;for(var d_dB in d_m)d_dA[d_dA.length]=new Option(d_m[d_dB].d_l,d_dB);}d_o.wireNode(d_dz,'onchange',function(){d_o.set({treeListQuery:d_o.getNodeValue(d_dz)})});d_o.wireNode('expandTreeListOneLevel','click',function(){d_o.children.treeList.setExpandedDepth(1)});d_o.wireNode('expandTreeListTwoLevels','click',function(){d_o.children.treeList.setExpandedDepth(2)});d_o.wireNode('expandTreeListThreeLevels','click',function(){d_o.children.treeList.setExpandedDepth(3)});d_o.wireNode('expandTreeListAll','click',function(){d_o.children.treeList.setExpandedDepth(Infinity)});d_o.wireNode('getTreeListItemsAsReport','click',function(){var d_dC=d_m[d_o.d_db].d_l,d_dD=[];d_o.children.treeList.traverseTree({itemHandler:function(d_v,d_dE,d_bE){d_dD.push(Uize.String.repeat('\t',d_bE)+d_v.title);}});d_o.d_ck(d_dC,'REPORT FOR: '+d_o.d_bx.location.href+'\n'+d_j+'\n'+'REPORT TYPE: '+d_dC+' ('+d_dD.length+' items)\n'+d_j+'\n'+d_dD.join('\n'));});d_o.wireNode('getAllQueriesSummary','click',function(){
var d_dF=[];for(var d_dB in d_m){var d_db=d_m[d_dB],d_n=d_db.d_n;function d_dG(d_p){if(!d_p)return 0;var d_dH=d_p.length;for(var d_dI=d_dH;--d_dI> -1;)d_dH+=d_dG(d_p[d_dI].items);return d_dH;}d_dF.push(d_db.d_l+(d_n?(' -- '+d_dG(d_n.call(d_o))+' items'):''));}d_o.d_ck('Summary of all available queries','SUMMARY OF ALL AVAILABLE QUERIES FOR: '+d_o.d_bx.location.href+'\n'+d_j+'\n'+d_dF.join('\n'));});d_a.prototype.wireUi.call(d_o);d_o.set({d_bo:d_o.d_bL()});}};d_bf.registerProperties({d_df:{name:'baseUrl',value:''},d_de:{onChange:d_bu.d_c6},d_co:{name:'objectInspected',onChange:[d_bu.d_bq,d_bu.d_bt]},d_bo:{name:'objectInspectedPath',conformer:function(d_dJ){return(!this.d_bA(d_dJ)&&this.d_bx&&this.d_bx.document.getElementById(d_dJ)?'document.getElementById (\''+d_dJ+'\')':d_dJ);},onChange:[function(){this.set({d_co:this.d_bA(this.d_bo)})},d_bu.d_bs],value:''},d_db:{name:'treeListQuery',onChange:[d_bu.d_br,d_bu.d_dc],value:'widgetsOnPageTree'},d_bx:{name:'window',onChange:[function(){this.d_bN=d_b},d_bu.d_br,
d_bu.d_di]}});return d_bf;}});