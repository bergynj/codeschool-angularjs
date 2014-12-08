
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jsdoc : {
        dist : {
            src: ['./app/js/*.js'],
            jsdoc: './node_modules/.bin/jsdoc',
            options: {
                destination: './app/js/docs/',
                configure: './node_modules/jsdoc/conf.json',
                template: './node_modules/ink-docstrap/template'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');

};

