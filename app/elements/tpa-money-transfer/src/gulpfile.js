/* jshint strict: false, node: true */
var
        gulp        = require('gulp')
    ,   tap         = require('gulp-tap')
    ,   concat      = require('gulp-concat')
    ,   i18n        = require('gulp-i18n-localize')
    ,   less        = require('gulp-less')
    ,   path        = require('path')
    ,   replace     = require('gulp-replace')
    ,   strip       = require('gulp-strip-comments')
    ,   rename      = require('gulp-rename')
    ,   buildFolder = path.join(__dirname, '../')
    ,   argv        = require('minimist')(process.argv.slice(2))
    ,   localesFolder = path.join(__dirname, './locales')
    ,   fs          = require('fs')
;

buildFolder = buildFolder.substr(0, buildFolder.length-1);

var componentName = buildFolder.split(path.sep).pop();
var languages     = argv.lang ? argv.lang.split(',') : fs.readdirSync(localesFolder).map(function(l) { return path.basename(l, '.json'); });
var header = [
  '<!-- AUTO GENERATED -->',
  '<!--',
  '@license',
  'Copyright (c) 2015 The Polymer Project Authors. All rights reserved.',
  'This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt',
  'The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt',
  'The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt',
  'Code distributed by Google as part of the polymer project is also',
  'subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt',
  '-->'
].join('\n');
var PATH_TO_BOWER = '../../bower_components/';
var PATH_TO_BOWER_I18N = '../../../bower_components/';
var PATH_TO_ELEMENTS = '../../elements/';


gulp.task('i18n', function () {
    return gulp.src('component.html')
        .pipe(rename(componentName + '.html'))
        .pipe(i18n({
            locales:    languages.map(function(l) { return l.toLowerCase() }),
            localeDir:  localesFolder
        }))
        .pipe(replace(/%PATH%/g, PATH_TO_BOWER_I18N))
        .pipe(replace(/%CSSPATH%/g, '../'))
        .pipe(replace(/%COMPONENT_NAME%/g, componentName))
        .pipe(strip())
        .pipe(tap(function(file, t) {
            file.contents = Buffer.concat([
                new Buffer(header), file.contents
            ]);
        }))
        .pipe(gulp.dest(buildFolder));
});

gulp.task('less', function () {
    return gulp.src('component.less')
        .pipe(less({
            paths: [ path.join(buildFolder, '../less-elements') ]
        }))
        .pipe(gulp.dest(buildFolder));
});


/**
 *
 *
 */
gulp.task('i18n2', function() {
    var files = languages.map(function(l) { return localesFolder + path.sep + l.toLowerCase() + '.json' });
    return gulp.src(files)
        .pipe(tap(function(file, t) {
            console.log('generating language from', file.path);
            var obj = {}, lang = path.basename(file.path, '.json').toLowerCase(), str;
            obj[lang] = JSON.parse(file.contents); str = JSON.stringify(obj);
            file.contents = new Buffer(str.substring(1,str.length-1) + ',');
        }))
        .pipe(concat(componentName + '.html'))
        .pipe(tap(function(file, t) {
            var contents = file.contents.toString();
            return gulp.src('component.html')
                .pipe(replace(/%PATH%/g, PATH_TO_BOWER))
                .pipe(replace(/%CSSPATH%/g, ''))
                .pipe(replace(/%COMPONENT_NAME%/g, componentName))
                .pipe(replace(/\/\*@i18n-json\*\//, 'i18n: { type: Object, value: function() { return { ' + contents.substr(0,contents.length-1) + '};}, notify: true },'))
                .pipe(replace(/.*@i18n-link.*/, '<link rel="import" href="' + PATH_TO_ELEMENTS + 'ing-i18n/tpa-i18n.html">\n<link rel="import" href="' + PATH_TO_BOWER + 'iron-signals/iron-signals.html">'))
                //.pipe(replace(/.*@i18n-link.*/, '<link rel="import" href="' + PATH_TO_ELEMENTS + 'ing-i18n/ing-i18n.html">\n<link rel="import" href="' + PATH_TO_ELEMENTS + 'iron-signals/iron-signals.html">'))
                .pipe(replace(/.*@i18n-signal.*/, '<iron-signals on-iron-signal-i18n="i18nSignal"></iron-signals>'))
                .pipe(replace(/\/\*@i18n-behavior\*\//, 'I18nBehavior'))
                .pipe(replace(/\$\{\{(.*)\}\}\$/g, '{{content.$1}}'))
                .pipe(strip())
                .pipe(rename(componentName + '.html'))
                .pipe(tap(function(file, t) {
                    file.contents = Buffer.concat([
                        new Buffer(header), file.contents
                    ]);
                }))
                .pipe(gulp.dest(buildFolder));
        }));

});

gulp.task('default', ['less', 'i18n', 'i18n2']);

gulp.task('watch', function () {
    require('gulp-watch')('**/*', require('gulp-batch')(function(events, cb) {
      gulp.start('default');
    }));
});
