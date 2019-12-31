const gulp = require('gulp');
//css
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

//image
const imagemin = require('gulp-imagemin');
const imageminJpg = require('imagemin-jpeg-recompress');
const imageminPng = require('imagemin-optipng');

//js
// const uglify = require('gulp-uglify');

// clean
const clean = require('gulp-clean');

// browser-sync start --server --files "*.*"
// browser-sync start --proxy "myproject" --files "*.css, *.html, *.php, *.js"
// npm uninstall <pa

const cssFile = [
    './src/css/core.css',
    './src/css/info.css',
    './src/css/education.css',
    './src/css/project.css',
    './src/css/project_mobile.css',
    './src/css/fix.css',
    './src/css/media.css'
];

const jsFile = [
    './src/js/arrays.js',
    './src/js/show_description.js',
    './src/js/drop_panel.js',
    './src/js/drop_panel_mobile.js',
    './src/js/slider.js',
    './src/js/swipe.js'
];

gulp.task('images', function () {
    return gulp.src('src/img/*')

    .pipe(imagemin([
        imageminJpg({
            loops: 4,
            min: 50,
            max: 95,
            quality: 'high' 
        }),
        imageminPng({
            optimizationLevel: 5
        })
    ]))
    .pipe(gulp.dest('build/img'))
})

gulp.task('styles', function () {
    return gulp.src(cssFile)

    .pipe(concatCss('style.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))

    .pipe(gulp.dest('./build/css'))
})

gulp.task('scripts', function () {
    return gulp.src(jsFile)

    .pipe(gulp.dest('./build/js'))
})

gulp.task('clean', function () {
    return gulp.src('build/img/*.db', {read: false})
        .pipe(clean());
});

// gulp.task('build', gulp.series(clean,gulp.parallel(styles,scripts,images)));