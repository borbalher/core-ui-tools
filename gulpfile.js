const
gulp          = require('gulp'),
sass          = require('gulp-dart-sass'),
concat        = require('gulp-concat'),
cssNano       = require('cssnano'),
postcss       = require('gulp-postcss'),
sourcemaps    = require('gulp-sourcemaps'),
autoprefixer  = require('autoprefixer')


gulp.task('sass', () =>
{
  return gulp.src([
    './src/common/view/styles/*.scss'
  ])
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer(),
        cssNano({
          preset : ['default', {
            cssDeclarationSorter : true
          }]
        })
      ])

    )
    .pipe(sourcemaps.init())
    .pipe(concat('app.bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/node/api/www/assets/css'))
})
