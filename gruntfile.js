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
		},
		gitpush: {
			your_target: {
				options: {
					remote: 'azure'
				}
			}
		},
		csvjson: {
			options: {
				// Task-specific options go here. 
			},
			data: 'data/*.csv'

		}
		
		
						
		
	});

	// csv to json
	grunt.loadNpmTasks('grunt-csv-json');

    // git	
	grunt.loadNpmTasks('grunt-git');
	
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
	grunt.registerTask('test', ['simplemocha']);
	
	// deploy to azure website via git remote push
	grunt.registerTask('deploy-to-azure', ['gitpush']);
	
	// csv to json - shouldn't have to run too often
	grunt.registerTask('csv-to-json',['csvjson']);
	
};