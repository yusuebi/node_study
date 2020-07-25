var gulp = require("gulp");

gulp.task("a", () => {
  console.log("a");
});

gulp.task("b", () => {
  console.log("b");
});

gulp.task("default", ["a", "b"]);
