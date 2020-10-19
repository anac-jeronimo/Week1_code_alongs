let students = [];
let bob = { name: 'Bob', age: 17 }
let susy = { name: 'Susy', age: 18 }
let ted = { name: 'Ted', age: 19 }

students.push(bob);
students.push(susy);
students.push(ted);

//1. print the value of the first student's name
// console.log(students[0].name);
//2. print the age of the second student
// console.log(students[1].age);

let twoD = [
    ['Bob', 'Susy', 'Ted'],
    ['Lilly', 'Sarah', 'Bill'],
    ['Thomas', 'Harry', 'Alex']
];
//console.log(twoD[0]);
//3. Print the name Bob;
// console.log(twoD[2][1]);

const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];

  //1. Retrieve the second 'classroom' of students
  console.log(classes[1]);
  //2. Retrieve the firstname of Antonette
  console.log(classes[4][0].firstName);
  //3. Retrieve the age 18
  console.log(classes[1][3].age);
  //4. Retrieve the last name Beatty
  console.log(classes[4][4].lastName);

  let classRoom = {
      teacher: {
          firstName: 'Hugo',
          lastName: 'Rocha',
          active: true,
          age: 35,
          address: {
              street: 'Rua da cintura do porto de lisboa',
              number: 1,
              city: 'Lisbon'
          }
      },
      students: [
          { firstname: 'Antonio', age: 54},
          { firstname: 'Manuel', age: 32}
      ]
  }

//Get the teacher's age
console.log(classRoom.teacher.age);
//Get first student's name
console.log(classRoom.students[0].firstname);
//Add a new student to the classroom
classRoom.students.push({
    firstName: 'miguel',
    age: 32
});


