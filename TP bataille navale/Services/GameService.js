angular.module("Batnav")

	.factory('GameService', function($http){
				return {
						
					getAll : function (){
						return $http.get('http://192.168.229.21:3000/games')
							.then( function (resulte) {
								return resulte.data
							})
					},
											
					saveGame : function(game){
						return $http.post('http://192.168.229.21:3000/games', game)

					}
					
				}
	});