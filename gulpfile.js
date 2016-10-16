const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Bundle our gif files
gulp.task('compile', function() {
  gulp.src(['./src/giphy.js', './src/riffsy.js', './src/index.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./build'));
});

// Uglify em ;)
gulp.task('uglify', function() {
  gulp.src('./build/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});
