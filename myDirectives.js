//The directive needs to hold all of its own functionality

/*This concept is not to be confused with being unable to use or take in functions or variables from 
a controller or parent scope and manipulate them*/

/*Think about ng-repeat="item in list". ng-repeat is a directive that is taking in a $scope variable called list and 
iterating through each item in that array therefore it must have access to the controller where $scope.list is defined.*/

app.directive('pending', function($log, $q) {
	
	return {
		restrict: 'A',
		//What we need is a way to grab the function that is being called with ng-click
		scope: {
			//Go to $parent scope and getting the function that we want to call
			request: '&' //& is for function/expression 
		}, 
		template: '',
		//element is the DOM element where we added our directive
		//attrs gives us access to the attributes that are on the element
		link: function(scope, element, attrs) {
			
			// var loading = element.append('<img src="http://cdn0.vox-cdn.com/images/polygon/loader-small.vec8df46.gif" />')
			// scope.request();
			$log.log(scope, element, attrs)
			
			element.on('click', function() {
				element.hide();
				console.log(element.siblings('.loading-gif').show())
				//scope.request === getdata on controller			
				scope.request()
					.then(function (reponse) {
						element.show();
						element.siblings('.loading-gif').hide();
					});
				
			});

		}
	}
});