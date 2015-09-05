var gulp = require('gulp');

var connect = require('gulp-connect');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('uglify', function() {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('src/assets/sass/*.scss', ['sass']);
  gulp.watch('src/app/**/*.html').on('change', browserSync.reload);
});

gulp.task('connect', function() {
  connect.server({
    root: 'src/',
    port: 4000
  });
});

gulp.task('sass', function() {
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());
});

gulp.task('clean', function(callback) {
  del(['dist'], callback);
});

gulp.task('default', ['serve']);
