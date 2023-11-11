let todoArray = [];

//создаем и возвращаем заголовок приложения
function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;

    return appTitle;
} 

    //создаем и возвращаем форму для создания дела
function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let buttonWrapper = document.createElement('div');

    button.disabled = !input.value.length;

    input.addEventListener('input', () => {
        button.disabled = !input.value.length;
    });

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
        form,
        input,
        button,
    };
}

//создаем и возвращаем список элементов
function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
        
    return list;
}

function createTodoItem(name) {
    let item = document.createElement('li');
        // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    let randomId = Math.random() * 15.89;
    item.id = randomId.toFixed(2);

    // устанавливаем стили для элемента списка, а также для размещения кнопок в гго правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success')
    doneButton.style.marginRight = '10px';
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить';

   // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton, deleteButton);
    item.append(buttonGroup);

     //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
        item,
        doneButton,
        deleteButton,
        buttonGroup,
    }
}

const changeItemDone = (arr, todoItem) => {
    arr.map(obj => {
    if (obj.id === todoItem.id & obj.done === false) {
    obj.done = true;
    } else if (obj.id === todoItem.id & obj.done === true) {
        obj.done = false;
            }
        });
}

function completeToItem(todoItem, btn) {
        // добавляем обработчики на кнопки
        btn.addEventListener('click', function(){
        todoArray = JSON.parse(localStorage.getItem(key));
        todoItem.classList.toggle('list-group-item-success');
        changeItemDone(todoArray, todoItem);
    
        localStorage.setItem(key, JSON.stringify(todoArray));
    });
}

function deleteToItem(todoItem, btn) {
    btn.addEventListener('click', function() {
        if (confirm('Вы уверены?')) {
            todoArray = JSON.parse(localStorage.getItem(key));

            const neaList = todoArray.filter(obj => obj.id !== todoItem.id);

            localStorage.setItem(key, JSON.stringify(neaList));
            todoItem.remove();
        }
    });
}


    function createTodoApp(container, title = 'Список дел', key) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle, todoItemForm.form, todoList);

        if (localStorage.getItem(key)) {
            todoArray = JSON.parse(localStorage.getItem(key));
    
            for (const obj of todoArray) {

                const todoItem = createTodoItem(todoItemForm.input.value);
    
                todoItem.item.textContent = obj.name;
                todoItem.item.id = obj.id;
    
                if (obj.done == true) {
                    todoItem.item.classList.add('list-group-item-success');
                } else {
                    todoItem.item.classList.remove('list-group-item-success');
                }
    
                completeToItem(todoItem.item, todoItem.doneButton);
                deleteToItem(todoItem.item, todoItem.deleteButton);
    
                todoList.append(todoItem.item);
                todoItem.item.append(todoItem.buttonGroup);
            }
        }



     //Браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function(e) {
        // Эта строчка необходима, чтобы предотвратить стандартное действие браузера, в данном случае мы не хотим, 
        // чтобы страница перезагружалась при отправке формы
        e.preventDefault();
        const todoItem = createTodoItem(todoItemForm.input.value);

            // игнорируем создание элемента, если пользователь ничего не ввел в поле
        if (!todoItemForm.input.value){
            return;
        }

        completeToItem(todoItem.item, todoItem.doneButton);
        deleteToItem(todoItem.item, todoItem.deleteButton);

        let localStorageData = localStorage.getItem(key);

        if (localStorageData == null) {
            todoArray = [];
        } else {
            todoArray = JSON.parse(localStorageData);
        }

        const createItemObj = (arr) => {
            const itemObj = {};
            itemObj.name = todoItemForm.input.value;
            itemObj.id = todoItem.item.id;
            itemObj.done = false;

            arr.push(itemObj);
        }
        createItemObj(todoArray);
        localStorage.setItem(key, JSON.stringify(todoArray));

        todoList.append(todoItem.item);
        todoItemForm.input.value = '';
        todoItemForm.button.disabled = !todoItemForm.button.disabled;
    });

    };