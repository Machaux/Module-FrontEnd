angular.module("Batnav")

	.directive('dtaPhoto', function(){
		
		return {
			restrict: "E",
			template: "ici bientot une photo",

			scope: {
					w: "="
			},

			link: function(scope, element, attrs) {
				
				element.css("borderStyle", "solid");
				element.css("display", "inline-block");
				
				element.css("color", attrs.couleur || "blue");
			

				scope.$watch("w", function() {
					element.css("borderWidth", scope.w+"px")
				})
			}	
		}
	}
	);