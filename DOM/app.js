// --- Objective #1 part 1: creating button with no html ---//
let div1 = document.createElement('div');
div1.classList.add('buttondiv');
document.body.appendChild(div1);
let btn = document.createElement('button');
btn.classList.add('button1');
let btnText = document.createTextNode('Click Here!');
btn.appendChild(btnText);
div1.appendChild(btn);

//---Objective #1 part 2: creating alert for click the button --//
btn.addEventListener('click', function(){
    alert('Good Job!')
});

// --Objective #2 part 2 (part 1 in index.html): creating click event that shows input text--//
let submitBtn = document.getElementsByClassName('button2');
submitBtn[0].addEventListener('click', function(){
    let inputText = document.getElementsByTagName('input')
    alert(inputText[0].value)
});

// ---Objective #3 part 1: create a div element ---//
let div2 = document.createElement('div');
div2.classList.add('box');
div2.style.height = '50px';
div2.style.width = '50px';
div2.style.backgroundColor = 'red';
document.body.appendChild(div2);

//--- Objective #3 part 2: make the div change background when hovered over ---//

div2.addEventListener('mouseover', function(){
    div2.style.backgroundColor = 'blue';
});
div2.addEventListener('mouseout', function(){
    div2.style.backgroundColor = 'red';
});

// --- Objective #4: create a paragraph with color change on click ---//

let randomColor = ['purple', 'green', 'blue', 'orange', 'pink']
let para = document.createElement('p');
let paraText = document.createTextNode('Click Me To See All The Pretty Colors!');
para.appendChild(paraText);
document.body.appendChild(para);

para.addEventListener('click', function(){
    para.style.color = randomColor[Math.floor(Math.random() * randomColor.length)]
});

// --- Objective #5: Create another button that inserts your name into an empty div via a span --//

let div3 = document.createElement('div');
div3.classList.add('button3');
document.body.appendChild(div3);

let nameButton = document.createElement('button')
nameButton.classList.add('InsertName');
let nmBtnText = document.createTextNode("What's my name?");
nameButton.appendChild(nmBtnText);
document.body.appendChild(nameButton);

nameButton.addEventListener('click', function(){
    let nameSpan = document.createElement('span')
    let spanText = document.createTextNode('Cat! Thanks for asking!');
    nameSpan.appendChild(spanText);
    div3.appendChild(nameSpan);
})

//-- Objective #6 part 2: create an array of my friend's names that appears as a li for each click of the 4th button ---//

let myFriends = ['Brad', 'Avera', 'John', 'Mollie', 'Abby', 'Adam', 'Rob', 'Steve', 'Hunter', 'Kiwi', 'Josh'];
let friendButton = document.getElementsByClassName('button4');
let frienbtnText = document.createTextNode("What are my friends's names?");
friendButton[0].appendChild(frienbtnText)
let ul = document.getElementsByClassName('friendName');
let counter = 0
friendButton[0].addEventListener('click', function(){
   if (counter < 11) {
       let li = document.createElement('li');
       li.append(myFriends[counter])
       ul[0].appendChild(li);
       counter++
    }
    
})
    
