'use strict';
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    ejs = require('gulp-ejs');

gulp.task('default', function () {
  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['./dist/']
    }
  });
  gulp.watch(['./src/ejs/*.ejs', './src/ejs/**/*.ejs', './src/ejs/**/_*.ejs'],['ejs']);
});


gulp.task('ejs', function() {
  gulp.src(["./src/ejs/**/*.ejs", "./src/ejs/**/*.ejs", "!./src/ejs/**/_*.ejs", "!./src/ejs/_*.ejs"])
    .pipe(ejs())
    .pipe(gulp.dest('./dist/'))
    .on('end', reload);
});
