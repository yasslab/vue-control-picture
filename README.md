vue-control-picture [![Build Status](https://travis-ci.org/yasslab/vue-control-picture.svg?branch=master)](https://travis-ci.org/yasslab/vue-control-picture)
=============

[![NPM](https://nodei.co/npm/vue-control-picture.png)](https://www.npmjs.com/package/vue-control-picture)

Usage
-----

```vue
<template>
  <h1>↵</h1>
  <p>{{message | controlPicture }}</p>
  <h1>♡<h1>
  <p>{{message | controlPicture "♡" }}</p>
</template>
<script>
var Vue = require('vue');
var VueControlPicture = require('vue-control-picture');

Vue.use(VueControlPicture);

module.exports = {
  data: function () {
    message: "hello\nこんにちは\n你好"
  }
}
</script>
```
