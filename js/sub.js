(function() {
  var Component = {
    template: `
      <div>
        <ol>
          <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ol>
      </div>
    `,
    data: function() {
      return {
        list: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Orange' },
          { id: 3, name: 'Strawberry' },
        ]
      }
    }
  }

  new Vue({
    el: '#app2',
    name: 'sub',
    components: {
      'sub-component': Component
    },
  })
})();