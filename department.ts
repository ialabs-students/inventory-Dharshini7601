interface department {
    modelNumber: string;
    modelName: string;
    count: string;
    
}

var chocolate: department = {
    modelName: "mm",
    modelNumber:"qq",
    count:"22",
    
}

class Dairy implements department {
    modelNumber: string;
    modelName: string;
    count: string;
    constructor(modelNumber: string, modelName: string, count: string) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.count = count;
    }
    brand: string = 'Dairy';
    
}
class Sauces implements department{
    modelNumber: string;
    modelName: string;
    count: string;
    constructor(modelNumber: string, modelName: string, count: string) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.count = count;
    }
    
    brand: string = 'Sauces';
}


var Dairy1 = new Dairy('1', 'Butter','20');

var Dairy2 = new Dairy('2', 'Cheese','21');

var Sauces1 = new Sauces('1','Soy Sauces','23');
var Sauces2 = new Sauces('2','Tomato sauces','33');
var Sauces3 = new Sauces('2','Fish sauces','33');


 delete Sauces2['modelNumber'];
 
 console.log("-----------------------");
            
function getKey(Dairy1,Dairy2){
  const arr = [],
  obj = Object.keys(Dairy1);
  for (var count in obj){
    if(Dairy1[obj[count]] > 5){
      arr.push(obj[count]);
    }
  }

console.log(count);
  return arr;
}

 var Dairy5 = [{brand:"Dairy", modelNumber:"2",modelName:"IceCream",count:"23"},
 {brand:"Dairy", modelNumber:"3",modelName:"Milk",count:"21"}];

 const result = Dairy5.filter((obj) => {
  return obj.count > '5';

});

console.log(result);


console.log("Department dataset");

console.log(Dairy1,Dairy2,Sauces1,Sauces2);
console.log("--------------------------------");
console.log("delete");

console.log(Sauces3);

console.log("-----------------------");
console.log("addional");

console.log(Dairy5);
console.log("-----------------------");
console.log("threshold");

console.log(getKey(Dairy1 ,Dairy2))

console.log(result);
