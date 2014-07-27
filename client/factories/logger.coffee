angular .module('minelogApp')
        .factory('logger', [ () ->
          toastr.options = {
            closeButton: undefined
            positionClass: 'toast-bottom-right'
            timeOut: '5000'
          }
          logIt = (message, type) ->
            toastr[type](message)
          {
            log: (message) ->
                logIt(message, 'info')
            logWarning: (message) ->
                logIt(message, 'warning')
            logSuccess: (message) ->
                logIt(message, 'success')
            logError: (message) ->
                logIt(message, 'error')
          }
    ])