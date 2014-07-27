angular .module('minelogApp')
        .factory('socket', ($rootScope) ->
          socket = io.socket
          {
            on: (eventName, callback) ->
              io.socket.on(eventName, () -> 
                args = arguments
                $rootScope.$apply( () ->
                  if(callback) 
                    callback.apply(io.socket, args)
                )
              )

            emit: (eventName, data, callback) -> 
              io.socket.emit(eventName, data, () -> 
                args = arguments
                $rootScope.$apply( () ->
                  if(callback) 
                    callback.apply(io.socket, args)
                )
              )

            get: (url, callback) ->
              io.socket.get(url, () ->
                args = arguments
                $rootScope.$apply( () -> 
                  if(callback)
                    callback.apply(io.socket, args)
                )
              )

            post: (url, callback) ->
              io.socket.post(url, () ->
                args = arguments
                $rootScope.$apply( () ->
                  if(callback)
                    callback.apply(io.socket, args)
                )
              )

            put: (url, callback) ->
              io.socket.put(url, () ->
                args = arguments
                $rootScope.$apply( () ->
                  if(callback)
                    callback.apply(io.socket, args)
                )
              )

            delete: (url, callback) ->
              io.socket.delete(url, () ->
                args = arguments
                $rootScope.$apply( () ->
                  if(callback)
                    callback.apply(io.socket, args)
                )
              )

            removeListener: (eventName, callback) ->
              io.socket.removeListener(eventName, () ->
                args = arguments
                $rootScope.$apply( () ->
                  if(callback)
                    callback.apply(io.socket, args)
                )
              )
          }
        )   


