let eilerastis='Ruosesi ozys ganytis, zole zlemzti, miske ozys vartytis'
console.log(eilerastis)

//поиск текста с помощью index0f() метода, если текст ненайден то возвращается к значению -1
//ищет с начала
let ozysPosition = eilerastis.indexOf('ozys');
console.log(ozysPosition);
//ищет с конца
let lastOzysPosition = eilerastis.lastIndexOf('ozys');
console.log(lastOzysPosition);

//pasinaudojant  gauta tekto pozicija, galime gauti zodi ozys su substring() metodu

let ozysText = eilerastis.substring(ozysPosition, ozysPosition + 4);
console.log(ozysText);

let kitasGyvunas = 'avinas';

//teksto keitimas 
//teksto atititkmenu keitimas stringe - visi atitikmemys
let kitasEilerastis = eilerastis.replaceAll( 'ozys', kitasGyvunas);
console.log(kitasEilerastis);

//teksto atititkmenu keitimas stringe - pirmas atitikmuo
kitasEilerastis = eilerastis.replace('ozys','suo');
console.log(kitasEilerastis);

//текст отоброжается большими буквами
let eilerastisDidziosiomis = eilerastis.toUpperCase()
console.log(eilerastisDidziosiomis);

//текст отоброжается маленькми буквами
eilerastisDidziosiomis = eilerastis.toLowerCase()
console.log(eilerastisDidziosiomis);

//teksto dalies gavimas su slice metodu:
//pirmasis parametras - pradzios indeksas. antrasis paramentras - galinis subteksto indeksas
let text = 'Apple, Banana, Kiwi';
          //01234567890123456789
let part= text.slice(7,13);//nuo posicijos iki posicijos
console.log(part)

part= text.slice(0,-6);//neigiamas antrasis paramertras nupjauna galinius simbolius
console.log(part);

part=text.slice(7);// simboliou pasalinimas nuo pradzios iki..
console.log(part)

part=text.slice(-12)
console.log(part)

// let eilerastis='Ruosesi ozys ganytis, zole zlemzti, miske ozys vartytis'

//поиск слова в тексте с includes 
if(eilerastis.includes('ganytis')){
    console.log('kintamajame eilrestastis yraa zodis: ganytis')
}
else{
    console.log('kintamajame eilrestastis tokio zodzio nera')
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 let skaiciukas = rand(97,120);
 console.log(skaiciukas)
 

 console.log(String.fromCharCode(skaiciukas));