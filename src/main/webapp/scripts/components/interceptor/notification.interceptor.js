 'use strict';

angular.module('nrateApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-nrateApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-nrateApp-params')});
                }
                return response;
            }
        };
    });
