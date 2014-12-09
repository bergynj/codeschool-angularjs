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
