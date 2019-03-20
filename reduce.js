function reducer(arr,acc){
  
    arr.map(i=>{
      //  console.log(arr);
        Object.keys(i).map(key=>{  
            switch(typeof(i[key])){
                case 'number':
                    if(!acc[key]){ 
                        //console.log("============if number",i[key]);
                        acc[key]=i[key]
                    }else{
                       // console.log("=============else number",i[key]);
                        acc[key]+=i[key]
                    }            
                 break;
      
                 case 'string':
                 if(!acc[key]){ 
                     //console.log("============if string",i[key]);
                    acc[key]=new Array(i[key])
                }else{
                   // console.log("=============else string",i[key]);
                    acc[key].push(i[key])
                }
                 break;

                 case 'object':
                if(!acc[key]){
          //   console.log(acc[key],'=======================',key,"====in if object");
                    acc[key]=reducer([i[key]],{})
                    
                  }
                else{
                   // console.log(acc[key],'============================',key,"====in else object");
                    reducer([i[key]],acc[key])    
                }
                 break;  
 
              }
             
        })
        
    })
 
    return acc
}


 
let o=[
    {age:25,name:'wafaa',list:{visit:5,state:'new'}},
    {age:20,name:'aml',list:{visit:10,state:'car'}},
    {age:30,name:'bassant',list:{visit:10,state:'car',v:{l:'c'}}},
]

let x=reducer(o,{})
console.log(JSON.stringify(x,undefined,2),"===========result======================");