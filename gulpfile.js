const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('clean', () => {
    return del([
        'public/css/app.css',
    ]);
});

gulp.task('styles', () => {
    return gulp.src('resources/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', () => {
    gulp.watch('resources/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

// gulp.task('default', gulp.series(['clean', 'styles', 'clean', 'watch']));