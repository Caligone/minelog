angular .module('minelogApp')
        .directive('collapseNav', [ () ->
          {
            restrict: 'A'
            link: (scope, ele) ->
              $lists = ele.find('ul').parent('li')
              $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>')
              $a = $lists.children('a')
              $listsRest = ele.children('li').not($lists)
              $aRest = $listsRest.children('a')
              app = $('#app')
              $a.on('click', (event) ->
                if(!app.hasClass('nav-min'))
                  $this = $(this)
                  $parent = $this.parent('li')
                  $lists.not($parent).removeClass('open').find('ul').slideUp()
                  $parent.toggleClass('open').find('ul').slideToggle()
                  event.preventDefault()
              )
              $aRest.on('click', () ->
                $lists.removeClass('open').find('ul').slideUp()
              )
              scope.$on('minNav:enabled', () ->
                $lists.removeClass('open').find('ul').slideUp()
              )
          }
        ])