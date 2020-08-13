const students =[
    {Id: 21, name:"faruk"},
    {Id: 23, name:"karuk"},
    {Id: 22, name:"laruk"},
    {Id: 24, name:"baruk"},
    {Id: 25, name:"masaruk"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.Id);
const bigger = students.filter(s=> s.Id >23);
const bigger1 = students.find(s=> s.Id >23);
console.log(bigger1 );