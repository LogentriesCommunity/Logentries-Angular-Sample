angular.module('LeAngularSample', ['LogEntries'])
.directive('selection', function (){
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template.html',
        controller: function ($scope, LoggerFactory){
            $scope.sendError = function (msg){
                LoggerFactory.error('Error: ' + msg);
            };

            $scope.sendWarn = function (msg){
                LoggerFactory.warn('Warn: ' + msg);
            };

            $scope.sendInfo = function (msg){
                LoggerFactory.info('Info: ' + msg);
            };

            $scope.sendLog = function (msg){
                LoggerFactory.log('Log: ' + msg);
            };
        }
    }
});
