'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./dev-assets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./prod-assets'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};

// gulp.task('watch', function(){
//   gulp.watch('./dev-assets/**/*.scss', ['buildcss']);
// });


// const sass = require('gulp-sass')(require('sass'));
// var gulp = require('gulp');
// var gulpSass = require('gulp-sass');


// gulp.task('buildcss', function(){
//     return gulp.src('./dev-assets/style.scss')
//     .pipe(gulpSass())
//     .pipe(gulp.dest('./prod-assets'))
// });



