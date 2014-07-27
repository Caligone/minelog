### Grunfile.coffee ###
#
#   Working directories : 
#     /client : Core of the app in CoffeeScript (JS)
#     /assets/css/core : Core of the app in Less (CSS)
#     /assets/css/dependencies : CSS dependencies
#     /assets/js/dependencies : JS dependencies
#
#   NOT Working directories :
#     /assets/js/core : Compiled client/**/*.coffee
#     
#   Results :
#     /assets/linker/core.js : JS Core
#     /assets/linker/dependencies.js : JS Dependencies
#     /assets/linker/core.css : CSS Core
#     /assets/linker/dependencies.css : CSS Dependencies
#   
#   Tasks :
#     JS :
#       [(0) Compile coffee from /client/**/*.coffee to /.tmp/*.js]
#       (1) Concat /.tmp/*.js into /assets/linker/core.js
#       (2) Concat /assets/js/**/*.js and /assets/bower_components/**/*.js into /assets/linker/dependencies.js
#     CSS :
#       (1) Concat /.tmp/*.css into /assets/linker/core.css
#       (2) Concat /assets/js/*.css and /assets/bower_components/**/*.css into /assets/linker/vendor.css
# 

module.exports = (grunt)->
  grunt.initConfig

    ######
    # JS #
    ######

    # Compile client/**/*.coffee to assets/js/core/**/*.js
    coffee:
      options:
        sourceMap: true
      core:
        options:
          bare: true
        expand: true
        cwd: 'client'
        src: '**/*.coffee'
        dest: 'assets/js/core'
        ext: '.js'

    # Concat dependencies and core
    concat:
      options:
        separator: ';'
        sourceMap: true
      # Concat assets/js/dependencies/*.js into assets/linker/dependencies.js
      dependencies:
        src: [
          'assets/js/dependencies/jquery.js'
          'assets/js/dependencies/underscore.js'
          'assets/js/dependencies/angular.js'
          'assets/js/dependencies/angular-animate.js'
          #'assets/js/dependencies/angular-cookies.js'
          #'assets/js/dependencies/angular-resource.js'
          'assets/js/dependencies/angular-route.js'
          'assets/js/dependencies/jquery.slimscroll.js'
          #'assets/js/dependencies/angular-sanitize.js'
          #'assets/js/dependencies/angular-wizard.js'
          #'assets/js/dependencies/app.js'
          #'assets/js/dependencies/application.js'
          #'assets/js/dependencies/bootstrap-select.js'
          #'assets/js/dependencies/bootstrap-switch.js'
          #'assets/js/dependencies/bootstrap.file-input.js'
          'assets/js/dependencies/bootstrap.js'
          #'assets/js/dependencies/flatui-checkbox.js'
          #'assets/js/dependencies/flatui-radio.js'
          #'assets/js/dependencies/holder.js'
          #'assets/js/dependencies/html5shiv.js'
          #'assets/js/dependencies/icon-font-ie7.js'
          #'assets/js/dependencies/jquery-ui.min.js'
          #'assets/js/dependencies/jquery.placeholder.js'
          #'assets/js/dependencies/jquery.tagsinput.js'
          #'assets/js/dependencies/jquery.ui.touch-punch.min.js'
          #'assets/js/dependencies/ng-infinite-scroll.min.js'
          #'assets/js/dependencies/prettify.js'
          #'assets/js/dependencies/require.js'
          #'assets/js/dependencies/respond.min.js'
          'assets/js/dependencies/sails.io.js'
          #'assets/js/dependencies/socket.io.js'
          'assets/js/dependencies/toastr.js'
          #'assets/js/dependencies/typeahead.js'
          #'assets/js/dependencies/ui-bootstrap.js'
        ]
        dest: 'assets/linker/dependencies.js'
      # Concat assets/js/core/*.js into assets/linker/core.js
      core:
        src: [
          'assets/js/core/**/*.js'
        ]
        dest: 'assets/linker/core.js'

    # Uglify dependencies and core
    uglify:
    # Uglify assets/linker/dependencies.js
      dependencies:
        files:
          'assets/linker/dependencies.min.js': ['assets/linker/dependencies.js']
    # Uglify assets/linker/core.js
      core:
        files:
          'assets/linker/core.min.js': ['assets/linker/core.js']

    #######
    # CSS #
    #######

    cssmin:
      dependencies:
        files:
          'assets/linker/dependencies.min.css': [
              'assets/css/dependencies/bootstrap.css'
              'assets/css/dependencies/angular-wizard.css'
              #'assets/css/dependencies/bootstrap-docs.css'
              'assets/css/dependencies/font-awesome.css'
              'assets/css/dependencies/prettify.css'
              'assets/css/dependencies/toastr.css'
              'assets/css/dependencies/ui.css'
              'assets/css/dependencies/main.css'
          ]
      core:
        files:
          'assets/linker/core.min.css': ['assets/css/core/**/*.css']


    ########
    # MISC #
    ########
    clean: ["assets/css/core", "assets/js/core", "assets/linker", ".tmp"]

    sync: 
      assets:
        files:  [
          expand: true
          cwd: './assets'
          src: ['**/*.!(coffee)']
          dest: '.tmp/public'
        ]

    watch:
      js_core:
        files: ['client/**/*.coffee']
        tasks: ['coffee:core', 'concat:core', 'uglify:core', 'sync:assets']
      js_dependencies:
        files: ['assets/js/core/**/*.js']
        tasks: ['concat:dependencies', 'uglify:dependencies', 'sync:assets']
      css_core:
        files: ['assets/css/core/**/*.css']
        tasks: ['cssmin:core', 'sync:assets']
      css_dependencies:
        files: ['assets/css/**/*.css']
        tasks: ['cssmin:core', 'sync:assets']


  # JS
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  # CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  # MISC
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-sync')
  grunt.loadNpmTasks('grunt-contrib-watch')


  grunt.registerTask('default', ['sync:assets'])
  grunt.registerTask('all', ['coffee:core', 'concat:core', 'uglify:core', 'concat:dependencies', 'uglify:dependencies', 'cssmin:core', 'cssmin:dependencies', 'sync:assets'])
  grunt.registerTask('core', ['coffee:core', 'concat:core', 'uglify:core', 'cssmin:core', 'sync:assets'])
  grunt.registerTask('dependencies', ['concat:dependencies', 'uglify:dependencies', 'cssmin:dependencies', 'sync:assets'])
