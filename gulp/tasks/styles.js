const cssFile = [
    './src/css/fonts.css',
    './src/css/core.css',
    './src/css/info.css',
    './src/css/education.css',
    './src/css/project.css',
    './src/css/fix.css',
    './src/css/media.css'
];

module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp.src(cssFile)
    
        .pipe($.sourcemaps.init())
    
        .pipe($.concatCss('style.css'))
        .pipe($.autoprefixer({
            cascade: false
        }))
    
        .on("error", $.notify.onError({
            message: "Error: Something happended",
            title: "style"
        }))
    
        .pipe($.cleanCSS({
            level: 2
        }))
    
        .pipe($.sourcemaps.write())
    
        .pipe($.gulp.dest('./build/css/'))
    
        .pipe($.browserSync.reload({
            stream: true
        }));
    });
}