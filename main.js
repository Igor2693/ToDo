'use strict'

const todoFofm = document.querySelector('.todo-control')
const input = document.querySelector('.header-input')
const addBtn = document.querySelector('.header-button')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const removeBtn = document.querySelector('.todo-remove')





const appData = localStorage.getItem("text")
    ? JSON.parse(localStorage.getItem("text"))
    : []

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    appData.forEach(function (item, index) {
        const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML = '<span class="text-todo">' + item.name + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed == true) {
            todoCompleted.append(li)
        } else if (item.completed == false) {
            todoList.append(li)
        }

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            console.log('1');
            localStorage.setItem('text', JSON.stringify(appData))
            render()
        })

        const del = li.querySelector('.todo-remove')
        del.addEventListener('click', function () {
            const index = appData.indexOf(item)
            appData.splice(index, 1)
            localStorage.setItem('text', JSON.stringify(appData))
            render()
        })
        console.log(appData);
        console.dir(item);


    })
}

todoFofm.addEventListener('submit', function (event) {
    event.preventDefault()
})

addBtn.addEventListener('click', function () {
    if (input.value == '') {
        console.log('Ошибка, введите задачу');
    } else {
        const newObj = {
            name: input.value,
            completed: false
        }
        appData.push(newObj)
        input.value = ''
        render()
        localStorage.setItem('text', JSON.stringify(appData))
    }

})
const local = JSON.parse(localStorage.getItem('text'))
console.log(appData);
render()








