import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageFile = require('../../package.json');

import favicons from 'gulp-favicons';
import filter from 'gulp-filter';
const config = {
  icons: {
    favicons: true,
    appleIcon: true,
    android: true,
    windows: false,
    yandex: false,
    coast: false,
    firefox: false,
    appleStartup: false,
  },
  path: 'assets/img/favicon/',
};
export const favicon = () => {
  return app.gulp
    .src(`${app.path.src.favicon}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'Favicon',
          message: 'Error <%= error.message %>',
        })
      )
    )
    .pipe(app.gulp.dest(`${app.path.build.favicon}`))
    .pipe(
      favicons({
        // Здесь импортировать из файла package.json
        appName: packageFile.name,
        appShortName: packageFile.shortName,
        appDescription: packageFile.description,
        icons: config.icons,
        path: config.path,
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.favicon}`))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(app.gulp.dest(`${app.path.buildFolder}`));
};
