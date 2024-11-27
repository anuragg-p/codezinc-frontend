"use client";
import { DashBoardHeader } from "@/components/TodoHeader";
import { TodoDashBoard, TodoEnum } from "@/components/Todo";
// import tasksData from "@/data/todo-app-data.json";
import type { TodoItemType } from "@/types/todo.types";
import { useCallback, useEffect, useState } from "react";
import { TodoFooter } from "@/components/TodoFooter";

//-----------------------------------------------------------------------------
export default function TodoPage() {
    const [todos, setTodos] = useState<Array<TodoItemType>>(() => {
        // This is to load data from local storage
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? (JSON.parse(storedTodos) as Array<TodoItemType>) : [];
    });

    // Save todos to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

//-----------------------------------------------------------------------------

    const todayTodos = todos.filter((item) => item.type === TodoEnum.TODAY);
    const thisWeekTodos = todos.filter(
        (item) => item.type === TodoEnum.THIS_WEEK,
    );
    const eventualTodos = todos.filter(
        (item) => item.type === TodoEnum.EVENTUALLY,
    );

    const sections = [
        {
            variant: TodoEnum.TODAY,
            todos: todayTodos,
        },
        {
            variant: TodoEnum.THIS_WEEK,
            todos: thisWeekTodos,
        },
        {
            variant: TodoEnum.EVENTUALLY,
            todos: eventualTodos,
        },
    ];

    // What is useCallback?
    const addTodo = useCallback((type: TodoEnum, name: string) => {
        return setTodos((prev) => [...prev, { type, name, tags: [] }]);
        // }, [todos]);
    }, []);

    const removeTodo = useCallback((name: string) => {
        return setTodos((prev) => prev.filter((todo) => todo.name !== name));
    }, []);

    return (
        <main className="flex min-h-screen flex-col bg-gray-900 px-4">
            <DashBoardHeader />
            <section className="m-4 flex flex-grow flex-wrap gap-4 p-4">
                {sections.map((item, index) => (
                    <TodoDashBoard
                        key={index}
                        variant={item.variant}
                        todos={item.todos}
                        addTodo={addTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </section>
            <TodoFooter />
        </main>
    );
}
