(function() {
    'use strict';

    /**
    * @ngdoc overview
    * @name gemStore.directives
    * @type module
    *
    * @description
    * Inititate app directives
    */
    angular.module('gemStore.directives', [])

    /**
    * @ngdoc object
    * @name gemStore.directive.productTitle
    * @type {object}
    *
    * @return
    *
    * @description
    * Return app version
    */
	.directive('productTitle', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-title.html'
		};
	})

    /**
    * @ngdoc object
    * @name gemStore.directive.productDescription
    * @type {object}
    *
    * @return
    *
    * @description
    * Return app version
    */	
	.directive('productDescription', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-description.html'
		};
	})
	
    /**
    * @ngdoc object
    * @name gemStore.directive.productRatings
    * @type {object}
    *
    * @return
    *
    * @description
    * Return app version
    */
	.directive('productRatings', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-review.html'
		};
	})
    
    /**
    * @ngdoc object
    * @name gemStore.directive.productSpecifications
    * @type {object}
    * 
    * @return
    *
    * @description
    * Return app version
    */
	.directive('productSpecifications', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-specs.html',
			controller: 'ReviewController',
			controllerAs: 'reviewCtrl'
		};
	})

    /**
    * @ngdoc object
    * @name gemStore.directive.productGallery
    * @type {object}
    * 
    * @return 
    *
    * @description
    * Return app version
    */
	.directive('productGallery', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-gallery.html',
			controller: 'GalleryController',
			controllerAs: 'gallery'
		};
	})
    
    /**
    * @ngdoc object
    * @name gemStore.directive.appVersion
    * @type {object}
    * @param
    * @return {string}
    *
    * @description
    * Return app version
    */
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
          elm.text(version);
        };
    }]);
})();
