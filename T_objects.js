// var a=10;
// console.log(a);

//Normal way creating objects

//  var a={
//     name:'reddy ismail',
//     age:"26",
//     number:7569051695
//  };
//  console.log(a.name);

//Anoother way to creating the object

   
// function ob(){

// return  {  
//       name:'reddy ismail',
//     age:25,
//     number:1234567890
//      }
// }

// console.log(ob());

//var a=ob('basha',12,1234567890);


//factory Function

// function ob(name,age,number){
//     return {
//         name:name,
//         age:age,
//         number:number
//     }
// }
// //console.log(ob());
 
// var a=ob('reddy',12,1234567890);

// console.log(a.name,a.age);

//Constructor function

function ReddyIsmail(name,age){

 
        this.name=name,
        this.age=age

   
}

var a=new ReddyIsmail('reddy',12)
console.log(a.name);