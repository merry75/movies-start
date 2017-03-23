app.controller('MoviesCtrl', ['$scope', 'movies', function($scope, movies) {
  window.a = $scope;

  $scope.isDeleting = false;

  $scope.movies = movies.getMovies();

  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };
  
  $scope.deleteMovies = function(){
    $scope.isDeleting = true;
    
  };
  
  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false;
    
  };
  
  $scope.remove = function (movie) {
    movies.removeMovie(movie);
  };

  // $scope.deleteMovie = function(index){
  //   // TODO: delete the movie only if the app is in "delete mode"
  //   // $scope.isDeleting = true;
  //   // movies.removeMovie(index);

  // };
  
 }]);