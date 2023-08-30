import {
    Table
} from "@hope-ui/solid";

import { createSignal, createEffect, onMount, For } from "solid-js";

import { loadTodoss, updateTodo, createTodo, deleteTodo } from "../services/todoService";
import TodoItem from "./TodoItem";
import { TableCaption, Tbody, Thead, Th, Tr } from "@hope-ui/solid";

const TodoList = () => {
    const [todos, setTodos] = createSignal([]);

    const toggleTodo = (todo) => {
        todo.comleted = !todo.comleted;
        updateTodo(todo).then(() => refresh());
    }

    const removeTodo = (todo) => {
        deleteTodo(todo).then(() => refresh());
    }

    const refresh = () => {
        fetch("http://localhost:8083/todos", {mode: 'no-cors'})
        // .then(resp => resp.json())
        .then(response => response.json())
    .then(json => console.log(json))
        .catch((error) => {
            console.log(error)
        })
    }

    onMount(async () => {
        refresh();
    })

    return (
        <div>
            <Table>
                <TableCaption>Filip's todo list</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Title</Th>
                        <Th>COMPLETED</Th>
                        <Th>DELETED</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <For each={todos()}>
                        {
                            (todo) => (
                                <TodoItem 
                                    todo={todo}
                                    toggleTodo={toggleTodo}
                                    removeTodo={removeTodo}
                                />
                            )
                        }
                    </For>
                </Tbody>
            </Table>
        </div>
    )
}

export default TodoList