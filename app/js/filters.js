(function() {
    'use strict';

    /**
    * @ngdoc overview
    * @name gemStore.filters
    * @type module
    * 
    * @description
    * Demonstrate simple Angular filter
    */
    angular.module('gemStore.filters', [])

    /**
    * @ngdoc object
    * @name gemStore.directives.interpolate
    * @type {object}
    * 
    * @description
    * Formating of the app version text
    */
    .filter('interpolate', ['version', function(version) {
        return function(text) {
          return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);

})();