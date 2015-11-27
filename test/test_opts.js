var assert = require('assert');
var Vue = require('vue');
var VueControlPicture = require('../index.js');

describe('vue-control-picture', function () {
  before(function() {
    Vue.use(VueControlPicture, {chars: {enter:"<改行>"}});
  });

  after(function() {
    VueControlPicture.installed = false
  });

  it('should render \n as specified char', function () {
    var vm = new Vue({data: {text: "Hello, World!\nこんにちは、世界!\n你好"}});
    var expected = "Hello, World!<改行>\nこんにちは、世界!<改行>\n你好";
    var actual = vm.$interpolate('{{text | controlPicture}}');
    assert.equal(actual, expected);
  });
});
