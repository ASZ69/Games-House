
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

    $scope.evearray = $filter('filter')(itemlist, { name: 'Barbie games' });

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
		
		$scope.evearray = $filter('filter')(itemlist, { name: 'Barbie games' });
		hoverSetting();
		
	}else{
		
		var parts = url.split("&");
		var category = parts[0].split("=")[1];
		var season = parts[1].split("=")[1];
		
        $scope.evearray = $filter('filter')(itemlist, { name: category });

//        $(".scroll-container h2").addClass("mr-r-30p");
//        $(".right-page h3").css("animation", "2s top-to-down-margin");

        $scope.moredetailsarray = $filter('filter')($scope.evearray[0].seasons, { name: season });
		
//        $("#frame").hide();
////
////        setTimeout(function () {
////            var data = $("#vidData").html().trim();
////            $("#frame").attr("src", data);
////            $("#frame").show();
////        }, 1000);

		
		setTimeout(function () {
            $(".right-view").css("display", "none");
            $(".right-page").css("display", "block");
        }, 70);

        scrollUp();
        hoverSetting();
		
	}

    $scope.evearray = $filter('filter')(itemlist, { name: 'Barbie games' });

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
    name: 'Barbie games',
    seasons: [

        {
            name: 'Style Your Crew',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-1.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
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
            name: 'You Can Be A Chef',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-2.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
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
            name: 'Dolphin Magic',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-3.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
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
            name: 'Spy Squad Academy',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-4.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
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
            name: 'Style Your Crew',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-1.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
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
            name: 'You Can Be A Chef',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-2.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
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
            name: 'Dolphin Magic',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-3.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
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
            name: 'Spy Squad Academy',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-4.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
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
            name: 'Style Your Crew',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-1.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
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
            name: 'You Can Be A Chef',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-2.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
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
            name: 'Dolphin Magic',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-3.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
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
            name: 'Spy Squad Academy',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-4.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
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
            name: 'Style Your Crew',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-1.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
                    '../kids-games/barbie-1.jpg',
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
            name: 'You Can Be A Chef',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-2.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
                    '../kids-games/barbie-2.jpg',
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
            name: 'Dolphin Magic',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-3.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
                    '../kids-games/barbie-3.jpg',
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
            name: 'Spy Squad Academy',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/barbie-4.jpg',
            requirements: {
                images: [
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
                    '../kids-games/barbie-4.jpg',
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
    name: 'Tom &amp; Jerry',
    seasons: [

        {
            name: 'Trap-O-Matic',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/tom-1.jpg',
            requirements: {
                images: [
                    '../kids-games/tom-1.jpg',
                    '../kids-games/tom-1.jpg',
                    '../kids-games/tom-1.jpg',
                    '../kids-games/tom-1.jpg',
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
            name: 'Whats The Catch',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/tom-2.jpg',
            requirements: {
                images: [
                    '../kids-games/tom-2.jpg',
                    '../kids-games/tom-2.jpg',
                    '../kids-games/tom-2.jpg',
                    '../kids-games/tom-2.jpg',
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
            name: 'Food Fight',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/tom-3.jpg',
            requirements: {
                images: [
                    '../kids-games/tom-3.jpg',
                    '../kids-games/tom-3.jpg',
                    '../kids-games/tom-3.jpg',
                    '../kids-games/tom-3.jpg',
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
            name: 'Run Jerry Run',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/tom-4.jpg',
            requirements: {
                images: [
                    '../kids-games/tom-4.jpg',
                    '../kids-games/tom-4.jpg',
                    '../kids-games/tom-4.jpg',
                    '../kids-games/tom-4.jpg',
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
    name: 'Bubble Shooter',
    seasons: [

        {
            name: 'Bubble Shooter',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/b-1.jpg',
            requirements: {
                images: [
                    '../kids-games/b-1.jpg',
                    '../kids-games/b-1.jpg',
                    '../kids-games/b-1.jpg',
                    '../kids-games/b-1.jpg',
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
            name: 'Bubble Machine',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/b-2.jpg',
            requirements: {
                images: [
                    '../kids-games/b-2.jpg',
                    '../kids-games/b-2.jpg',
                    '../kids-games/b-2.jpg',
                    '../kids-games/b-2.jpg',
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
            name: 'Smarty Bubble',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/b-3.jpg',
            requirements: {
                images: [
                    '../kids-games/b-3.jpg',
                    '../kids-games/b-3.jpg',
                    '../kids-games/b-3.jpg',
                    '../kids-games/b-3.jpg',
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
            name: 'Candy Bubble',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/b-4.jpg',
            requirements: {
                images: [
                    '../kids-games/b-4.jpg',
                    '../kids-games/b-4.jpg',
                    '../kids-games/b-4.jpg',
                    '../kids-games/b-4.jpg',
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
    name: 'Piano KiDs',
    seasons: [

        {
            name: 'Piano Tiles',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/p-1.jpg',
            requirements: {
                images: [
                    '../kids-games/p-1.jpg',
                    '../kids-games/p-1.jpg',
                    '../kids-games/p-1.jpg',
                    '../kids-games/p-1.jpg',
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
            name: 'Virtual Keybored',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/p-2.jpg',
            requirements: {
                images: [
                    '../kids-games/p-2.jpg',
                    '../kids-games/p-2.jpg',
                    '../kids-games/p-2.jpg',
                    '../kids-games/p-2.jpg',
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
            name: 'Magic Tiles',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/p-3.jpg',
            requirements: {
                images: [
                    '../kids-games/p-3.jpg',
                    '../kids-games/p-3.jpg',
                    '../kids-games/p-3.jpg',
                    '../kids-games/p-3.jpg',
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
            name: 'Multiplayer Piano',
            download: 'http://oceanoffgames.com/category/home/',
            imgSrc: '../kids-games/p-4.jpg',
            requirements: {
                images: [
                    '../kids-games/p-4.jpg',
                    '../kids-games/p-4.jpg',
                    '../kids-games/p-4.jpg',
                    '../kids-games/p-4.jpg',
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