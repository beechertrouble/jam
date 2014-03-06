module.exports = function(grunt) {
	
	grunt.registerTask('watch', [ 'watch' ]);
	grunt.registerTask('default', 'lint requirejs'); 
	
	grunt.initConfig({
		requirejs: {
			production: {
				options: {
					baseUrl : "./",
					name : "assets-prep/js/main",
					mainConfigFile: "assets-prep/js/main.js",
					out: "pub/js/req.min.js"
				}
			}
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'pub/js/libs/requirejs/require.js',
					'pub/js/req.min.js'
				],
				dest: 'pub/js/main.min.js'
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'pub/js/main.min.js': ['pub/js/main.min.js']
				}
			}
		},
		less: {
			style: {
				files: {
					"pub/css/style.css" : "assets-prep/less/style.less"
				}
			}
		},
		watch: {
			js: {
				files: ['assets-prep/js/*.js'],
				tasks: ['requirejs:production', 'concat:js']
			},
			css: {
				files: ['assets-prep/less/*.less'],
				tasks: ['less:style']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
};