var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var gzip = require('gulp-gzip');
// var rename = require('gulp-rename');

gulp.task('js-min', function () {
    gulp.src('js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
    gulp.src('js/*.js')
    .pipe(gzip())
    .pipe(gulp.dest('gzip'));
});

gulp.task('default', ['minify-css','js-min','compress']);



 
