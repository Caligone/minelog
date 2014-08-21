angular.module('minelogApp').factory('socket', function($rootScope) {
  var socket;
  socket = io.socket;
  return {
    on: function(eventName, callback) {
      return io.socket.on(eventName, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    emit: function(eventName, data, callback) {
      return io.socket.emit(eventName, data, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    get: function(url, callback) {
      return io.socket.get(url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    post: function(url, callback) {
      return io.socket.post(url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    put: function(url, callback) {
      return io.socket.put(url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    "delete": function(url, callback) {
      return io.socket["delete"](url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    removeListener: function(eventName, callback) {
      return io.socket.removeListener(eventName, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    }
  };
});

//# sourceMappingURL=socket.js.map
