module.exports = function(grunt) {
	
	/**
	* !Register your tasks up here , you maniac! ...
	* i.e. : grunt.registerTask('default', 'less'); 
	*/
	grunt.registerTask('default', 'less'); 
	grunt.registerTask('watch', ['watch:dev']);
	
	
	/**
	* !Configuration Variables ...
	*/ 
	var cnf = {
		src: 'src',
		pub: 'app/docroot/',
		vendor: 'app/docroot/vendor',
		// tmp: 'app/src/tmp',
		pkg: grunt.file.readJSON('package.json'),
		banner: "/**" +
					'\n* <%= cnf.pkg.name %>' +
					'\n* v<%= cnf.pkg.version %>' +
					'\n* <%= grunt.template.today("yyyy-mm-dd hh:MM:ss TT") %> ' +
					"\n*/ \n\n"
	};
	
	
	/**
	* !Configure your tasks ...
	*/
	grunt.initConfig({
		
		//
		// make the config variable available here ...
		//
		cnf : cnf,
		
		
		//
		// the lessening ...
		//
		less: {
			dev: {
				options: {
					cleancss: true,
					banner: "<%= cnf.banner %>"
				},
				files: {
					"<%= cnf.pub %>/css/main.css" : "<%= cnf.src %>/less/main.less",
					"<%= cnf.pub %>/css/noscript.css" : "<%= cnf.src %>/less/noscript.less"
				}
			},
			production: {
				options: {
					cleancss: true,
					compress: true,
					banner: "<%= cnf.banner %>"
				},
				files: {
					"<%= cnf.pub %>/css/main.min.css" : "<%= cnf.src %>/less/main.less",
					"<%= cnf.pub %>/css/noscript.min.css" : "<%= cnf.src %>/less/noscript.less"
				}
			}
		},
		
		//
		// watching your stuff for changes ...
		//
		watch: {

			dev: {
				files: [
					'<%= cnf.src %>/less/*.less',
					'<%= cnf.src %>/less/*/*.less',
					'<%= cnf.src %>/less/*/*/*.less',
					'<%= cnf.src %>/less/*/*/*/*.less'
				],
				tasks: ['less:dev']
			}
		}
		
	});
	
	/**
	* !Load your tasks below ...
	*/
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
};