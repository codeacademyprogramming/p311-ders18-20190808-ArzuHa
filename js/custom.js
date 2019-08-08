// var elements = document.getElementsByTagName('a');

// for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     element.onclick=function(){
//         console.log(this);
//     }
// }

// console.log(elements);

var element = document.querySelector('ul#context > li:nth-child(2)');
// console.log(element.keys());
// console.log('-------------Start-------------');
// for(var key of element)
// {
//     console.log(key);
// }
// console.log('-------------end-------------');
console.log('element', element);
console.log('element.previousSibling', element.previousSibling);
console.log('element.nextSibling', element.nextSibling);
console.log('element.previousElementSibling', element.previousElementSibling);
console.log('element.nextElementSibling', element.nextElementSibling);
console.log('element.parentNode', element.parentNode);
console.log('element.childNodes', element.childNodes);
console.log('element.firstChild', element.firstChild);
console.log('element.lastChild', element.lastChild);


var aLastChild = document.querySelector('#test a:last-child');
// aLastChild.href='https://flatuicolors.com/palette/defo';
aLastChild.onclick = function () {
    window.location.href = this.getAttribute('xhref')
    console.log(this.getAttribute('xhref'));
}

function changePosition(el) {
    var position = el.value;
    var paragraf = document.querySelector('#text-context');
    paragraf.className = '';
    paragraf.classList.add(position);
}
function changeColor(el) {
    var color = el.value;
    var paragraf = document.querySelector('#text-context');
    paragraf.style.color = color;
}

var elements = document.querySelectorAll('ul#context > li > a');

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    // element.onclick=function(){
    //     console.log(this);
    // }
    element.addEventListener('click', clickChild);
}

function clickChild() {
    console.log(this);
}

// window.onload=function(){
//     this.alert('windows loaded');
// }

// window.addEventListener('load',function(){
//     this.alert('windows loaded');
// });

// window.addEventListener('resize', function () {
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;

//     // Display result inside a div element
//     console.log("Width: " + w + ", " + "Height: " + h);
// });

// document.body.addEventListener('mousemove', function (e) {
//     // console.log(e);
//     // Display result inside a div element
//     console.log("Width: " + e.clientX + ", " + "Height: " + e.clientY);
// });


/* Create Node  */

var createNode = document.querySelector('#createNewNode');
createNode.addEventListener('click', function () {
    var container = document.querySelector('#nodecontainer');
    var li = document.createElement('li');

    li.addEventListener('dblclick',function(){
        // console.log(this);
        container.removeChild(this);
    });

    var  now = Date.now();
    li.textContent=now;
    container.appendChild(li);

});