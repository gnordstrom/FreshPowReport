angular.module('FreshPowReport', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/resorts/resorts.html'
	})
	// 'views/home/home.html'
	// .state('resorts', {
	// 	url: '/resorts',
	// 	templateUrl: 'views/resorts/resorts.html'
	// })

	// Colorado
	.state('a-basin', {
		url: '/resorts/colorado/a-basin',
		templateUrl: 'views/resorts/colorado/a-basin.html',
		controller: 'aBasinCO'
	})
	.state('vail', {
		url: '/resorts/colorado/vail',
		templateUrl: 'views/resorts/colorado/vail.html',
		controller: 'vailCO'
	})

	// Sweden
	.state('klappen', {
		url: '/resorts/sweden/klappen',
		templateUrl: 'views/resorts/sweden/klappen.html',
		controller: 'klappenCtrl'
	})

	// Utah
	.state('alta', {
		url: '/resorts/utah/alta',
		templateUrl: 'views/resorts/utah/alta.html',
		controller: 'altaCtrl'
	})
	.state('brianhead', {
		url: '/resorts/utah/brian-head',
		templateUrl: 'views/resorts/utah/brianhead.html',
		controller: 'brianheadCtrl'
	})
	.state('brighton', {
		url: '/resorts/utah/brighton',
		templateUrl: 'views/resorts/utah/brighton.html',
		controller: 'brightonCtrl'
	})
	.state('deervalley', {
		url: '/resorts/utah/deer-valley',
		templateUrl: 'views/resorts/utah/deervalley.html',
		controller: 'deervalleyCtrl'
	})
	.state('eaglepoint', {
		url: '/resorts/utah/eagle-point',
		templateUrl: 'views/resorts/utah/eaglepoint.html',
		controller: 'eaglepointCtrl'
	})
	.state('nordicvalley', {
		url: '/resorts/utah/nordic-valley',
		templateUrl: 'views/resorts/utah/nordicvalley.html',
		controller: 'nordicvalleyCtrl'
	})
	.state('parkcity', {
		url: '/resorts/utah/parkcity',
		templateUrl: 'views/resorts/utah/parkcity.html',
		controller: 'parkCityUT'
	})
	.state('powdermountain', {
		url: '/resorts/utah/powder-mountain',
		templateUrl: 'views/resorts/utah/powdermountain.html',
		controller: 'powdermountainCtrl'
	})
	.state('snowbasin', {
		url: '/resorts/utah/snowbasin',
		templateUrl: 'views/resorts/utah/snowbasin.html',
		controller: 'snowbasinCtrl'
	})
	.state('snowbird', {
		url: '/resorts/utah/snowbird',
		templateUrl: 'views/resorts/utah/snowbird.html',
		controller: 'snowbirdUT'
	})
	.state('solitude', {
		url: '/resorts/utah/solitude',
		templateUrl: 'views/resorts/utah/solitude.html',
		controller: 'solitudeCtrl'
	})
	.state('sundance', {
		url: '/resorts/utah/sundance',
		templateUrl: 'views/resorts/utah/sundance.html',
		controller: 'sundanceCtrl'
	})
	;

});
