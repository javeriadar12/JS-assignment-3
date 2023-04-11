// ----------------question 1--------------------
// write a function that creates a closure and returns a function that can add a specific number
// to any number passed it. for example, if the closure is created with 5, the returned function
// should add 5 to any number passedto it.

// let input1 = +prompt(" Enter a number 1");
// let input2 = +prompt(" Enter a number 2");

// function main_function(value_1){
//     return function(value_2){
//         console.log(value_1 + value_2);
//     }
// }

// let innerfunction = main_function(input1);
// let innerfunction2 = innerfunction(input2);

// --------------question 2---------------------
// write a recursive function that searches an array for a specific value. the function
// should return true if the value is found, and false if it is not found. you can assume that the
// array is not nested.

// array=[2,3,4,5,6,7]
// console.log(search(array,1))

// function search(arr,val){
//     if (arr.length===0){
//      return false
//     }
//     let checkIndex=arr[0];
//     if(checkIndex==val){
//          return true
//     }else{
//      let next=arr.slice(1)
//      return search(next,val)
//     }
// }

// ---------------question 3----------------
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

//    function add_aParagraph(text) {
//     // create a new paragraph element
//     const newParagraph = document.createElement('p');
    
//     // set the text content of the new paragraph element
//     newParagraph.textContent = text;
    
//     // get a reference to the body element
//     const body = document.querySelector('body');
    
//     // append the new paragraph element to the body element
//     body.appendChild(newParagraph);
//   }
//    add_aParagraph('yeah! this is an additional paragraph in HTML..');

//    ---------------------question 4----------------
//  Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function add_item(b){
//     let createLi=document.createElement("li")
//     let entry=document.querySelector("ul")
//     createLi.textContent=b;
//     entry.appendChild(createLi)
// }
// add_item("Mango");

// -------------------question 5-------------------
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// function bg_color_change(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.getElementById('my-element');
// bg_color_change(myElement, 'skyblue');

// -----------------questio 6---------------

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// function save(key, object) {
//     let objectJson = JSON.stringify(object);
//     localStorage.setItem(key, objectJson);
//   }
//   let Obj = { 
//     playerName:"javeria",
//     age:20
//   };
//   save('Obj', Obj);

// -------------question 7-----------
function FromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    const obj = JSON.parse(objectString);
    return obj;
  }

  const myObject = FromLocalStorage('myKey');
console.log(myObject);



