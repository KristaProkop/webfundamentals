// Create a program that outputs:

// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];

for (var index in students) {
  console.log(students[index].first_name + " " + students[index].last_name);
}


// Create a program that prints  the following format (including number of characters in each combined name):

// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
 
for (var i in users) {
  console.log(i);
  for (var index in users[i]) {
    var string_count = users[i][index].first_name.length + users[i][index].last_name.length;
    console.log((Number(index) + 1) + " " + users[i][index].first_name.toUpperCase() + " " + users[i][index].last_name.toUpperCase() + " - " + string_count);
  }
}
