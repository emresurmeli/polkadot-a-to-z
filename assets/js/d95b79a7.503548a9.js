"use strict";(self.webpackChunkpolkadot_a_to_z=self.webpackChunkpolkadot_a_to_z||[]).push([[733],{5305:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return c},toc:function(){return u},default:function(){return p}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],r={slug:"J-for-Polkadot-JS",title:"J for Polkadot JS",authors:["emre"],tags:[]},l=void 0,h={permalink:"/Polkadot-A-to-Z/blog/J-for-Polkadot-JS",editUrl:"https://github.com/emresurmeli/Polkadot-A-to-Z/blog/J for Polkadot JS/index.md",source:"@site/blog/J for Polkadot JS/index.md",title:"J for Polkadot JS",description:"J for Polkadot JS",date:"2021-12-04T01:28:05.074Z",formattedDate:"December 4, 2021",tags:[],readingTime:3.795,truncated:!1,authors:[{name:"Emre Surmeli",title:"Technical Educator @ Web3 Foundation",url:"https://github.com/emresurmeli",imageURL:"https://pbs.twimg.com/profile_images/1456026947742572558/SYbenXnu_400x400.jpg",key:"emre"}],nextItem:{title:"I for Interoperability",permalink:"/Polkadot-A-to-Z/blog/I-for-Interoperability"}},c={authorsImageUrls:[void 0]},u=[{value:"Polkadot JS UI",id:"polkadot-js-ui",children:[],level:2},{value:"Abilities",id:"abilities",children:[],level:2},{value:"Querying on-chain data",id:"querying-on-chain-data",children:[],level:2},{value:"Issuing an extrinsic",id:"issuing-an-extrinsic",children:[],level:2},{value:"Considerations",id:"considerations",children:[],level:2}],d={toc:u};function p(t){var e=t.components,r=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"J for Polkadot JS",src:a(4915).Z})),(0,i.kt)("p",null,"Polkadot.js is a collection of tools that interfaces with the Polkadot blockchain in very granular ways. Polkadot.js as a term has multiple moving parts that are worth mentioning:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/"},"Polkadot.js UI")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"This is the hosted application that loads when you navigate to in your browser and click apps wallet(hosted). This is also sometimes called \u201cPolkadot-JS App\u201d."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/polkadot-js/api"},"Polkadot.js API")),"\n2. This is the JavaScript API, a reusable library to allow programs to interface with the functionality of Polkadot. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/extension/"},"Polkadot.js Extension")),"\n3. This is the Chrome extension that allows you to manage your accounts and sign transactions. Note that all that it does is sign messages; it has limited functionality compared to full-featured wallets, and cannot connect to the Polkadot network itself."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/polkadot-js/"},"Polkadot.js codebase")),"\n4. The codebase contains all the repositories of code that are required to have the suite of tools working. You can navigate to the codebase here."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/phishing/"},"Polkadot.js Phishing List")),"\n5. The Phishing List website is a community driven curation of a list of less-than-honest operators. This list of URLs and addresses are constantly updated and the polkdot.js extension uses it as a source to warn you when you navigate to a URL included in the list and blocks the addresses from the apps UI. Users can also contribute suspicious sites and addresses if they come across them.")),(0,i.kt)("h2",{id:"polkadot-js-ui"},"Polkadot JS UI"),(0,i.kt)("p",null,"In this post I will focus on the UI, a powerful web application that has granular functionality support when it comes to interacting with the Polkadot blockchain. It is not considered to be just a wallet, it has more abilities than just creating accounts or sending and receiving transactions. "),(0,i.kt)("h2",{id:"abilities"},"Abilities"),(0,i.kt)("p",null,"Among other things, it also allows us to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Participate in staking"),(0,i.kt)("li",{parentName:"ol"},"Take part in governance"),(0,i.kt)("li",{parentName:"ol"},"Contribute to parachain crowdloans "),(0,i.kt)("li",{parentName:"ol"},"Run Parachain auctions"),(0,i.kt)("li",{parentName:"ol"},"Query chain metadata"),(0,i.kt)("li",{parentName:"ol"},"Query on-chain data using RPC calls")),(0,i.kt)("p",null,"Essentially, it allows you to perform all functionality that a  user can do on either the relay chain, or any parachain (although the user interface may not be aligned exactly with the functionality of any individual parachain). Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/people-of-parity-jaco-greeff/"},"Jaco")," from Parity, it has been keeping up with the developments of the Polkadot runtime which is implemented in Rust. As a developer if you\u2019re building a Substrate based blockchain, you can utilise the Polkadot.js UI to test your code's functionality."),(0,i.kt)("p",null,"All in all, interacting with the Polkadot JS UI comes down to either querying on-chain data, or issuing an extrinsic. Let's talk about what that means exactly."),(0,i.kt)("h2",{id:"querying-on-chain-data"},"Querying on-chain data"),(0,i.kt)("p",null,"In order to populate the UI, the web application queries the Polkadot.js API. The API then queries a Polkadot node, and uses JavaScript to return information that the UI will display on the screen. You can choose which node to connect to by changing it in the upper-left hand corner of the screen."),(0,i.kt)("h2",{id:"issuing-an-extrinsic"},"Issuing an extrinsic"),(0,i.kt)("p",null,"Extrinsics are pieces of information that come from outside the chain and are included in a block. Extrinsics can be one of three types: ",(0,i.kt)("strong",{parentName:"p"},"inherents"),", ",(0,i.kt)("strong",{parentName:"p"},"signed")," and ",(0,i.kt)("strong",{parentName:"p"},"unsigned transactions"),". Most extrinsics made from the Polkadot JS UI will be signed transactions. ",(0,i.kt)("strong",{parentName:"p"},"Inherits")," are non-signed and non-gossiped pieces of information included in blocks by the block author, such as timestamps, which are \u201ctrue\u201d because a sufficient number of validators have agreed about validity. ",(0,i.kt)("strong",{parentName:"p"},"Unsigned transactions")," are information that do not require a signature but will require some sort of spam prevention. ",(0,i.kt)("strong",{parentName:"p"},"Signed transactions")," are issued by the originator account of a transaction which contains a signature of that account, which will be subject to a fee to have it included on the chain. "),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"There have been concerns raised  by the community about the complexity of Polkadot-JS UI . However the aim of Polkadot.js UI is to support as much functionality that the relay chain requires of its users. Everytime there is a runtime update(which can be quite often) there is a potential change that needs to be made on the Polkadot.js codebase. For example, with most 3rd party wallets, when there are runtime updates they will usually need to add support for it. Polkadot.js UI is not focused as much on a user-friendly UI, but rather to support the Polkadot runtime without any bugs. "),(0,i.kt)("p",null,"For more user-friendly but simpler wallet implementations, check out the wiki page where we list ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-wallets#treasury-funded-wallets"},"Parity-developed and Treasury funded wallet projects")),(0,i.kt)("p",null,"Take a look at some of the educational content we have created to learn more about Polkadot.js"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4EQqwGFV1D8"},"Introduction to Polkadot.js")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"Create an account using Polkadot.js")))}p.isMDXComponent=!0},4915:function(t,e,a){e.Z=a.p+"assets/images/J-44c83fc5af4c1042c5896bb60fa94bc5.png"}}]);