const people=[];
const possibleNationalities = ['lithuanian','latvian','german']
let currentNumeration =1;
//button elemento gavimas
const buttonElement = document.querySelector("#add-button");

function validateName(name){
    //boolean reiksme
    let isValid=true;

    //tikriname as name reiksme nera undefined,null, false ,arba tuscia
    if(name){
        isValid = false;
    }
    //![a-z][A-Z]/.test(name) - regex patikrinimas , tikriname sa praeina testa
    if(/[0-9]/.test(name)) || (/[!@@£$%~^&*()?/,.]/.test(name)){
        console.log("regex");
        isValid=false;
    }

return isValid;
}

function validateAge(age){
    let isValid = true;

    if(!age)
        isValid = false;
    
    if(isNaN(parseInt(age)))
        isValid=false;
    
    if(age < 0 || age > 200)
        isValid=false;
    
    if(age%1 !==0)
    return isValid;
}
function isValidNationality(nationality)
{
    console.log(possibleNationalities.includes(nationality));
    return possibleNationalities.includes(nationality);
}

buttonElement.addEventListener("click",()=>{
    const person = {};
    
    //objekto person laukui - priskiriama inpute ivesta reiksme
    person.firstName = document.getElementById("firstNameInput").value;
    person.lastName = document.getElementById("lastNameInput").value;
    person.age = document.getElementById("ageInput").value;
    person.nationality = document.getElementById("nationalityInput").value;
    person.number=currentNumeration;
//iviskta patikrinimas ar ivestos reiksmes yra tuscias
    if(
        !validateName (person.firstName) || 
        !validateName(person.lastName) || 
        !validateAge(person.age) || 
        !isValidNationality(person.nationality)
        ){
        alert('Prasome uzpildyti visus laukus')
        return;
    }

    people.push(person);

    currentNumeration++;

    generateTableContent(people);
});

function generateTableContent(people){
    let dynamicHTML = ``;
    for(let person of people){
        dynamicHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
    </tr>`;
    }
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = dynamicHTML;
}

const removingButtonElement = document.querySelector("#remove-button");
removingButtonElement.addEventListener('click',()=>{
    let number =  document.querySelector('#number').value;
    console.log(number)
    console.log(people[0].number)
    const foundNumber = people.find((val)=>{
        return val.number == number
    });
if(!foundPerson){
    alert('Zmogus su tokiu numeriu neegzistuoja')
    return;
}
people.filter((person)=>person.number=== +number)
})
