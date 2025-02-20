'use strict'


const control = document.querySelector('.todo-control')
const input = document.querySelector('.header-input')
const button = document.querySelector('.header-button')
const remove = document.querySelector('.todo-remove')
const btnCompl = document.querySelector('.todo-complete')
const todoList = document.querySelector('.todo-list')
const todoCompl = document.querySelector('.todo-completed')


const object = []

const render = function () {
    todoList.innerHTML = ''
    todoCompl.innerHTML = ''
    object.forEach(function (item) {
        const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML = '<span class="text-todo">' + item.name + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            ' <button class="todo-complete"></button>' +
            '</div>'
        console.log(li);
        console.log(item);
        if (item.completed) {
            todoCompl.append(li)
        } else {
            todoList.append(li)
        }
        console.log(item);
        const app = li.querySelector('.todo-complete')
        app.addEventListener('click', function () {
            item.completed = !item.completed
            render()
            console.log(object);
        })


        const del = li.querySelector('.todo-remove')
        del.addEventListener('click', function () {
            const index = object.indexOf(item)
            object.splice(index, 1)
            render()
            console.log(object);
        })

    })
}

control.addEventListener('submit', function (event) {
    event.preventDefault()
})

button.addEventListener('click', function () {
    if (input.value !== '') {
        const newObj = {
            name: input.value,
            completed: false
        }
        object.push(newObj)
        input.value = ''
        render()
    } else {
        console.log('Введите значение');

    }


    console.log(object);
    console.log(todoList);

})

