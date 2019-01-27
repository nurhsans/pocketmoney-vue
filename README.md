Things I learnt abt vue
1. naming conventions are impt. It may be the same but it may not work.
2. for input properties (eg. placeholder), cannot use {{}} to pass in props. Need to use v-bind:placeholder="propname"
3. to get data between components, we can use $emit 
4. if the value of the input changes after the props are passed through, better to use a initial value for props and then use a different data value for future changes.