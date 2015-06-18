angular.module("Batnav")

	.factory('GameService', function($http){
				return {
					
				getAll : function (){
						return $http.get('http://192.168.229.12:3000/games')
							.then( function (resulte) {
								return resulte.data
							})
					},

				getID : function (id){
					return $http.get('http://192.168.229.12:3000/games')
						.then (function (games) {
							console.log(games[id])
						})

					},
						
				saveGame : function(game){
						if (!game.user1) {game.user1 = {}};
						game.user1.pseudo = "Fred";
						return $http.post('http://192.168.229.12:3000/games', game)
					},

				/*	joinGame : function(game){
						game.user2.pseudo = "Fred";
						
						return console.log(id)

					} */
										
				};
	})