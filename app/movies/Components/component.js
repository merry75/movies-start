app.component("movieDirective", {
  templateUrl: 'templates/movie.html',
  controller: 'MoviesCtrl as ctrl',
  bindings: {
          movie: '=',
          isDeleting: '=',
          remove: '&'
        }
});