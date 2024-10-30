"use strict";
var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var sassGlob = require("gulp-sass-glob");
var nano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var terser = require("gulp-terser");
var cache = require("gulp-cache");
var extReplace = require("gulp-ext-replace");

// Compile sass to compressed css andd add vendor prefixes
gulp.task("styles", function (done) {
    gulp.src("src/sass/style.scss")
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", function (error) {
            console.log(
                "\n ✖ ✖ ✖ ✖ ✖ ERROR ✖ ✖ ✖ ✖ ✖ \n \n" + error.message + "\n \n"
            );
        })
        .pipe(nano())
        .pipe(rename("theme.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build/css"));
    done();
});

gulp.task("scripts", function (done) {
    gulp.src(["src/js/libs/*.js", "src/js/components/*.js", "src/js/*.js"])
        .pipe(concat("scripts.min.js"))
        .pipe(terser())
        .on("error", function (error) {
            console.log(
                "\n ✖ ✖ ✖ ✖ ✖ ERROR ✖ ✖ ✖ ✖ ✖ \n \n" + error.message + "\n \n"
            );
        })
        .pipe(rename("theme.min.js"))
        .pipe(gulp.dest("build/js"));
    done();
});

gulp.task("watch", function () {
    gulp.watch("src/sass/**/*.scss", gulp.series("styles"));
    gulp.watch("src/js/**/*.js", gulp.series("scripts"));
});

gulp.task("build", gulp.series("styles", "scripts"));

// Default task
gulp.task("default", gulp.series("watch"));
