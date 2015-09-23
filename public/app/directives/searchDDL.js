app.directive('searchDDL', function(){
	return {
		restrict: 'E',
		scope: {
			category: '='
		},
		templateUrl: 'app/directives/searchDDL.html'
	};
});