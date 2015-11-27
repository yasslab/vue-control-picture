vue-control-picture [![Build Status](https://travis-ci.org/yasslab/vue-control-picture.svg?branch=master)](https://travis-ci.org/yasslab/vue-control-picture)
=============

[![NPM](https://nodei.co/npm/vue-control-picture.png)](https://www.npmjs.com/package/vue-control-picture)

Usage
-----

```vue
<template>
  <h1>Vue Control Picture</h1>
  <h2>Before</h2>
  <pre>{{message}}</pre>
  <h2>After<h2>
  <pre>{{message | controlPicture }}</pre>
</template>
<script>
var Vue = require('vue');
var VueControlPicture = require('vue-control-picture');

Vue.use(VueControlPicture);

module.exports = {
  data: function () {
    return {message: "hello, world!\nこんにちは世界!\n你好世界!"};
  }
}
</script>
```
