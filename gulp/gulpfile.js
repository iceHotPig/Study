// 以下代码执行在node环境下
const gulp = require('gulp'); // 引入gulp模块
const sass = require('gulp-sass'); // scss模块
const concat = require('gulp-concat'); // 合拼模块
const autoprefixer = require('gulp-autoprefixer'); // 自动添加前缀模块
const cleanCss = require('gulp-clean-css'); // 自动压缩css模块
const sourcemaps = require('gulp-sourcemaps'); // css代码map
const rev = require('gulp-rev'); // 添加版本号
const clean = require('gulp-clean'); // 清理文件
const imagemin = require('gulp-imagemin'); // 图片压缩
const bable = require('gulp-babel'); // js转换模块
const eslint = require('gulp-eslint'); // eslint 模块
const uglify = require('gulp-uglify'); // js 压缩模块
const revCollector = require('gulp-rev-collector'); // html替换版本文件
const htmlmin = require('gulp-htmlmin'); // html文件压缩
const runsequence = require('run-sequence'); // 流程管理
const open = require('gulp-open');
const connect = require('gulp-connect');
const modRewrite = require('connect-modrewrite');
const configRevRepalce = require('gulp-requirejs-rev-replace');
const tmodjs = require('gulp-tmod');
const replace = require('gulp-replace');

// 创建一个gulp的任务==>压缩html文件；
// 创建一个gulp的任务==>压缩html文件；
// 参数： 第一个参数是任务的名字
// 第二个参数：是可以省略的，依赖的任务名字，数组类型，里面是字符串
// 第三个参数：是回调函数，接受参数，任务完成后调用 stream promise 要么调用cb

/*
 *1.scss文件进行编译css文件；
 *2.所有的css文件和scss文件编译后的代码合并到main.css文件中去；
 *3.css自动添加前缀
 *4.css进行压缩
 *5.如果是开发阶段，需要增加soursemap
 *6.给最后的main.css文件添加一个版本号
 */
gulp.task('style:dev', function() {
  return gulp
    .src(['./src/styles/**/*.{scss,css}', '!./src/styles/main.css'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // 对请求留上的scss代码编译成css代码；
    .pipe(autoprefixer({
      // 兼容css3
      browsers: ['last 2 versions'], // 浏览器版本
      cascade: true, // 美化属性，默认true
      add: true, // 是否添加前缀，默认true
      remove: true, // 删除过时前缀，默认true
      flexbox: true // 为flexbox属性添加前缀，默认true
    }))
    .pipe(concat('main.css')) // css文件的合并
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/styles'));
});

// 最终部署产品用的
gulp.task('style', function() {
  return gulp
    .src(['./src/styles/**/*.{scss,css}', '!./src/styles/main.css'])
    .pipe(sass().on('error', sass.logError)) // 对请求留上的scss代码编译成css代码；
    .pipe(autoprefixer({
      // 兼容css3
      browsers: ['last 2 versions'], // 浏览器版本
      cascade: true, // 美化属性，默认true
      add: true, // 是否添加前缀，默认true
      remove: true, // 删除过时前缀，默认true
      flexbox: true // 为flexbox属性添加前缀，默认true
    }))
    .pipe(concat('main.css')) // css文件的合并
    .pipe(cleanCss({
      // 压缩css
      compatibility: 'ie8',
      // 保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
      keepSpecialComments: '*'
    }))
    .pipe(rev())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./src/styles'));
});

/*
 *图片压缩
 */
gulp.task('imgmin', function() {
  return gulp
    .src('./src/assets/**/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
      optimizationLevel: 5, // 类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, // 类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, // 类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true // 类型：Boolean // 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('./dist/assets'));
});

/*
 *js 处理
 *1.es6代码转换；
 *2.代码的格式化的校验 eslint
 *3.js的压缩
 *4.打上版本号//发布的需要打版本号
 */
gulp.task('js', function() {
  return gulp
    .src(['./src/js/**/*.js'])
    .pipe(eslint()) // 进行校验
    .pipe(eslint.results(results => {
      // Called once for all ESLint results.
      console.log(`JS总校验文件: ${results.length}`);
      console.log(`JS警告个数：: ${results.warningCount}`);
      console.log(`JS错误个数: ${results.errorCount}`);
    }))
    .pipe(eslint.format()) // 错误消息进行格式化输出
    .pipe(eslint.failAfterError()) // 如果校验失败结束当前的任务
    .pipe(bable()) // babel
    .pipe(uglify()) // js压缩
    .pipe(rev())
    .pipe(gulp.dest('dist/js/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('src/js/'));
});

gulp.task('revjs', function() {
  return gulp
    .src(['dist/js/**/*.js'])
    .pipe(configRevRepalce({
      manifest: gulp.src('src/js/rev-manifest.json')
    }))
    .pipe(gulp.dest('dist/js'));
});

/*
 *html 处理
 *1.把html中的路径替换成大声版本号的（css 和js）
 *2.html进行压缩
 */
gulp.task('html', function() {
  return gulp
    .src(['./src/**/*.json', './src/**/*.html', '!./src/template/**']) // - 读取 rev-manifest.json 文件以及需要进行css名替换的文件
    .pipe(revCollector({
      replaceReved: true
    })) // - 执行html文件内css文件名的替换和js文件名替换
    .pipe(
      htmlmin({
        removeComments: true, // 清除HTML注释
        collapseWhitespace: true, // 压缩HTML
        // collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, // 删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
        minifyJS: true, // 压缩页面JS
        minifyCSS: true // 压缩页面CSS
      })
    )
    .pipe(gulp.dest('./dist/')); // - 替换后的文件输出的目录
});

// 创建一个任务，把aasets目录中的所有的文件拷贝到dist目录中
gulp.task('copy', function() {
  // src属性
  return gulp
    .src(['./src/assets/**/*.*', './src/lib/**'], {
      read: true,
      base: './src'
    })
    .pipe(gulp.dest('./dist/'));
});

// 创建一个gulp的任务：default 任务执行前必须先执行html的方法['html']，这个可以省略
gulp.task('default', ['html'], function() {
  console.log('gulp default task');
});

gulp.task('clean', function() {
  return gulp
    .src(['dist/js/**', 'dist/styles/**'], {
      read: false
    })
    .pipe(clean());
});
// 创建一个任务，把模板生成js（相当于把模板生成预编译）
gulp.task('tmpl', function() {
  return gulp
    .src('src/template/**/*.html')
    .pipe(tmodjs({
      templateBase: 'src/template/',
      runtime: 'tmpl.js',
      compress: false
    }))
    .pipe(replace('var String = this.String;', 'var String = window.String'))
    .pipe(gulp.dest('src/js/template'));
});

gulp.task('dist', function() {
  runsequence('clean', 'tmpl', 'copy', 'imgmin', 'style', 'js', 'html', 'revjs');
});

gulp.task('dev', ['open'], function() {
  // 监控scss或者css变化，并自动调用style样式生成工作流；监控的路径不能./ ,不然不能监控添加文件的变化
  gulp
    .watch(['src/styles/css/**', 'src/styles/scss/**'], ['style:dev'], function() {
      connect.reload(); // 让服务器重启
    });
  gulp
    .watch('src/template/**/*.html', ['tmpl']);
});

// 配置测试的服务器
gulp.task('devServer', function() {
  connect.server({
    root: ['./src'], // 网站根目录
    port: 38900, // 端口
    livereload: true,
    middleware: function(connect, opt) {
      return [modRewrite([ // 设置代理
        '^/api/{.*}$ http://192.168.0.102:8080/mockjsdata/1/api/$1[p]'
      ])];
    }
  });
});

// 启动浏览器打开地址
gulp.task('open', ['devServer'], function() {
  gulp
    .src(__filename)
    .pipe(open({
      uri: 'http://localhost:38900/index.html'
    }));
});
