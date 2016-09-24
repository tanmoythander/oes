var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl: 'home.html',
		controller: 'myCtrl'
	}).
	when('/faq', {
		templateUrl: 'faq.html',
		controller: 'faqCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

app.controller('myCtrl', function($scope){

});
app.controller('faqCtrl', function($scope){
	
});