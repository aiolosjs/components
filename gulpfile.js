const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
    skipLibCheck: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

exports.default = gulp.series('declaration');
