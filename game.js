var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element


function btnPress() {
  score++;
  scr.edit(score);
}

createButton('Game', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 100);
