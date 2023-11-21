// powerFull array methods
// forEach , map , filter , fing ,reduce


// forEach
// does not return new array


// const people = [
//         {name:'haroon' ,age:17 ,position:'student'  },
//         {name:'kamil'  ,age:22 ,position:'developer'},
//         {name:'sufiyan',age:32 ,position:'teacher'  }
// ]

// people.forEach( (person) => {
//     console.log(person['name']);
//     console.log(person['age']);
//     console.log(person['position']);
// });


// // map
// // does return a new array

// const people = [
//     {name:'haroon'     ,age:17   ,position:'UI designer'        },
//     {name:'kamil'      ,age:22   ,position:'frontend developer' },
//     {name:'sufiyan'    ,age:32   ,position:'backend developer'  },
//     {name:'samad'      ,age:32   ,position:'graphic designer'   },
//     {name:'sami ahmad' ,age:32   ,position:'animator'           },
//     {name:'jamal'      ,age:32   ,position:'accounts manager'   }
// ]

// let names = []
// let ages = []
// let positions = []
// people.map( (person) => {
//     names.push(person['name'])
//     ages.push(person['age'])
//     positions.push(person['position'])
// })
// console.log(names);
// console.log(ages);
// console.log(positions);


// filter 

// const people = [
//     {name:'haroon'     ,age:17   ,position:'UI designer'        , salary:50000 },
//     {name:'kamil'      ,age:22   ,position:'frontend developer' , salary:110000 },
//     {name:'sufiyan'    ,age:32   ,position:'backend developer'  , salary:300000 },
//     {name:'samad'      ,age:35   ,position:'graphic designer'   , salary:70000 },
//     {name:'sami ahmad' ,age:21   ,position:'frontend developer' , salary:120000 },
//     {name:'jamal'      ,age:33   ,position:'accounts manager'   , salary:90000 }
// ]

// let specificPeople = people.filter( (person) => {
//     // return person['age'] >= 30
//     // return person['position'] === 'frontend developer'
//     // return person['name].charAt(0) === 's'
//     // return person['name].length >= 6
//     // return person['salary'] >= 100000
// })
// console.log(specificPeople);


// find 

// const people = [
//     {name:'haroon'     ,age:17   ,position:'UI designer'        , salary:50000 },
//     {name:'kamil'      ,age:22   ,position:'frontend developer' , salary:110000 },
//     {name:'sufiyan'    ,age:32   ,position:'backend developer'  , salary:300000 },
//     {name:'samad'      ,age:35   ,position:'graphic designer'   , salary:70000 },
//     {name:'sami ahmad' ,age:21   ,position:'frontend developer' , salary:120000 },
//     {name:'jamal'      ,age:33   ,position:'accounts manager'   , salary:90000 }
// ]

// let specificPeople = people.find( (person) => {
//     // return person['position'] === 'graphic designer'
//     // return person['name'] === "kamil"
//     return person['salary'] === 90000
// })
// console.log(specificPeople);


// task

// const students = [
//     {name:'haroon'     ,age:17   ,id:1   , score:80  ,favSub:"maths" },
//     {name:'kamil'      ,age:22   ,id:2   , score:75  ,favSub:"english" },
//     {name:'samad'      ,age:35   ,id:3   , score:60  ,favSub:'urdu' },
//     {name:'sami ahmad' ,age:21   ,id:4   , score:72  ,favSub:'islamiat' },
//     {name:'jamal'      ,age:33   ,id:5   , score:85  ,favSub:'science' }
// ]


// let updatedStudent = students.map( (student) => {
//     student.role = 'student' 
//     return student
// })

// console.log(students);
// console.log(updatedStudent);


// task 2

// const students = [
//     {name:'haroon'     ,age:17   ,id:1   , score:80  ,favSub:"maths" },
//     {name:'kamil'      ,age:22   ,id:2   , score:75  ,favSub:"english" },
//     {name:'samad'      ,age:35   ,id:3   , score:90  ,favSub:'urdu' },
//     {name:'sami ahmad' ,age:21   ,id:4   , score:72  ,favSub:'islamiat' },
//     {name:'jamal'      ,age:33   ,id:5   , score:85  ,favSub:'science' }
// ]


// let updatedStudent = students.filter( (student) => {
//     return student.score >= 80
// })

// console.log(updatedStudent);


// task 3

const students = [
    {name:'haroon'     ,age:17   ,id:1   , score:80  ,favSub:"maths" },
    {name:'kamil'      ,age:22   ,id:2   , score:75  ,favSub:"english" },
    {name:'samad'      ,age:35   ,id:3   , score:90  ,favSub:'urdu' },
    {name:'sami ahmad' ,age:21   ,id:4   , score:72  ,favSub:'islamiat' },
    {name:'jamal'      ,age:33   ,id:5   , score:85  ,favSub:'science' }
]


let updatedStudent = students.filter( (student) => {
    return student.id === 3
})

console.log(updatedStudent);