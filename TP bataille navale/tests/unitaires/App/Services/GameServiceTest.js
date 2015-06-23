describe("GameService Tests", function(){

	beforeEach(function(){
		module('Batnav');
	});

	it ("la version doit être de 1.0", inject(function(GameService){
		expect(GameService.version).toEqual('1.0');
	}));

	it ("Le GameService.getAll(1) renvoie un objet Game", inject(function(GameService, $httpBackend){
		
		var idGame=1;
		
		var gameSimule = {id:109, name:'Game 1'};

		$httpBackend.when('GET', 'http://192.168.229.12:3000/games').respond(gameSimule);

		var gamePromesse = GameService.getAll(idGame);

		gamePromesse.then( function(game){
			expect(game.id).toEqual(109);
			expect(game.name).toEqual('Game 1');
		});

		$httpBackend.flush();

	}));

});