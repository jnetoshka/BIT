// 1 shorter
let Name = "Johny";
let lastname = "Depp";
console.log(Name,lastname);
// console.log(Name.length, lastname.length)
if(Name.length > lastname.length){
    console.log(lastname)
} else {console.log(Name)}

// 2 text
let  birth = 1963, year = 2023;
let old = year - birth;
console.log('I am '+ Name + " " + lastname + '. I am ' + old + ' years old')

// 3 initials
let initials = Name[0] + lastname[0];
console.log('Your initials are ' + initials);

// 4
let last = Name.slice (-3) +' '+ lastname.slice (-3);
console.log(last);

// 5
let date = "2023-11-28";
let month = date[5] + date[6];
if(month === '01') console.log ('January')
else if(month === '02') console.log('February')
else if(month === '03') console.log('March')
else if(month === '04') console.log('April')
else if(month === '05') console.log('May')
else if(month === '06') console.log('June')
else if(month === '07') console.log('July')
else if(month === '08') console.log('August')
else if(month === '09') console.log('September')
else if(month === '10') console.log('October')
else if(month === '11') console.log('November')
else if(month === '12') console.log('December')
else console.log('Bad format')
