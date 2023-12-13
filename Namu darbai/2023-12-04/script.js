//1
//a
let stars = document.getElementById('stars');
let box = '';

for(let i = 0; i < 400; i++){
    box = box+ "*";
}
console.log(box);
stars.innerHTML=box;

//6
let namesArray = [
	'alice', 'bob', 'charlie', 'david', 'emily',
	'frank', 'grace', 'harry', 'isabella', 'jack',
	'kate', 'liam', 'molly', 'nathan', 'olivia',
	'peter', 'quinn', 'rachel', 'steve', 'tina'
];
let new_names = namesArray.map(n=> n[0].toUpperCase()+n.slice(1).toLowerCase())
console.log(new_names);
