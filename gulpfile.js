var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');

//GULP TASKS -------------

//'$ gulp jsBrowserify' takes pre-concatenated file from tmp/ dir,
  // transpiles it from es6, browserifies it and saves it in
  // build/js/app.js
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['.tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});

//'$ gulp concatInterface'
  // gathers all interface files from js/ dir, concatenates them, and
  // stores them in tmp/ dir.
gulp.task('concatInterface', function(){
 return gulp.src(['js/*-interface.js'])
   .pipe(concat('allConcat.js'))
   .pipe(gulp.dest('./tmp'));
 });

//'$ gulp minifyScripts'
  //optimizes app.js file for browsers by removing whitespace/comments
gulp.task('minifyScripts', ['jsBrowserify'], function() {
 return gulp.src('build/js/app.js')
   .pipe(uglify())
   .pipe(gulp.dest('./build/js'));
});

//'$ gulp clean'
  // removes old versions of build/ and tmp/ dirs to avoid buildup of
  // old/unwanted versions of files
gulp.task('clean', function(){
 return del(['build', 'tmp']);
});
