//import / require the gulp package for this file
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

//get the method named task
//create the task to be named
//then what you want to happen when the test runs
// this will be the default one in terminal
// gulp.task('default', function(){
// 	console.log("This is a gulp task.");
// });

// //you can call this in the console by its name html
// // $ > gulp html or gulp watch for all files in this

// gulp.task('html', function(){
// 	console.log("This is the html function");
// });
gulp.task('watch', function(){	
	
	browserSync.init({
		server: {
			notify: false,
			baseDir: "."
		}

	})
	watch('./index.html', function(){
		browserSync.reload();
	});

	
	watch('./assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

});
// name of task, dependency, and then the anonymous function
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./temp/styles/styles.css')
	.pipe(browserSync.stream());


})
//make a clone into the temp folder! 
//gulp.src is an asyncronous function
//this is how you can use css shorthand and not need vendor prefixes 

