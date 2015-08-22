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
    	}
		
	});
	
	// using spawn because I get a spawn error from grunt-run -- probably a path issue
	//grunt.loadNpmTasks('grunt-spawn');
	
	// using to run node
	//grunt.loadNpmTasks('grunt-run');

	// run parallel tasks	
	grunt.loadNpmTasks('grunt-parallel');
	
	// sass library
	grunt.loadNpmTasks('grunt-sass');

	
	grunt.registerTask('default', ["transpose"]);
	//grunt.registerTask('default', ["parallel"]);
	
};