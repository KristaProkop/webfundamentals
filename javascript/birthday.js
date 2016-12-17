
// birthday countdown using for loop

daysUntilMyBirthday = 40

for (daysUntilMyBirthday; daysUntilMyBirthday > 0; daysUntilMyBirthday = daysUntilMyBirthday - 1)
 {
  if (daysUntilMyBirthday < 5)
    console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY");
  if (daysUntilMyBirthday > 30) 
    console.log(daysUntilMyBirthday + " days until my birthday. Such a long time...");
   if  (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5)
  console.log(daysUntilMyBirthday + " days until my birthday... it's coming!");
}

 console.log("TODAY IS MY BIRTHDAY!!");  

