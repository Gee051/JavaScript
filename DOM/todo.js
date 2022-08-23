const todoInput = document.querySelector('#todo')
const addBtn = document.querySelector('#add')
const todoContainer = document.querySelector('#todos')
const completedContainer = document.querySelector('#completed')

function createTodoItem () {
    let todo = todoInput.value

    if(!todo.trim()) return false

    let todoItem = document.createElement('div')
    todoItem.classList.add('todo-item')
    todoItem.className = 'p-3 mb-2 cursor-pointer'
    todoItem.textContent = todo
    todoItem.onclick= () => {
        if (todoItem.parentElement.id === 'todos') {
            completedContainer.appendChild(todoItem)
        } else {
            todoContainer.appendChild(todoItem)
        }


    }

    todoContainer.appendChild(todoItem)
    todoInput.value = ''

}

todoInput.onkeydown = (evt) => {
    if(evt.key === 'Enter') {
        createTodoItem()
    }
}

addBtn.onclick = createTodoItem