angular.module('LogEntries',[])
.factory('LoggerFactory', function (){
    var opts = {};
    opts.token = '1234_fake_token';
    LE.init(opts);
    return LE;
 })
