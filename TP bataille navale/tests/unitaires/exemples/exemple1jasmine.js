describe("une suite de 2 tests", function() {

	it ("12 + 5 doit être égal à 17", function () {
		var a = 10;
		var b = 5;
		var resultat= a+b;

		expect(resultat).toBeDefined();
		expect(resultat).toBe(15);
		expect(resultat).not.toBe(a);
	});

	it ("l'égalité de deux objets est bien gérée", function () {
		var a = { prop1 : "val1", prop2 : "val2"};
		var b = { prop1 : "val1", prop2 : "val2"};
	
		expect(b).toEqual(a);
	});

});