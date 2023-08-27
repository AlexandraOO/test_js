let studentObj = {name: 'Славик', age: 20}

function createStudentCard(student) {
    let div = document.createElement('div')
    div.style.marginBottom = '30px';
    document.body.append(div);
   
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    h2.innerHTML = 'Имя:' + ' ' + student.name;
    h2.style.color = 'green';
    span.innerHTML = 'Возраст:' + ' ' + student.age + ' ' + 'лет';
    span.style.color = 'blue';

    div.append(h2, span);
}

console.log(createStudentCard(studentObj));

