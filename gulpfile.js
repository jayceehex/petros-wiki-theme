'use strict'

let gulp = require('gulp')
let sass = require('gulp-sass')
let rename = require('gulp-rename')
let cleanCSS = require('gulp-clean-css')

sass.compiler = require('node-sass')

// sass: Compile Sass
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

// sass:watch: Watch for Sass changes
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

// minify-css: Minify CSS
gulp.task('minify-css', function() {
  return gulp
    .src('./src/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./src/'))
    .pipe(
      rename(function(path) {
        path.basename += '.min'
      })
    )
})
