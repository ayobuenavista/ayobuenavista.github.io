webpackJsonp([1],{"0UbK":function(e,t){},DSf8:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("P6sg"),i=n("XyMi");var o=function(e){n("0UbK")},r=Object(i.a)({name:"App"},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Particles",{attrs:{particleOpacity:.7,linesColor:"#3EE6C1",particlesNumber:30,shapeType:"circle",particleSize:3,linesWidth:2,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:.3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),this._v(" "),t("router-view")],1)},[],!1,o,null,null).exports,c=n("/ocq");var l=function(e){n("DSf8")},p=Object(i.a)({name:"Home"},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-wrapper"},[t("div",{staticClass:"page"},[t("div",{staticClass:"page-inner"},[t("Resume")],1)])])},[],!1,l,"data-v-206ce38d",null).exports;a.a.use(c.a);var d=new c.a({routes:[{path:"/",name:"home",component:p}]}),v={name:"Particles",mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},methods:{initParticleJS:function(e,t,n,a,s,i,o,r,c,l,p,d,v,u,m){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:a,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:s,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:l,color:i,opacity:c,width:o},move:{enable:!0,speed:p,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:d,mode:v},onclick:{enable:u,mode:m},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},u=Object(i.a)(v,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},[],!1,null,null,null).exports,m=n("NVob"),_=n.n(m);var h={name:"Resume",data:function(){return{person:_.a.load("\nname:\n  first: Anton\n  middle:\n  last: Buenavista\n\nabout: Aspiring blockchain engineer and full stack developer who is\n       highly passionate about blockchain, decentralization, cryptography,\n       game theory, consensus mechanisms, smart contracts, crypto-assets,\n       crypto-economics, open source, and the semantic web.\n\n       I work on scalable, high availability applications using nascent\n       technology. My work covers both software engineering and systems\n       administration encapsulating services from end-to-end.\n\n       Vires in Numeris.\n\nposition: Blockchain Developer\n\nlocation: Singapore\n\nexperience:\n- company: Self-Employed\n  position: Blockchain Developer and Consultant\n  timeperiod: August 2017 - Present\n  location: Global\n  tasks:\n    - task: Remotely provided consultation to new blockchain companies or\n            projects on design, infrastructure, and token metrics.\n    - task: Developed a full-stack web ICO/TGE platform and architected its HA\n            infrastructure on AWS.\n\n- company: Intel Mobile Communications\n  position: Technical Analyst and DevOps Engineer\n  timeperiod: July 2015 - July 2017\n  location: Singapore\n  tasks:\n    - task: Lead developer on a workspace manager project that monitors and\n            manages the workspaces of our internal and external mobile hardware\n            development teams.\n    - task: Lead developer of a Linux command line tool that helps other\n            developers connect to a developer host farm or LSF/Netbatch cluster\n            of the different farm sites of Intel.\n    - task: Performed sys-ops tasks and developed automation tools for the git,\n            Gerrit, and Jenkins environments.\n    - task: Integration of SCM tools with many various internal and external\n            systems.\n    - task: L3 technical support for bleeding edge mobile hardware platforms.\n  projects:\n    - project: Workspace Manager (Lead Developer)\n    - project: Development Host Command Line Tool (Lead Developer)\n    - project: Build Host Checker (Team Member)\n    - project: Jenkins Automations (Team Member)\n\n- company: Tropical Marine Science Institute (NUS)\n  position: IT Analyst\n  timeperiod: February 2010 - May 2015\n  location: Singapore\n  tasks:\n    - task: Lead developer on a hydrodynamics forecast web service which serves\n            scientific hydrological model data on the Southeast Asia region,\n            providing plot information such as bathymetry, surface elevation\n            from seabed, and tide speed and direction.\n    - task: Part of an agile three-man team that developed web services for\n            government researchers to view scientific reports (i.e. storm surge\n            forecasts and oil spill simulations).\n    - task: Performed sys-ops tasks which cover the enhancement and maintenance\n            of high-performance computing clusters, web servers, storage units,\n            and network interfaces.\n    - task: Operationalized scientific numerical models by designing and\n            implementing automated systems that runs numerical models on the\n            cluster, performs data processing, then displays the data on our web\n            services.\n  projects:\n    - project: Live Access Server with OpenDAP (Lead Developer)\n    - project: Water-quality Data Processing (Lead Developer)\n    - project: Oil Spill Forecasting Web Service (Team Member)\n    - project: Storm Surge Forecasting Web Service (Team Member)\n\n- company: Texas Instruments\n  position: Application Developer\n  timeperiod: May 2009 - October 2009\n  location: Philippines\n  tasks:\n    - task: Developed backend modules and automated data-loaders for the supply\n            chain and manufacturing data warehouse.\n    - task: Implemented enhancements for an internal reporting tool which\n            tackled dead-on-arrival orders, cutting DOA orders in the production\n            line and achieving 98% delivery effectiveness.\n  projects:\n    - project: Dead-on-Arrival Order Analysis Service (Lead Developer)\n\neducation:\n- degree: Bachelor of Science in Information Technology\n  university: Saint Louis University\n  timeperiod: 2005 - 2009\n  location: Philippines\n  awards:\n    - award: Consistent Dean's Lister\n    - award: Academic Group Chairman\n\nskills:\n- group: JavaScript/ES6, Python, Java, Solidity, Bash Scripting\n- group: AngularJS, VueJS, Meteor, SailsJS, FeathersJS, ExpressJS, node.js, Truffle, OpenZeppelin\n- group: HTML5, CSS3, SASS, Bootstrap\n- group: MongoDB, MySQL SQLite\n- group: Atom, AWS, git, GitHub, Jenkins, Gerrit, Nagios, Zabbix, Nginx\n- group: Scrum, XP, N-Tier Architecture, MVC, MVVM\n\npersonal_projects:\n- project: Blockchain Vanity Tool\n  description: A group of Python tools that generate vanity public keys, vanity\n               mnemonic phrases based on BIP39, and key derivation based on a\n               single seed for multiple different blockchains.\n\nopen_source:\n- project: ledger-chrome-wallet\n- project: bip39-tool\n- project: qtum\n- project: pivx\n\ncontact:\n  city: Singapore\n  github: lindqvust\n  twitter: ayobuenavista\n  telegram: ayobuenavista\n  fingerprint: 5020 4D4C A710 F3A7 1BF8 888F 130A 94A7 4C5E A8B9\n\n# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, ka, nl, he, zh-tw, lt, ko, el\nlang: en\n")}}};var f=function(e){n("ZAou")},y=Object(i.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume"},[n("div",{staticClass:"leftCol m_box"},[n("div",{staticClass:"shadow"}),e._v(" "),n("div",{staticClass:"section-headline"},[e._v("\n      CONTACT\n    ")]),e._v(" "),n("div",{staticClass:"item"},[e._m(0),e._v(" "),n("div",{staticClass:"text"},[n("ul",[n("li",[e._v(" "+e._s(e.person.location))])])])]),e._v(" "),e.person.contact.street?n("div",{staticClass:"item"},[e._m(1),e._v(" "),n("div",{staticClass:"text"},[n("ul",[n("li",[e._v(e._s(e.person.contact.street))]),e._v(" "),n("li",[e._v(e._s(e.person.contact.city))])])])]):e._e(),e._v(" "),e.person.contact.phone?n("a",{attrs:{href:"tel:"+e.person.contact.phone}},[n("div",{staticClass:"item"},[e._m(2),e._v(" "),n("div",{staticClass:"text"},[e._v("\n          "+e._s(e.person.contact.phone)+"\n        ")])])]):e._e(),e._v(" "),e.person.contact.email?n("a",{attrs:{href:"mailto:"+e.person.contact.email}},[n("div",{staticClass:"item"},[e._m(3),e._v(" "),n("div",{staticClass:"text"},[e._v("\n          "+e._s(e.person.contact.email)+"\n        ")])])]):e._e(),e._v(" "),n("a",{attrs:{href:"https://twitter.com/"+e.person.contact.twitter}},[n("div",{staticClass:"item"},[e._m(4),e._v(" "),n("div",{staticClass:"text"},[e._v("\n          @"+e._s(e.person.contact.twitter)+"\n        ")])])]),e._v(" "),n("a",{attrs:{href:"https://t.me/"+e.person.contact.telegram}},[n("div",{staticClass:"item"},[e._m(5),e._v(" "),n("div",{staticClass:"text"},[e._v("\n          @"+e._s(e.person.contact.telegram)+"\n        ")])])]),e._v(" "),e.person.contact.github?n("a",{attrs:{href:"https://github.com/"+e.person.contact.github,target:"_blank"}},[n("div",{staticClass:"item"},[e._m(6),e._v(" "),n("div",{staticClass:"text"},[n("span",[e._v("@"+e._s(e.person.contact.github))]),e._v(" "),n("span",[e._v("github.com/"+e._s(e.person.contact.github))])])])]):e._e(),e._v(" "),e.person.contact.website?n("a",{attrs:{href:e.person.contact.website,target:"_blank"}},[n("div",{staticClass:"item"},[e._m(7),e._v(" "),n("div",{staticClass:"text"},[n("span",[e._v(e._s(e.person.contact.website))])])])]):e._e(),e._v(" "),e.person.contact.fingerprint?n("div",{staticClass:"item"},[e._m(8),e._v(" "),n("div",{staticClass:"text"},[n("span",[e._v(e._s(e.person.contact.fingerprint))])])]):e._e(),e._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"section-headline"},[e._v("\n        SKILLS\n      ")]),e._v(" "),e._l(e.person.skills,function(t){return n("div",{key:t.group,staticClass:"infos"},[n("div",{staticClass:"right skills"},[n("span",[e._v(e._s(t.group))])])])})],2),e._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"section-headline"},[e._v("\n        PERSONAL PROJECTS\n      ")]),e._v(" "),e._l(e.person.personal_projects,function(t){return n("div",{key:t.project,staticClass:"infos"},[n("div",{staticClass:"right"},[n("span",{staticClass:"subheadline"},[e._v(e._s(t.project))]),e._v(" "),n("div",{staticClass:"block-helper"}),e._v(" "),n("div",{staticClass:"description"},[n("span",[e._v(e._s(t.description))])])])])})],2),e._v(" "),n("div",{staticClass:"item last"},[n("div",{staticClass:"section-headline"},[e._v("\n        OPEN SOURCE CONTRIBUTIONS\n      ")]),e._v(" "),e._l(e.person.open_source,function(t){return n("div",{key:t.project,staticClass:"infos"},[n("div",{staticClass:"right"},[n("span",[e._v(e._s(t.project))])])])})],2)]),e._v(" "),n("div",{staticClass:"rightCol"},[n("div",{staticClass:"title"},[n("span",{attrs:{id:"myselfpic"}}),e._v(" "),n("h2",[e._v(e._s(e.person.name.first)+" "+e._s(e.person.name.middle)+" "+e._s(e.person.name.last))]),e._v(" "),n("div",[e._v(e._s(e.person.position))])]),e._v(" "),n("div",{staticClass:"section-headline"},[e._v("EXPERIENCE")]),e._v(" "),e._l(e.person.experience,function(t){return n("div",{key:t.company,staticClass:"block"},[n("div",{staticClass:"block-helper"}),e._v(" "),n("h3",[e._v(e._s(t.position))]),e._v(" "),n("h3",{staticClass:"headline"},[e._v(e._s(t.company))]),e._v(" "),n("div",{staticClass:"subheadline left"},[e._v(e._s(t.timeperiod))]),e._v(" "),n("div",{staticClass:"subheadline right"},[e._v(e._s(t.location))]),e._v(" "),n("div",{staticStyle:{clear:"both"}}),e._v(" "),e._l(t.tasks,function(t){return n("p",{key:t.task,staticClass:"info"},[e._m(9,!0),e._v(" "+e._s(t.task)+"\n      ")])}),e._v(" "),t.projects?n("p",{staticClass:"lists-headline"},[e._v("Notable Projects:")]):e._e(),e._v(" "),e._l(t.projects,function(t){return n("p",{key:t.project,staticClass:"list"},[e._v("\n        "+e._s(t.project)+"\n      ")])})],2)}),e._v(" "),n("div",{staticClass:"section-headline"},[e._v("EDUCATION")]),e._v(" "),e._l(e.person.education,function(t){return n("div",{key:t.degree,staticClass:"block"},[n("div",{staticClass:"block-helper"}),e._v(" "),n("h3",[e._v(e._s(t.degree))]),e._v(" "),n("h3",{staticClass:"headline"},[e._v(e._s(t.university))]),e._v(" "),n("div",{staticClass:"subheadline left"},[e._v(e._s(t.timeperiod))]),e._v(" "),n("div",{staticClass:"subheadline right"},[e._v(e._s(t.location))]),e._v(" "),n("div",{staticStyle:{clear:"both"}}),e._v(" "),n("p",{staticClass:"lists-headline"},[e._v("Awards:")]),e._v(" "),e._l(t.awards,function(t){return n("p",{key:t.award,staticClass:"list"},[e._v("\n        "+e._s(t.award)+"\n      ")])})],2)})],2),e._v(" "),n("div",{attrs:{id:"resume-footer"}},[e.person.about?n("div",[n("h3",[e._v("About me")]),e._v(" "),n("p",[e._v(e._s(e.person.about))])]):e._e()])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fa fa-map-marker"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"material-icons fa-city"},[this._v("location_city")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"material-icons"},[this._v("phone")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"material-icons"},[this._v("email")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fa fa-twitter"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fa fa-telegram"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fa fa-github"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"material-icons"},[this._v("language")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fa fa-key"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-circle"})])}],!1,f,"data-v-1abdffb6",null).exports;a.a.use(u,s.a),a.a.component("Particles",u),a.a.component("Resume",y),a.a.config.productionTip=!1,new a.a({el:"#app",router:d,components:{App:r},template:"<App/>"})},ZAou:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.224b18ff9db4069cb867.js.map