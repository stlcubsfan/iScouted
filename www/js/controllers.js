'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngResource']).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller("StockScouterCtrl", ["$scope", "$resource", function($scope, $resource) {
  	var StockScouter = $resource('http://scouted.herokuapp.com/api/stock_scouter');
  	console.log("got here");
  	$scope.stocks = StockScouter.query();
  	$scope.title = "Stock Scouter";
  	
  }]);
