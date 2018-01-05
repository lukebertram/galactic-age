var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var lib = require('bower-files') ({
  "overrides" : {
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


//GULP TASKS -------------

//'$ gulp jsBrowserify'
  // runs concatInterface gulp task first
  // takes pre-concatenated file from tmp/ dir,
  // transpiles it from es6, browserifies it and saves it in
  // build/js/app.js
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
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
  // runs jsBrowserify task first
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

//'$ gulp jshint'
  // runs all javascript files through linter to find syntax errors
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//'$ gulp bower'
  // runs bower subtasks
gulp.task('bower', ['bowerJS', 'cssConcat']);

//'$ gulp bowerJS'
  // concatenates front-end dependency js files into a single minified
  // js file called 'vendor.min.js', located in build/js/ dir.
gulp.task('bowerJS', function() {
 return gulp.src(lib.ext('js').files)
   .pipe(concat('vendor.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('./build/js'));
});

//'$ gulp bowerCSS'
  // concatenates bower-managed dependency css files (bootstrap) into
  // a single file called 'vendor.css' located in the build/css/ dir.
gulp.task('bowerCSS', function(){
 return gulp.src(lib.ext('css').files)
   .pipe(concat('vendor.css'))
   .pipe(gulp.dest('./build/css'));
});

//'$ gulp cssConcat'
  // runs bowerCSS and cssBuild gulp tasks first
  // concatenates the css files contained in the build dir into a single
  // file called 'build.css' located in the build/css/ directory.
gulp.task('cssConcat', ['bowerCSS', 'cssBuild'], function() {
 return gulp.src(['./build/css/vendor.css', './build/css/main.css'])
   .pipe(concat('build.css'))
   .pipe(gulp.dest('./build/css'))
   .pipe(browserSync.stream());
});

//'$ gulp build'
  // runs 'clean' gulp task first
  // if '--production' flag is used, runs minifyScripts in addition to
  // jsBrowserify and bower. Otherwise minifyScripts is not run.
gulp.task('build', ['clean'], function(){
 if (buildProduction) {
   gulp.start('minifyScripts');
 } else {
   gulp.start('jsBrowserify');
 }
 gulp.start('bower');
});

//'$ gulp cssBuild'
  // builds a single CSS file from the main.scss file located in the
  // scss/ directory (also includes all scss files imported by main.scss)
gulp.task('cssBuild', function() {
 return gulp.src('./scss/main.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./build/css'))
});

//'$ gulp serve'
  // starts a development server which watches all the files of the
  // project for changes. When a changed file is saved, the server
  // rebuilds the necessary parts of the project and refreshed the
  // browser window.
gulp.task('serve', function() {
 browserSync.init({
   server: {
     baseDir: "./",
     index: "index.html"
   }
 });

 gulp.watch(['js/*.js'], ['jsBuild']);
 gulp.watch(['bower.json'], ['bowerBuild']);
 gulp.watch(['*.html'], ['htmlBuild']);
 gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['cssConcat']);

});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
 browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
 browserSync.reload();
});

gulp.task('htmlBuild', function(){
 browserSync.reload();
});
