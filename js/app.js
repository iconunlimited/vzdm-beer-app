var app = angular.module('BeerApp', ['restangular','ngAnimate', 'ui.bootstrap', 'angularMoment']);

app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://localhost:3000');
});
