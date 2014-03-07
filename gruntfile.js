module.exports = function(grunt) {
	
	grunt.registerTask('watch', [ 'watch' ]);
	grunt.registerTask('default', 'lint requirejs'); 
	
	grunt.initConfig({
		requirejs: {
			production: {
				options: {
					baseUrl : "./",
					name : "pre-pub/js/main",
					mainConfigFile: "pre-pub/js/main.js",
					out: "pub/js/main.min.js"
				}
			}
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'pre-pub/js/libs/requirejs/require.js',
					'pub/js/main.min.js'
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
			dev: {
				files: {
					"pub/css/style.css" : "pre-pub/less/style.less"
				}
			},
			production : {
				options: {
					cleancss: true
				},
				files: {
					"pub/css/style.min.css" : "pre-pub/less/style.less"
				}
			}
		},
		watch: {
			js: {
				files: ['pre-pub/js/*.js'],
				tasks: ['requirejs:production', 'concat:js']
			},
			css: {
				files: ['pre-pub/less/*.less'],
				tasks: ['less:production']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
};