app.directive('pending', function($log) {
	
	return {
		restrict: 'A',
	
		scope: {
			//Go to $parent scope and get the function that we want to call
			request: '&' //& is for function/expression 
		}, 
		template: '',
	
		//attrs gives us access to the attributes that are on the element
		link: function(scope, element, attrs) {
				
			element.on('click', function() {
				element.hide();
				var loadingGif = element.after( '<img src="http://cdn0.vox-cdn.com/images/polygon/loader-small.vec8df46.gif"></img>' );
				
				//scope.request === getdata on controller
				scope.request()
					.then(function (reponse) {
						element.siblings('img').hide();
						element.show();
					});
			});
		}
	}
});