//GamePrepareController.js

"use strict"

angular.module("Batnav",["ngRoute"])

	.controller("GamePrepareController", function(GameService,$route){
				gameprprectrl = this;

				gameprprectrl.route = $route.current.params
				console.log(gameprprectrl.route.id)

				GameService.getAll()
					.then (function(games) {
						gameprprectrl.games=games
					})

				console.log(gameprprectrl.games)

				/*gameprprectrl.battelfield = gameprprectrl.games[gameprprectrl.route.id -1]
				console.log(gameprprectrl.battelfield.id)
	*/
	});