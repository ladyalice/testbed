//import / require the gulp package for this file
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

//get the method named task
//create the task to be named
//then what you want to happen when the test runs
// this will be the default one in terminal
gulp.task('default', function(){
	console.log("This is a gulp task.");
});

//you can call this in the console by its name html
// $ > gulp html or gulp watch for all files in this

gulp.task('html', function(){
	console.log("This is the html function");
});

//make a clone into the temp folder! 
//gulp.src is an asyncronous function
//this is how you can use css shorthand and not need vendor prefixes 
gulp.task('styles', function(){
	return gulp.src('./assets/styles/styles.css')
		//postcss expects an array
		//postcss isn't amazing, it's about the packages you use with it
		.pipe(postcss([cssImport, autoprefixer, cssvars, nested]))
		.pipe(gulp.dest('./temp/styles'))
});


//gulp-watch

gulp.task('watch', function(){	
	
	watch('./index.html', function(){
		gulp.start('html');
	});

	
	watch('./assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});


