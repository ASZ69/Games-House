
var games = angular.module("games",[]);

games.controller("cat-ctrl",function($scope,$filter){
	$scope.showCat = function(e){
		var ref = e.currentTarget;
		var cat = ref.innerHTML;
		
		$scope.evearray = $filter('filter')(itemlist, {name: cat});
		$(".right-view").css("display", "flex");
        $(".right-page").css("display", "none");
		
		hoverSetting();
		
	};
	
	$scope.evearray = $filter('filter')(itemlist, {name: 'Action games'});
	
	$scope.viewMore = function (game) {
        var clikeRf = game.currentTarget;
        var gameName = clikeRf.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
 
		
        $(".right-view").css("display", "none");
        $(".right-page").css("display", "block");

        $scope.moredetailsarray = $filter('filter')($scope.evearray[0].seasons, { name: gameName});
		
		
    };
      
	$scope.viewGame = function (games) {
        var clickref = games.currentTarget;
        var gameName = clickref.innerHTML;
		
		var gameCat = clickref.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
		$scope.evearray = $filter('filter')(itemlist, {name: gameCat});
		   
        $scope.moredetailsarray = $filter('filter')($scope.evearray[0].seasons, { name: gameName });
		
		setTimeout(function(){
			$(".right-view").css("display", "none");
        	$(".right-page").css("display", "block");
		},70);
		
		scrollUp();
		hoverSetting();
	
    };
	
	$scope.evearray = $filter('filter')(itemlist, {name: 'Action games'});
	
	$scope.catarray = itemlist;
	hoverSetting();

});

function scrollUp(){
	$(window).scrollTop(0);
}

function hoverSetting(){
	setTimeout(function(){
		$('.card-overlay a').on("mouseover",function(){
	//		alert("hello");
			$(this).parent().parent().find("img").eq(0).addClass("image-hover");
		});

		$('.card-overlay a').on("mouseleave",function(){
	//		alert("hello");
			$(this).parent().parent().find("img").eq(0).removeClass("image-hover");
		});

	},1000);
}

var itemlist = [{name:'Action games',
				 seasons:[
					 
					 {name:'Far Cry 1',
					  download:'http://www.emasti.pk/view/game/7557',
					  imgSrc:'../windows-games/farcry.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }
                     },
					 
					 {name:'Max Payne 3',
					  download:'',
					  imgSrc:'../windows-games/max-paine3.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/max-paine/1.jpg',
							  '../windows-games/screen-shots/max-paine/2.jpg',
                              '../windows-games/screen-shots/facry2/3.jpg',
                              '../windows-games/screen-shots/facry2/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action',
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }
					 },
					 
					 {name:'Hitman 1',
					  download:'',
					  imgSrc:'../windows-games/hitman.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/hitman/1.jpg',
							  '../windows-games/screen-shots/hitman/2.jpg',
                              '../windows-games/screen-shots/hitman/3.jpg',
                              '../windows-games/screen-shots/hitman/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }
					 },
					 
					  {name:'Tekken 7',
					   download:'',
					   imgSrc:'../windows-games/Tekken7.jpg',
					    requirements:{
						  images:[
							  '../windows-games/screen-shots/tekken7/1.jpg',
							  '../windows-games/screen-shots/tekken7/2.jpg',
                              '../windows-games/screen-shots/tekken7/3.jpg',
                              '../windows-games/screen-shots/tekken7/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Far Cry 2',
					  download:'',
					  imgSrc:'../windows-games/far-cry-2.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/facry2/1.jpg',
							  '../windows-games/screen-shots/facry2/2.jpg',
                              '../windows-games/screen-shots/facry2/3.jpg',
                              '../windows-games/screen-shots/facry2/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }
					 },
					 
					  {name:'Far Cry 3',
					   download:'',
					  imgSrc:'../windows-games/_-Far-Cry-3-PC-_.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/facry2/f3-1.jpg',
							  '../windows-games/screen-shots/facry2/f3-2.jpg',
                              '../windows-games/screen-shots/facry2/f3-4.jpg',
                              '../windows-games/screen-shots/facry2/f3-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Far Cry 4',
					  download:'',
					  imgSrc:'../windows-games/Far-Cry-4.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/facry2/f4-1.jpg',
							  '../windows-games/screen-shots/facry2/f4-2.jpg',
                              '../windows-games/screen-shots/facry2/f4-3.jpg',
                              '../windows-games/screen-shots/facry2/f4-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					   {name:'Far Cry 5',
						download:'',
					  imgSrc:'../windows-games/far-cry-5.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/facry2/f5-1.jpg',
							  '../windows-games/screen-shots/facry2/f5-2.jpg',
                              '../windows-games/screen-shots/facry2/f5-3.jpg',
                              '../windows-games/screen-shots/facry2/f5-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					  {name:'Max Payne 1',
					   download:'',
					  imgSrc:'../windows-games/Max-Payne-1.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/max-paine/3.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/max-paine/4.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					  {name:'Max Payne 2',
					   download:'',
					  imgSrc:'../windows-games/max-payne-2.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/max-paine/5.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/max-paine/3.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Hitman 2',
					  download:'',
					  imgSrc:'../windows-games/Hitman-2.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/hitman/h2-1.jpg',
							  '../windows-games/screen-shots/hitman/h2-2.jpg',
                              '../windows-games/screen-shots/hitman/h2-3.jpg',
                              '../windows-games/screen-shots/hitman/h2-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					   {name:'Hitman 3 Contracts',
						download:'',
					  imgSrc:'../windows-games/Hitman-3-Contracts.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/hitman/h3-1.jpg',
							  '../windows-games/screen-shots/hitman/h3-2.jpg',
                              '../windows-games/screen-shots/hitman/h2-4.jpg',
                              '../windows-games/screen-shots/hitman/h3-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Hitman Blood Money',
					  download:'',
					  imgSrc:'../windows-games/Hitman-Blood-Money.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/hitman/h4-1.jpg',
							  '../windows-games/screen-shots/hitman/h4-2.jpg',
                              '../windows-games/screen-shots/hitman/h4-3.jpg',
                              '../windows-games/screen-shots/hitman/h2-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					  {name:'Tekken 3',
					   download:'',
					  imgSrc:'../windows-games/Tekken-3.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/tekken7/1.jpg',
							  '../windows-games/screen-shots/tekken7/2.jpg',
                              '../windows-games/screen-shots/tekken7/3.jpg',
                              '../windows-games/screen-shots/tekken7/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Tekken 5',
					  download:'',
					  imgSrc:'../windows-games/Tekken-5.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/tekken7/1.jpg',
							  '../windows-games/screen-shots/tekken7/2.jpg',
                              '../windows-games/screen-shots/tekken7/3.jpg',
                              '../windows-games/screen-shots/tekken7/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					   {name:'SpaceJet',
						download:'',
					  imgSrc:'../windows-games/space-jet-action.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/game-images/spj-1.jpg',
							  '../windows-games/screen-shots/game-images/spj-2.jpg',
                              '../windows-games/screen-shots/game-images/spj-3.jpg',
                              '../windows-games/screen-shots/game-images/spj-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					  {name:'Rise of Tom Rider',
					   download:'',
					  imgSrc:'../windows-games/rise-of-tom-rider-action.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/game-images/rt-1.jpg',
							  '../windows-games/screen-shots/game-images/rt-2.jpg',
                              '../windows-games/screen-shots/game-images/rt-3.jpg',
                              '../windows-games/screen-shots/game-images/rt-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					  {name:'Pandda Cammender',
					   download:'',
					  imgSrc:'../windows-games/pandda-cammender-action.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/game-images/pc-1.jpg',
							  '../windows-games/screen-shots/game-images/pc-4.jpg',
                              '../windows-games/screen-shots/game-images/pc-3.jpg',
                              '../windows-games/screen-shots/game-images/pc-4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Ninja Mission',
					  download:'',
					  imgSrc:'../windows-games/ninja-mission-action.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/game-images/rt-1.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					   {name:'Clash Atlantis',
						download:'',
					  imgSrc:'../windows-games/clash-atlantis-action.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/game-images/rt-1.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }
					   },
				 ]},
				
				
				{name:'Shooting games',
				 seasons:[
					 
					 {name:'CallofDuty',
					  download:'',
					  imgSrc:'../windows-games/callofduty.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Battlefield 1',
					  download:'',
					  imgSrc:'../windows-games/Battlefield_1.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'SniperElite 1',
					  download:'',
					  imgSrc:'../windows-games/sniper.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'FallOut 1',
					  download:'',
					  imgSrc:'../windows-games/Fallout-76.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Battlefield 2',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Battlefield-2.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Battlefield 3',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Battlefield_3.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Battlefield 4',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Battlefield-4.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Call of Duty WWII',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Call-of-Duty-WWII.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Call of duty MWF',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/callofdutymodernwarfareremastered.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Call of duty MWF 2',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Call-of-Duty-Modern-Warfare-2.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Call of Duty Ghosts',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/callofduty-gosut.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Sniper Elite 3',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/sniper_Elite_3.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					  {name:'Sniper Elite 4',
					   download:'',
					  imgSrc:'../windows-games/shooting-games/sniper-elite-4.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Tom Clancys Splinter Cell',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/tom-clancys-splinter-cell-blacklist.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'The Divition',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/the-divition.png',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Rules of Survival',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Rules-of-Survival.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'PUBG Pc',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/pubj-pc.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Fallout 4',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/fallout-4.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Delta-Force',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/Delta-Forc.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Cs-Go',
					  download:'',
					  imgSrc:'../windows-games/shooting-games/cs-go.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
				 ]},
				
				{name:'Sport games',
				 seasons:[
					 
					 {name:'Circket07',
					  download:'',
					  imgSrc:'../windows-games/circket07.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'FIFA 18',
					  download:'',
					  imgSrc:'../windows-games/fifa18.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'NBA Playground',
					  download:'',
					  imgSrc:'../windows-games/NBA_Playgrounds.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
					 {name:'NeedForSpeed',
					  download:'',
					  imgSrc:'../windows-games/sports-games/emT15adY-NFS.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Street Outlaws',
					  download:'',
					  imgSrc:'../windows-games/sports-games/dreft-mania.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Epic Soccer',
					  download:'',
					  imgSrc:'../windows-games/sports-games/epic-soccer.png',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'FaceOff Banner',
					  download:'',
					  imgSrc:'../windows-games/sports-games/FaceOff-Banner.png',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
					 {name:'FIFA 17',
					  download:'',
					  imgSrc:'../windows-games/sports-games/fifa17.png',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'FIFA 19',
					  download:'',
					  imgSrc:'../windows-games/sports-games/fifa19.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'football-legands 3',
					  download:'',
					  imgSrc:'../windows-games/sports-games/football-legands.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'HILL CAR',
					  download:'',
					  imgSrc:'../windows-games/sports-games/hill-car.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
					 {name:'MotoGP 15',
					  download:'',
					  imgSrc:'../windows-games/sports-games/MotoGP-15.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'MotoGP 17',
					  download:'',
					  imgSrc:'../windows-games/sports-games/MotoGP-17.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'MotoGP 18',
					  download:'',
					  imgSrc:'../windows-games/sports-games/MotoGP-18.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'NFS Most Wanted',
					  download:'',
					  imgSrc:'../windows-games/sports-games/Need-For-Speed-Most-Wanted.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
					 {name:'NFS No Limits',
					  download:'',
					  imgSrc:'../windows-games/sports-games/need-for-speed-no-limits.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'NFS SHIELD Songbird',
					  download:'',
					  imgSrc:'../windows-games/sports-games/NV-SHIELD-Songbird-NFS.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'P15 Scout Pr',
					  download:'',
					  imgSrc:'../windows-games/sports-games/p15-scout-pr.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Real Cricket 14',
					  download:'',
					  imgSrc:'../windows-games/sports-games/rc1.png',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
					 {name:'Speed Car',
					  download:'',
					  imgSrc:'../windows-games/sports-games/speed-car.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Soccer Champion',
					  download:'',
					  imgSrc:'../windows-games/sports-games/soccer-cham.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
				 ]},
				
				{name:'Puzzle games',
				 seasons:[
					 
					 {name:'Jigsaw Puzzles Free',
					  download:'',
					  imgSrc:'../windows-games/jigsaw-puzzle.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'The Witness',
					  download:'',
					  imgSrc:'../windows-games/preview.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Magic Jigsaw Puzzles',
					  download:'',
					  imgSrc:'../windows-games/Puzzle-Bobble-2.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Jigsaw Car Puzzle',
					  download:'',
					  imgSrc:'../windows-games/puzzle-games/car-puzzle.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Jugle Puzzle',
					  download:'',
					  imgSrc:'../windows-games/puzzle-games/jugle.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Jelly Puzzles',
					  download:'',
					  imgSrc:'../windows-games/puzzle-games/jully-puzzle.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Puzzle Craft 2',
					  download:'',
					  imgSrc:'../windows-games/puzzle-games/puzzle.jpg',
					 requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'Jungle Puzzle',
					  download:'',
					  imgSrc:'../windows-games/puzzle-games/puzzle1.jpg',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					 
					 {name:'World Slide Puzzles',
					  download:'',
					  imgSrc:'../windows-games/puzzle-games/world-puzzle.png',
					  requirements:{
						  images:[
							  '../windows-games/screen-shots/far-cry/1.jpg',
							  '../windows-games/screen-shots/far-cry/2.jpg',
                              '../windows-games/screen-shots/far-cry/3.jpg',
                              '../windows-games/screen-shots/far-cry/4.jpg',
                              '../windows-games/screen-shots/far-cry/5.jpg'
                          ],
                          releaseDate: '2004',
                          updatedOn: '23 March, 2004',
                          genre: 'Action',
                          category: 'Action', 
                          views: '11290',
                          votes: 'N/A',
                          officialSite: 'www.site',
                          minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                          recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
                      }},
					
				 ]}
				
				
			   ];