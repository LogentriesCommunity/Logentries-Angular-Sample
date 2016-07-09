angular.module('LogEntries',[])
.service('LoggerService', function (){
    var opts = {};
    opts.token = '123_fake_token';
    LE.init(opts);
    return LE;
 })
