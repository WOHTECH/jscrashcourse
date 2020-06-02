
/*
console.log("hello world");
console.error("This is an error");
console.warn("this is a warning");

//String, Numbers, Boolean, null, and 
const name='john'
const age=30;

//Conatenation - older method
console.log('My name is '+ name + ' and I am ' + age + '.')
//Template String
console.log(`My name is ${name} and I am ${age}.`)

const s = 'Hello World'

console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.substring(0,5))
console.log(s.substring(0,5).toUpperCase())
console.log(s.split(' '))



//Arrays

const numbers = new Array(1,2,3,4,5)

//or

const fruits = ['apples', 'oranges', 'pears', 10]

fruits[3] = 'grapes'

fruits.push('mangos')

fruits.unshift('strawberries')

console.log(Array.isArray(fruits))
console.log(fruits.indexOf('oranges'))

console.log(fruits[3])



//Object Literals

const person = {
	firstName:'Steve',
	lastName: 'Smith',
	age:35,
	hobbies: ['softball', 'golf', 'socializing'],
	address: {
		street:'5340 Fort Recovery Rd',
		city: 'Houston',
		state: 'Ohio'
	}
}

console.log(person.hobbies[1])
console.log(person.address.city)

const {firstName, lastName, address:{city}} = person
console.log(city)

person.email = 'steve@gmail.com'

console.log(person)



const todos = [
{
	id: 1,
	text: 'take out trash',
	isCompleted:true,
},
{
	id: 2,
	text: 'meet with boss',
	isCompleted:true,
},
{
	id: 3,
	text: 'go to dentist',
	isCompleted:false,
}
]

console.log(todos)
console.log(todos[1].text)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//For Loop

for(let i = 0; i<=10; i++){
	console.log(i);
	console.log(`For loop number: ${i}`);
}

//While Loop

let i=0
while(i<=10){
	console.log(`While loop Number ${i}`);
	i++;
}

//For Loop thru an array
for(let i=0; i<todos.length;i++){
	console.log(todos[i].text);
}

//For Loop Of thru an array (similar syntax to python)
for(let todo of todos){
	console.log(todo.text);
}

//High Order Array Methods
todos.forEach(function(todo){
	console.log(todo.text)
})

const todoText = todos.map(function (todo){
	return todo.text
})
console.log(todoText)

const todoCompleted = todos.filter(function(todo){
	return todo.isCompleted ===true;
}).map(function (todo){
	return todo.text;
})


//Conditionals

const x =5;
const y =10;

if (x===10){
	console.log('x is 10');
} else if (x>10){
	console.log('x is greater than 10')
} else {
	console.log('x is less than 10')
}

const a =5;
const b =11;

if (a>4 || b>10){
	console.log('a is more than 4 or b is greater than 10');
} 
if (a>4 && b>10){
	console.log('a is more than 4 AND b is greater than 10');
}

//ternary operator
const c = 11;
const color = c>10 ? 'red':'blue'
console.log(color)

//switches

switch(color){
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is not red or blue')
		break;

}

//Functions
function addNums(num1=1,num2=1){
	return(num1 + num2)
}

console.log(addNums())

// Constructer Functions/Object Oriented Programming
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob)
	}

Person.prototype.getBirthYear = function(){
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

//or build using the class approach...relatively new and very similar to the python approach (preferred)

//Class
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	getBirthYear() {
		return this.dob.getFullYear();
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

//Instantiate Object
const person1 = new Person('Maria', 'Smith', '2.12.1985');
const person2 = new Person('Clara', 'Smith', '7.3.2011');

console.log(person1.getFullName())
console.log(person2)



//console.log(window)
//Single Element Selectors  --Uncomment out the list items in the html doc
console.log(document.getElementById('my-form'))
console.log(document.querySelector('.container')) //Works like j query

//Multiple Element Selectors Must uncomment out list first

console.log(document.querySelectorAll('.item'))  //Most used
console.log(document.getElementsByClassName('item'))  //Do not typically use
console.log(document.getElementsByTagName('li')) //Do not typically use

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item))

const ul = document.querySelector('.items')

//ul.remove()
//ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Steve'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn')
btn.style.background = 'red'

// Event Listeners ('click', 'mouseover', 'mouseout', etc...)

const btn = document.querySelector('.btn')

btn.addEventListener('mouseout',(e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})
//Comment back out the list items in the HTML doc

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
	e.preventDefault();
	//console.log(nameInput.value)
	if(nameInput.value === '' || emailInput === ''){
		msg.classList.add('error')
		msg.innerHTML = 'Please enter all fields'
		setTimeout(() => msg.remove(), 3000);
	} else {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
		userList.appendChild(li);

		//Clear Fields
		nameInput.value = ' ';
		emailInput.value = ' ';
	}
}