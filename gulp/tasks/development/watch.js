var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.hugo, ['hugo:rebuild']);
  gulp.watch(config.styles, ['styles', 'lint:styles']);
  gulp.watch(config.scripts, ['scripts', 'lint:scripts']);
  gulp.watch(config.svg, ['svg']);
});
