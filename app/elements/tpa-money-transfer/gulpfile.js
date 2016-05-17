var gulp  = require('gulp');
var gutil = require('gulp-util');
var i18n  = require('gulp-i18n-localize');
var less  = require('gulp-less');
var path  = require('path');
var replace = require('gulp-replace');
var strip = require('gulp-strip-comments');
var buildFolder = "build";

gulp.task('i18n', function () {
    'use strict';
    return gulp.src('component.html')
        .pipe(i18n({
            locales: ['en-AU', 'de-DE'],
            localeDir: './locales'
        }))
        .pipe(replace(/%PATH%/g, "../../../"))
        .pipe(replace(/%CSSPATH%/g, "../"))
        .pipe(strip())
        .pipe(gulp.dest(buildFolder));
});

gulp.task('less', function () {
  return gulp.src('component.less')
    .pipe(less({
      paths: [ path.join(__dirname, '../less-elements') ]
    }))
    .pipe(gulp.dest(buildFolder));
});

gulp.task('i18n2', function() {
  var
      tap = require('gulp-tap')
    , concat = require('gulp-concat')
  ;
  return gulp.src('./locales/**/*.json')
    .pipe(tap(function(file, t) {
      var obj = {}, lang = path.basename(file.path, '.json').toLowerCase(), str;
      obj[lang] = JSON.parse(file.contents); str = JSON.stringify(obj);
      file.contents = new Buffer(str.substring(1,str.length-1) + ",");
    }))
    .pipe(concat("component.html"))
    .pipe(tap(function(file, t) {
      var contents = file.contents.toString();
      gulp.src('component.html')
        .pipe(replace(/%PATH%/g, "../../"))
        .pipe(replace(/%CSSPATH%/g, ""))
        .pipe(replace(/\/\*@i18n-json\*\//, "i18n: { type: Object, value: function() { return { " + contents.substr(0,contents.length-1) + "};}, notify: true },"))
        .pipe(replace(/.*@i18n-link.*/, '<link rel="import" href="../../ing-i18n/ing-i18n.html">\n<link rel="import" href="../../iron-signals/iron-signals.html">'))
        .pipe(replace(/.*@i18n-signal.*/, '<iron-signals on-iron-signal-i18n="i18nSignal"></iron-signals>'))
        .pipe(replace(/\/\*@i18n-behavior\*\//, 'I18nBehavior'))
        .pipe(replace(/\$\{\{(.*)\}\}\$/g, "{{content.$1}}"))
        .pipe(strip())
        .pipe(gulp.dest(buildFolder));
      //file.contents = new Buffer(template(contents.substr(0,contents.length-1)));
    }));

});

gulp.task('default', ['less', 'i18n', 'i18n2']);
