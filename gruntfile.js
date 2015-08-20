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
		}			
	});
	
	grunt.loadNpmTasks('grunt-run');
	
	grunt.registerTask(
		'live', 
		[
			//'run:deployd_server',
			'run:node_server'
		]
	);
	
	grunt.registerTask('default', ["live"]);
	
};