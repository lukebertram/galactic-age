var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


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


//'$ gulp minifyScripts'


//'$ gulp clean'
