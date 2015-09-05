var gulp = require('gulp');

var connect = require('gulp-connect');
var sass = require('gulp-sass');


gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    port: 4000
  });
});

gulp.task('sass', function() {
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function(callback) {
  del(['dist'], callback);
});
