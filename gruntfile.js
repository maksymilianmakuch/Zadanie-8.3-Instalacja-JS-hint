module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },

    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},
    
watch: {
        styles: {
            files: ['*.sass'],
            tasks: ['sass'],
            options: {
                  spawn: false,
            },
        },
        scripts: {
            files: ['js/*.js'],
            tasks: ['jshint'],
            options: {
                  spawn: false,
            },
        }

  }
  });

  	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
  	grunt.loadNpmTasks('grunt-contrib-imagemin');
  	grunt.loadNpmTasks ('grunt-contrib-watch');
  	grunt.registerTask('default', ['jshint', 'sass', 'imagemin', 'watch']);
};