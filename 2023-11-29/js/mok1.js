//коментарий одной строчки
/*коментарий несколько строчек
пока не закроем коментарий*/


// что бы ковычки отображались нужно вставть обратный слэш \ //
// тобуляция: \t //
let imone1 = "UAB\t\"Artaleka\"";
let imone2 = "MB\t\"Softo fabrikas\"";

console.log(imone1);
console.log(imone2);

// /n - new line symbol перенос на новую строку
// два способа
let imoniusSarasas = imone1 + '\n' + imone2;
console.log(imoniusSarasas);

imoniuSarasas = `${imone1}\n${imone2}`;


//duomeniu tipo keitimas (фиолетовый цвет отображения озночает что тип данных другой, текст отображается белым)

//parseInt (skaiciausTekstas) funkcija получает только целое число
let skaiciausTekstas = '-12.7';
skaicius = parseInt(skaiciausTekstas);
console.log(skaicius);

//unary operator
// skaicius = +skaiciausTekstas;
console.log(+skaiciausTekstas);

//number funkcija
skaicius = Number(skaiciausTekstas);
console.log(skaicius);//12.7



//Math округляет числа 
skaicius = 12.7;

//apvalinimas i artimiausia puse
let roundedSkaicius = Math.round(skaicius);
console.log('suapvalinta reiksme:' + roundedSkaicius);

//apvalinimas i mazaja puse
roundedSkaicius = Math.floor(skaicius);
console.log('suapvalinta reiksme i mazaja puse:'+ roundedSkaicius);

//apvalinimas i didziaja puse
roundedSkaicius = Math.ceil(skaicius);
console.log('suapvalinta reiksme i didziaja puse:' + roundedSkaicius);

//Skaiciaus konvertavimas i string(text) duomeniu tipa:
//12.7 toFixed показывает сколько цыфр после запятой мы хотим отобразить
let valiuta = skaicius.toFixed(6);
console.log(valiuta);


let tekstasSkaicius = skaicius + '';
console.log(typeof tekstasSkaicius +' ,jo reiskme: ' + tekstasSkaicius )
//typeof показывает какой тип данных

tekstasSkaicius = skaicius.toString();
tekstasSkaicius = String(skaicius);

