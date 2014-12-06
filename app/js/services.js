(function() {
    'use strict';

    /**
     * @function myService
     * @memberOf app.gemStore
     * @description This is an angularjs service.
     */
    
    // Demonstrate how to register services
    // In this case it is a simple value service.
    angular.module('gemStore.services', [])
    
    .value('version', '0.1');

})();