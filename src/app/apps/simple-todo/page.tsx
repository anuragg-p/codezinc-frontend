"use client";
import {
  DashBoardHeader,
  TodoDashBoard,
  TodoFooter,
  TodoHeader,
  TodoEnum,
} from "@/components/Todo";
import { TodoItemType } from "@/types/todo.types";
import { useCallback, useState } from "react";

export default function TodoPage() {
  const __todos: TodoItemType[] = [
    {
      type: TodoEnum.TODAY,
      name: "Finish project report",
      tags: ["work", "urgent"],
    },
    {
      type: TodoEnum.TODAY,
      name: "Grocery shopping",
      tags: ["personal", "errands"],
    },
    {
      type: TodoEnum.TODAY,
      name: "Workout at the gym",
      tags: ["health", "fitness"],
    },
    {
      type: TodoEnum.THIS_WEEK,
      name: "Prepare presentation slides",
      tags: ["work", "presentation"],
    },
    {
      type: TodoEnum.THIS_WEEK,
      name: "Visit the dentist",
      tags: ["health", "appointment"],
    },
    {
      type: TodoEnum.THIS_WEEK,
      name: "Read the new book",
      tags: ["personal", "reading"],
    },
    {
      type: TodoEnum.EVENTUALLY,
      name: "Learn TypeScript basics",
      tags: ["learning", "development"],
    },
    {
      type: TodoEnum.EVENTUALLY,
      name: "Plan a vacation",
      tags: ["personal", "travel"],
    },
    {
      type: TodoEnum.EVENTUALLY,
      name: "Organize the photo gallery",
      tags: ["personal", "organization"],
    },
    {
      type: TodoEnum.EVENTUALLY,
      name: "Start a side project",
      tags: ["development", "hobby"],
    },
  ];

  const [todos, setTodos] = useState<Array<TodoItemType>>(__todos);

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
  const addTodo = useCallback((type: TodoItemType, name: string) => {
    //@ts-ignore
    return setTodos((prev) => [...prev, { type, name, tags: [] }]);
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
