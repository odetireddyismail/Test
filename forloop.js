const Obj={
    name:'awesome',
    menubar:12,
    action:['name1','name2','name3'],
    rank:'#1',
    description:'Hallow world'
}

//var text=''
--
// for(let x in Object){
//     //text +=Object[x]+' \

//    console.log(`${x} and =  ${Object[x]}`)
    
// }
//console.log(text);


//Another method for Accessing the Object Values


var a=Object.keys(Obj).forEach((val,i,k)=>{
   // console.log(`${val} and = ${typeof val} ${Obj[val]}`)
    
})
//Anoher

 
const res =Object.values(Obj).some(re=>
   { 
   return  typeof re==='object'
}
    //console.log(typeof re)
)
//console.log(a);
//console.log(res)


const an=Object.entries(Obj)


for(let [key,k] of an){
 console.log(` ${k}`)
}
//console.log(an)