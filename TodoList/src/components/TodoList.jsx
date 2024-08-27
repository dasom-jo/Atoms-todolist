import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { todoListState } from "../recoil/atoms";
import TodoListFilters from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";
import { filteredTodoListState } from "../recoil/selectors";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState)
    return (
    <div>
        <TodoListStats/>
        <TodoListFilters/>
        <TodoItemCreator/>

        {todoList.map((todoItem)=>(
            <TodoItem key={todoItem.id} item={todoItem}/>
        ))}
    </div> );
}

export default TodoList;