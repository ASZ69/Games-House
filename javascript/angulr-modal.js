
var games = angular.module("games",[]);

games.controller("cat-ctrl",function($scope,$filter){
	$scope.showCat = function(e){
		var ref = e.currentTarget;
		var cat = ref.innerHTML;
		
		$scope.evearray = $filter('filter')(itemlist, {name: cat});
	};
	
	$scope.evearray = $filter('filter')(itemlist, {name: 'Action games'});
});


var itemlist = [{name:'Action games',
				 seasons:[
					 
					 {name:'Far Cry',
					  requirements:'', 
					  imgSrc:'../windows-games/farcry.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Max Payne 3',
					  requirements:'', 
					  imgSrc:'../windows-games/max-paine3.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						   videos:'games.mp4'}},
					 
					 {name:'Hitman',
					 requirements:'', 
					  imgSrc:'../windows-games/hitman.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					  {name:'Tekken 7',
					   requirements:'', 
					   imgSrc:'../windows-games/Tekken7.jpg',
					    moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Far Cry 2',
					  requirements:'', 
					  imgSrc:'../windows-games/far-cry-2.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					  {name:'Far Cry 3',
					  requirements:'', 
					  imgSrc:'../windows-games/_-Far-Cry-3-PC-_.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Far Cry 4',
					  requirements:'', 
					  imgSrc:'../windows-games/Far-Cry-4.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					   {name:'Far Cry 5',
					  requirements:'', 
					  imgSrc:'../windows-games/far-cry-5.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					  {name:'Max Payne 1',
					  requirements:'', 
					  imgSrc:'../windows-games/Max-Payne-1.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					  {name:'Max Payne 2',
					  requirements:'', 
					  imgSrc:'../windows-games/max-payne-2.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Hitman 2',
					  requirements:'', 
					  imgSrc:'../windows-games/Hitman-2.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					   {name:'Hitman 3 Contracts',
					  requirements:'', 
					  imgSrc:'../windows-games/Hitman-3-Contracts.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Hitman Blood Money',
					  requirements:'', 
					  imgSrc:'../windows-games/Hitman-Blood-Money.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					  {name:'Tekken 3',
					  requirements:'', 
					  imgSrc:'../windows-games/Tekken-3.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Tekken 5',
					  requirements:'', 
					  imgSrc:'../windows-games/Tekken-5.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					   {name:'SpaceJet',
					  requirements:'', 
					  imgSrc:'../windows-games/space-jet-action.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					  {name:'Rise of Tom Rider',
					  requirements:'', 
					  imgSrc:'../windows-games/rise-of-tom-rider-action.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					  {name:'Pandda Cammender',
					  requirements:'', 
					  imgSrc:'../windows-games/pandda-cammender-action.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Ninja Mission',
					  requirements:'', 
					  imgSrc:'../windows-games/ninja-mission-action.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					   {name:'Clash Atlantis',
					  requirements:'', 
					  imgSrc:'../windows-games/clash-atlantis-action.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
				 ]},
				
				
				{name:'Shooting games',
				 seasons:[
					 
					 {name:'CallofDuty',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/callofduty.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Battlefield',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/Battlefield_1.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'SniperElite',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/sniper.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'FallOut',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/Fallout-76.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Battlefield 2',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Battlefield-2.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Battlefield 3',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Battlefield_3.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Battlefield 4',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Battlefield-4.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Call of Duty WWII',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Call-of-Duty-WWII.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Call of duty MWF',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/callofdutymodernwarfareremastered.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Call of duty MWF 2',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Call-of-Duty-Modern-Warfare-2.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Call of Duty Ghosts',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/callofduty-gosut.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Sniper Elite 3',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/sniper_Elite_3.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					  {name:'Sniper Elite 4',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/sniper-elite-4.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Tom Clancys Splinter Cell',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/tom-clancys-splinter-cell-blacklist.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'The Divition',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/the-divition.png',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Rules of Survival',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Rules-of-Survival.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					  {name:'Sniper Elite 4',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/sniper-elite-4.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'pubj Pc',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/pubj-pc.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Fallout 4',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/fallout-4.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Delta-Force',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/Delta-Forc.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Cs-Go',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/shooting-games/cs-go.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					
				 ]},
				
				{name:'Sport games',
				 seasons:[
					 
					 {name:'Circket07',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/circket07.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'FIFA 18',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/fifa18.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'NBA Playground',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/NBA_Playgrounds.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					
				 ]},
				
				{name:'Puzzle games',
				 seasons:[
					 
					 {name:'Jigsaw Puzzles Free',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/jigsaw-puzzle.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'The Witness',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/preview.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Magic Jigsaw Puzzles',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../windows-games/Puzzle-Bobble-2.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					
				 ]}
				
				
			   ];

// var dataList = [
//		{heading:'FarCry',season:'2004',
//		 requirements:'bdfddg',
//		 imgSrc:'../images/myimg.jpg',
//		 moreDetails:{
//			 images:{
//				 image1:'../images/my.jpg',
//			 	 image2:'asdasda',
//			 	 image3:'adsfda'}}, 
//		{heading:'The PSL',season:'2017',
//			 wiki:'www.wiki.com/psl',
//			 imgSrc:'../images/myimg.jpg',
//			 moreDetails:{
//				 images:{
//					 image1:'../images/my.jpg',
//					 image2:'asdasda',
//					 image3:'adsfda'},
//				 scoreDefeat:'24/7',
//				 scoreWin:'12/24',
//				 matchHost:'landhi'}},
//		{heading:'The ICC',season:'2017',
//		 wiki:'www.wiki.com/psl17',
//		 imgSrc:'../images/myimg17.jpg',
//		 moreDetails:{
//			 images:{
//				 image1:'../images/myfor3.jpg',
//			 	 image2:'axzxz',
//			 	 image3:'iii'},
//			 scoreDefeat:'69/7',
//			 scoreWin:'1/240',
//		 	 matchHost:'nadi kinare'}}
//		];