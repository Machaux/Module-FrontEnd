//BatailleNavaleScénarioNominalTest.js

"use strict"

describe("bataille navale scénario nominal", function(){
	
	it("lorsque je clique sur new game alors la page de création d'un nouveau jeu", function(){
		browser.get("http://localhost:3000");
		expect(browser.getLocationAbsUrl()).toEqual("");
		console.log("je clique sur le browser");

		element(by.linkText("Nouveau Jeu")).click();
		expect(browser.getLocationAbsUrl()).toEqual('/newgame');

	//	element(by.model('gameCtrl.game.name')).sendKeys('Nom Game');
	//	element(by.model('gameCtrl.game.user1.email')).sendKeys('hubert@gmail.com');
	//	element(by.linktext('Home')).click();
	//	expect(browser.getLocationAbsUrl()).toEqual("/");
	});

});