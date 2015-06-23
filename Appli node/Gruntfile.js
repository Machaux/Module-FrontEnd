//Gruntfile.js

/*module.exports = function(grunt) {

	grunt.initConfig({
		hello:{
			configNantes:'Nantes',
			configRennes:'Rennes'
		}
	})



	grunt.registerMultiTask('hello','Hello', function(){
		console.log('Hello Grunt, depuis %s ! avec la config %s', this.data, this.target);
	}); // attention, grunt va lancer toutes les configurations. Pour préciser => grunt hello:configRennes.

//	grunt.registerTask('hello', 'Hello Nantes', function(){
//		console.log('Hello Grunt, depuis Nantes!')
//	});

	grunt.registerTask('etape1', 'Étape 1 visite de Nantes', function(){
		console.log('Étape 1 de la visite de Nantes!')
	});

	grunt.registerTask('etape2', 'Étape 2 visite de Nantes', function(){
		console.log('Étape 2 de la visite de Nantes!')
	});

	grunt.registerTask('etape3', 'Étape 3 visite de Nantes', function(){
		console.log('Étape 3 de la visite de Nantes!')
	});


	grunt.registerTask('default', 'hello'); //lance la tâche hello par défaut, seuluement avec la commande: grunt.
	grunt.registerTask('nantes', 'hello:configNantes'); //lance la tâche "hello" avec la config nantes.


	grunt.registerTask('visite', ['etape3','etape2','etape1']); // permet d'effectuer les tâches à la suite

}*/
[]
//module.exports = function(grunt){

//	grunt.initConfig({
//		
//	})

//	

//}

module.exports = function(grunt){
	
	grunt.initConfig({
  		
		copy:{
			public:{
				src:['public/**/*.js', 'public/**/*.css', 'public/**/*.html'],
				dest:'tmp/',
				expand : true,
				flatten : true
			},
			lib:{
				src:['bower_components/**/*.min.js','bower_components/**/*.min.css'],
				dest:'tmp/lib/',
				expand: true,
				flatten : true
			}
		},

  		connect: {
  			server: {
      			options: {
        			port: 3000,
        			base: 'tmp',
        			hostname: 'localhost',
        			open : true,
        			livereload: true
          		}
    		}
 		},

 		watch: {
  			chgt: {
    			files: ['public/*.html','public/*.css','public/*.js'],
    			tasks: ['copy'],
    			options: {
      				event: ['all'],
      				livereload: true
        			},
      			reload: true
      		}
    	},

    	karma: {
 			unit: {
    			configFile: 'karma.conf.js'
  			}
		}

  	});
  
  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');


//	grunt.registerTask('msg', 'Hello Nantes', function(){
//		console.log('index changed!')});

		grunt.registerTask('lrs', ['copy','connect','watch']);
};




