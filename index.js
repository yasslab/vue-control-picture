'use strict';

exports.install = function (Vue, opts) {
  opts = opts || {}
  var chars = opts.chars || {enter: '↵', space: '␣'};

  Vue.filter('controlPicture', function (value) {
    var replaced = value.replace(/\n/g, chars.enter + '\n');
    replaced = replaced.replace(/ /g, chars.space);
    return replaced;
  });
}
