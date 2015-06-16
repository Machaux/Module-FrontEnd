

angular.module("todo").filter ("boum", function(){
					return function (input){
						if (!input) return "John Doe";
						return input.name || input.email || "john Doe"
										}
})