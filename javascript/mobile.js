
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

    $scope.evearray = $filter('filter')(itemlist, { name: 'Arcade games' });

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
		
		$scope.evearray = $filter('filter')(itemlist, { name: 'Arcade games' });
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

    $scope.evearray = $filter('filter')(itemlist, { name: 'Arcade games' });

    $scope.catarray = itemlist;
    hoverSetting();

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
    name: 'Arcade games',
    seasons: [

        {
            name: 'Fruit Ninja',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/arcade-games/fruitninja.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/F-1.jpg',
                    '../mobile-games/screenshots/F-2.jpg',
                    '../mobile-games/screenshots/F-3.jpg',
                    '../mobile-games/screenshots/F-4.jpg', 
                ],
                releaseDate: '2010',
                updatedOn: '11 jun, 2010',
                genre: 'Arcade',
                category: 'Arcade',
                views: '11290',
                votes: '69',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Tample Run',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/arcade-games/temple-run.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/t-1.jpg',
                    '../mobile-games/screenshots/t-2.jpg',
                    '../mobile-games/screenshots/t-3.jpg',
                    '../mobile-games/screenshots/t-4.jpg',
                ],
                releaseDate: '2012',
                updatedOn: '23 March, 2012',
                genre: 'Arcade',
                category: 'Arcade',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Subway surfers',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/arcade-games/subway.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/sw-1.jpg',
                    '../mobile-games/screenshots/sw-2.jpg',
                    '../mobile-games/screenshots/sw-3.jpg',
                    '../mobile-games/screenshots/sw-4.jpg',
                ],
                releaseDate: '2009',
                updatedOn: '2 July, 2009',
                genre: 'Arcade',
                category: 'Arcade',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Angry Birds',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/arcade-games/angrybirds.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/ab-1.jpg',
                    '../mobile-games/screenshots/ab-2.jpg',
                    '../mobile-games/screenshots/ab-3.jpg',
                    '../mobile-games/screenshots/ab-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Angry Birds 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/arcade-games/angrybirds 2.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/ab2-1.jpg',
                    '../mobile-games/screenshots/ab2-2.jpg',
                    '../mobile-games/screenshots/ab2-3.jpg',
                    '../mobile-games/screenshots/ab2-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
         {
            name: 'journey to Jungle',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/journey-to-jungle.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/jur-1.jpg',
                    '../mobile-games/moresceenshootsadd/jur-2.jpg',
                    '../mobile-games/moresceenshootsadd/jur-3.jpg',
                    '../mobile-games/moresceenshootsadd/jur-4.jpg',
                ],
                releaseDate: '2017',
                updatedOn: '23 March, 2017',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		 {
            name: 'Chicken Invaders',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/chicken-invaders.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/ch-1.jpg',
                    '../mobile-games/moresceenshootsadd/ch-2.jpg',
                    '../mobile-games/moresceenshootsadd/ch-3.jpg',
                    '../mobile-games/moresceenshootsadd/ch-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Chicken Invaders 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/ch-2.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/ch2-1.jpg',
                    '../mobile-games/moresceenshootsadd/ch2-2.jpg',
                    '../mobile-games/moresceenshootsadd/ch2-3.jpg',
                    '../mobile-games/moresceenshootsadd/ch2-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Chicken Invaders 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/chicken-3.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/ch3-1.jpg',
                    '../mobile-games/moresceenshootsadd/ch3-2.jpg',
                    '../mobile-games/moresceenshootsadd/ch3-3.jpg',
                    '../mobile-games/moresceenshootsadd/ch3-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Chicken Invaders 4',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/ch-4.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/ch4-1.jpg',
                    '../mobile-games/moresceenshootsadd/ch4-2.jpg',
                    '../mobile-games/moresceenshootsadd/ch4-3.jpg',
                    '../mobile-games/moresceenshootsadd/ch4-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Chicken Invaders 5',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/ch-5.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/ch5-1.jpg',
                    '../mobile-games/moresceenshootsadd/ch5-2.jpg',
                    '../mobile-games/moresceenshootsadd/ch5-3.jpg',
                    '../mobile-games/moresceenshootsadd/ch5-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Cadillacs Dinosaurs',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/cd-1.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/c-1.jpg',
                    '../mobile-games/moresceenshootsadd/c-2.jpg',
                    '../mobile-games/moresceenshootsadd/c-3.jpg',
                    '../mobile-games/moresceenshootsadd/c-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Aladdin',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/aladin.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/a-1.jpg',
                    '../mobile-games/moresceenshootsadd/a-2.jpg',
                    '../mobile-games/moresceenshootsadd/a-3.jpg',
                    '../mobile-games/moresceenshootsadd/a-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Pac Man',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/pm.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/p-1.jpg',
                    '../mobile-games/moresceenshootsadd/p-2.jpg',
                    '../mobile-games/moresceenshootsadd/p-3.jpg',
                    '../mobile-games/moresceenshootsadd/p-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Super Mario',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/sm.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/m-1.jpg',
                    '../mobile-games/moresceenshootsadd/m-2.jpg',
                    '../mobile-games/moresceenshootsadd/m-3.jpg',
                    '../mobile-games/moresceenshootsadd/m-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Tarzan',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/tarzan.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/tr-1.jpg',
                    '../mobile-games/moresceenshootsadd/tr-2.jpg',
                    '../mobile-games/moresceenshootsadd/tr-3.jpg',
                    '../mobile-games/moresceenshootsadd/tr-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
		
		{
            name: 'Vikings',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/moreadd-images/v.jpg',
            requirements: {
                images: [
                    '../mobile-games/moresceenshootsadd/v-1.jpg',
                    '../mobile-games/moresceenshootsadd/v-2.jpg',
                    '../mobile-games/moresceenshootsadd/v-3.jpg',
                    '../mobile-games/moresceenshootsadd/v-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
    ]
},


{
    name: 'Racing-flying',
    seasons: [

        {
            name: 'Asphalt8 Airborne',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/racing-game/asphalts.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/as-1.jpg',
                    '../mobile-games/screenshots/as-2.jpg',
                    '../mobile-games/screenshots/as-3.jpg',
                    '../mobile-games/screenshots/as-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Traffic Racer',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/racing-game/traffic-racer.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/tr-1.jpg',
                    '../mobile-games/screenshots/tr-2.jpg',
                    '../mobile-games/screenshots/tr-3.jpg',
                    '../mobile-games/screenshots/tr-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Traffic Rider',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/racing-game/traffic-rider.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/trf-1.jpg',
                    '../mobile-games/screenshots/trf-2.jpg',
                    '../mobile-games/screenshots/trf-3.jpg',
                    '../mobile-games/screenshots/trf-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Apocalypse Planet',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/racing-game/apolo.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/apo-1.jpg',
                    '../mobile-games/screenshots/apo-2.jpg',
                    '../mobile-games/screenshots/apo-3.jpg',
                    '../mobile-games/screenshots/apo-1.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Inosane',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/racing-game/inosane.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/ino-1.jpg',
                    '../mobile-games/screenshots/ino-2.jpg',
                    '../mobile-games/screenshots/ino-3.jpg',
                    '../mobile-games/screenshots/ino-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Sega game',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/racing-game/sega-game.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/se-1.jpg',
                    '../mobile-games/screenshots/se-2.jpg',
                    '../mobile-games/screenshots/se-3.jpg',
                    '../mobile-games/screenshots/se-1.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },
    ]
},

{
    name: 'Fighting games',
    seasons: [

        {
            name: 'Shadow Fight 2',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/fighting-game/shedow 2.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/she-1.jpg',
                    '../mobile-games/screenshots/she-2.jpg',
                    '../mobile-games/screenshots/she-3.jpg',
                    '../mobile-games/screenshots/she-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Shadow Fight 3',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/fighting-game/shedow 3.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/shew-1.jpg',
                    '../mobile-games/screenshots/shew-2.jpg',
                    '../mobile-games/screenshots/shew-3.jpg',
                    '../mobile-games/screenshots/shew-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
            }
        },


        {
            name: 'Stickman Legends',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/fighting-game/stickman.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/stick.jpg',
                    '../mobile-games/screenshots/stick-2.jpg',
                    '../mobile-games/screenshots/stick-3.jpg',
                    '../mobile-games/screenshots/stick-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },


        {
            name: 'XenoShyft',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/fighting-game/x.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/x-1.jpg',
                    '../mobile-games/fighting-game/x.jpg',
                    '../mobile-games/screenshots/x-1.jpg',
                    '../mobile-games/fighting-game/x.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },


        {
            name: 'Soul Calibur 4',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/fighting-game/soul-caliber.jpg',
            requirements: {
                images: [
                    '../mobile-games/screenshots/soul-1.jpg',
                    '../mobile-games/screenshots/soul-2.jpg',
                    '../mobile-games/screenshots/soul-3.jpg',
                    '../mobile-games/screenshots/soul-4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },




    ]
},

{
    name: 'Strategy games',
    seasons: [

        {
            name: 'Rool of galaxy',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/strategy-games/galaxy.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../mobile-games/strategy-games/galaxy.jpg',
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

            }
        },

        {
            name: 'RadIand Historia',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/strategy-games/red.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../windows-games/screen-shots/puzzle-game/3.jpg',
                    '../mobile-games/strategy-games/red.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

        {
            name: 'Shadow Guardian',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/strategy-games/shed.jpg',
            requirements: {
                images: [
                    '../windows-games/screen-shots/puzzle-game/1.jpg',
                    '../mobile-games/strategy-games/shed.jpg',
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
            }
        },

        {
            name: 'Strike Tactics',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../mobile-games/strategy-games/s.jpg',
            requirements: {
                images: [
                    '../mobile-games/strategy-games/s-1.jpg',
                    '../windows-games/screen-shots/puzzle-game/2.jpg',
                    '../mobile-games/strategy-games/s-2.jpg',
                    '../windows-games/screen-shots/puzzle-game/4.jpg',
                ],
                releaseDate: '2004',
                updatedOn: '23 March, 2004',
                genre: 'Action',
                category: 'Action',
                views: '11290',
                votes: 'N/A',
                officialSite: 'http://oceanoffgames.com/category/home/',
            }
        },

    ]
}


];