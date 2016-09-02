var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')

var config = {
  style: './app/style',
  dest: './source/style'
}

gulp.task('sass', function () {
  return gulp.src(config.style + '/main.scss')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest))
})

gulp.task('default', function () {
  gulp.watch(config.style + '/**/*.scss', ['sass'])
})
