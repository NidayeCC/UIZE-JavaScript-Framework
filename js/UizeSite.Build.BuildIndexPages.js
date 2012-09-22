/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Build.BuildIndexPages Namespace
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2009-2012 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.BuildIndexPages',required:['Uize.Wsh','Uize.Build.Util','Uize.Template','Uize.String','Uize.String.Lines','Uize.Json','Uize.Data','Uize.Array.Sort','Uize.Data.PathsTree','UizeSite.Build.Util'],builder:function(){var _a=function(){},_b=UizeSite.Build.Util.getFirstTitleSegment;function _c(_d,_e){Uize.Build.Util.processJstFile(_d,{files:_e});}_a.perform=function(_f){var _g=Uize.Build.Util.getHtmlFilesInfo('reference',_b);_c('javascript-explainers.html.jst',
Uize.Build.Util.getHtmlFilesInfo('explainers',_b));_c('javascript-modules-index.html.jst',_g);_c('javascript-widgets.html.jst',Uize.Build.Util.getHtmlFilesInfo('widgets',_b));var _h=Uize.Data.PathsTree.fromList(Uize.map(_g,'value.title'),'.');Uize.Build.Util.writeDataModule(env.moduleFolderPath,'UizeSite.ModulesTree',_h);var _i=Uize.Build.Util.getHtmlFilesInfo('examples',_b);Uize.Build.Util.writeDataModule(env.moduleFolderPath,'UizeSite.Examples',_i);Uize.Build.Util.processJstFile('javascript-examples-by-module.html.jst');var _j={'':_i};for(var _k= -1,_l=_i.length,_m;++_k<_l;){var _n=(_m=_i[_k]).keywords;if(_n){var _o=_n.split(' ');for(var _p= -1,_q=_o.length;++_p<_q;){var _r=_o[_p];Uize.String.startsWith(_r,'Uize')||(_j[_r]||(_j[_r]=[])).push(_m);}}}var _s=Uize.Build.Util.compileJstFile('javascript-examples.html.jst');for(var _r in _j)Uize.Wsh.writeFile({path:'javascript-'+_r+(_r&&'-')+'examples.html',text:_s({files:_j[_r],keyword:_r})});Uize.Build.Util.writeDataModule(
env.moduleFolderPath,'UizeSite.ExamplesInfoForSiteMap',{keywords:Uize.keys(_j).slice(1).sort(),tools:Uize.map(_j.tool,function(_t){return Uize.Data.filter(_t,['title','path'])})});var _u=Uize.Array.Sort.sortBy(Uize.Build.Util.getHtmlFilesInfo('news',_b),'value.title',-1),_v=Uize.Build.Util.compileJstFile('news.html.jst');var _w=_u.slice(0,50);Uize.Wsh.writeFile({path:'latest-news.html',text:_v({files:_w})});Uize.Build.Util.processJstFile('latest-news.rss.jst',{items:Uize.map(_w,function(_t){return{title:_t.title.replace(/^\d\d\d\d-\d\d-\d\d\s*-\s*/,''),date:_t.title.slice(0,10),link:'http://www.uize.com/'+_t.path,description:_t.description}})});Uize.Build.Util.processJstFile('index.html.jst',{latestNews:_w});var _x={};for(var _y= -1,_z=_u.length,_A,_B;++_y<_z;){var _B=(_A=_u[_y]).title.slice(0,4);(_x[_B]||(_x[_B]=[])).push(_A);}for(var _B in _x)Uize.Wsh.writeFile({path:'news-'+_B+'.html',text:_v({files:_x[_B],year:_B})});Uize.Build.Util.processJstFile('directory.html.jst');};return _a;}});