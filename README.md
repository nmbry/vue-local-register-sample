# Local Register Sample
## Note to self
~~~javascript
(function() {
  var ComponentA = {
    template: ``,
    data: function() {
      return {
        // ...
      }
    },
    methods: {
      // ...
    },
    // and so on...
  }

  var ComponentB = {
    // ...
  }

  new Vue({
    el: '#app',
    name: 'main',
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB,
    }
  })
})();
~~~