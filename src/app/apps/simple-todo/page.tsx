"use client";
import { DashBoardHeader } from "@/components/TodoHeader";
import {
  TodoDashBoard,
  TodoEnum,
} from "@/components/Todo";
import tasksData from "@/data/todo-app-data.json";
import type { Raw, TodoItemType } from "@/types/todo.types";
import { useCallback, useState } from "react";
import { TodoFooter } from "@/components/TodoFooter";


// making a function to convert the json file Raw data to our required type data
const convertToTodoItems = (data: Raw[]): TodoItemType[] => {
  return data.map((task) => {
    // Convert the type field to TodoEnum
    const type = TodoEnum[task.type as keyof typeof TodoEnum];
    return {
      type,
      name: task.name,
      tags: task.tags
    };
  });
}

// To convert imported json file data to a typed Array<TodoItemType>
const todoItems: TodoItemType[] = convertToTodoItems(tasksData);

export default function TodoPage() {
  const [todos, setTodos] = useState<Array<TodoItemType>>(todoItems);

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
          />
        ))}
      </section>
      <TodoFooter />
    </main>
  );
}
