# #100DaysOfCode Log - Round 1 - Yangetze

The log of my #100DaysOfCode challenge. Started on [January 19, Tuesday, 2021].
#Javascript
[14/100]

## Log

### R1D1 
[Tweet](https://twitter.com/yangetze/status/1351727401949130752?s=20)<br />
R1D1 #100DaysOfCode 💜✅ <br />
🟣 I've forked @ka11away 's repository <br />
🟣 I've started the course of Basic Javascript by @freeCodeCamp <br /> 
🟣 I am practicing my english. <br />
🟣 Lesson learned today: Back to the basics is an amazing way to start! <br />

### R1D2
[Tweet](https://twitter.com/yangetze/status/1352095434890747907?s=20)<br />
R1D2 #100DaysOfCode 💜✅ <br />
🟣 I didn't reconizge the difference between /slash and \backslash until today <br />
🟣 Now I know that Mad Libs is a game where you complete the words😅 <br />
🟣 Compound assignments are great! <br />
🟣 Also I practice basic maths operations (without calc 😂) <br />
#Javascript
<br />

### R1D3
[Tweet](https://twitter.com/yangetze/status/1352444992267165700?s=20)<br />
R1D3 #100DaysOfCode 💜✅<br />
🟣 I learned about "String Immutability", it's pretty interesting concept. <br />
🟣 About English, I discovered "third-to-last", "second-to-last", and my head is like 😲<br />
<br />
#Javascript #WomenWhoCode

### R1D4
[Tweet](https://twitter.com/yangetze/status/1353191885628723201?s=20)<br />
R1D4 #100DaysOfCode 💜✅<br />
🟣 I went over about "Manipulate Array" and I want to practice more about it. Any suggestions?

<br /> INFO:
<br />Array: 
<br />// To add element
<br />Unshift = Adds the element at the beginning of the array
<br />Push = Add an element to last position of array
<br />// To delete element
<br />Pop = Remove last element of array and shows it. 
<br />Shift = Removes first element of array and shows it.

<br /><br />Example: 
var myArray = [25, 49, 89, 27, 50];
<br />myArray = myArray.unshift(15); // [15, 25, 49, 89, 27, 50]
<br />myArray = myArray.push(16); // [15, 25, 49, 89, 27, 50, 16]
<br />myArray = myArray.pop(); // [15, 25, 49, 89, 27, 50]
<br />myArray = myArray.shift(); // [25, 49, 89, 27, 50]

Global Scope and Functions
"Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var."



### R1D5
[Tweet](https://twitter.com/yangetze/status/1353561418273067008?s=20)<br />
<br /> 🟣 Today, I am stuck! Idk what happen with shift() function. When I use it with a console.log works fine, but when I use it inside of a function returns "it's not a function".
<br /> It's an strange error 
<br /> 
<br /> I have a assignment error. See the tweet

### R1D6
[Tweet](https://twitter.com/yangetze/status/1353899860395700225?s=20)<br />
<br />R1D6 #100DaysOfCode 💜✅
<br />🟣 I started with booleans and equality operator 😋
<br />🟣 > 50% of basics of Javascript at @freeCodeCamp 
<br />🟣 Step by step is better than nothing 😁
<br />
<br />#Javascript #WomenWhoCode


### R1D7
[Tweet](https://twitter.com/yangetze/status/1354274773283577856?s=20)<br />
<br />
Comparison with the Strict Equality Operator<br />
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.<br />

Now I understand what's the difference between equality  & strict equality , and inequality  & strict inequality <br />
Example: <br />
var a = 3, b = '3';<br />
<br />a == b // true
<br />a != b // false
<br />a > b // false
<br />a < b // false
<br />a === b // false
<br />a !== b // true
<br />...
<br />

### R1D8
[Tweet](https://twitter.com/yangetze/status/1354630152236490759?s=20)<br />
<br />
Golf code lesson in Freecodecamp has a level of difficulty but it's nice. <br />
Lesson learned: First think, after code. <br />

### R1D9
[Tweet](https://twitter.com/yangetze/status/1356438064281829376?s=20)<br />
<br />
Switch: Case values are tested with strict equality (===).
<br/ >Counting Cards is great to practice
<br/ >I learned about delete properties. I didn't know it! U use → "delete object.propertieName" and that's all my folks!
<br/ ><br/ >

### R1D10
[Tweet](https://twitter.com/yangetze/status/1356813415226998785?s=20)<br /><br />
🟣 For objects: We can use .hasOwnProperty(propname) method of objects to determine if that object has the given property name. Boolean method
<br/ >
🟣 JavaScript Object Notation or JSON
<br/ >
🟣 Object vs Array <br/ >
var object = {}; <br/ >
var array_Object = []; <br/ >
🟣 Example:<br/ >
var person = {
  top: "head",
  botton: "legs",
  middle: "stomach"
}
<br/ >
var person1 = person;
var person2 = person;
<br/ >
var people = [ person1, person2 ]
<br/ ><br/ >

### R1D11
[Tweet](https://twitter.com/yangetze/status/1357170997430992896?s=20)<br /><br />
🟣 Looking material for a new project! 

### R1D12
[Tweet](https://twitter.com/yangetze/status/1358966772410560512?s=20)<br /><br />

var plant = {type : '', list: {}]
var myPlants = [{a}, {b}, {c}];


{} object <br /><br />
[] array <br /><br />

🟣 Example: <br />
var plant = { type: '', list: [] };<br />
var myPlants = []; or var myPlants = new Array();<br />
var object = {<br />
  prop1: key1,<br />
  prop2, key2<br />
}<br />
object.prop1;<br />
myPlants.push({type: 'flowers', list: ['tulips', 'sunflowers']});<br />
myPlants.push({type: 'trees', list: ['araguaney', 'pino', 'roble']});<br /><br />

console.log(myPlants[1].list[1]) // result: pino <br />
🟣 I get stucked with Record Collection. Maybe I need to go over Arrays and Objects again.<br /><br />
Second chance 👇👇<br />
[Tweet](https://twitter.com/yangetze/status/1358982629866020870?s=20)<br /><br />

### R1D13
[Tweet](https://twitter.com/yangetze/status/1360426148543557636?s=20)<br /><br />
About loops: while and for :) <br /><br />


### R1D14
[Tweet](https://twitter.com/yangetze/status/1361357706171416583?s=20)<br /><br />
About + loops: Do while and recursive functions. <br /><br />

### R1D15

### R1D16

### R1D17

### R1D18

### R1D19

### R1D20
