
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ["build"]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'client/js/*.js',
        dest: 'build/js/*.min.js'
      }
    },
    jshint: {
      all: [
        "Gruntfile.js",
        "server/*.js",
        "client/js/*.js"
      ]
    },
    sass: {
      dist: {
        options: {
          lineNumbers:true,
          precision:3,
          compass: true,
          trace: true
        },
        files: {
          "build/styles/style.css": "client/styles/*.scss"
        }
      }
    },
    cssmin: {
      build: {
        files: {
          "build/styles/style.min.css": "build/styles/*.css"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'sass', 'cssmin']);

};
