'use strict';

angular.module('nrateApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


