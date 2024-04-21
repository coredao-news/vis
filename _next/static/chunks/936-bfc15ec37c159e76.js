(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{39936:function(e,a,l){"use strict";l.r(a),l.d(a,{HomePage:function(){return M},default:function(){return y}});var t=l(85893),i=l(67294),o=l(65223),s=l(94184),n=l.n(s),r=l(96110),d=l(4037),c=l(3238);let u=e=>{let{from:a,to:l}=e,o=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=o.current,t=(0,d.j)(a,l,{duration:1.5,delay:.7,ease:"easeOut",onUpdate(a){e&&(e.textContent=a.toFixed(2))},onComplete:()=>{e&&(e.textContent=(0,c.x6)(l))}});return()=>null==t?void 0:t.stop()},[a,l]),(0,t.jsx)("p",{ref:o})};var v=l(20864),_=l(59332),h=l.n(_),m=e=>{let{title:a,value:l,tooltipText:o,icon:s="lightning",className:r,link:d,isExternal:c,animate:_}=e;return(0,t.jsxs)(v.gM,{className:n()(h().root,{[h().clickable]:void 0!==d},r),href:d,isExternal:!0===c,children:[(0,t.jsxs)("div",{className:h().head,children:[(0,t.jsxs)("div",{className:h().titleWrapper,children:[(0,t.jsx)("div",{className:h().title,children:a}),o&&(0,t.jsx)(v.u,{tooltip:o,children:(0,t.jsx)(v.JO,{name:"infoSquare",className:h().tooltipIcon})})]}),(0,t.jsx)(v.JO,{name:s,className:h().cardIcon})]}),(0,t.jsx)("div",{className:h().valuesWrapper,children:l.map((e,a)=>{let{amount:o,label:s}=e;return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)("div",{className:h().value,children:[(0,t.jsx)("div",{className:h().amount,children:_?(0,t.jsx)(u,{from:0,to:+o}):o}),(0,t.jsx)("div",{className:h().label,children:s})]}),a!==l.length-1&&(0,t.jsx)("div",{className:h().divider,children:"/"})]},a)})})]})},b=l(37430),x=l(74617),g=l.n(x),p=e=>{let{strapiCards:a,validatorsTotal:l,validatorsActive:o,totalCoreDelegate:s,totalHashDelegate:d,bitcoinTotalHashRate:c,delegatedHashRate:u,className:v}=e,_=(e,a)=>{var t,i,n,v;switch(e){case"totalCoreDelegate":return[{amount:(0,r.dF)(s),label:null==a?void 0:null===(t=a[0])||void 0===t?void 0:t.label}];case"validators":return[{amount:o},{amount:l}];case"totalHashDelegate":return[{amount:(0,r.dF)(d),label:null==a?void 0:null===(i=a[0])||void 0===i?void 0:i.label}];case"hashRates":return[{amount:(+u/1e18).toFixed(2),label:null==a?void 0:null===(n=a[0])||void 0===n?void 0:n.label},{amount:(+c/1e18).toFixed(2),label:null==a?void 0:null===(v=a[1])||void 0===v?void 0:v.label}];default:return[]}},h=(0,i.useMemo)(()=>a?a.map(e=>{var a;return{animate:e.animate,title:e.title,value:_(e.type,e.labels),tooltipText:e.tooltip,icon:null===(a=e.icon)||void 0===a?void 0:a.icon,link:e.link,isExternal:e.isExternal}}):[{animate:!0,title:"Total CORE Delegated",value:_("totalCoreDelegate",[{label:"CORE"}]),tooltipText:"Total amount of CORE delegated on Core blockchain. This value is recalculated and refreshed at the beginning of each round.",icon:"core"},{animate:!0,title:"Validators",value:_("validators"),icon:"users",link:b.v.mainnet.coreStaking,isExternal:!0},{animate:!0,title:"Total Hash Delegated",value:_("totalHashDelegate",[{label:"Bitcoin blocks"}]),tooltipText:"Total hash delegate is measured using the number of blocks produced in the BTC network during the same day of the prior week by all miners who delegated to Core blockchain. This value is recalculated and refreshed at the beginning of each round.",icon:"graph",link:b.v.mainnet.coreStaking,isExternal:!0},{animate:!0,title:"Delegated Hash Rate / Bitcoin Total Hash Rate",value:_("hashRates",[{label:"EH/s"},{label:"EH/s"}]),tooltipText:"Hash rate on Core blockchain / Overall hash rate of Bitcoin network",icon:"bitcoin"}],[a]);return(0,t.jsx)("div",{className:n()(g().root,v),children:h.map(e=>(0,i.createElement)(m,{...e,key:e.title,icon:e.icon}))})},j=l(47630),f=l.n(j),k=e=>{let{title:a,cards:l,validatorsTotal:i,validatorsActive:o,totalCoreDelegate:s,totalHashDelegate:r,delegatedHashRate:d,bitcoinTotalHashRate:c,className:u}=e;return(0,t.jsxs)("section",{className:f().root,children:[(0,t.jsx)("h2",{className:f().title,children:a}),(0,t.jsx)("div",{className:n()(f().content,u),children:(0,t.jsx)(p,{strapiCards:l,validatorsTotal:i,validatorsActive:o,totalCoreDelegate:s,totalHashDelegate:r,delegatedHashRate:d,bitcoinTotalHashRate:c})})]})};l(77601),l(6154).Z.create({baseURL:b.v.stakeCoreDAO.baseURL,timeout:1e4}),l(59854),l(11163),l(93151);var N=l(24098),H=l(68294),C=l.n(H),w=e=>{let{data:a}=e;return(0,t.jsxs)("div",{className:C().root,children:[(0,t.jsx)("div",{className:C().animatedDividerLeft}),(0,t.jsx)("div",{className:C().animatedDividerRight}),(0,t.jsxs)("section",{className:C().section1,children:[(0,t.jsx)("div",{className:C().title,children:a.section3.title}),(0,t.jsx)("div",{className:C().animatedDivider}),(0,t.jsx)("div",{className:C().description,children:(0,t.jsx)("p",{children:a.section3.description})})]})]})},I=l(21318),D=l(41664),V=l.n(D),W=l(54813),B=l.n(W);let R=e=>{let{data:a}=e;return(0,t.jsxs)("div",{className:B().root,children:[(0,t.jsxs)("div",{className:B().bubble,children:[(0,t.jsx)("div",{className:B().value,children:null==a?void 0:a.transactions}),(0,t.jsx)("div",{className:B().label,children:null==a?void 0:a.transactionsLabel})]}),(0,t.jsxs)("div",{className:B().bubble,children:[(0,t.jsx)("div",{className:B().value,children:null==a?void 0:a.twittersFollowers}),(0,t.jsx)("div",{className:B().label,children:null==a?void 0:a.twittersFollowersLabel})]}),(0,t.jsxs)("div",{className:B().bubble,children:[(0,t.jsx)("div",{className:B().value,children:null==a?void 0:a.discordMembers}),(0,t.jsx)("div",{className:B().label,children:null==a?void 0:a.discordMembersLabel})]}),(0,t.jsxs)("div",{className:B().bubble,children:[(0,t.jsx)("div",{className:B().value,children:null==a?void 0:a.activeWallets}),(0,t.jsx)("div",{className:B().label,children:null==a?void 0:a.activeWalletsLabel})]})]})};var L=l(19460),T=l.n(L);let E=e=>{let{className:a,data:l}=e;return(0,t.jsxs)("div",{className:n()(T().root,a),children:[(0,t.jsx)(R,{data:l.daoHighlightsConfig}),(0,t.jsxs)("div",{className:T().socialWrapper,children:[(0,t.jsx)("div",{className:T().socialBlock,children:l.socialLinks.slice(0,2).map(e=>{let{icon:a,link:l,isExternal:i}=e;return(0,t.jsx)(V(),{href:l,className:T().socialLink,target:i?"_blank":void 0,children:!!a&&(0,t.jsx)(v.JO,{name:a})},a)})}),(0,t.jsx)("div",{className:T().socialBlock,children:l.socialLinks.slice(2).map(e=>{let{icon:a,link:l,isExternal:i}=e;return(0,t.jsx)(V(),{href:l,className:T().socialLink,target:i?"_blank":void 0,children:!!a&&(0,t.jsx)(v.JO,{name:a})},a)})})]})]})};var F=l(4583),O=l.n(F);let M=e=>{var a,l;let{data:i,statistics:s}=e;return(0,t.jsxs)(o.Z,{className:O().root,metadata:{title:(null==i?void 0:null===(a=i.metatags)||void 0===a?void 0:a.title)||void 0,description:(null==i?void 0:null===(l=i.metatags)||void 0===l?void 0:l.description)||void 0,image:(0,c.xD)(null==i?void 0:i.metatags.image)},children:[(0,t.jsx)(N.cF,{title:null==i?void 0:i.section1.title,description:null==i?void 0:i.section1.description,button:null==i?void 0:i.section1.button}),(0,t.jsx)("div",{className:O().subscribe,children:(0,t.jsx)(I.x,{})}),(0,t.jsx)("div",{className:O().sp,children:(0,t.jsx)(N.Lb,{title:null==i?void 0:i.section2.title,description:null==i?void 0:i.section2.description})}),(0,t.jsx)("div",{className:O().sp,children:(0,t.jsx)(w,{data:i})}),(0,t.jsx)(E,{className:O().block,data:null==i?void 0:i.section5}),(0,t.jsx)("div",{className:O().sp,children:(0,t.jsx)(N.kR,{title:null==i?void 0:i.section6.title,description:null==i?void 0:i.section6.description,button:null==i?void 0:i.section6.discordButton})}),(0,t.jsx)(k,{title:null==i?void 0:i.cardsTitle,cards:null==i?void 0:i.cards,hideHeader:!0,className:O().widgets,validatorsActive:null==s?void 0:s.activeCandidate,validatorsTotal:null==s?void 0:s.totalCandidate,totalCoreDelegate:s.totalCoinPower,totalHashDelegate:null==s?void 0:s.totalHashPower,delegatedHashRate:null==s?void 0:s.stakeCoreHashPower,bitcoinTotalHashRate:null==s?void 0:s.hashPowerReal})]})};var y=M},59332:function(e){e.exports={root:"ValidatorInfoCard_root__kGqrA",clickable:"ValidatorInfoCard_clickable__FBA8k",head:"ValidatorInfoCard_head__cOSJk",titleWrapper:"ValidatorInfoCard_titleWrapper__LB6r9",title:"ValidatorInfoCard_title__E5OwU",tooltipIcon:"ValidatorInfoCard_tooltipIcon__hNtE6",cardIcon:"ValidatorInfoCard_cardIcon__3Jwtj",valuesWrapper:"ValidatorInfoCard_valuesWrapper__gu8d8",value:"ValidatorInfoCard_value__Fxo30",amount:"ValidatorInfoCard_amount__Q3TfQ",label:"ValidatorInfoCard_label__2RW_P",divider:"ValidatorInfoCard_divider__SChwN"}},74617:function(e){e.exports={root:"ValidatorInfoCardGrid_root___pFHp"}},4583:function(e){e.exports={root:"Home_root__9Gd7s",block:"Home_block__9IQRB",sp:"Home_sp__bAqJh",widgets:"Home_widgets__PnHrd",subscribe:"Home_subscribe__HbolB"}},47630:function(e){e.exports={root:"ValidatorMainInfo_root__XGUOG",content:"ValidatorMainInfo_content__yZ739",title:"ValidatorMainInfo_title__PWzNe"}},68294:function(e){e.exports={root:"HowItWorksV3_root__jhyLn",section1:"HowItWorksV3_section1__EG1rV",description:"HowItWorksV3_description__ZCMAf",section2:"HowItWorksV3_section2__CugTo",title:"HowItWorksV3_title__c0pab",animatedDivider:"HowItWorksV3_animatedDivider__folM3",gradient:"HowItWorksV3_gradient__T92Zl",animatedDividerLeft:"HowItWorksV3_animatedDividerLeft__Lb_z7",animatedDividerRight:"HowItWorksV3_animatedDividerRight__pLcjT",buttonsBlock:"HowItWorksV3_buttonsBlock__3Sqo2",button:"HowItWorksV3_button__so1eC"}},54813:function(e){e.exports={value:"Bubbles_value__xQoD7",label:"Bubbles_label__Ru6FA",root:"Bubbles_root__IhLnF",bubble:"Bubbles_bubble__4qPYC","horizontal-float-lg":"Bubbles_horizontal-float-lg__Qq7o6","vertical-float-lg":"Bubbles_vertical-float-lg__E_mF8","horizontal-float-sm":"Bubbles_horizontal-float-sm__FcbMu","vertical-float-sm":"Bubbles_vertical-float-sm__EZh5S"}},19460:function(e){e.exports={root:"DaoHighlights_root__o0yOU","glow-change-l":"DaoHighlights_glow-change-l__LUhvN","glow-change-r":"DaoHighlights_glow-change-r__TyEEj",socialWrapper:"DaoHighlights_socialWrapper__sOwFa",socialBlock:"DaoHighlights_socialBlock__m1DXR",socialLink:"DaoHighlights_socialLink__Vud7M"}}}]);