//Apps.js

"use strict"

angular.module("Batnav",["ngRoute"])


		.config(function($routeProvider) {
				
				$routeProvider
					.when ("/" , {})

					.when ("/listejeux", {
						templateUrl: "listejeux.html",
						controller : "ListeController"
					})
					
					.when ("/newgame", {
						templateUrl: "formulairejeux.html",
						controller : "GameController"
					})

					.when ("/battelspaceprepare/:id", {
						templateUrl: "battelspace.html",
						controller : "GamePrepareController"
					})

					.otherwise({
						redirectTo :"/"
					});
					
		})