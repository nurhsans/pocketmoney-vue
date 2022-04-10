Things I learnt abt vue
PV001
1. naming conventions are impt. It may be the same but it may not work.
2. for input properties (eg. placeholder), cannot use {{}} to pass in props. Need to use v-bind:placeholder="propname"
3. to get data between components, we can use $emit
4. if the value of the input changes after the props are passed through, better to use a initial value for props and then use a different data value for future changes.

PV002
5. v.model, computed and getter/setter is useful enough to get the two way changes. v-model provides two way binding and can be used to check the event. A computed property will only re-evaluate when some of its reactive dependencies have changed. https://vuejs.org/v2/guide/computed.html
6. Was having a problem before where the change in was wrong. Couldnt see why but v.model.lazy helps wait for the input to be fully input. https://stackoverflow.com/questions/56433307/how-to-wait-for-user-enter-in-vue-input-with-v-model. In the end I didnt need it actually, my calculation was wrong hehe.

PV003
7. There was some issue with the vue imports. Had to change that to the basic one from here - https://vuejs.org/v2/guide/

PV004
New features to develop:
- Lock some values

Fixes to implement
- Percentage and $$ should have only 2 decimal points.

PV005
New features to develop:
- save data in CSV - download-able - Learnt from https://www.javatpoint.com/oprweb/test.jsp?filename=javascript-create-and-download-csv-file1
