// Include gulp
let gulp = require('gulp');

// Include plugins
let concat = require('gulp-concat');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');

// Concatenate JS files, compile with babel and uglify
gulp.task('scripts', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(concat('raidy.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(babel({
            presets: [
                ['env', { modules: false }]
            ]
        }))
        .pipe(gulp.dest('dist/babel/'))
        .pipe(rename('raidy.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

// Automatize tasks
gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], ['scripts']);
});

// Default task
gulp.task('default', ['scripts', 'watch']);
