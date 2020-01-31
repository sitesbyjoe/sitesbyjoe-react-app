const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            implementation: sass,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            'public/assets/css/sitesbyjoe.css' : 'public/assets/scss/sitesbyjoe.scss'
          }
        },
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
  }