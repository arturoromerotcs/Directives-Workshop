app
	.directive('notify', function() {
		return {
			restrict: 'A',
			template: '',	
			scope: {
				title: '@',
				body: '@',
				icon: '@',
				notifyClick: '&'
			},

			link: function(scope, element, attrs) {
				var Notification = window.Notification || window.mozNotification || window.webkitNotification;
				Notification.requestPermission(function(permission) {
					// console.log(permission);
				});
				console.log(scope.title)

				element.on('click', function() {
					new Notification(scope.title, {body: scope.body, icon: scope.icon});
				})
			}
		}
	})