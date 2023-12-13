let tekstas = 'Zhenia';
//пробуем узнать имеет ли переменная tekstas цифры
if(/[0-9]/.test(tekstas)){
    console.log('tekste yra skaiciu');
}
else{
    console.log('tekste nera skaiciu');
}
if(/[a-z]/.test(tekstas)){
    console.log('tekste yra tekstas');
}
else{
    console.log('tekste nera tekstas');
}