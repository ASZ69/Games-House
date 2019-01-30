
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
					 
					 {name:'FarCry',
					  requirements:'', 
					  imgSrc:'../windows-games/farcry-ori.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						 videos:'games.mp4',
					                 }},
					 
					 {name:'Max Payne 3',
					  requirements:'', 
					  imgSrc:'../windows-games/max-paine3-ori.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						   videos:'games.mp4'}},
					 
					 {name:'Hitman',
					 requirements:'', 
					  imgSrc:'../windows-games/hitman-ori.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					  {name:'Tekken 7',
					   requirements:'', 
					   imgSrc:'../windows-games/Tekken-7-ori.jpg',
					    moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}}
				 ]},
				
				{name:'Shooting games',
				 seasons:[
					 
					 {name:'CallofDuty',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Battlefield',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'SniperElite',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'FallOut',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}}
				 ]},
				
				{name:'Sport games',
				 seasons:[
					 
					 {name:'Circket07',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'FIFA 18',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'NBA Playground',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
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
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'The Witness',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  videos:'games.mp4'}},
					 
					 {name:'Magic Jigsaw Puzzles',
					  requirements:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
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