
(function() {
    'use strict';

    /**
    * @ngdoc overview
    * @name gemStore.controllers
    * @type module
    * 
    * @description
    * Inititate gemStore controllers
    */
    angular.module('gemStore.controllers', [])

    /**
    * @ngdoc object
    * @name gemStore.controllers.ReviewController
    * @type {object}
    * 
    * @description
    * Initiate and push review on submit
    */
	.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
        };
    })
    
    /**
    * @ngdoc object
    * @name gemStore.controllers.GalleryController
    * @type {object}
    * 
    * @description
    * Set to current gallery
    */
    .controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(current){
          this.current = current || 0;
        };
    })    

    /**
    * @ngdoc object
    * @name gemStore.controllers.TabController
    * @type {object}
    * 
    * @description
    * Tab controls to switch between tabs
    */
    .controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(tab){
            this.tab = tab;
        };
        this.isSet = function(tab){
            return (this.tab === tab);
        };
    })
        
    /**
    * @ngdoc object
    * @name gemStore.controllers.StoreController
    * @param   
    * @return {object}
    *
    * @description
    * Gem values stored statically 
    * Note : gems stored as object, different formatting to JSON obj stored externally. 
    */
    .controller('StoreController', function() {
        var gems = [{
          name: 'Azurite',
          description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
          shine: 8,
          price: 110.50,
          rarity: 7,
          color: '#CCC',
          faces: 14,
          images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
          ],
          reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
          }]
        }, {
          name: 'Bloodstone',
          description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
          shine: 9,
          price: 22.90,
          rarity: 6,
          color: '#EEE',
          faces: 12,
          images: [
            "images/gem-01.gif",
            "images/gem-03.gif",
            "images/gem-04.gif"
          ],
          reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
          }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
          }]
        }, {
          name: 'Zircon',
          description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
          shine: 70,
          price: 1100,
          rarity: 2,
          color: '#000',
          faces: 6,
          images: [
            "images/gem-06.gif",
            "images/gem-07.gif",
            "images/gem-10.gif"
          ],
          reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
          }]
        }];

        this.products = gems;
    })

    /**
    * @ngdoc object
    * @name gemStore.controllers.StoreControllerService
    * @param   
    * @return {object}
    *
    * @description
    * Load gems dynamically with $http service from /app/products.json
    * $http service & dependency injection
    * Note : External JSON file has to be valid & properly formatted 
    */
    .controller('StoreControllerService', ['$http', function($http) {
        var store = this;   // create an alias for this, to be used inside $http get
        store.products = [];    // init store data
        
        $http.get('/app/products.json').success(function(data) {
            // 'this' in here refer to $http service object, must use store alias
            store.products = data;
        });
    }] )
            
    /**
    * @ngdoc object
    * @name gemStore.controllers.MyCtrl1
    * @type {object}
    * 
    * @description
    * View controller with scope 1
    */
    .controller('MyCtrl1', ['$scope', function($scope) {

    }])
    
    /**
    * @ngdoc object
    * @name gemStore.controllers.MyCtrl2
    * @type {object}
    * 
    * @description
    * View controller with scope 2
    */
    .controller('MyCtrl2', ['$scope', function($scope) {

    }]);


})();


