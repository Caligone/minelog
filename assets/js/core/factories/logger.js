angular.module('minelogApp').factory('logger', [
  function() {
    var logIt;
    toastr.options = {
      closeButton: void 0,
      positionClass: 'toast-bottom-right',
      timeOut: '5000'
    };
    logIt = function(message, type) {
      return toastr[type](message);
    };
    return {
      log: function(message) {
        return logIt(message, 'info');
      },
      logWarning: function(message) {
        return logIt(message, 'warning');
      },
      logSuccess: function(message) {
        return logIt(message, 'success');
      },
      logError: function(message) {
        return logIt(message, 'error');
      }
    };
  }
]);

//# sourceMappingURL=logger.js.map
