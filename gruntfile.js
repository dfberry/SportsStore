module.exports = function(grunt) {
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON("package.json"),

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'static/scss/style.css': 'static/scss/style.scss'
				}
			}
		},		
		
	
		parallel: {
    		web: {
				options: {
      				stream: true
    			},
				tasks: [
					{cmd: 'dpd', args: ['-p','5050','-d','deployd/sportsStore/app.dpd']},
					{cmd: 'node', args: ['server.js']}
				]
      		}
    	},
		simplemocha: {
			options: {
				//globals: ['should'],
				timeout: 3000,
				ignoreLeaks: false//,
				//grep: '*-test',
				//ui: 'bdd',
				//reporter: 'tap'
			},

			all: { src: ['test/**/*.js'] }
		}
						
		
	});
	
	//  parallel tasks	
	grunt.loadNpmTasks('grunt-parallel');
	
	// sass library
	grunt.loadNpmTasks('grunt-sass');

    // test runner
	grunt.loadNpmTasks('grunt-simple-mocha');

    // default system
	grunt.registerTask('default', ['sass', 'unittest', 'parallel']);
	
	// build system
	grunt.registerTask('build', ['sass']);
	
	// unit test system
	grunt.registerTask('unittest', ['simplemocha']);
	
};