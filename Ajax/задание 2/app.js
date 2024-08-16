const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
]
   }
    `;

const data = JSON.parse(jsonString);
const list = data.list;


const result = list.map(item => ({
    name: item.name,
    age: Number(item.age),
    prof: item.prof
  }));
  
  console.log('result', result);