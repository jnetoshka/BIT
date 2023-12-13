//база данных
let listData=[
{
 Number:'',
 firstName:'John',
 lastName: 'Doe',
 Age: 28,
 Nationality: 'British'
},
{
 Number:'',
 firstName:'Maria',
 lastName: 'Gonzalez',
 Age: 34,
 Nationality: 'Spanish'
},
{
 Number:'',
 firstName:'Amit',
 lastName: 'Patel',
 Age: 42,
 Nationality: 'Indian'
},
{
 Number:'',
 firstName:'Yasmin',
 lastName: 'Al-Hariri',
 Age: 26,
 Nationality: 'Lebanese'
},
{
 Number:'',
 firstName:'Chen',
 lastName: 'Wang',
 Age: 30,
 Nationality: 'Chinese'
},
{
 Number:'',
 firstName:'Adeola',
 lastName: 'Oluwaseun',
 Age: 36,
 Nationality: 'Nigerian'
},
{
 Number:'',
 firstName:'Irina',
 lastName: 'Smirnova',
 Age: 29,
 Nationality: 'Russian'
},
{
Number:'',
 firstName:'Carlos',
 lastName: 'Santos',
 Age: 40,
 Nationality: 'Brazilian'
},
{
Number:'',
 firstName:'Sarah',
 lastName: 'Taylor',
 Age: 31,
 Nationality: 'Canadian'
},
{
Number:'',
 firstName:'Hiroshi',
 lastName: 'Takahashi',
 Age: 19,
 Nationality: 'Japanese'
},

]

//создание элементов
const $app = document.getElementById('app'),
    $addForm = document.getElementById('add-form'),
    $nameInp = document.getElementById('addFormNameInp'),
    $lastNameInp = document.getElementById('addFormLastNameInp'),
    $AgeInp = document.getElementById('addFormAgeInp'),
    $NatInp = document.getElementById('addFormNatInp'),
    $table = document.createElement('table'),
    $tableHead = document.createElement('thead'),
    $tableBody = document.createElement('tbody');
    
    $tableHeadTr = document.createElement('tr'),
    $tableHeadThNum = document.createElement('th')
    $tableHeadThFN = document.createElement('th')
    $tableHeadThLN = document.createElement('th')
    $tableHeadThAge = document.createElement('th')
    $tableHeadThNat = document.createElement('th')

$table.classList.add('table','table-bordered','table-sm')

    $tableHeadThNum.textContent = '#N.O'
    $tableHeadThFN.textContent = 'First Name'
    $tableHeadThLN.textContent = 'Last Name'
    $tableHeadThAge.textContent = 'Age'
    $tableHeadThNat.textContent = 'Nationality'

    $tableHeadTr.append($tableHeadThNum)
    $tableHeadTr.append($tableHeadThFN)
    $tableHeadTr.append($tableHeadThLN)
    $tableHeadTr.append($tableHeadThAge)
    $tableHeadTr.append($tableHeadThNat)

    $tableHead.append($tableHeadTr)
    $table.append($tableHead)
    $table.append($tableBody)
    $app.append($table)

    function createUserTr(oneUser){
        const $userTr = document.createElement('tr'),
        $userNum = document.createElement('th')
        $userFN = document.createElement('th')
        $userLN = document.createElement('th')
        $userAge = document.createElement('th')
        $userNat = document.createElement('th')
        
        $userNum.textContent = oneUser.Number
        $userFN.textContent = oneUser.firstName
        $userLN.textContent = oneUser.lastName
        $userAge.textContent = oneUser.Age
        $userNat.textContent = oneUser.Nationality
        
        $userTr.append($userNum)
        $userTr.append($userFN)
        $userTr.append($userLN)
        $userTr.append($userAge)
        $userTr.append($userNat)

        return $userTr
    }

//визуализация
function render(arrData){
    $tableBody.innerHTML = ''
// подготовка
const copyListData = [...arrData]
for (const oneUser of copyListData) {
    oneUser.Number = oneUser.Number++;
}
//отрисовка
for (const oneUser of copyListData) {
    const $newTr = createUserTr(oneUser)

$tableBody.append($newTr)
}
}
render(listData)
//добвавление
//привязка событие отправки формы
$addForm.addEventListener('submit', function(event) {
    event.preventDefault()
//валидация

    if($nameInp.value.trim() ==''){     //функция trim обрезает все пробелы с лева и справа
        alert('Name not entered!')
        returtn
    }


    // push добавляет новый элемент в конец массива
    listData.push({
        Number:'',
        firstName:$nameInp.value,
        lastName: $lastNameInp.value,
        Age: parseInt($AgeInp.value), // parseInt() функция переобразует строку в число
        Nationality: $NatInp
    })
render(listData)
})