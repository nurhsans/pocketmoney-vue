
var budgetform = {
  props: {
    type: String,
    placeholder: String
  },
  template: `
  <div>
    <form class="budget-form">
      <input type="number" min=0 max="100" v-bind:placeholder="placeholder"/>
      <label><h5> % : {{type}} {{min}} </h5></label>
    </form>
  </div>`
}

new Vue({
  el: '#cw',
  components: {
    budgetform
  }
})



