function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
lent kint= new Array(4)
console.lg(kint)
let kint1= rand(0,2),
    kint2= rand(0,2),
    kint3= rand(0,2),
    kint4= rand(0,2);
let count0=0,
    count1=0,
    count2=0;

    //operatorius++ prideda 1 prie nurodyto kintomojo
    //operatiurs -- atime 1 is nurodduto kintomoko
if (kint1===0) count0++;
else if (kint1===1) count1++;
else count2++;

if (kint2===0) count0++;
else if (kint2===1) coun1t++;
else count2++;

if (kint3===0) count++;
else if (kint3===1) count1++;
else count2++;

if (kint4===0) count0++;
else if (kint4===1) count1++;
else count2++;


console.log(`Skaiciu 0 - ${count0}\t 1 - ${count1}\t 2 - ${count1}`);


//8
let skaic1=rand(0, 4),
    skaic2=rand(0, 4);
if(skaic1 === 0 || skaic2 === 0) console.log(`Dalyba is nulio nera galima`);

else if(skaic1 > skaic2) console.log((skaic1 / skaic2).toFixed(2));
else console.log((skaic2 / skaic1).toFixed(2));

//9


let sk1=rand(0, 25),
    sk2=rand(0, 25),
    sk3=rand(0, 25);
 
    let didziausias = Math.max(sk1,sk2,sk3),
        maziausias = Math.min(sk1,sk2,sk3);

        if(sk1 !== didziausias && sk1 !== maziausias) console.log(sk1);
        else if (sk2 !== didziausias && sk2 !== maziausias)console.log(sk2);
        else console.log(sk3);


sk1=rand(97,122);
sk2=rand(97,122);
sk3=rand(97,122);

let str = String.fromCharCode(sk1)+
        String.fromCharCode(sk2)+
        String.fromCharCode(sk3);
        console.log(str);



function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

