var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("minify", () => {
  gulp.src(["sample1.js", "sample2.js"], { cwd: "./src" })
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["minify"]);