"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import type { TodoItemType } from "@/types/todo.types";
import { PlusIcon } from "lucide-react";
import { TodoItem } from "./TodoItem";
import { PopupElement } from "./PopupElement";

type TodoDashBoardProps = {
  variant: TodoEnum;
  todos: Array<TodoItemType>;
  addTodo: (todoType: TodoEnum, name: string) => void;
};

export enum TodoEnum {
  TODAY = "Today",
  THIS_WEEK = "This Week",
  EVENTUALLY = "Eventually",
}

const TodoSection: React.FC<TodoDashBoardProps> = ({
  variant,
  todos,
  addTodo,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [timeSpan, setTimeSpan] = useState(variant);
  const timeSpanOption = Object.values(TodoEnum);

  const getGreeting = () => {
    let greeting = "hello";

    switch (variant) {
      case TodoEnum.TODAY:
        greeting = "Hurray! No more todos for today! Enjoy🎉";
        break;
      case TodoEnum.THIS_WEEK:
        greeting = "Great! No more todos for this week! 🥳";
        break;
      case TodoEnum.EVENTUALLY:
        greeting = "No other things to do. Have fun!🏝️";
        break;
    }

    return greeting;
  };

  // handle click to reset
  const handleClick = () => {
    setTimeSpan(variant);
    setTodoInput("");
    setShowPopup(false);
  }

  return (
    <div className="m-2 flex w-[300px] flex-grow flex-col rounded-xl bg-gray-800 p-4">
      <header className="flex items-center justify-between">
        <div>{variant}</div>
        <Button
          variant="default"
          className="rounded-xl bg-gray-900 hover:opacity-50"
          onClick={() => {
            setShowPopup(true);
            setTodoInput("");
            setTimeSpan(variant);
          }}
        >
          <PlusIcon />
        </Button>
      </header>

      <div className="mt-6 flex flex-col gap-y-4">
        {todos?.length === 0 ? (
          <div className="mt-52 self-center text-center">
            <p className="text-gray-400 text-lg mb-2">{getGreeting()}</p>
            <Button
            type="submit"
            size="sm"
            className="rounded-xl"
            onClick={() => {
              setShowPopup(true);
              setTodoInput("");
              setTimeSpan(variant);
            }}
            >Add Todo</Button>
          </div>
        ) : (
          todos.map((todo, idx) => (
            <TodoItem
              key={idx}
              name={todo.name}
              type={todo.type}
              tags={todo.tags}
            />
          ))
        )}
      </div>

      {showPopup && (
        <PopupElement
        showPopup = {showPopup}
        setShowPopup = {setShowPopup}
        todoInput = {todoInput}
        setTodoInput = {setTodoInput}
        timeSpan={timeSpan}
        setTimeSpan={setTimeSpan}
        handleClick={handleClick}
        timeSpanOption={timeSpanOption}
        addTodo={addTodo}
        />
      )}
    </div>
  );
};

//Component export
export { TodoSection as TodoDashBoard };
