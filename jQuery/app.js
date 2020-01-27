// ---Objective #1: create button with alert message --//
$('body').append('<button class = "button1">Click Me!</button>');
$('.button1').click(function(){
    alert('Good job!')
})

// --- Objective #2 part 2 (part 1 in HTML):
$('.button2').click(function(){
    alert($('input[type=text]').val())
})

// ---Objective #3 part 2 (part 1 in HTML): create a div with background color change when hovered
$('.box').css({
    'height': '50px',
    'width': '50px',
    'background-color': 'green'
})

$('.box').mouseover(function(){
    $('.box').css('background-color', 'yellow');
});

$('.box').mouseout(function(){
    $('.box').css('background-color', 'green');
});

// Objective 4: create a paragraph element and have it change to a random color when clicked
$('body').append('<p class= "para"> Click Here To See The Pretty Colors!</p>');
let randomColor = ['blue', 'green', 'orange', 'red']
$('.para').click(function(){
    $('.para').css({
        'color': randomColor[Math.floor(Math.random()* randomColor.length)]
    })
})

// --- Objective #5: create a button and empty div that displays my name when clicked--//
$('body').append('<div class= "nameField"></div>');
$('body').append('<button class="button3">What is my name?</button>');
$('.button3').click(function(){
    $('.nameField').append('<span>Cat! Thank you for asking!</span>')
});

//---- Objective #6 part 2 (part 1 in HTML): create an array of names that displays one at a time in a ul when button is clicked --//
let myFriends = ['Brad', 'Avera', 'John', 'Mollie', 'Abby', 'Adam', 'Rob', 'Steve', 'Hunter', 'Kiwi', 'Josh'];
let counter = 0
$('.button4').click(function(e){
    if (counter < 11) {
    $('.friends').append('<li>' + myFriends[counter] + '</li>')
    counter++
    }
})