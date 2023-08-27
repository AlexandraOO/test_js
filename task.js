function createStudentCard(name, age) {
    let div = document.createElement('div')
    document.body.append(div);
   
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    h2.textContent = 'Имя:' + ' ' + name;
    h2.style.color = 'green';
    span.textContent = 'Возраст:' + ' ' + age + ' ' + 'лет';
    span.style.color = 'blue';

    div.append(h2, span);
}

let card = createStudentCard('Игорь', 17);

console.log(card);

