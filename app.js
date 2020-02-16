var app = angular.module('searchApp', []);

app.controller('searchCtrl', function($scope, $http) {

  $scope.results = '';
  $scope .flags = '';
  var url = 'https://restcountries.eu/rest/v2/all';
  
  
  $http.get(url).success(
    function(data) {
      $scope.results = data;
      
      
    });
    
});