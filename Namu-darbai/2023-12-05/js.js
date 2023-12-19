function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
//uzduotis 1
//a
 let a = [];
 for (let i =0; i < 20; i++){
    a.push(i);
 }
 console.log(a)
 
//b
 let b = [];
 for (let i =1; i < 21; i++){
    b.push(i);
 }
 console.log(b)

 //c
 let c = [];
 for (let i =0; i < 20; i++){ 
    c.push(i)
 }
 c.reverse()
 console.log(c)

//d
 let d = [];
 for (let i =20; i <40; i++){
    d.push(i);
 }
 console.log(d)
 
 //e
 let e = [];
 for (let i =30; i < 50; i++){ 
    e.push(i);
 }
 e.reverse()
 console.log(e)
 
 //f
 let f = [];
  for(let i=0; i <10;i++){
   f.push(rand(0,10))
  }
  console.log(f)

  //uzduotis 2
  console.log(a.join('->'))
//   console.log(b.join('->'))
//   console.log(c.join('->'))
//   console.log(d.join('->'))
//   console.log(e.join('->'))
//   console.log(f.join('->'))

  //uzduotis 3

  //a
for (let i=0;i<f.length;i++){
   if(f[i]%2===0){
      console.log(f[i]);
   }
}

//b
for (let i=0;i<f.length;i++){
   if(f[i]%2!==0){
      console.log(f[i]);
   }
}



