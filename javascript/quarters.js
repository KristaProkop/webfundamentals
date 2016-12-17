

function slots(quarters) {
  var winning_number = 3; //not sure how we're supposed to determine a win so i just made a winning number to match)
  var total = 0;
  for (index = 0; index < quarters; index++) {
    var draw = Math.floor(Math.random() * 10);
    if (winning_number == draw) {
      var prize = Math.floor(Math.random() * 50)+50;
      console.log("Congrats, you just won " + prize + " quarters!");
       total = total + prize;
    }
    else console.log("No luck this time."); 
  }
      if (total > 0) {
      console.log("You have a total of " + total + "  quarters"); }
      else return 0;
}

slots(50)