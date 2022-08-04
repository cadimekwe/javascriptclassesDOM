// THE WINDOW OBJECT and the DOCUMENT OBJECT MODEL (DOM)

// window object
let x;
let y;
let z;
let dynamicListItems; 
// let y;
// let z;
// // inner height and width
// x = window.innerHeight;
// x = winddow.innerWidth;
// // window location
// x = window.location; 

// // looking around the DOM

// // document head
// x - document.head;
// // document body
// x = document.body;
// // document url
// x = document.URL;
// // document links, images etc 
// x = document.links[1]; 
// console.log(x); 

// QUERY SELECTOR -  used to get elements from the html 
// query selector returns just 1 object(the first object it sees), query selector all returns all the objects

// selecting an element 
x = document.querySelector('h1'); 
console.log(x);
y = document.querySelector('#intro');
console.log(y)
z = document.querySelector('.list-item');
console.log(z); 
// property - textContent
y = document.querySelector('#intro').textContent;
console.log(y);
// change the value
x = document.querySelector('h1').textContent = 'changing the text in h1 that will show on the console but not on the HTML file. the html file will still retain the initial text'; 
console.log(x);

// query selector all. nodelist is what query selector all returns 
y = document.querySelectorAll('.list-item');
console.log(y); 

// using square brackets with nodelist and length
y = document.querySelectorAll('.list-item')[1];
console.log(y);

dynamicListItems = document.querySelectorAll('.dynamic-list-item').length;
console.log(dynamicListItems); 

// using forEach to log the text content 
document.querySelectorAll('.list-item').forEach((listing) => {
    console.log(listing.textContent);
})

const yz = document.querySelectorAll('.list-item').length;
console.log(yz); 

dynamicListItems = document.querySelectorAll('.dynamic-list-item').forEach((list, chioma) => {
    list.textContent = `list ${chioma} = changed value`;
})
console.log(dynamicListItems);

// INNER HTML, Text content and value - inner html addresses the tags. tags like h1, li, ul etc
let listItems = document.querySelector('#node-properties').textContent;
console.log(`text content: ${listItems}`);

listItems = document.querySelector('#node-properties').innerHTML;
console.log(`innerHTML: ${listItems}`);

const textInsert = document.querySelector('#add-to-me');
textInsert.innerHTML = '<h2>  Hello World, My name is chidims nwa mama </h2>'; 
textInsert.innerHTML = '<p> hello world, im chidimma </p>';
// declaring a variable and passing it using innerHTML
let passingInto = 'chisom, the data analyst'; 
textInsert.innerHTML = `<h2> hello ${passingInto} </h2>`
// value- this deals with forms 
let firstName = document.querySelector('#fname').value;
console.log(firstName);

// class lists and styles - add and remove
document.querySelector('h2').classList.add('blueviolet'); 

let classList = document.querySelectorAll('h2').forEach((addition) => {
    addition.classList.add('blueviolet')
})
console.log(classList); 

document.querySelector('h2').classList.remove('blueviolet');

document.querySelectorAll('li').forEach((paper) =>{
    paper.classList.add('orchid')
})
console.log(classList); 

document.querySelectorAll('li').forEach((laptop) => {
    if (laptop.textContent.length < 13) {
        laptop.classList.add('red');
    } else {
        laptop.classList.add('orange');
    }
})
console.log(classList)

// styles
let button = document.querySelector('button');
button.style.display = 'block'; 
button.style.color = 'black';
button.style.backgroundColor = 'green';

// TRAVERSING THE DOM and EVENT LISTENERS

