/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers=arr.filter(arr => arr.profession==="developer");
  const developerNames= developers.map(developer=>developer.name);
 console.log(developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if(arr.profession==="developer"){
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmp={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const remEmp=arr.filter(arr=>arr.profession !=="admin");
  console.log(remEmp);
}

function concatenateArray() {
  //Write your code here, just console.log
  newArr=[
    {id:4,name:"sara",age:"22",profession:"designer"},
    {id:4,name:"ali",age:"25",profession:"manager"},
    {id:4,name:"sara",age:"22",profession:"analytics"},
  ];
  const concatArr=arr.concat(newArr);
  console.log(concatArr);
}
