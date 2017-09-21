var gulp = require('gulp'),	
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'), 
	mixins = require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./assets/styles/styles.css')
		//postcss expects an array
		//postcss isn't amazing, it's about the packages you use with it
		.pipe(postcss([cssImport, mixins, autoprefixer, cssvars, nested]))
		//ensure that gulp watch command doesn't stop when an error occurs
		.on('error', function(errorInfo) {
			//make the console tell you the error when it happens
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./temp/styles'))
});
