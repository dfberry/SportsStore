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
		mocha_phantomjs: {
			all: ['test/*.js'],
			log: true
		},
		mocha: {
			src: ['test/*.js'],
			log: true
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
	
	// run parallel tasks	
	grunt.loadNpmTasks('grunt-parallel');
	
	// sass library
	grunt.loadNpmTasks('grunt-sass');

    // test runner
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-mocha-phantomjs');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['sass', 'parallel']);
	
	grunt.registerTask('test-mocha', ['mocha']);
	grunt.registerTask('test-phantom', ['mocha_phantomjs']);
	grunt.registerTask('test-simple-mocha', ['simplemocha']);
	
};