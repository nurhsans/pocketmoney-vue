var salaryinput = {
  template: `
    <div> 
      <form>
        <label><h5>Salary: $ </h5></label>
        <input type="text" placeholder="eg.3000" v-model="salaryin" @input="changesalary"/>
      </form>
    </div>`,
  data() {
    return {
      salaryin: '3000'
    }
  },
  methods: {
    changesalary() {
      this.$emit('newsalary', this.salaryin)
    } 
  }
}


var budgetform = {
  props: {
    type: String,
    placeholder: String,
    initvalue: String,
    salary: String
  },
  template: `
  <div>
    <form class="budget-form">
      <input type="number" min=0 max="100" v-bind:placeholder="placeholder" v-model.number="value" @input="changebudgetpercentage"/>
      <label><h5> % : {{type}}</h5></label>
    </form>
    <h5>{{amountcomputed}}</h5>
  </div>`,
  data() {
    return {
      value: this.initvalue,
    }
  },
  computed: {
    amountcomputed() {
      console.log(this.value)
      console.log(this.salary)
      return "Amount: " + ((parseFloat(this.value)/100) * parseFloat(this.salary))
    }
  },
  methods: {
    changebudgetpercentage() {
      this.$emit('newperc', this.value)
    }
  }
}

var itemsform = {
  props: {
      type: String,
      placeholder: String,
      initvalue: String,
      bp: Number,
      salary: String
    },
  template: `
      <div>
          <form class="savings-form">
              <input type="number" min=0 max="100" v-bind:placeholder="placeholder" v-model.number="value"/>
              <label><h5> % : {{type}}</h5></label>
          </form>
          <h5>{{itemcomputed}}</h5>
      </div>`,
  data() {
      return {
          value: this.initvalue
      }
  },
  computed: {
  itemcomputed() {
      console.log(this.value)
      console.log(this.salary)
      console.log("budget: " + (parseFloat(this.bp)/100) * parseFloat(this.salary))
      return "Amount: " + ((parseFloat(this.bp)/100) * parseFloat(this.salary)* parseFloat(this.value)/100)
      }
  }
}

new Vue({
  el: '#cw',
  components: {
    salaryinput,
    budgetform,
    itemsform
  },
  data() {
    return {
      salar: "3000",
      savingspercentage: 50,
    }
  }
})