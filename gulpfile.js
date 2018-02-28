'use strict';

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('transpile_app', () => {
    let src = 'js/*.js', 
        dest = 'build';

    gulp.src(src)
        .pipe(babel())
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
});