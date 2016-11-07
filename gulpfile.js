//1. Make gulpfile
//2. npm i all dependencies
//3. check all folder paths used in gulpfile
//4. Update index.html
//5. Run gulp watch

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');
    //babel-preset-es2015

 var CacheBuster = require('gulp-cachebust');
 var cachebust = new CacheBuster();

 gulp.task('build-css', function() {
	return gulp.src('./styles/*')
		.pipe(sourcemaps.init())     			// Initializing source maps, useful when having several differenty style sass files.
		.pipe(sass())            				// the SASS is converting the SCSS into CSS
		.pipe(cachebust.resources())			// Get rid of old and "busted" stuff so we can get new stuff
		.pipe(concat('styles.css'))
		.pipe(sourcemaps.write('./maps'))	// Write out the source maps so we can remember them later. Helps the DEBUGGER see how I set things up.
		.pipe(gulp.dest('./dist/css'));			// Spit out the final copy into the dist folder
})

gulp.task('clean', function (cb) {
    del([
        'dist'
    ], cb);
});

gulp.task('build-js', function() {
  return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
		// .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

// 'build-js'
gulp.task('build', [ 'clean', 'build-css'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html', './styles/*.*css', './js/**/*.js'], ['build']);
});
