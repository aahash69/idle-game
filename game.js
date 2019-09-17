var score = 100;

var title = new HTMLElement('h1', 'Welcome to the Game');
var button = new Button('hello');
var buttonWorld = new Button('world');
var columns = new Columns(2);

button.style('50px', 'padding');
button.edit('btn btn-danger', 'className');

columns.addToColumn(1, buttonWorld);
columns.addToColumn(2, button);

setInterval(update, 5);
setInterval(increment, 1000);

function update() {
  button.edit(score);
}

function increment() {
  score++;
}

createButton('Game', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 100);
