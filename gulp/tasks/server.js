export const server = (done) => {
  setTimeout(() => {
    app.plugins.browsersync.init({
      server: {
        baseDir: `${app.path.build.html}`,
      },
      notify: false,
      port: 3000,
    });
    done();
  }, 500); // Задержка в 500 миллисекунд
};
