var score = 1; // Create a variable to store the score in

var title = new Title(' build your dream house own Island!'); // Create a title element
var button = new Button('Get Wood!', btnPress);   // Create a button element
//button.remove();
var hidden = new Button('Get brak', btnPress);
hidden.hide();
var hidden2 = new Button('Get metal', btnPress);
hidden2.hide();
var scr = new Text(score);                    // Create a text element
var hidden3 = new Button('Now build your dream house!');
hidden3.hide();
var scr2 = new Text(score2)




var text1 = new Text('I will go in column 1');  // Create some text to go in the columns
var text2 = new Text('I will go in column 2');

var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column

rowSection.add(column1);  // Add the first column to the row
rowSection.add(column2);  // Add the second column to the row

column1.add(text1);  // Add the text to the first column
column2.add(text2);  // Add the text to the second column


setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score


    if(score > 10) {
    hidden.show();
  }
    //if(score > 50) {
    //hidden.hide(500);
  //}

  if(score > 30) {
  hidden2.show();
  }


  if(score > 100) {
  hidden3.show();
  }

  if(score > 30) {
  hidden.hide();
}

  if(score > 100) {
hidden2.hide();
}

if(score > 15) {
button.hide();
}

if(score > 100) {
scr.hide();
}

}
