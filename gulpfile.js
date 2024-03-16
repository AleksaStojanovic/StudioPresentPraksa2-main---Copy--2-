const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const { src, dest, watch } = gulp;

// Function to compile SCSS to CSS
async function compileScss() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;
    return src('scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('css'));
}

// Function to watch for changes in SCSS files
function watchScss() {
    watch('scss/**/*.scss', compileScss);
}

// Export the functions as tasks
exports.compileScss = compileScss;
exports.watch = watchScss;