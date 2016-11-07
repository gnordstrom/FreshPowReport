angular.module('FreshPowReport', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home/home.html'
	})
	.state('resorts', {
		url: '/resorts',
		templateUrl: 'views/resorts/resorts.html'
	})
	.state('a-basin', {
		url: '/resorts/a-basin',
		templateUrl: 'views/resorts/a-basin.html',
		controller: 'aBasinCO'
	})
	.state('klappen', {
		url: '/resorts/klappen',
		templateUrl: 'views/resorts/klappen.html'
	})
	.state('parkcity', {
		url: '/resorts/parkcity',
		templateUrl: 'views/resorts/parkcity.html',
		controller: 'parkCityUT'
	})
	.state('snowbird', {
		url: '/resorts/snowbird',
		templateUrl: 'views/resorts/snowbird.html',
		controller: 'snowbirdUT'
	})
	.state('vail', {
		url: '/resorts/vail',
		templateUrl: 'views/resorts/vail.html',
		controller: 'vailCO'
	})
	;

});
