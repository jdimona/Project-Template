"use strict";

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
        dest: 'build/client/js/*.min.js'
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
          "build/styles/*.css": "client/styles/*.scss"
        }
      }
    },
    mincss: {
      build: {
        files: {
          "build/styles/*.css": "build/styles/*.css"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasts('grunt-contrib-cssmin');
  grunt.loadNpmTasts('grunt-contrib-htmlmin');
  grunt.loadNpmTasts('grunt-contrib-sass');
  grunt.loadNpmTasts('grunt-contrib-jshint');
  grunt.loadNpmTasts('grunt-contrib-concat');
  grunt.loadNpmTasts('grunt-contrib-watch');
  grunt.loadNpmTasts('grunt-contrib-clean');


  grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'sass', 'cssmin']);

};
