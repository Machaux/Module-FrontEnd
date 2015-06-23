//ListControllerTest.js

"use strict"

describe("ListeController test", function(){

	beforeEach(function(){
		module('Batnav');
	});

	it ("ListeController.joinGame redirige vers /battelspaceprepare/", inject(function($controller, $location,$httpBackend){
		var lstCtrl = $controller('ListeController');
		var game = { id: 123};
		lstCtrl.joinGame(game);
		
		console.log("je suis dans le test")
		expect($location.path()).toEqual('/battelspaceprepare/' + game.id);
		expect(lstCtrl.game.user2.pseudo).toEqual("Fred");
		expect(lstCtrl.game.user2.email).toEqual("freddo@ta.com");

	}));

})