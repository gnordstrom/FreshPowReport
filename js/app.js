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
	//// California
	.state('alpinemeadows', {
		url: '/resorts/california/alpine-meadows',
		templateUrl: 'views/resorts/california/alpine-meadows.html',
		controller: 'alpineMeadowsCtrl'
	})
	.state('bearvalley', {
		url: '/resorts/california/bear-valley',
		templateUrl: 'views/resorts/california/bear-valley.html',
		controller: 'bearValleyCtrl'
	})
	.state('dodgeridge', {
		url: '/resorts/california/dodge-ridge',
		templateUrl: 'views/resorts/california/dodge-ridge.html',
		controller: 'dodgeRidgeCtrl'
	})
	.state('heavenly', {
		url: '/resorts/california/heavenly',
		templateUrl: 'views/resorts/california/heavenly.html',
		controller: 'heavenlyCtrl'
	})
	.state('homewood', {
		url: '/resorts/california/homewood',
		templateUrl: 'views/resorts/california/homewood.html',
		controller: 'homewoodCtrl'
	})
	.state('kirkwood', {
		url: '/resorts/california/kirkwood',
		templateUrl: 'views/resorts/california/kirkwood.html',
		controller: 'kirkwoodCtrl'
	})
	.state('mammoth', {
		url: '/resorts/california/mammoth',
		templateUrl: 'views/resorts/california/mammoth.html',
		controller: 'mammothCtrl'
	})
	.state('mountainhigh', {
		url: '/resorts/california/mountain-high',
		templateUrl: 'views/resorts/california/mountain-high.html',
		controller: 'mountainHighCtrl'
	})
	.state('mtbaldy', {
		url: '/resorts/california/mt-baldy',
		templateUrl: 'views/resorts/california/mt-baldy.html',
		controller: 'mtBaldyCtrl'
	})
	.state('northstar', {
		url: '/resorts/california/northstar',
		templateUrl: 'views/resorts/california/northstar.html',
		controller: 'northstarCtrl'
	})
	.state('sierra', {
		url: '/resorts/california/sierra-at-tahoe',
		templateUrl: 'views/resorts/california/sierra-at-tahoe.html',
		controller: 'sierraCtrl'
	})
	.state('squawvalley', {
		url: '/resorts/california/alpine-meadow',
		templateUrl: 'views/resorts/california/squaw-valley.html',
		controller: 'squawValleyCtrl'
	})
	.state('sugarbowl', {
		url: '/resorts/california/sugar-bowl',
		templateUrl: 'views/resorts/california/sugar-bowl.html',
		controller: 'sugarBowlCtrl'
	})

	////// Colorado
	.state('a-basin', {
		url: '/resorts/colorado/a-basin',
		templateUrl: 'views/resorts/colorado/a-basin.html',
		controller: 'aBasinCO'
	})
	.state('aspen', {
		url: '/resorts/colorado/aspen',
		templateUrl: 'views/resorts/colorado/aspen.html',
		controller: 'aspenCtrl'
	})
	.state('beavercreek', {
		url: '/resorts/colorado/beavercreek',
		templateUrl: 'views/resorts/colorado/beavercreek.html',
		controller: 'beavercreekCtrl'
	})
	.state('breckenridge', {
		url: '/resorts/colorado/breckenridge',
		templateUrl: 'views/resorts/colorado/breckenridge.html',
		controller: 'breckenridgeCtrl'
	})
	.state('buttermilk', {
		url: '/resorts/colorado/buttermilk',
		templateUrl: 'views/resorts/colorado/buttermilk.html',
		controller: 'buttermilkCtrl'
	})
	.state('coppermountain', {
		url: '/resorts/colorado/copper-mountain',
		templateUrl: 'views/resorts/colorado/coppermountain.html',
		controller: 'copperCtrl'
	})
	.state('eldora', {
		url: '/resorts/colorado/eldora',
		templateUrl: 'views/resorts/colorado/eldora.html',
		controller: 'eldoraCtrl'
	})
	.state('keystone', {
		url: '/resorts/colorado/keystone',
		templateUrl: 'views/resorts/colorado/keystone.html',
		controller: 'keystoneCtrl'
	})
	.state('loveland', {
		url: '/resorts/colorado/loveland',
		templateUrl: 'views/resorts/colorado/loveland.html',
		controller: 'lovelandCtrl'
	})
	.state('monarch', {
		url: '/resorts/colorado/monarch',
		templateUrl: 'views/resorts/colorado/monarch.html',
		controller: 'monarchCtrl'
	})
	.state('powderhorn', {
		url: '/resorts/colorado/powderhorn',
		templateUrl: 'views/resorts/colorado/powderhorn.html',
		controller: 'powderhornCtrl'
	})
	.state('purgatory', {
		url: '/resorts/colorado/purgatory',
		templateUrl: 'views/resorts/colorado/purgatory.html',
		controller: 'purgatoryCtrl'
	})
	.state('steamboatsprings', {
		url: '/resorts/colorado/steamboat-springs',
		templateUrl: 'views/resorts/colorado/steamboatsprings.html',
		controller: 'steamboatCtrl'
	})
	.state('telluride', {
		url: '/resorts/colorado/telluride',
		templateUrl: 'views/resorts/colorado/telluride.html',
		controller: 'tellurideCtrl'
	})
	.state('vail', {
		url: '/resorts/colorado/vail',
		templateUrl: 'views/resorts/colorado/vail.html',
		controller: 'vailCO'
	})
	.state('winterpark', {
		url: '/resorts/colorado/winter-park',
		templateUrl: 'views/resorts/colorado/winterpark.html',
		controller: 'winterparkCtrl'
	})

	//// Sweden
	.state('klappen', {
		url: '/resorts/sweden/klappen',
		templateUrl: 'views/resorts/sweden/klappen.html',
		controller: 'klappenCtrl'
	})

	//// Utah
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
