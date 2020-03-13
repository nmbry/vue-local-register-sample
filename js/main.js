(function() {
  var Component1 = {
    template: `
      <div>
        <div>{{ count }} times</div>
        <button @click="doPlus">+1</button>
        <button @click="doMinus">-1</button>
      </div>
    `,
    data: function() {
      return {
        count: 0
      }
    },
    methods: {
      doPlus() {
        this.count++
      },
      doMinus() {
        this.count--
      }
    },
  }

  var Component2 = {
    template: `
      <div>
        <div>{{ text }}</div>
        <input v-model="text">
      </div>
    `,
    data: function() {
      return {
        text: 'Apple'
      }
    }
  }

  new Vue({
    el: '#app',
    name: 'main',
    components: {
      'main-component': Component1,
      'main-component2': Component2
    },
  })
})();