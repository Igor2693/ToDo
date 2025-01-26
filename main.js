const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const data = []

const reg = function() {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    data.forEach(function(item, index) {
        
       const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
        '<div class="todo-buttons">' +
		'<button class="todo-remove"></button>' +
		'<button class="todo-complete"></button>' +
		'</div>'

        if(item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }

        const check = li.querySelector('.todo-complete')
        check.addEventListener('click', function() {
            item.completed = !item.completed
            reg()
        })

        const del = li.querySelector('.todo-remove')
        del.addEventListener('click', function() {
            
            console.log(data);
            
        })
        
    })
}

todoControl.addEventListener('submit', function(event) {
    event.preventDefault()

    const newObj = {
        text: headerInput.value,
        compledted: false
    }
    if(headerInput.value === '') {
        alert('Введите задачу');
        
    } else {
        data.push(newObj)
        
    }
    
    headerInput.value = ''
    reg()
})
