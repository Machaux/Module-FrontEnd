//Apps.js

"use strict"

angular.module("Batnav",["ngRoute"])


		.config(function($routeProvider) {
				
				$routeProvider
					.when ("/" , {})

					.when ("/listejeux", {
						templateUrl: "Views/listejeux.html",
						controller : "ListeController"
					})
					
					.when ("/newgame", {
						templateUrl: "Views/formulairejeux.html",
						controller : "GameController"
					})

					.when ("/battelspaceprepare/:id", {
						templateUrl: "Views/battelspace.html",
						controller : "GamePrepareController"
					})

					.otherwise({
						redirectTo :"/"
					});
					
		})