//GameController.js

"use strict"

angular.module("Batnav",["ngRoute"])

	.controller("GameController", function(GameService){
		
			gamectrl = this;

			gamectrl.listbateau = [
				{value:1 , label: "1 bateau"},
				{value:2 , label: "2 bateaux"},
				{value:3 , label: "3 bateaux"},
			];

			gamectrl.games = [];

			gamectrl.addGame = function (form){
				if (form.$invalid) return
				var clone=angular.copy(gamectrl.game)
				gamectrl.games.push(clone)
				GameService.saveGame(clone)
				//	.then ( return &location.path ="/")
					// ici mettre le  : / pour revenir à la liste
			} 

		});