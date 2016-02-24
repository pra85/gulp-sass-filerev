'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var RevAll = require('gulp-rev-all');

gulp.task('default', function () {

    var revAll = new RevAll({dontRenameFile: ['index.html']});

     gulp.src(['app.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(revAll.revision())
    .pipe(gulp.dest('build'));

    gulp.src(['**.jpg','**.png','**.gif'])
    .pipe(revAll.revision());

    return gulp.src('index.html')
    .pipe(revAll.revision())
    .pipe(gulp.dest('build'));

});
