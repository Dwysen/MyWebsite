// /**
//  * Created by tdf on 2017/8/30.
//  */
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');

gulp.task('convertLess',function () {
    gulp.src('css/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css'));
});

// gulp.task('watch',function () {
//     gulp.watch('css/*.less',['minifycss']);
//     gulp.watch('tpl/*.html',['fileinclude']);
//     gulp.watch('tpl/*.htm',['fileinclude']);
//     gulp.watch('component/*.html',['fileinclude']);
// });

// gulp.task('watchfile',['fileinclude'],function () {
//     gulp.watch('tpl/*.html',['fileinclude']);
// });

// gulp.task('watchless',['doless'],function () {
//     gulp.watch('css/*.less',['minifycss']);
//     gulp.watch('css/*.css',['minifycss']);
// });

gulp.task('watch',function () {
   gulp.watch('css/*.less',['convertLess']);
});

