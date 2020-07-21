const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cp = require('child_process');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const del = require('del');

const env = process.env.NODE_ENV || 'prod';
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
};

var paths = {
  styles: {
    src: '_scss/*.scss',
    dest: '_site/assets/css',
    destsecond: 'assets/css',
  },
  scripts: {
    src: 'assets/js/*.js',
    dest: '_site/assets/js',
  },
};

/**
 * Build the Jekyll Site
 */
function jekyllBuild() {
  browserSync.notify(messages.jekyllBuild);
  if (env === 'prod') {
    return cp.spawn(jekyll, ['build'], { stdio: 'inherit' });
  } else {
    return cp.spawn(
      jekyll,
      ['build', '--config', '_config.yml,_config.dev.yml'],
      {
        stdio: 'inherit',
      },
    );
  }
}

function style() {
  const processors = [
    autoprefixer(),
    cssnano,
  ];
  return gulp
    .src('_scss/main.scss')
    .pipe(
      sass({
        includePaths: ['scss'],
        onError: browserSync.notify,
      }),
    )
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(paths.styles.destsecond));
}

function reload(done) {
  browserSync.reload();
  done();
}

function browserSyncServe() {
  browserSync.init({
    server: {
      baseDir: '_site',
    },
    notify: false
  });
}



function watch() {
  gulp.watch(paths.styles.src, style);
  gulp.watch(
    [
      '*.html',
      '_layouts/*.html',
      '_pages/*',
      '_includes/*',
      'assets/scripts/*.js',
      'assets/img/*.*',
      // './**/*.md' // causes infinite loop
    ],
    gulp.series(jekyllBuild, reload),
  );
}


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series(jekyllBuild, reload));

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 * To run locally:
 * $ NODE_ENV=dev gulp
 */
gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch));

