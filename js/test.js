new Vue({
    el: '#newCalculator',
    data: {
        salary: 3000,
        savPerc: 50.00,
        expPerc: 45.00,
        wealthPerc: 5.00,
        savingsAmt: 0,
        expensesAmt: 0,
        wealthAmt: 0
    },
    computed: {
        savingsBudget: {
            get: function () {
                this.savingsAmt = (this.salary * this.savPerc / 100).toFixed(2)
                return "$" + this.savingsAmt
            },
            set: function (input) {
                this.savingsAmt = parseFloat(input.match(/[\d\.\d]+/i)[0])
                this.savPerc = ((this.savingsAmt / this.salary) * 100).toFixed(2)
            }
        },
        expensesBudget: {
            get: function () {
                this.expensesAmt = (this.salary * this.expPerc / 100).toFixed(2)
                return "$" + this.expensesAmt
            },
            set: function (input) {
                this.expensesAmt = parseFloat(input.match(/[\d\.\d]+/i)[0])
                this.expPerc = ((this.expensesAmt / this.salary) * 100).toFixed(2)
            }
        },
        wealthBudget: {
            get: function () {
                this.wealthAmt = (this.salary * this.wealthPerc / 100).toFixed(2)
                return "$" + this.wealthAmt
            },
            set: function (input) {
                this.wealthAmt = parseFloat(input.match(/[\d\.\d]+/i)[0])
                this.wealthPerc = ((this.wealthAmt/ this.salary) * 100).toFixed(2)
            },
        }
    }
})