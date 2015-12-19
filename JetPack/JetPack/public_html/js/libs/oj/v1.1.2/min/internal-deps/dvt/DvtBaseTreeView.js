/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.ER=(0,D.t)();(0,D.ca)("DvtBaseTreeView",D.ER);D.z.q(D.ER,D.Oj,"DvtBaseTreeView");D.ER.prototype.Init=function(a,b,c){D.ER.u.Init.call(this,a,b,c);this.hb=this.mI(this,a,this.Wa,this);this.hb.We(this);this.Cd=new D.Nu(a);this.ul=new D.tV(this);(0,D.Br)(this.hb,this.Cd);this.Hb=D.o;this.Kka=D.p;this.YP=D.o};D.ER.prototype.Ud=function(a){a?(this.J=this.Of.wj(a),(0,D.rl)()||(this.J.animationOnDisplay="none",this.J.animationOnDataChange="none")):this.J||(this.J=(0,D.Tj)(this))};
D.ER.prototype.U=function(a,b,c){var d=a||!this.J;this.Ud(a);var e=this.A();if(e.nodes==D.o)a=D.o;else{a=[];for(var f=D.eg.LL(e.hiddenCategories),g=0;g<e.nodes.length;g++){var h=e.nodes[g];h._index=g;(h=(0,D.AV)(this,f,h))&&a.push(h)}if(1==a.length)a=a[0];else{for(var g=e=0;g<a.length;g++)e+=a[g].$c();g=this.Sp({value:e,kGa:D.k});(0,D.yV)(g,a);a=g}}this.aN({root:a});!(0,window.isNaN)(b)&&!(0,window.isNaN)(c)&&(this.Za=b,this.ob=c);this.hb&&this.hb.Mc();c=new D.B(0,0,this.Za,this.ob);this.Wp(c);b=
new D.D(this.j());this.k(b);this.JY&&(this.Ec=new D.Tg(this.j(),this.hb),this.Ec.WK=D.k);this.Kj(b,c);this.Rp&&(this.I0=D.k,this.Rp.stop());a=this.A().animationOnDataChange;g=new D.B(0,0,this.Za,this.ob);c=D.p;this.ga?a&&d&&(D.wl.isSupported(a)?(this.Rp=D.wl.fD(this.j(),a,this.ga,b,g,this.fI),c=D.k):this.gQ&&"auto"==a&&(this.yf=this.z1(),this.k(this.yf),a=new D.qV(this.j(),this.yf),g=this.gQ,e=this.Ra,f=this.BX,h=this.XI,a.jO=D.p,a.gQ=g,a.BX=f,(0,D.rV)(h,g)||(0,D.rV)(f,e)?(a.jO=D.k,f=(0,D.iS)(g),
h=(0,D.iS)(e),f.push(g),h.push(e),(0,D.Hn)(a,f,h)):(0,D.Hn)(a,[g],[e]),this.Rp=a.Ur(D.k))):this.Rp=this.A1(b,g);this.BX=this.gQ=D.o;this.Rp&&(this.hb.zk(this),this.Rp.le(this.br,this),this.Rp.play());c?this.sj=this.ga:this.ga&&this.removeChild(this.ga);this.ga=b;d?this.Oz():this.O2();(0,D.BV)(this,!this.Rp);this.Rp||(0,D.CV)(this);this.Ro()};D.ER.prototype.render=D.ER.prototype.U;D.ER.prototype.EI=(0,D.ba)(D.o);D.ER.prototype.Wp=(0,D.t)();D.ER.prototype.Kj=(0,D.t)();
D.KR=function(a,b){var c=new D.F(a.j(),0,0,a.Za,a.ob);(0,D.Li)(c);b.k(c)};D.HR=function(a,b){if(0<a.XI.length){var c=a.Ra?a.Ra.Zc():D.o;a.Um&&(0,D.Ks)(a.hb,a.Um.Ah());a.Um=D.DV.U(a,b,a.XI,c);(0,D.Ls)(a.hb,a.Um.Ah())}else a.Um&&(0,D.Ks)(a.hb,a.Um.Ah()),a.Um=D.o};D.OR=function(a,b){var c=a.A(),d=c.emptyText;d||(d=(0,D.Gk)(c,"labelNoData","DvtUtilBundle","NO_DATA"));D.af.jl(b,d,new D.B(0,0,a.Za,a.ob),a.za())};D.LR=function(a){return a.Ra&&0<a.Ra.$c()};D.y=D.ER.prototype;
D.y.A1=function(a,b){var c=this.A().animationOnDisplay;return D.wl.isSupported(c)?D.wl.jD(this.j(),c,a,b,this.fI):D.o};D.y.br=function(){this.yf&&(this.removeChild(this.yf),this.yf=D.o);this.sj&&(this.removeChild(this.sj),this.sj=D.o);this.I0=D.p;this.Rp=D.o;this.hb.We(this);(0,D.BV)(this,D.k);(0,D.CV)(this)};D.y.z1=function(){return new D.D(this.j())};D.y.ow=function(a){return new D.xV(a)};D.y.mI=function(a,b,c,d){return new D.ZR(a,b,c,d)};D.y.vea=(0,D.aa)();
D.y.Fe=function(a){this.A().highlightedCategories=D.Jl.ea(a);(0,D.Kl)(a,D.wV.xR(this.Ra),"any"==this.A().highlightMatch)};D.ER.prototype.highlight=D.ER.prototype.Fe;D.ER.prototype.select=function(a){var b=this.A();b.selection=D.Jl.ea(a);this.Ob&&(a=D.wV.xR(this.Ra),(0,D.om)(this.Ob,b.selection,a))};D.ER.prototype.select=D.ER.prototype.select;D.ER.prototype.za=(0,D.x)("hb");
D.ER.prototype.aN=function(a){var b=this.A();this.gQ=this.Ra;this.BX=this.XI;this.Ra=a.root;this.XI=b._ancestors?b._ancestors:[];this.Fr=this.Ra?D.wV.Apa(this.Ra):0;this.qt=this.Ra?D.wV.zpa(this.Ra,0):0;this.fI=(0,D.Zp)(b.animationDuration)/1E3;this.Moa=a.YMa?a.YMa:{};(this.W7="none"==b.selectionMode?D.o:"single"==b.selectionMode?"s":"m")?(this.Ob=new D.sl(this.W7),this.P6=b.selection):this.Ob=D.o;this.hb.ju(this.Ob);(0,D.ql)(this.hb,this.ow(this.hb));this.kX=D.o;this.Pha=[];if(b.attributeGroups){a=
D.wV.xR(this.Ra);for(var c=0;c<b.attributeGroups.length;c++){var d=b.attributeGroups[c],e=D.o;if("continuous"==d.attributeType)D.wV.sGa(d,a),e=new D.kR(d.min,d.max,d.minLabel,d.maxLabel,d.colors);else for(var e=new D.lR,f=0;f<d.groups.length;f++){var g=d.groups[f];e.add(g.id,g.label,{color:g.color,pattern:g.pattern})}this.Pha.push({hGa:e,XMa:d.S,id:d.id});!b._adf&&!b._legendSource&&0==c?this.kX=e:b._legendSource&&b._legendSource==d.id&&(this.kX=e)}D.wV.fMa(this.Pha,a)}if((a=b._contextMenus)&&0<a.length)this.hb.eN=
new D.dw(this.j(),a);if(b=b._templates){this.JY={};for(var h in b)a=D.ye.OS(b[h]),this.JY[h]=a}};D.ER.prototype.O2=function(){for(var a=this.Ob?this.Ob.getSelection():[],b=0;b<a.length;b++)a[b].rb(D.k)};D.ER.prototype.Oz=function(){if(this.Ob&&this.P6){var a=D.wV.xR(this.Ra);(0,D.om)(this.Ob,this.P6,a);this.P6=D.o}};D.CV=function(a){var b=a.A().highlightedCategories;b&&0<b.length&&a.Fe(b)};
D.BV=function(a,b){var c=D.o,d=a.YP;d&&(c=(0,D.zV)(a.Ra,d),a.hb.fu(c));b&&(a.YP=D.o);c||(c=a.vea(a.Ra),a.hb.fu(c));b&&a.Hp(a.G_())};D.y=D.ER.prototype;D.y.Hp=function(a){this.Kka=a;this.hb.Hp(a)};D.y.G_=(0,D.x)("Kka");D.y.LE=function(a,b){return this.Ra.qD(a,b)};D.y.TI=function(a){return this.Ob?a[0]:D.o};D.y.FB=function(a){a.Fa()||(this.Ob.Cm(a,D.p),this.hb.Dv());a=[];for(var b=this.Ob.getSelection(),c=0;c<b.length;c++)a.push(b[c].getId());return a};
D.y.EB=function(){for(var a=[],b=this.Ob.getSelection(),c=0;c<b.length;c++)a.push(b[c].xa());return a};D.y.uu=function(a){this.If&&(this.removeChild(this.If),this.If=D.o);if(a&&(this.If=a.gH()))a=this.A().styleDefaults,this.If.va(a._dropSiteFillColor,a._dropSiteOpacity),this.If.Ya(a._dropSiteBorderColor),this.k(this.If);return this.If};D.y.xya=function(a){a instanceof D.At&&(0,D.uV)(this,a.getId(),D.p)};
D.uV=function(a,b,c){c&&a.Ra&&b==a.Ra.getId()&&0<a.XI.length?(a.YP=b,a.Wa(new D.LC(a.XI[0].id))):c||a.Wa(new D.LC(b));a.j().jd().Mc()};D.ER.prototype.Gaa=function(a){return(0,D.Xj)(this.hb,a)};D.ER.prototype.Sp=(0,D.ba)(D.o);D.ER.prototype.GZ=(0,D.ba)(D.o);D.ER.prototype.dg=function(){return new D.EV(this)};D.ER.prototype.getAutomation=D.ER.prototype.dg;D.ER.prototype.jaa=(0,D.x)("Um");
D.AV=function(a,b,c){if(D.wV.YKa(b,c))return D.o;var d=a.Sp(c);if(d.lb()){var e=[];c=c.nodes?c.nodes:[];for(var f=0;f<c.length;f++){var g=c[f];g._index=f;(g=(0,D.AV)(a,b,g))&&e.push(g)}(0,D.yV)(d,e)}return d};D.NR=function(a,b){if((0,D.Mf)()||(0,D.zf)())for(var c=D.wV.CHa(b),d=0;d<c.length-1;d++){var e=a.getId()+(c[d+1].getId()?c[d+1].getId():c[d+1].Zc()),e=e.replace(/\s+/g,"");c[d+1].xa().setId(e,D.k);c[d].xa().Mb("flowto",e)}};
D.y=D.ER.prototype;D.y.Ej=function(a,b,c){return this.Cd.Ej(c)};D.y.tk=function(a,b){return this.Cd.tk(a,b)};D.y.Tt=function(a,b){return this.Cd.Tt(a,b)};D.y.po=function(a,b){return this.Cd.po(a,b)};D.y.Gv=function(a,b){return this.Cd.Gv(a,b)};D.y.Nv=function(a,b){return this.Cd.Nv(a,b)};D.y.Sv=function(){this.Cd.Sv()};D.y.Sr=function(){this.Cd.Sr()};
D.ER.prototype.lo=function(a,b,c){return this.ul.lo(a,b,c)};D.ER.prototype.Xr=function(a,b){return this.ul.Xr(a,b)};
D.qV=function(a,b){this.Init(a,b)};D.z.q(D.qV,D.Gn,"DvtBaseTreeAnimationHandler");D.rV=function(a,b){if(!b||!a)return D.p;for(var c=0;c<a.length;c++)if(a[c].id==b.getId())return D.k;return D.p};
D.tV=(0,D.v)("K");D.z.q(D.tV,D.Pu,"DvtBaseTreeDropTarget");D.tV.prototype.lo=function(a,b,c){if(a=this.K.LE(a,b))a!=this.vF&&(this.K.uu(a),this.vF=a);else return this.K.uu(D.o),D.o;return c[0]};D.tV.prototype.Xr=function(a,b){var c=this.K.LE(a,b);return c?{zGa:c.getId()}:D.o};
D.ZR=function(a,b,c,d){this.Init(b,c,d);this.K=a};D.z.q(D.ZR,D.hk,"DvtBaseTreeEventManager");D.y=D.ZR.prototype;D.y.xy=function(a){var b=(0,D.Xj)(this,a.target);b&&(a=a.shiftKey,b.Oq&&b.Oq()&&(0,D.uV)(this.K,b.getId(),a))};D.y.Ih=function(a){D.ZR.u.Ih.call(this,a);a=(0,D.Xj)(this,a.target);(0,D.vV)(this,a)};D.y.zy=function(a){D.ZR.u.zy.call(this,a);(a=(0,D.Xj)(this,a.target))&&a.vA&&a.vA()};
D.y.Lm=function(a){D.ZR.u.Lm.call(this,a);var b=(0,D.Xj)(this,a.target);b&&b.Zt&&(a=(a=(0,D.Xj)(this,a.relatedTarget))&&a.getId?a.getId():D.o,(b.getId()==D.o||a!=b.getId())&&b.Zt())};D.y.Jh=function(a){var b=D.p,b=this.Od();13==a.keyCode&&!a.ctrlKey?(b=this.Od(),b.Oq&&b.Oq()&&(a.shiftKey&&(b=this.K.Ra),(0,D.uV)(this.K,b.getId(),a.shiftKey)),(0,D.ti)(a),b=D.k):b=D.ZR.u.Jh.call(this,a);return b};
D.y.ys=function(a){a=(0,D.Xj)(this,a.target);(0,D.vV)(this,a);this.KO&&this.KO!=a&&(this.KO.Zt(),this.KO=D.o);a&&a instanceof D.cS&&this.KO!=a&&(this.KO=a,a.vA())};D.y.jB=function(a){(a=(0,D.Xj)(this,a.target))&&a.Oq&&a.Oq()&&(0,D.uV)(this.K,a.getId(),D.p)};D.vV=function(a,b){b&&(b instanceof D.MR&&b.xi())&&(0,D.uV)(a.K,b.getId(),D.p)};
D.ZR.prototype.Yp=function(a,b,c){var d=this.K.A();if("dim"==d.hoverBehavior){b=b.Vc?b.Vc():[];d.highlightedCategories=c?b.slice():D.o;c=new D.kn(c?"categoryRollOver":"categoryRollOut",d.highlightedCategories);b=D.wV.xR(this.K.Ra);var e=(0,D.Zp)(d.hoverBehaviorDelay);this.uB.Rd(c,b,e,"any"==d.highlightMatch);a.stopPropagation()}};
D.cS=(0,D.t)();D.z.q(D.cS,D.z,"DvtBaseTreeNode");D.QR=new D.Ep("#000000",2,5,5,45,0.5);
D.cS.prototype.Init=function(a,b){this.K=a;this.je=b;var c=this.K.A().nodeDefaults;this.ib=b.id;this.fk=b.color?b.color:"#000000";this.YC=b.label;this.cp="string"==typeof b.labelStyle?new D.I(b.labelStyle):b.labelStyle;this.Kr=b.pattern;this.GG=b.selectable;this.Gt=b.shortDesc?b.shortDesc:b.tooltip;this.cg=b.value;this.uF=b.drilling?b.drilling:c.drilling;this.XC=b.S;this.fJ=b.kGa;this.Hw=1;this.iX=D.o;this.CN=this.Ub=D.p};D.yV=function(a,b){if(b!=D.o)for(var c=0;c<b.length;c++)b[c].sg=a;a.ql=b};
D.cS.prototype.Gc=function(){return this.ql?this.ql:[]};D.iS=function(a){var b=[],c,d;if(!a.gf())return b;for(var e=0;e<a.ql.length;e++)d=a.ql[e],c=(0,D.iS)(d),b.push(d),b=b.concat(c);return b};D.kS=function(a){var b=a.sg;b&&(b.iX=a)};D.cS.prototype.zA=function(a){return!a||!this.sg?D.p:this.sg==a?D.k:this.sg.zA(a)};D.fS=function(a,b,c){var d=[];if(0>c)return d;if(0==c)return[a];if(b.gf()){a=b.Gc();for(var e=0;e<a.length;e++)b=a[e],d=d.concat((0,D.fS)(b,b,c-1))}return d};
D.zV=function(a,b){if(a.getId()==b)return a;for(var c=D.o,d=a.Gc(),e=d.length,c=D.o,f=0;f<e;f++)if(c=d[f],c=(0,D.zV)(c,b))return c;return D.o};D.y=D.cS.prototype;D.y.A=(0,D.x)("je");D.y.Vc=function(){var a=this.A().categories;a||(a=(a=(a=this.sg)?a.Vc():D.o)?a.slice():[],a.push(this.getId()));return a};D.y.getId=(0,D.x)("ib");D.y.$c=(0,D.x)("cg");D.y.zb=(0,D.x)("fk");D.y.Ne=function(){var a=this.K.A().tooltip;return a?(0,D.$p)(this.K.j().jd(),a,this.Fv()):this.Gt};D.y.Yi=(0,D.x)("fk");D.y.ed=(0,D.x)("Gt");
D.y.Fv=function(){return{id:this.getId(),label:this.Zc(),value:this.$c(),color:this.zb()}};D.y.Sa=function(){return this.A()._index};D.y.ma=(0,D.x)("Hw");D.y.D=function(a){this.Hw=a;this.I&&this.I.D(this.Hw)};D.y.mf=function(a){this.A()._expanded=a};D.y.lb=function(){return this.A()._expanded!==D.p};D.y.Oq=function(){return"replace"==this.uF||"insertAndReplace"==this.uF};
D.y.Hd=function(){var a=this.K.A()._spb;if(!a||!a[this.XC])a=D.o;else{for(var a=a[this.XC],b=[],c=0;c<a.length;c++)b.push(new D.Vi(a[c].popupId,a[c].triggerType,a[c].alignId,a[c].align));a=b}return a};D.y.U=(0,D.t)();D.y.ky=function(a){var b=this.Gc();if(b!=D.o)for(var c=0;c<b.length;c++)b[c].U(a)};D.y.Yd=function(){(0,D.kS)(this);return this};D.y.Ye=function(){return new D.B(0,0,0,0)};D.y.Vj=(0,D.ba)(D.o);D.y.Be=function(){this.Ub=D.k;this.Sb();this.vA&&this.vA()};
D.y.qc=function(){this.Ub&&(this.Ub=D.p,this.Ib());this.Zt&&this.Zt()};D.y.Ic=(0,D.x)("Ub");D.y.vA=function(){this.CN=D.k};D.y.Zt=function(){this.CN=D.p};D.y.Oa=function(){return"off"!=this.GG&&this.K.W7!=D.o};D.y.Fa=(0,D.x)("Le");D.y.rb=function(a){this.Le=a;this.Rm()};D.y.Sb=(0,D.t)();D.y.Ib=(0,D.t)();D.y.Fe=function(a,b){this.D(b)};D.y.Ej=function(a){return this.K.TI(a)};D.y.tk=function(){return this.K.FB(this)};D.y.St=function(){return this.K.EB()};D.y.gH=(0,D.ba)(D.o);D.y.qH=(0,D.ba)(D.o);
D.y.contains=(0,D.ba)(D.p);D.y.qD=(0,D.ba)(D.o);D.y.Hm=function(){return[]};D.y.dr=(0,D.t)();D.y.Cf=function(a,b){a.jO||(0,D.Hn)(a,b.Gc(),this.Gc());var c=this.Hm(),d=b.Hm(c),e;if(!D.eg.pd(d,c)&&(e=new D.jo(this.K.j(),this,this.K.fI),(0,D.T)(e.O,"typeNumberArray",this,this.Hm,this.dr,c),a.add(e,1),c=this.cg!=b.cg,e=D.K.Paa(this.fk)!=D.K.Paa(b.fk),this.dr(d),(d=this.K.A().animationUpdateColor)&&(c||e)))this.fk=d};
D.y.Vg=function(a){if(!a.jO||!a.jO||!(a.gQ.getId()==this.getId()||(0,D.rV)(a.BX,this))){this.D(0);var b=new D.Jn(this.K.j(),this,this.K.fI);a.add(b,2);if(this.gf())for(b=0;b<this.ql.length;b++)this.ql[b].Vg(a)}};D.y.bi=function(a,b){b.k(this.I);var c=new D.lo(this.K.j(),this,this.K.fI);a.add(c,0);if(!a.jO&&this.gf())for(c=0;c<this.ql.length;c++)this.ql[c].bi(a,b)};D.y.gf=function(){return this.ql!=D.o&&0<this.ql.length};D.gS=function(a){var b=0;for(a=a.sg;a;)b++,a=a.sg;return b};
D.cS.prototype.sI=function(){return this.Kr?new D.nh(this.Kr,this.fk):new D.xo(this.fk)};D.pS=function(a,b){var c=a.Kr?"#000000":D.K.zj(a.fk);b.va(c);var d=[];d.push(a.K.A().nodeDefaults.labelStyle);a.cp&&d.push(a.cp);b.Na((0,D.zp)(d));D.Bp===D.k&&b.va(c)};D.eS=function(a){var b=11;(a=a.K.A().nodeDefaults.labelStyle.nA())&&(b=(0,window.parseFloat)(a));return b};D.cS.prototype.xa=(0,D.x)("I");D.cS.prototype.Zc=(0,D.x)("YC");D.dS=function(a){return a.K.JY?a.K.JY[a.XC]:D.o};D.cS.prototype.wi=function(){return this.Oq()};
D.cS.prototype.Rm=(0,D.t)();
D.MR=function(a,b,c,d,e){this.Init(c,d,e);this.Qb=a;this.ib=b;this.kO=D.p};D.z.q(D.MR,D.Yj,"DvtBaseTreePeer");D.MR.prototype.getId=(0,D.x)("ib");D.MR.prototype.xi=(0,D.x)("kO");D.MR.prototype.Nca=(0,D.v)("kO");D.MR.prototype.Zt=function(){this.Qb&&this.Qb.Zt&&this.Qb.Zt()};
D.DV=(0,D.t)();D.z.q(D.DV,D.z,"DvtTreeBreadcrumbsRenderer");D.DV.Uwa=6;D.DV.hxa="color: #003286;";
D.DV.U=function(a,b,c,d){var e=a.j(),f=a.A().styleDefaults,g=[];g.push(new D.I(D.DV.hxa));g.push(f._drillTextStyle);var g=(0,D.zp)(g).toString(),h=g+"text-decoration: underline;",j=[];j.push(f._currentTextStyle);f=(0,D.zp)(j).toString();e=new D.Js(e,a.xya,a,{HD:g,Jba:h,Iba:h,$pa:f});a.k(e);c=c.slice(0).reverse();c.push({label:d});e.U({items:c},b.e);d=e.G();(0,D.Ik)(e,b.x,b.y);d=d.g+D.DV.Uwa;b.y+=d;b.g-=d;a.removeChild(e);return e};
D.IR=(0,D.t)();D.z.q(D.IR,D.z,"DvtTreeLegendRenderer");D.IR.mxa=4;D.IR.Cw=7;D.IR.DU=24;D.IR.lxa=11;D.IR.bha="#636363";D.IR.$Na="color:"+D.IR.bha+";";
D.IR.U=function(a,b,c){var d=a.A(),e=d.sizeLabel,f=d.colorLabel;if(!(e==D.o&&f==D.o&&c==D.o)){var g=a.j(),h=a.za(),j=new D.D(g);a.k(j);var l=D.IR.CQ(g,a,j,b.e,e,f,c),m=(0,D.YH)(a.A().skin)?D.o:"#000000",n=[];n.push(d.styleDefaults._labelStyle);var m={borderColor:m,HD:(0,D.zp)(n)},d=D.mR.tca(g,h,j,b.e,b.g,c,m),n=l?l.G():D.o,q=d?d.G():D.o;if(l&&!d)l.N(b.y+(b.e-n.e)/2);else if(d&&!l)d.N(b.y+(b.e-q.e)/2);else if(d&&l){var r=b.e-D.IR.DU;n.e+q.e>r&&(n.e>r/2&&q.e>r/2?(j.removeChild(l),j.removeChild(d),l=
D.IR.CQ(g,a,j,r/2,e,f,c),d=D.mR.tca(g,h,j,r/2,b.g,c,m)):n.e>q.e?(h=r-q.e,j.removeChild(l),l=D.IR.CQ(g,a,j,h,e,f,c)):(e=r-n.e,j.removeChild(d),d=D.mR.tca(g,h,j,e,b.g,c,m)),n=l.G(),q=d.G());(0,D.G)(g)?(d.N(b.x),l.N(b.x+b.e-n.e)):(l.N(b.x),d.N(b.x+b.e-q.e))}c=j.G();j.W(b.y+b.g-c.g);b.g-=c.g+D.IR.mxa;a.removeChild(j);return j}};
D.IR.CQ=function(a,b,c,d,e,f){var g=(0,D.G)(a),h=b.za(),j=b.A().styleDefaults,l=D.o;if(e||f){l=new D.D(a);c.k(l);var m=[];m.push(j._attributeTypeTextStyle);c=(0,D.zp)(m);m=[];m.push(j._attributeValueTextStyle);var j=(0,D.zp)(m),n,q,r,s,m=0;e&&(n=(0,D.Gk)(b.A(),"labelSize",b.GZ(),"SIZE"),n=new D.Nf(a,n,0,0),n.Na(c),l.k(n),r=n.Kb().e,q=new D.Nf(a,e,0,0),q.Na(j),l.k(q),s=q.Kb().e,m=r+s+D.IR.Cw);var u,A,w,E,P=0;f&&(u=(0,D.Gk)(b.A(),"labelColor",b.GZ(),"COLOR"),u=new D.Nf(a,u,0,0),u.Na(c),l.k(u),w=u.Kb().e,
A=new D.Nf(a,f,0,0),A.Na(j),l.k(A),E=A.Kb().e,P=w+E+D.IR.Cw);d-=D.IR.DU;m+P>d&&(a=d/2,m>a&&P>a?(D.af.Vb(q,a-r-D.IR.Cw,window.Infinity,l)?(s=q.Kb().e,h.Da(q,new D.Yj(e))):(l.removeChild(n),l.removeChild(q),q=D.o,s=0),D.af.Vb(A,a-w-D.IR.Cw,window.Infinity,l)?(E=A.Kb().e,h.Da(A,new D.Yj(f))):(l.removeChild(u),l.removeChild(A),A=D.o,E=0)):m>P?D.af.Vb(q,d-P-r-D.IR.Cw,window.Infinity,l)?(s=q.Kb().e,h.Da(q,new D.Yj(e))):(l.removeChild(n),l.removeChild(q),q=D.o,s=0):D.af.Vb(A,d-m-w-D.IR.Cw,window.Infinity,
l)?(E=A.Kb().e,h.Da(A,new D.Yj(f))):(l.removeChild(u),l.removeChild(A),A=D.o,E=0));d=0;g?(A&&(A.ha(d),d+=E+D.IR.Cw,u.ha(d),d+=w+D.IR.DU),q&&(q.ha(d),d+=s+D.IR.Cw,n.ha(d))):(q&&(n.ha(d),d+=r+D.IR.Cw,q.ha(d),d+=s+D.IR.DU),A&&(u.ha(d),d+=w+D.IR.Cw,A.ha(d)))}return l};
D.xV=function(a){this.Init(a)};D.z.q(D.xV,D.on,"DvtBaseTreeKeyboardHandler");D.xV.prototype.BA=function(a){return this.Xg(a)&&!a.ctrlKey};D.xV.prototype.cu=function(a){return 32==a.keyCode&&a.ctrlKey};
D.YR=(0,D.t)();D.z.q(D.YR,D.fk,"DvtBaseTreeDefaults");
D.sV={skin:"alta",animationDuration:500,animationOnDataChange:"none",animationOnDisplay:"none",highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,nodeDefaults:{labelStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")},selectionMode:"multiple",sorting:"off",styleDefaults:{_attributeTypeTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"),_attributeValueTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),
_currentTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),_drillTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),_labelStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},_resources:{}};D.YR.prototype.Init=function(a){a={skyros:D.Jl.Id(a.skyros,D.sV),alta:D.Jl.Id(a.alta,{})};D.YR.u.Init.call(this,a)};
D.wV={};D.z.q(D.wV,D.z,"DvtBaseTreeUtils");D.wV.zpa=function(a,b){var c=b,d=a.Gc();if(d)for(var e=0;e<d.length;e++)var f=D.wV.zpa(d[e],b+1),c=window.Math.max(c,f);return c};D.wV.Apa=function(a){var b=1;if(a=a.Gc())for(var c=0;c<a.length;c++)b+=D.wV.Apa(a[c]);return b};D.wV.xR=function(a){var b=[];D.wV.KU(a,b);return b};D.wV.CHa=function(a){var b=[];D.wV.KU(a,b,D.p,D.k);return b};D.wV.Uqa=function(a){var b=[];D.wV.KU(a,b,D.k);return b};D.wV.YKa=function(a,b){return D.eg.eS(a,b.categories)};
D.wV.sGa=function(a,b){var c=a.S;if(!(c==D.o||a.min!=D.o&&a.max!=D.o)){for(var d=window.Infinity,e=-window.Infinity,f=0;f<b.length;f++){var g=b[f];c==g.XC&&(g=g.A()._cv,g!=D.o&&(e=window.Math.max(e,g),d=window.Math.min(d,g)))}a.min==D.o&&(a.min=d);a.max==D.o&&(a.max=e)}};D.wV.fMa=function(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=d.hGa,d=d.XMa;if(e instanceof D.kR&&d!=D.o)for(var f=0;f<b.length;f++){var g=b[f];if(d==g.XC){var h=e.get(g.A()._cv);h&&(g.fk=h)}}}};
D.wV.KU=function(a,b,c,d){if(a){var e=a.Gc(),f=e?e.length:0;(!c||0==f)&&(!d||a.xa())&&b.push(a);for(a=0;a<f;a++)D.wV.KU(e[a],b,c,d)}};
D.EV=function(a){this.ipa=a;this.Ra=a.Ra};(0,D.ca)("DvtTreeAutomation",D.EV);D.z.q(D.EV,D.Wj,"DvtTreeAutomation");D.EV.prototype.Xl=function(a){var b=this.ipa.Gaa(a);if(!b)return a.getParent()instanceof D.Re&&(a=a.getParent()),b=a.getParent(),b instanceof D.Js?"breadcrumbs["+(0,D.mu)(b,a)+"]":D.o;if(b instanceof D.cS){a="";if(!this.Ra.fJ){if(b==this.Ra)return"node[0]";a+="[0]"}a=(b=this.kP(b,this.Ra.Gc()))?a+b:a;if(0<a.length)return"node"+a}return D.o};
D.EV.prototype.kP=function(a,b){if(b&&0<b.length)for(var c=0;c<b.length;c++){if(b[c]==a)return"["+c+"]";var d=this.kP(a,b[c].Gc());if(d)return"["+c+"]"+d}return D.o};
D.EV.prototype.fg=function(a){return!a?D.o:"tooltip"==a?(0,D.Fm)(this.ipa):0==a.indexOf("breadcrumbs")?(a=(0,D.ou)(this.Ra.K.jaa(),a.substring(a.indexOf("[")+1,a.indexOf("]"))))?a.Aa():D.o:!this.Ra.fJ&&(a=a.substring(0,a.indexOf("["))+a.substring(a.indexOf("]")+1),"node"==a)?this.Ra.xa().Aa():(a=(0,D.FV)(this,this.Ra,a))?a.xa().Aa():D.o};D.EV.prototype.getDomElementForSubId=D.EV.prototype.fg;
D.FV=function(a,b,c){var d=c.indexOf("["),e=c.indexOf("]");if(0<=d&&0<=e){d=c.substring(d+1,e);c=c.substring(e+1);var e=c.indexOf("["),f=c.indexOf("]");b=(0,D.GV)(b.Gc(),d);return 0<=e&&0<=f?(0,D.FV)(a,b,c):b}};D.HV=function(a,b,c){var d=c.shift();b=(0,D.GV)(b.Gc(),d);return 0==c.length?b:0<c.length?(0,D.HV)(a,b,c):D.o};
D.EV.prototype.Zb=function(a){!this.Ra.fJ&&0==a[0]&&a.shift();a=0==a.length?this.Ra:(0,D.HV)(this,this.Ra,a);return{color:a.zb(),label:a.Zc(),selected:a.Fa()==D.i?D.p:a.Fa(),size:a.$c(),tooltip:a.ed()}};D.EV.prototype.getNode=D.EV.prototype.Zb;D.GV=function(a,b){for(var c=0;c<a.length;c++)if(b==a[c].Sa())return a[c];return D.o};
  return D;
});