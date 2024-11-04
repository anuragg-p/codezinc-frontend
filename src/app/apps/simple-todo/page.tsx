"use client";
import {
  DashBoardHeader,
  TodoDashBoard,
  TodoFooter,
  TodoHeader,
  TodoEnum,
} from "@/components/Todo";
import { __todos, __todosNew } from "@/TodoAppData/data";
import type { TodoItemType } from "@/types/todo.types";
import { useCallback, useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState<Array<TodoItemType>>(__todosNew);

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
      <TodoHeader />
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
