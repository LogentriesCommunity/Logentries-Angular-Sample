angular.module('LeAngularSample', ['LogEntries'])
.directive('selection', function (){
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template.html',
        controller: function ($scope, LoggerService){
            $scope.sendError = function (msg){
                LoggerService.error('Error: ' + msg);
            };

            $scope.sendWarn = function (msg){
                LoggerService.warn('Warn: ' + msg);
            };

            $scope.sendInfo = function (msg){
                LoggerService.info('Info: ' + msg);
            };

            $scope.sendLog = function (msg){
                LoggerService.log('Log: ' + msg);
            };
        }
    }
});
