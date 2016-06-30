var gulp = require('gulp');
var paths = require('../paths');

gulp.task('watch', function() {
    gulp.watch(paths.source, ['build-es2015', 'build-commonjs', 'build-amd', 'build-system'])
    gulp.watch(paths.scss, ['build-scss'])
});
