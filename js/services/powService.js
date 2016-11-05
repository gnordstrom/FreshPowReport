angular.module('FreshPowReport').service('powService', function($http){

  // Park City
  this.getPC = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Park City&format=json&date=today'
    }).then(function(response){
      // console.log(response);
      return response.data;
    });
  };

  // // Weather API
  // this.getWeather = function() {
  //   return $http ({
  //     method: 'GET',
  //     url: 'http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=243eb7e5a018afa8c40a31dc7738469c'
  //   }).then(function(response){
  //     // console.log(response);
  //     return response.data;
  //   });
  // };

  // // Roster API
  //   this.getRoster = function() {
  //     return $http ({
  //       method: 'GET',
  //       url: 'http://api.football-data.org/v1/teams/66/players',
  //       headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
  //     }).then(function(response){
  //       var sortedRoster = response.data.players.sort(function(a, b){return a.jerseyNumber-b.jerseyNumber});
  //       return response.data;
  //     });
  //   };
  //
  // // Schedule API
  // this.getSchedule = function() {
  //   return $http ({
  //     method: 'GET',
  //     url: 'http://api.football-data.org/v1/teams/66/fixtures?timeFrame=n260',
  //     headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
  //   }).then(function(response){
  //     // console.log(response);
  //     return response.data.fixtures;
  //   });
  // };
  //
  // // Table API
  // this.getTable = function() {
  //   return $http ({
  //     method: 'GET',
  //     url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
  //     headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
  //   }).then(function(response){
  //     // console.log(response);
  //     return response.data.standing;
  //   });
  // };

});
