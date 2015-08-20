module.exports = function(grunt) {
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON("package.json"),
		
		run: {
			node_server: {
				cmd: "node",
				args: [
						'server.js'
					]
				
			}
		},
		spawn: {
			dpd: {
				command: "dpd",
				commandArgs: [
						
				], 
				directory: "deployd/sportsStore/"
			},
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

	
	//grunt.registerTask('live',['run:node_server','spawn:dpd']);
	
	grunt.registerTask('default', ["parallel"]);
	
};