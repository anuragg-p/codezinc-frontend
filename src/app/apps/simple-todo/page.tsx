"use client";
import { DashBoardHeader } from "@/components/TodoHeader";
import { TodoDashBoard, TodoEnum } from "@/components/Todo";
import type { TodoItemType } from "@/types/todo.types";
import { useCallback, useEffect, useState } from "react";
import { TodoFooter } from "@/components/TodoFooter";
import { LocalStorage } from "@/lib/LocalStorage";

export default function TodoPage() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const storage = new LocalStorage();
    const loadTodosFromLocalStorage = (): Array<TodoItemType> => {
      const storedTodos = storage.get<Array<TodoItemType>>("todos");
      return storedTodos ? storedTodos : [];
    };
    setTodos(loadTodosFromLocalStorage());
  }, []);

  useEffect(() => {
    const storage = new LocalStorage();
    storage.set("todos", todos);
  }, [todos]);

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

  const addTodo = useCallback(
    (type: TodoEnum, name: string, checked: boolean) => {
      return setTodos((prev) => [...prev, { type, name, checked, tags: [] }]);
    },
    [],
  );

  const removeTodo = useCallback((name: string, type: TodoEnum) => {
    return setTodos((prev) =>
      prev.filter((todo) => todo.name !== name || todo.type !== type),
    );
  }, []);

  const setChecked = useCallback(
    (name: string, type: TodoEnum) => {
      return setTodos((prev) =>
        prev.map((todo) =>
          todo.name === name && todo.type === type
            ? { ...todo, checked: !todo.checked }
            : todo,
        ),
      );
    },
    [setTodos],
  );

  return (
  <main className="flex min-h-screen w-full flex-col bg-black px-4">
  <DashBoardHeader />
  <section className="m-4 flex flex-grow flex-wrap gap-4 p-4">
    {sections.map((item, index) => (
      <TodoDashBoard
        key={index}
        variant={item.variant}
        todos={item.todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        setChecked={setChecked}
      />
    ))}
  </section>
  <TodoFooter />
</main>

  );
}
