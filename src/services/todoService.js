const baseurl = "http://localhost:8083/todos"

export const loadTodoss = () => {
    return fetch(baseurl)
        .then(response => response.json());
}

export const gotTodo = (id) => {
    return fetch(`${baseurl}/${id}`)
        .then(response => response.json());
}

export const createTodo = (todo) => {
    return fetch(baseurl, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(response => response.json());
}

export const updateTodo = (todo) => {
    return fetch(`${baseurl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(response => response.json());
}

export const deleteTodo = (id) => {
    return fetch(`${baseurl}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json());
}