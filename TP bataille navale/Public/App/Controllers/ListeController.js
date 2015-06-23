//ListeController.js

"use strict"

angular.module("Batnav",["ngRoute"])

	.controller("ListeController", function(GameService,$location,$http){

			lstctrl=this;

			GameService.getAll()
				.then (function(games) {
					lstctrl.games=games
				});

			lstctrl.joinGame = function (game) {
				
				lstctrl=this;

				lstctrl.game=game

				if (game.user2) {return};
				lstctrl.game.user2={};
				lstctrl.game.user2.pseudo ="Fred";
				lstctrl.game.user2.email = "freddo@ta.com";
				
				console.log(game)

				$http.put('http://192.168.229.12:3000/games')
	
				pathid = "/battelspaceprepare/"+game.id;
				$location.path(pathid);
				

			}
		});