angular.module('todo').filter ("bang", function () {
					return function(input , nb) {
						return input + '!'.repeat(nb) // es6, pas compatible ie
					}
				})