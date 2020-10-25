# Shelby El-rassi, T3A1, Flextrack, MEL

## Q1 |Provide an overview and description of a standard source control process for a large project.

### What is source control?
Source control (also known as version control) is the tracking and management of files/code and any changes made. The practice of source control is the tracking of any modifications and the ability to revert back to any previous versions in the event of mistakes or backtracking, a key feature is the ability to know which version is the current iteration. An excellent example of this is Git. 

### Git
Git is a free and open source version control system, it is designed for source code management, however it does have the ability to management other sets of files. Git is currently one of the most popular version control system for software development, as it is a distributed version control system, most Git operations are local, with every user/client having their owner server and full back up of the repository locally. It has the advantages of speed, feature branching, useful staging areas and the ability to run multiple workflows. Below is an overview of the git-flow branching model, which has become a popular version control model for software teams. 

### Git-flow Workflow
Git-flow workflow first published by Vincent Driessen at nvie. It describes a firm branching model based around a projects release. The hefty framework is ideal for management of larger projects. 

### Overview of this workflow:

-	Getting started with this workflow starts with an actual toolset available for installation, after installation (which is available on multiple operating systems), utilising git-flow for a project involves executing git flow init. It essentially is an extension of the standard git init command, that creates branches.  
-	A central repository houses the ‘Master’ branch, which is for the core of the project reflecting a production-ready base, along with another branch named ‘Develop’, this branch runs parallel with the master and reflects a state of latest features for next release (also known as an integration branch). An important note is the ‘Develop’ branch will house the entire history of the project, whereas the ‘Master’ will only contain the latest version. 
-	When git flow init is utilised, this command will create the ‘Develop’ branch.
-	When a new feature is started, a new branch is created for this feature. This can be done via git-flow extension by the command git flow feature start feature_branch. 
-	Each developer pulls and pushes to the origin ‘Develop’ as the parent branch. 
-	Developers may also pull changes from other peer’s branches, which can be useful for working together in sub-teams. 
-	Each branch should have a clear descriptive name with a clear purpose.
-	Each feature branch should also be pushed to the central repository branch ‘Develop’, this means the code can be shared for collaboration. 
-	When complete these feature branches get merged back into ‘Develop’, never interacting with the ‘Master’ branch directly. 
-	Once a feature branch is finalised, the command git flow feature finish feature_branch can be executed. 
-	When the ‘Develop’ branch has accumulated the required features for release or a scheduled date is imminent, a ‘Release’ branch gets forked off ‘Develop’. This ensures the next release cycle beings, so new features cannot be added after this point, only fixes, documentation and other release centred tasks. 
-	Once this ‘Release’ branch is ready to go, it gets merged into ‘Master’ and marked with a release number. 
-	The usage of a ‘Release’ branch for initial preparation of the release ensures that the rest of the team is able to continue working on features for the succeeding release date. 
-	It is important that the ‘Release’ branch also gets merged back into ‘Develop’ as well as ‘Master’ for any updates possibly added which new features might need access too. Once this process is complete the current ‘Release’ branch can be deleted. 
-	Another type of branch operated in this flow are ‘Hotfix’ branches, which are in place to swiftly fix up production releases. They operate just like feature branches, however, are parented off the ‘Master’ branch. A ‘Hotfix’ branch is the only branch forked directly off the ‘Master’. Once the fix is fully complete, these branches get merged immediately into ‘Master’ and ‘Develop’, with the ‘Master’ tagged with an updated version number. Operating a dedicated branch just for branch is a key advantage to this workflow as it ensures issues can be addresses by the team, with total interruption of the rest of the workflow. 

In summary, this workflow is great for the large projects operating on a release-based schedule, offering the specific branches enable this workflow management, minimising interruption.


#### [Sources]---
1. [Reference](https://www.wrike.com/project-management-guide/faq/why-should-i-use-version-control-in-project-management-software/)
2. [Reference](https://www.automationworld.com/home/blog/13316896/configuration-management-and-version-control)
3. [Reference](https://hackernoon.com/top-10-version-control-systems-4d314cf7adea)
4. [Reference](https://nvie.com/posts/a-successful-git-branching-model/)
5. [Reference](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

## Q2 |What are the most important aspects of quality software?

Through the perspective of software engineering, software quality implications involve two related, but separate concepts, these being;

- Software functional quality, being the base product quality model.  ISO/IEC 25010 defines a set of eight software quality characteristics, measuring software through these aspects is to define what makes a product worthwhile amongst competitors and in relation to behaviour. These aspects are:

  1.	Functional Suitability
  2.	Performance Efficiency
  3.	Compatibility
  4.	Usability
  5.	Reliability
  6.	Security
  7.	Maintainability
  8.	Portability. 



- Software structural quality, which is the quality-in-use model. By extracting from ISO standards, CISQ (Consortium for Information & Software Quality) defined quality aspects at a source code level in order to support the functional level qualities, but also enabling measurement of quality in meeting these function requirements this determining if the software works as intended. These four important aspects are all derived from the original eight and involve them all, just at a more specified functional level. These aspects are:

  1.	Reliability: This is referring to the presence of consistent behaviour of software and the overall stability of the program in the event of unforeseen conditions. Errors should either be correct handled with no effect on the user, or no error occurrence at all. The user should never question the execution of the program. To summarise, reliability is the characteristic of resiliency and structural solidity. 

  2.	Performance Efficiency: This is referring to how the software utilises resources and their execution time, amount of database calls and overall effect on program scalability, satisfaction and response times. The overall code architecture and design contributes to software efficiency. Additionally, is code compliance with best architecture and database practices. Overall, efficient code is fast, memory-efficient and consumes the fewest CPU cycles. 


  3.	Security: This is referring to protection in the case of security risks and how well this is executed. The likelihood of attackers breaching the software, interrupt processes and gain access to restricted information is a measure of the security quality and how well the code architecture was formed and put into practice. The measurement of this aspect is via ‘vulnerabilities’, which are known issues possibility resulting in a breach, the ability to detect them, the amount of these vulnerabilities found and the gravity of them indicate the overall security level. Other factors also include the resolution time taken to fix an issue, deployment of security updates and the actual amount of full system breaches as opposed to just vulnerability checks. 

  4.	Maintainability: This is referring to the ease in which software can be modified, utilised and adapted for alternative purposes and overall portability between environments and development teams. If compliance with software architecture practices and consistent high-quality code is produced across the board then easier streamlined maintenance is likely to be more achievable. Overall high-quality code is clean code that is consistent, easy to understand, well documented, is DRY, has good error handling and can be tested. 


#### [Sources]---
1. [Reference](https://www.it-cisq.org/standards/code-quality-standards/)
2. [Reference](https://www.it-cisq.org/coding-rules/index.htm)
3. [Reference](https://en.wikipedia.org/wiki/Software_quality)
4. [Reference](https://www.silasreinagel.com/blog/2016/11/15/the-seven-aspects-of-software-quality/)
5. [Reference](https://www.sealights.io/software-quality/measuring-software-quality-a-practical-guide/)
6. [Reference](https://www.altexsoft.com/blog/engineering/what-software-quality-really-is-and-the-metrics-you-can-use-to-measure-it/)
7. [Reference](https://asq.org/quality-resources/software-quality)
8. [Reference](https://www.perforce.com/blog/sca/what-code-quality-and-how-improve-code-quality#:~:text=Code%20quality%20defines%20code%20that,%2C%20bad%20%E2%80%94%20is%20all%20subjective.&text=Code%20that%20is%20considered%20high,for%20a%20web%20application%20developer.)


---

## Q3 |Outline a standard high level structure for a MERN stack application and explain the components.

#### [Sources]---
1. [label](link)
---

## Q4 |A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

#### [Sources]---
1. [label](link)
---

## Q5 |With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges.

#### [Sources]---
1. [label](link)
---

## Q6 |With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature.

#### [Sources]---
1. [label](link)
---

## Q7 |Explain control flow, using an example from the JavaScript programming language.

Control flow is the flow or order in which statements in a script are executed. Code is run line by line started from the first line then continuing until the whole code is implemented. Factors that alter the control flow are structures such as conditionals and loops. So overall control flow involves not just start to finish script reading, but the reading and analysing the overall structure of the program to determine order of execution dependant on how many instructions present that alternative the start to finish flow. 

An example in JavaScript is when code execution reaches a control structure of a conditional if/else statement. A conditional statement is a set of instructions that executes if a specification is true. When the statement is reached the given expression is analysed and then chooses the direction the program takes based on if the logic is true or not. Else is an optional statement utilised to enable an alternate path.  In the example below, is the condition is true, statement 1 is executed, if the condition is false, statement 2 will be executed. 

```js
    if (condition) {
        statement_1;
      } else {
        statement_2;
      }
```

#### [Sources]---
1. [Reference](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)
---

## Q8 |Explain type coercion, using examples from the JavaScript programming language.

Type Coercion is the automatic or implicit conversion process of converting a value from one type to another type. Such as a string to a number. Adjacent to type coercion is type conversion, which is explicit conversion of data types, which involves the explicit requiring of a conversion to take place rather than automatic as aforementioned. 

An example of this is the toString() method, which can return a converting number to a string as shown below. In this snippet to code is specifically calling a method of conversion on the number 15 which then results in a string 15. 

  ```js
  (15).toString() //=> “15”
   ```

Type Coercion has differences to Conversion. Coercion is the term used when unexpected type casting happens in JavaScript. Coercion of a data type is often a side effect of different operations. For example, like the code shown above of a number to a string, a type coercion version of the same example would be:

  ```js
  15 + “” //=> “15”
  ```

Adding a string to a number will always result in a string. A reverse of the above example, coercing a string to be a number is below. In this example using the “-“ operator means JavaScript will cast the values to be numbers.

  ```js
  “15” - 1 //=> 14
  ```

These snippets are in themselves simple examples of Type Coercion, by they do show the way JavaScript when it is executing the code will even out the datatypes and cast them automatically to enable to operator to work. 

#### [Sources]---
1. [Reference](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
2. [Reference](https://www.w3schools.com/js/js_type_conversion.asp)
3. [Reference](https://hackernoon.com/understanding-js-coercion-ff5684475bfc)

---

## Q9 |Explain data types, using examples from the JavaScript programming language.

Data types like in any programming language tell the characteristic of a piece of data; this is conveyed to the compiler so that is can perform the applicable operation.  In JavaScript data types can include primitive, which means these data types are immutable or unchangeable, and non-primitive or objects which are collections of properties in data usually referenced by an identifier. Objects are not immutable as they can have properties added and removed. The value properties in an object can be of any type, also including other objects, so this enables the creation of complex data structures. 

### Primitives
  -	Boolean: This type is representative as a logical entity, either the value true or the value false. Other data type values such as NaN, null and undefined are by definition a falsey value along with false, 0 and an empty string. All other values truthy by nature.  
  -	Null: This value is representative of empty, or the intentional absence of a value. 
  -	Undefined: This value is utilised when a variable has not been assigned a value yet, by default it becomes undefined. 
  -	Number: Number is representative of numeric values. JavaScript is different to other languages in that it cannot distinct automatically an integer and float. So technically the type only has one integer, this being 0 and all other numbers are represented as a double-precision 64-bit floating point format. Other languages will know to round to the ideal representation, this is not the case for JavaScript. That is why methods like .round() exist in JavaScript to enable the rounding of integers. The number type can also including +Infinitity, -infinity and NaN(not a number).
  -	BigInt: A BigInt is representative of an integer with arbitrary precision, it is also numeric in nature. This value is utilised to store and operator on large integers safely when they go beyond the double-precision floating-point number range.  
  -	String: A string is representative of textual data and comes in the form of a string of characters. JavaScript strings are immutable in that once created; they are unmodifiable directly. However, utilising .substr() to pick individual letters or .concat() to concatenate two strings together are alternatives to ‘modifying’ a string.
  -	Symbol: A symbol is representative of a unique and immutable value, such as the key in a JavaScript object. 

### Objects (non-primitive)

  -	Object: A object in JavaScript is representing of key,value pairs which are a list of zero or more property names and corresponding values, which are enclosed in curly braces. 
  -	Array: Arrays are also by definition objects, however their relationship differs in that the key is the integer set index paired with the length property of the array. 

There are many other built-in JavaScript objects that come in the form of a standard library, an example of these are:
  -	Error
  -	Math
  -	Set

#### [Sources]---
1. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
2. [Reference](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)
3. [Reference](https://www.programiz.com/javascript/data-types)
---

## Q10 |Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language.

JavaScript arrays are by definition JavaScript objects, with a key being the integer set index paired with the value being the length property of the array. This enables data to be stored in array in an adjacent fashion. Arrays are not immutable, meaning the elements are not fixed as in without the ability to be changed. This means an arrays length is able to be altered at any point, because of this an array can be empty or it can be of great substance, depending of the needs of the program.
Array methods which allow for this alteration of length are methods which enable operations of traverse and mutative nature. Below are examples of array manipulation methods. 

### Adding and Removing Array Elements
### unshift(), shift(), push(), pop() and splice()

These powerful array methods operate by allowing to add or remove specific array elements. These methods are powerful as they do not return a new array, rather alter the original array.

#### unshift(), shift()

unshift() operates by taking the given value and adding it/them to the start of the array and then returns the altered original arrays length. 

```js
let letters = [ "a", "b" ];
let newLength = letters.unshift ( "c", "d" );
console.log(letters);    //"c,d,a,b"
console.log(newLength); //"4"
```

shift() operates removing the first element in the array and then returning it. 

```js
let letters = [ "c","d", "a", "b" ];
let letter = letters.shift ();
console.log(letters);    //"d,a,b"
console.log(letter); //"c"
```

#### push(), pop()

push() operates by taking the given value and adding it/them to the start of the array and then returns the altered original arrays length. 

```js
let letters = [ "a", "b" ];
let newLength = letters.push ( "c", "d" );
console.log(letters);   // "a,b,c,d"
console.log(newLength); //"4"
```

pop() operates removing the last element in the array and then returning it. 

```js
let letters = [ "a", "b", "c", "d"];
let letter = letters.pop ();
console.log(letters);  // "a,b,c"
console.log(letter); //"d"
```

#### splice()

splice() operates removing an element or elements from an original array with the option to replace them (the replacement parameters are not required if only removing). The return of this methods is the elements that were removed from the array. The parameters for splice are the index to which start removing/adding (below it is index 1), the second parameters is the number of elements desired for removal(below it is 2), then the optional third parameter is the replacement elements(below we have no arguments).

```js
let letters = [ "a", "b", "c", "d"];
let removedLetters = letters.splice ( 1, 2 );
console.log(letters);   // "a, d"
console.log(removedLetters); //"b, c"
```

### Array conversion to a string
### toString(), join()

In programming conversion of an array to a string is a very useful tool, often utilised when wanting to display data held in an array. The below JavaScript methods both produce strings. 

 
#### toString()

toString() operates by converting an array to a long string, with the automatic use of a comma as a separator 

```js
let letters = [ "a", "b", "c", "d"];
console.log(letters.toString()); //"a, b, c, d"
```
#### join()

join() operates by converting an array to a long string except it has the ability to use an alternate separator instead of a comma. If no alternate separator is specified a comma will be utilised automatically. 

```js
let letters = [ "a", "b", "c", "d"];
console.log(letters.join()); //"a, b, c, d"
console.log(letters.join("*")); //"a * b * c * d"
```

### Multiple Array Joining
### concat()

concat() operates by processing the joining of two arrays and the return is the resulting new array. The method enables to original arrays to remain unchanged. 

```js
let letters = [ "a", "b", "c", "d"];
let numbers = [ "1", "2", "3", "4"];
let lettersAndNumbers = letters.concat(numbers)
console.log(lettersAndNumbers) //["a", "b", "c", "d","1", "2", "3", "4"]

```

### Array Extraction
### slice()

slice() operates by removing a specific section of an array and returning it as a new array. The method operates by specifying a start index and an up to index. 

```js
let letters = [ "a", "b", "c", "d"];
console.log(letters.slice(1,3)) // ["b, c"]
```

### Powerful array methods allowing callbacks
### map(), filter(). reduce(), every(), some()

These powerful are very useful in programming as they allow executing of a callback function on each item in array, however they all operate uniquely.

map() is a very open ended method is that is operates by returning a new array of elements which have had the callback executed on them.

filter() operates by returning a new array of elements in which the callback returned true.

reduce() operates by returning single output value due to a 'reducer' callback function being executed on each element in the array. The purpose of this method is to reduce the collection down to the desired specified value. As in the example below, the parameters are the callback(which is executed on each element except the first if no initial value is specified), accumulator takes the return value and as the name suggests accumulates a running value, current value is the particular element being processed in the first iteration, index is the index of the element being processed and is option and finally the array is the array reduce was called upon. Initial value is an optional value which can be utilised with the first argument. 

```js
  arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
    // return result from executing something for accumulator or currentValue
  }[, initialValue]);

```

every() operates by returning a value of true if the callback returns true for all array elements.

some() operates by returning true if the callback returns true for at least one array element. 


#### [Sources]---
1. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. [Reference](https://dev.to/thomasaudo/advanced-array-manipulation-in-javascript--fhi)
3. [Reference](https://www.elated.com/manipulating-javascript-arrays/)
4. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
---

## Q11 |Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language.

An object in JavaScript is a data structure of key, value pairs which are a list of zero or more property names and corresponding property values, which are enclosed in curly braces. Objects are integral in JavaScript as they allow for encapsulation of data, functions and other objects into one accessible and manipulatable entity. 

### Creation:

Creation of an object can be done via an object literal, also called Object Initializer which is defining and initializing an object via directly stating. These literal objects are expressions, and results in a new object whenever the statement is executed. Below is an example: 

```js
// Initialize object literal with curly brackets
const objectLiteral = {};
const objectLiteral2 = {prop1: val1, prop2: val2};
```

The assigning of the object to the variable is not required, however is needed when the object is to be referred to elsewhere. As per the first example an object can be initialized empty. 

Creation of an object can also be done via an object constructor which is creation of an object via the new keyword. Below are examples:

```js
// Initialize object constructor with new Object
const objectConstructor = new Object();
const objectConstructor2 = new Object();
objectConstructor2.prop1 = “val1”;
objectConstructor2.prop2 = “val2”;
```

In these examples, an object can constructor can initialize an empty object, then you are able to populate the object via dot notation. The object constructor is also useful in creating a constructor function to be able to create multiple objects with the same properties without needed to literally state them all. 

### Accessing:

Accessing the properties of objects can be done via dot notation in which the object name is entered first, then a dot, then the property requiring access. Similarly, when accessing a function within an object brackets are needed to call the function. 

```js
const dotObject = {prop1: “val1”, prop2: “val2”, ”, prop3: function() {
return “hello there”};
dotObject.prop1 //=> “val1”
dotObject.prop3() //=> “hello there”
```

Accessing an object is also possible via bracket notation which is similar to array accessibility. However, in this situation, the property is used to select a value. This method is useful for dynamic accessibility, accessing property names which are alternative to standard name creation, and using an object as a dictionary. 

```js
const bracketObject = {prop1: “val1”, prop2: “val2”};
bracketObject [prop1] //=> “val1”
```
### Changing:

Using object accessibility, object values are able to be changed/overwritten.

```js
const changeObject = {prop1: “val1”, prop2: “val2”};
changeObject.prop1 = “newval1”
```

### Adding:

Using object accessibility, object values are able to be added.

```js
const changeObject = {prop1: “val1”, prop2: “val2”};
changeObject.prop3 = “val3”
```

### Deleting:

Deleting from an object is done via utilising the delete keyword. Delete returns true is the removal was successful.

```js

const delObject = {prop1: “val1”, prop2: “val2”};
delete delObject.prop1 //=> true
console.log(delObject) //=> {prop2: “val2”};
```


### Iteration:

Using a specific for loop in JavaScript objects are able to be iterated through without knowing particular property names. The below example shows this via counting all the keys in the example object. 

```js
const iterationObject = {prop1: “val1”, prop2: “val2”, prop3: “val3”};

let countKeys = 0
for(let key in iterationObject) { 
    countKeys++;
};
console.log(countKeys) //=> 3

```

for…in loop is a useful method however it returns based off the original protoype chain. In order to iterate on an object so that all JavaScript methods can be utilised on the object other enumerating iteration methods that will not affect the original object are useful. Object.entries() is a method that can be applied on an object that will return an array of key,value pairs. Similarly, Object.keys() returns a new array of the object’s keys

```js
const iterationObject2 = {prop1: “val1”, prop2: “val2”, prop3: “val3”};
Object.keys(iterationObject2)
//=> [“prop1”, “prop2”, “prop3”]

```

### Copying:

To deep copy an object using JSON.stringify and JSON.parse. This works by making the original object into a new string, then transforming it into an object again and assigning it to a variable. Therefore becoming a new object. This process however only works on plain objects, meaning the object cannot contain other code like functions.

```js
const copyObject = {prop1: “val1”, prop2: “val2”, prop3: “val3”};
const newCopyObject = JSON.parse(JSON.stringify(copyObject)) 

```

#### [Sources]---
1. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
2. [Reference](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript)
3. [Reference](https://www.javascripttutorial.net/javascript-objects/)
4. [Reference](link)
---

## Q12 |Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language.

JSON (JavaScript Object Notation) is a format for data storage and transportation that is lightweight, easily understandable as it uses human-readable text consisting of key-value pairs that can include JavaScript data types such as strings, numbers, arrays, Booleans and object literals. Some key notes about the JSON object is the syntax requires name/value pairs to be double quoted, with correct comma’s, within curly brackets for objects and arrays must be in square brackets. Null is allowed in JSON however NaN and infinity are not supported, JSON strings can be empty, but undefined is not permitted, and irrelevant whitespace is permitted anywhere except within a number or a string. 
Whilst it resembles JavaScript object literal syntax it is a very common data format often utilised diversely amongst applications that include code that can generate and parse JSON. Commonly utilised for transmitting data across a network from web server to webpage. In this process JSON exists as a string, that requires conversion to a JavaScript object for data accessibility, this act is called deserialization. This static method is:


```js
JSON.parse(text,[reviver])

let jsonObj = '{"foo": 1, "bar": 2, "abc": "abc" }'
JSON.parse(jsonObj) 
console.log(jsonObj)//  {"foo": 1, "bar": 2, "abc": "abc" }

```

This method enables the JSON string text to be parsed/transformed into a JavaScript object and the value gets returned. Once parsed the object returned will obtained all the object methods inbuilt for JavaScript. 

In order to then send JSON objects over a network they correspondingly have to be transformed to a JSON string text. This static method of serialization is:

```js
JSON.stringify (value[, replacer[, space]])

let obj = {"foo": 1, "bar": 2, "abc": "abc" }
JSON.stringify(obj) 
console.log(obj)//  '{"foo": 1, "bar": 2, "abc": "abc" }'

```
This method returns a JSON string which consists of the given parameter object value. There are optional parameters that can be used for specifying only certain properties to be stringified and/or replacing certain property values 

#### [Sources]---
1. [Reference](https://en.wikipedia.org/wiki/JSON)
2. [Reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
3. [Reference](https://www.w3schools.com/whatis/whatis_json.asp)
3. [Reference](https://levelup.gitconnected.com/manipulating-json-strings-in-javascript-5c9423841fa3#:~:text=In%20JavaScript%2C%20there's%20a%20JSON,JavaScript%20objects%20and%20JSON%20strings.)
---

## Q13 |For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes.

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x,i) => i + 1980)

function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (model of models) {

  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]

  mycar = new Model(make, model);
  console.log(mycar.show())
}
```


#### [Sources]---
1. [label](link)