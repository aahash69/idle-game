var score = 100;

postToPage(score); // Print to the page

createButton('Game', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}

createButton('Game', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 100);
