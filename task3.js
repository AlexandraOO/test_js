let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 18}
]

function onClick() {
    let button = document.createElement('button')
    button.textContent = 'Показать список';
    button.style.minHeight = '40px';
    button.style.minWidth = '170px';
    button.style.color = '#07059e';
    button.style.fontSize = '18px';
    button.style.backgroundColor = '#fff';
    button.style.border = '1px solid #07059e';
    button.style.borderRadius = '5px';
    document.body.append(button);

    
function createStudentsList(listArr) {
    let copy = [...allStudents];
    
    for (student of copy) {
        let ul = document.createElement('ul')
        ul.style.backgroundColor = '#b5eeff';
        ul.style.maxWidth = '220px';
        ul.style.padding = '0';
        ul.style.margin = '5px';
        ul.style.borderRadius = '30px';
        document.body.append(ul)
        
        listArr = document.createElement('li')
        listArr.style.listStyleType = 'none';
        listArr.style.margin = '0';
        listArr.style.padding = '10px';
        listArr.style.border = '1px solid #07059e';
        listArr.style.borderRadius = '30px';
        ul.append(listArr)
        
        if (li = isNaN) {
            let h2 = document.createElement('h2');
            let span = document.createElement('span');
            
            h2.innerHTML = 'Имя:' + ' ' + student.name;
            h2.style.color = '#07059e';
            h2.style.margin = '0';
            h2.style.marginBottom = '5px';
            span.innerHTML = 'Возраст:' + ' ' + student.age + ' ' + 'лет';
            span.style.color = 'blue';
            
            listArr.append(h2, span);
        };
    };
    return ul;
};

button.addEventListener('click', createStudentsList) 
};

console.log(onClick());





