
var budgetform = {
  props: {
    type: String,
    placeholder: String,
    salary: Number
  },
  template: `
  <div>
    <form class="budget-form">
      <input type="number" min=0 max="100" v-bind:placeholder="placeholder" v-model.number="value"/>
      <label><h5> % : {{type}}</h5></label>
    </form>
    <h5>{{amountcomputed}} </h5>
  </div>`,
  data() {
    return {
      value: 0,
      amount: ''
    }
  },
  methods: {},
  computed: {
    amountcomputed() {
      return "Amount: " + ((this.value/100) * this.salary)
    }
  }
}

new Vue({
  el: '#cw',
  components: {
    budgetform
  },
  data: {
    salary: 3000
  }
})




