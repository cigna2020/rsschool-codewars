const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// const count = names.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name]++
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames
// }, {});



console.log(names.next())

// const people = [
//   {name: 'Alice', age: 21},
//   {name: 'Max', age: 20},
//   {name: 'Jane', age: 20}
// ];

// const test = people.reduce((res, prop) => {
//   console.log(res, prop.age)
//   if (!res[prop.age]) {
//     res[prop.age] = []
//   }
// }, {})