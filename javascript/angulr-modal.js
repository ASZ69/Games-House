
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var games = angular.module("games", []);

games.controller("cat-ctrl", function ($scope, $filter) {
    $scope.showCat = function (e) {
        var ref = e.currentTarget;
        var cat = ref.innerHTML;

        $scope.evearray = $filter('filter')(itemlist, { name: cat });
        $(".right-view").css("display", "flex");
        $(".right-page").css("display", "none"); 

        hoverSetting();

    };

    $scope.evearray = $filter('filter')(itemlist, { name: 'Action games' });

    $scope.viewMore = function (game) {
        var clikeRf = game.currentTarget;
        var gameName = clikeRf.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;


        $(".right-view").css("display", "none");
        $(".right-page").css("display", "block");

        $scope.moredetailsarray = $filter('filter')($scope.evearray[0].seasons, { name: gameName });


    };

    $scope.viewGame = function (games) {
        var clickref = games.currentTarget;
        var gameName = clickref.innerHTML;

        var gameCat = clickref.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
        $scope.evearray = $filter('filter')(itemlist, { name: gameCat });

        $scope.moredetailsarray = $filter('filter')($scope.evearray[0].seasons, { name: gameName });

        setTimeout(function () {
            $(".right-view").css("display", "none");
            $(".right-page").css("display", "block");
        }, 70);

        scrollUp();
        hoverSetting();

    };

	//check url to get specific result

var url = window.location.search.replace("?","").replaceAll("%22","").replaceAll("%20"," ");
	if(url == ""){
		
		$scope.evearray = $filter('filter')(itemlist, { name: 'Action games' });
		hoverSetting();
		
	}else{
		
		var parts = url.split("&");
		var category = parts[0].split("=")[1];
		var season = parts[1].split("=")[1];
		
        $scope.evearray = $filter('filter')(itemlist, { name: category });
		
         if(season != ""){
		$scope.moredetailsarray = $filter('filter')($scope.evearray[0].seasons, { name: season });
		setTimeout(function () {
            $(".right-view").css("display", "none");
            $(".right-page").css("display", "block");
        }, 70);

        scrollUp();
        hoverSetting();
			
			}
	}

});

function scrollUp() {
    $(window).scrollTop(0);
}

function hoverSetting() {
    setTimeout(function () {
        $('.card-overlay a').on("mouseover", function () {
            //		alert("hello");
            $(this).parent().parent().find("img").eq(0).addClass("image-hover");
        });

        $('.card-overlay a').on("mouseleave", function () {
            //		alert("hello");
            $(this).parent().parent().find("img").eq(0).removeClass("image-hover");
        });

    }, 1000);
}




var itemlist = [{
    name: 'Action games',
    seasons: [

        {
            name: 'Far Cry 1',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/farcry.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Max Payne 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/max-paine3.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/max-paine/1.jpg',
                    '../windows-games/screen-shots/max-paine/2.jpg',
                    '../windows-games/screen-shots/facry2/3.jpg',
                    '../windows-games/screen-shots/facry2/4.jpg',
                ],
                releaseDate: '20',
                updatedOn: '2 April, 2006',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Hitman 1', 
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/hitman.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/hitman/1.jpg',
                    '../windows-games/screen-shots/hitman/2.jpg',
                    '../windows-games/screen-shots/hitman/3.jpg',
                    '../windows-games/screen-shots/hitman/4.jpg',
                ],
                releaseDate: '2009',
                updatedOn: '5 Fabruary, 2009',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A', 
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Tekken 7',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Tekken7.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/tekken7/1.jpg',
                    '../windows-games/screen-shots/tekken7/2.jpg',
                    '../windows-games/screen-shots/tekken7/3.jpg',
                    '../windows-games/screen-shots/tekken7/4.jpg',
                ],
                releaseDate: '2012',
                updatedOn: '29 March, 2012',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Far Cry 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/far-cry-2.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/facry2/1.jpg',
                    '../windows-games/screen-shots/facry2/2.jpg',
                    '../windows-games/screen-shots/facry2/3.jpg',
                    '../windows-games/screen-shots/facry2/4.jpg',
                ],
                releaseDate: '2005',
                updatedOn: '20 March, 2005',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Far Cry 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/_-Far-Cry-3-PC-_.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/facry2/f3-1.jpg',
                    '../windows-games/screen-shots/facry2/f3-2.jpg',
                    '../windows-games/screen-shots/facry2/f3-4.jpg',
                    '../windows-games/screen-shots/facry2/f3-4.jpg',
                ],
                releaseDate: '2010',
                updatedOn: '30 Jun, 2010',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Far Cry 4',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Far-Cry-4.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/facry2/f4-1.jpg',
                    '../windows-games/screen-shots/facry2/f4-2.jpg',
                    '../windows-games/screen-shots/facry2/f4-3.jpg',
                    '../windows-games/screen-shots/facry2/f4-4.jpg',
                ],
                releaseDate: '2015',
                updatedOn: '23 March, 2015',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Far Cry 5',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/far-cry-5.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/facry2/f5-1.jpg',
                    '../windows-games/screen-shots/facry2/f5-2.jpg',
                    '../windows-games/screen-shots/facry2/f5-3.jpg',
                    '../windows-games/screen-shots/facry2/f5-4.jpg',
                ],
                releaseDate: '2018',
                updatedOn: '25 March, 2018',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Max Payne 1',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Max-Payne-1.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/max-paine/3.jpg',
                    '../windows-games/screen-shots/far-cry/2.jpg',
                    '../windows-games/screen-shots/max-paine/4.jpg',
                    '../windows-games/screen-shots/far-cry/4.jpg',
                    '../windows-games/screen-shots/far-cry/5.jpg'
                ],
                releaseDate: '2009',
                updatedOn: '1 May, 2009',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Max Payne 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/max-payne-2.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/max-paine/5.jpg',
                    '../windows-games/screen-shots/far-cry/2.jpg',
                    '../windows-games/screen-shots/far-cry/3.jpg',
                    '../windows-games/screen-shots/max-paine/3.jpg',
                ],
                releaseDate: '2011',
                updatedOn: '10 May 2011',
                genre: 'Action',
                category: 'Action',
                views: '112',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Hitman 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Hitman-2.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/hitman/h2-1.jpg',
                    '../windows-games/screen-shots/hitman/h2-2.jpg',
                    '../windows-games/screen-shots/hitman/h2-3.jpg',
                    '../windows-games/screen-shots/hitman/h2-4.jpg',
                ],
                releaseDate: '2009',
                updatedOn: '3 July, 2009',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Hitman 3 Contracts',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Hitman-3-Contracts.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Hitman Blood Money',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Hitman-Blood-Money.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Tekken 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Tekken-3.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Tekken 5',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Tekken-5.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'SpaceJet',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/space-jet-action.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Rise of Tom Rider',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/rise-of-tom-rider-action.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Pandda Cammender',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/pandda-cammender-action.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Ninja Mission',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/ninja-mission-action.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Clash Atlantis',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/clash-atlantis-action.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },
    ]
},


{
    name: 'Shooting games',
    seasons: [

        {
            name: 'CallofDuty',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/callofduty.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/cod-1.jpg',
                    '../windows-games/screen-shots/game-images/cod-2.jpg',
                    '../windows-games/screen-shots/game-images/cod-3.jpg',
                    '../windows-games/screen-shots/game-images/cod-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Battlefield 1',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Battlefield_1.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/b-1.jpg',
                    '../windows-games/screen-shots/game-images/b-2.jpg',
                    '../windows-games/screen-shots/game-images/b-3.jpg',
                    '../windows-games/screen-shots/game-images/b-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'SniperElite 1',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/sniper.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/sp-1.jpg',
                    '../windows-games/screen-shots/game-images/sp-2.jpg',
                    '../windows-games/screen-shots/game-images/sp-3.jpg',
                    '../windows-games/screen-shots/game-images/sp-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'FallOut 1',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Fallout-76.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/f-1.jpg',
                    '../windows-games/screen-shots/game-images/f-2.jpg',
                    '../windows-games/screen-shots/game-images/f-3.jpg',
                    '../windows-games/screen-shots/game-images/f-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Battlefield 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Battlefield-2.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/b2-1.jpg',
                    '../windows-games/screen-shots/game-images/b2-2.jpg',
                    '../windows-games/screen-shots/game-images/b2-3.jpg',
                    '../windows-games/screen-shots/game-images/b2-1.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Battlefield 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Battlefield_3.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/b2-1.jpg',
                    '../windows-games/screen-shots/game-images/b-1.jpg',
                    '../windows-games/screen-shots/game-images/b-2.jpg',
                    '../windows-games/screen-shots/game-images/b-3.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Battlefield 4',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Battlefield-4.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/b-1.jpg',
                    '../windows-games/screen-shots/far-cry/2.jpg',
                    '../windows-games/screen-shots/game-images/b-3.jpg',
                    '../windows-games/screen-shots/far-cry/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Call of Duty WWII',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Call-of-Duty-WWII.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Call of duty MWF',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/callofdutymodernwarfareremastered.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/codmwf-1.jpg',
                    '../windows-games/screen-shots/game-images/codmwf-2.jpg',
                    '../windows-games/screen-shots/game-images/codmwf-3.jpg',
                    '../windows-games/screen-shots/game-images/codmwf-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Call of duty MWF 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Call-of-Duty-Modern-Warfare-2.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/codww2.jpg',
                    '../windows-games/screen-shots/game-images/codww2-2.jpg',
                    '../windows-games/screen-shots/game-images/codww2-3.jpg',
                    '../windows-games/screen-shots/game-images/codww2-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Call of Duty Ghosts',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/callofduty-gosut.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/codg-1.jpg',
                    '../windows-games/screen-shots/game-images/codg-2.jpg',
                    '../windows-games/screen-shots/game-images/codg-3.jpg',
                    '../windows-games/screen-shots/game-images/codg-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Sniper Elite 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/sniper_Elite_3.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/sp4-1.jpg',
                    '../windows-games/screen-shots/game-images/sp4-2.jpg',
                    '../windows-games/screen-shots/game-images/sp4-3.jpg',
                    '../windows-games/screen-shots/game-images/sp4-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Sniper Elite 4',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/sniper-elite-4.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/sp4-3.jpg',
                    '../windows-games/screen-shots/far-cry/2.jpg',
                    '../windows-games/screen-shots/game-images/sp4-1.jpg',
                    '../windows-games/screen-shots/far-cry/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Tom Clancys Splinter Cell',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/tom-clancys-splinter-cell-blacklist.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/tom-1.jpg',
                    '../windows-games/screen-shots/game-images/tom-2.jpg',
                    '../windows-games/screen-shots/game-images/tom-3.jpg',
                    '../windows-games/screen-shots/game-images/tom-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'The Divition',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/the-divition.png',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/tomd-1.jpg',
                    '../windows-games/screen-shots/game-images/tomd-2.jpg',
                    '../windows-games/screen-shots/game-images/tomd-3.jpg',
                    '../windows-games/screen-shots/game-images/tomd-1.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Rules of Survival',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Rules-of-Survival.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/ros-1.jpg',
                    '../windows-games/screen-shots/game-images/ros-2.jpg',
                    '../windows-games/screen-shots/game-images/ros-3.jpg',
                    '../windows-games/screen-shots/game-images/ros-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'PUBG Pc',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/pubj-pc.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/pubg-1.jpg',
                    '../windows-games/screen-shots/game-images/pubg-2.jpg',
                    '../windows-games/screen-shots/game-images/pubg-3.jpg',
                    '../windows-games/screen-shots/game-images/pubg-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Fallout 4',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/fallout-4.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/f4-1.jpg',
                    '../windows-games/screen-shots/game-images/f4-2.jpg',
                    '../windows-games/screen-shots/game-images/f4-3.jpg',
                    '../windows-games/screen-shots/game-images/f4-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Delta-Force',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/Delta-Forc.jpg',
            requirements: {
                images: [
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
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Cs-Go',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/shooting-games/cs-go.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/game-images/csgo-1.jpg',
                    '../windows-games/screen-shots/game-images/csgo-2.jpg',
                    '../windows-games/screen-shots/game-images/csgo-3.jpg',
                    '../windows-games/screen-shots/game-images/csgo-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

    ]
},

{
    name: 'Sport games',
    seasons: [

        {
            name: 'Cricket07',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/circket07.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/sports-game/c7-1.jpg',
                    '../windows-games/screen-shots/sports-game/c7-2.jpg',
                    '../windows-games/screen-shots/sports-game/c7-3.jpg',
                    '../windows-games/screen-shots/sports-game/c7-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'FIFA 18',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/fifa18.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/sports-game/fifa-1.jpg',
                    '../windows-games/screen-shots/sports-game/fifa-2.jpg',
                    '../windows-games/screen-shots/sports-game/fifa-3.jpg',
                    '../windows-games/screen-shots/sports-game/fifa-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },


        {
            name: 'NeedForSpeed',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/sports-games/emT15adY-NFS.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/sports-game/nfs-1.jpg',
                    '../windows-games/screen-shots/sports-game/nfs-2.jpg',
                    '../windows-games/screen-shots/sports-game/nfs-3.jpg',
                    '../windows-games/screen-shots/sports-game/nfs-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },


        {
            name: 'MotoGP 15',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/sports-games/MotoGP-15.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/sports-game/m-1.jpg',
                    '../windows-games/screen-shots/sports-game/m-2.jpg',
                    '../windows-games/screen-shots/sports-game/m-3.jpg',
                    '../windows-games/screen-shots/sports-game/m-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },


        {
            name: 'NFS Most Wanted',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/sports-games/Need-For-Speed-Most-Wanted.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/sports-game/nfsmw-1.jpg',
                    '../windows-games/screen-shots/sports-game/nfsmw-2.jpg',
                    '../windows-games/screen-shots/sports-game/nfsmw-3.jpg',
                    '../windows-games/screen-shots/sports-game/nfsmw-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },




    ]
},

{
    name: 'Puzzle games',
    seasons: [

        {
            name: 'Jigsaw Puzzles Free',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/jigsaw-puzzle.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'The Witness',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/preview.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Magic Jigsaw Puzzles',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/Puzzle-Bobble-2.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Jigsaw Car Puzzle',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/puzzle-games/car-puzzle.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Jugle Puzzle',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/puzzle-games/jugle.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Jelly Puzzles',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/puzzle-games/jully-puzzle.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Puzzle Craft 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/puzzle-games/puzzle.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'Jungle Puzzle',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/puzzle-games/puzzle1.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

        {
            name: 'World Slide Puzzles',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../windows-games/puzzle-games/world-puzzle.png',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
                minimumRequirment: 'OS: Windows 7 Windows 8.1 Windows 10 (64-bit versions only). Processor: Intel Core i3- 550 | AMD Phenom II X4 955 or equivalent. Memory: 4 GB RAM. Graphics: NVIDIA GeForce GTX 460 (1GB VRAM) | AMD Radeon HD 5770 (1GB VRAM) or equivalent. Storage: 20 GB available space',
                recommended: 'OS: Windows 7, Windows 8.1, Windows 10 (64-bit versions only). Processor: Intel Core i7- 2600K | AMD FX-8350 or equivalent. Memory: 8 GB RAM. Graphics: NVIDIA GeForce GTX 780 | AMD Radeon R9 280X or equivalent. Storage: 20 GB available space'
            }
        },

    ]
}


];