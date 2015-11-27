'use strict';

exports.install = function (Vue, opts) {
  opts = opts || {}
  var chars = opts.chars || {enter: '↵'};

  Vue.filter('controlPicture', function (value) {
    return value.replace(/\n/g, chars.enter + '\n');
  });
}
