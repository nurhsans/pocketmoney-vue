// import Vue from 'vue'

var budgetamount = {
    props: {
        item: {},
        totalbudget: 0
    },
    template:
        ` <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">{{item.name}} %</span>
            </div>
      <input type="number" step="0.01" v-model="item.itemPercentage" class="form-control">
      <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">$</span>
            </div>
      <input type="number" step="0.01" v-model.lazy="testItemMethod" class="form-control">
      <button type="button" class="btn btn-outline-secondary bg-info text-light"  @click="$emit('lockthis')">Lock Value</button>
      <button type="button" class="btn btn-outline-secondary bg-warning text-light"  @click="$emit('unlockthis')">Unlock Value</button>
      <button type="button" class="btn btn-outline-secondary bg-secondary text-light"  @click="$emit('removethis')">Remove</button>
    </div>`,
    computed: {
        testItemMethod: {
            get: function () {
              if (this.item.itemLock === false) {
                console.log("ssaasa " + this.item.itemLock)
                this.item.itemAmt = (this.totalbudget * this.item.itemPercentage) / 100
                return this.item.itemAmt
              }
              else {
                return this.item.itemAmt
              }
            },
            set: function (input) {
              if (this.item.itemLock === false) {
                this.item.itemAmt = parseFloat(input.match(/[\d\.\d]+/i))
                this.item.itemPercentage = (this.item.itemAmt / this.totalbudget * 100)
            }
          }
        }
    }
}

var app = new Vue({
    el: '#newCalculator',
    components: {
        budgetamount
    },
    data: {
        salary: 4000,
        savPerc: 50.00,
        expPerc: 50.00,
        wealthPerc: 0.00,
        savingsAmt: 0,
        expensesAmt: 0,
        wealthAmt: 0,
        savingsListItem: "",
        expensesListItem: "",
        savingsList: [
            {name: "Personal Savings",
            itemPercentage: 35,
            itemAmt: 0,
          itemLock:false},
            {name: "House",
            itemPercentage: 55,
            itemAmt: 10,
          itemLock:false},
            // {name: "Bike",
            // itemPercentage: 10,
            // itemAmt: 0},
            // {name: "Couple Savings",
            // itemPercentage: 3.33333,
            // itemAmt: 0},
            {name: "Emergency Fund",
            itemPercentage: 0,
            itemAmt: 0,
          itemLock:false},
        ],
        expensesList: [
            {name: "Phone",
            itemPercentage: 3.26,
            itemAmt: 0},
            // {name: "GA Loan",
            // itemPercentage: 40,
            // itemAmt: 0},
            {name: "Give Parents",
            itemPercentage: 16.666,
            itemAmt: 0},
            // {name: "Gym",
            // itemPercentage: 5.2666,
            // itemAmt: 0}
        ],
    },
    computed: {
        savingsBudget: {
            get: function () {
                this.savingsAmt = (this.salary * this.savPerc / 100).toFixed(2)
                return "$" + this.savingsAmt
            },
            set: function (input) {
                this.savingsAmt = parseFloat(input.match(/[\d\.\d]+/i)[0])
                this.savPerc = ((this.savingsAmt / this.salary) * 100)
            }
        },
        expensesBudget: {
            get: function () {
                this.expensesAmt = (this.salary * this.expPerc / 100).toFixed(2)
                return "$" + this.expensesAmt
            },
            set: function (input) {
                this.expensesAmt = parseFloat(input.match(/[\d\.\d]+/i)[0])
                this.expPerc = ((this.expensesAmt / this.salary) * 100)
            }
        },
        wealthBudget: {
            get: function () {
                this.wealthAmt = (this.salary * this.wealthPerc / 100).toFixed(2)
                return "$" + this.wealthAmt
            },
            set: function (input) {
                this.wealthAmt = parseFloat(input.match(/[\d\.\d]+/i)[0])
                this.wealthPerc = ((this.wealthAmt / this.salary) * 100)
            },
        },
        remainingSavings: function () {
            if (this.savingsList.length != 0) {
                let totalItemAmts = this.savingsList.reduce((a, b) => {
                    return { itemAmt: a.itemAmt + b.itemAmt }
                })
                return (this.savingsAmt - totalItemAmts.itemAmt).toFixed(2)
            }
            else return 0
        },
        remainingExpenses: function () {
            if (this.expensesList.length != 0) {
                let totalItemAmts = this.expensesList.reduce((a, b) => {
                    return { itemAmt: a.itemAmt + b.itemAmt }
                })
                return (this.expensesAmt - totalItemAmts.itemAmt).toFixed(2)
            } else return 0
        }
    },
    methods: {
        addBudgetComponent: function (componentType) {
            var newItem = {
                name: "",
                type: "",
                itemPercentage: 10,
                itemAmt: 10,
                itemLock:false
            }
            if (componentType == "savingsItem") {
                newItem.name = this.savingsListItem
                this.savingsList.push(newItem)
                this.savingsListItem = ""
            } else {
                newItem.name = this.expensesListItem
                this.expensesList.push(newItem)
                this.expensesListItem = ""
            }
        },
        parentRemoveThisSavings: function (thisItem) {
            console.log("thisItemName " + thisItem.name)
            this.savingsList = this.savingsList.filter(item => item.name != thisItem.name)
        },
        parentLockThisSavings: function (thisItem) {
            console.log("thisItemName " + thisItem.name + " " + thisItem.itemLock)
            thisItem.itemLock = true;
        },
        parentUnlockThisSavings: function (thisItem) {
            console.log("thisItemName " + thisItem.name + " " + thisItem.itemLock)
            thisItem.itemLock = false;
        },
        parentRemoveThisExpenses: function (thisItem) {
            console.log("thisItemName " + thisItem.name)
            this.expensesList = this.expensesList.filter(item => item.name != thisItem.name)
        }
    }
})
