module.exports = function(grunt) {
    grunt.initConfig({
	    bower: {
		install: {
		    options: {
			targetDir: './lib',
			layout: 'byComponent',
			cleanTargetDir: true,
		    }
		}
	    }
    });
    grunt.loadNpmTasks('grunt-bower-task');
};