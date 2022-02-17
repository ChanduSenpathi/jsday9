// spread operator
// eg.1:-

let arr = [22, 37, 82, 34, 90];
let newArray = [73, 87, 98, ...arr];
console.log(newArray)

// eg.2:-
let obj = {
    name: "chandu",
    age: 23
}
let obj1 = {
    ...obj,
    name: "chandu",
    city: "vskp"
}
console.log(obj1)

// rest parameter


function add(a, b, ...rest) {
    let sum = 0;
    rest.forEach(value => sum += value);
    return sum;
}
console.log(add(4, 7))
console.log(add(1, 64, 534))
console.log(add(23, 798, 35, 90))
console.log(add(35, 67, 23, 789, 23))


//  map

let emp = [{
        fname: "chandu",
        lname: "senapathi"
    },
    {
        fname: "juneed",
        lname: "khan"
    },
    {
        fname: "mohan",
        lname: "kumar"
    },
    {
        fname: "shiva",
        lname: "kumar"
    }
]
let newArray = emp.map(each => {
    const xyz = {};
    abc.name = each.fname;
    abc.age = each.fname.length * 10;
    return abc;
})
console.log(newArray)


// reduce


let emp = [{
        name: "abc",
        salary: 35464,
        dept: "accounts"
    },
    {
        name: "def",
        salary: 98236,
        dept: "it"
    },
    {
        name: "ghi",
        salary: 88923,
        dept: "accounts"
    },
    {
        name: "jkl",
        salary: 23345,
        dept: "accounts"
    },
    {
        name: "mno",
        salary: 10097,
        dept: "it"
    },
    {
        name: "pqr",
        salary: 82749,
        dept: "it"
    }
]
let pSalary = emp.reduce((total, val) => {
    return total + val.salary
}, 0)
console.log(pSalary)


// filter

let emp = [{
    name: "abc",
    salary: 35464,
    dept: "accounts"
},
{
    name: "def",
    salary: 98236,
    dept: "it"
},
{
    name: "ghi",
    salary: 88923,
    dept: "accounts"
},
{
    name: "jkl",
    salary: 23345,
    dept: "accounts"
},
{
    name: "mno",
    salary: 10097,
    dept: "it"
},
{
    name: "pqr",
    salary: 82749,
    dept: "it"
}
]
let accEmp=emp.filter(val=> val.dept=="it" && val.salary>=70000);
console.log(accEmp)