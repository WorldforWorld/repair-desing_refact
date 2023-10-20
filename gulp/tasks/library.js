export const library = () => {
  return app.gulp
    .src(app.path.src.library)
    .pipe(app.gulp.dest(app.path.build.library));
};
