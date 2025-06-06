"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import type { TodoItemType } from "@/types/todo.types";
import { PlusIcon } from "lucide-react";

export enum TodoEnum {
  TODAY = "Today",
  THIS_WEEK = "This Week",
  EVENTUALLY = "Eventually",
}

type TodoDashBoardProps = {
  variant: TodoEnum;
};

type ExtendedTodoItem = TodoItemType & {
  isPaused?: boolean;
};

export const TodoDashBoard: React.FC<TodoDashBoardProps> = ({ variant }) => {
  const [todos, setTodos] = useState<ExtendedTodoItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [time, setTime] = useState(0);
  const [timeSpan, setTimeSpan] = useState(variant);

  const getGreeting = () => {
    switch (variant) {
      case TodoEnum.TODAY:
        return "No more todos for today";
      case TodoEnum.THIS_WEEK:
        return " No todos for this week";
      case TodoEnum.EVENTUALLY:
        return " Have fun!";
      default:
        return "Hello!";
    }
  };

  const handleAddTodo = () => {
    if (todoInput.trim()) {
      setTodos([
        ...todos,
        {
          name: todoInput,
          type: timeSpan,
          checked: false,
          time: time > 0 ? time * 60 : 0,
          isPaused: false,
        },
      ]);
      setTodoInput("");
      setTime(0);
      setShowPopup(false);
    }
  };

  const removeTodo = (name: string) => {
    setTodos((prev) => prev.filter((todo) => todo.name !== name));
  };

  const setChecked = (name: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.name === name ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const togglePause = (name: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.name === name ? { ...todo, isPaused: !todo.isPaused } : todo
      )
    );
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.time && todo.time > 0 && !todo.checked && !todo.isPaused) {
            return { ...todo, time: todo.time - 1 };
          }
          return todo;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-2 flex w-[300px] flex-col rounded-xl bg-gray-800 p-4">
      <header className="flex items-center justify-between text-white">
        <div>{variant}</div>
        <Button
          variant="default"
          className="rounded-xl bg-gray-900 hover:opacity-50"
          onClick={() => {
            setShowPopup(true);
            setTodoInput("");
            setTime(0);
          }}
        >
          <PlusIcon />
        </Button>
      </header>

      <div className="mt-6 flex flex-col gap-y-4">
        {todos.length === 0 ? (
          <div className="mt-52 self-center text-center">
            <p className="text-gray-400 text-lg mb-2">{getGreeting()}</p>
            <Button
              type="submit"
              size="sm"
              className="rounded-xl"
              onClick={() => setShowPopup(true)}
            >
              Add Todo
            </Button>
          </div>
        ) : (
          todos.map((todo, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-gray-700 p-2 rounded"
            >
              <div className="text-white">
                <p className={todo.checked ? "line-through" : ""}>{todo.name}</p>
                {todo.time !== undefined && todo.time > 0 && !todo.checked && (
                  <p className="text-xs text-green-400">
                    Time left: {formatTime(todo.time)}
                  </p>
                )}
                {todo.time !== undefined && todo.time > 0 && !todo.checked && (
                  <button
                    onClick={() => togglePause(todo.name)}
                    className="text-xs text-blue-400 underline hover:text-blue-200 mt-1"
                  >
                    {todo.isPaused ? "Resume" : "Pause"}
                  </button>
                )}
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => setChecked(todo.name)}
                />
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeTodo(todo.name)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg flex flex-col gap-4 w-[300px]">
            <h2 className="text-lg font-bold text-black">Add New Todo</h2>
            <input
              type="text"
              placeholder="Task name"
              className="p-2 rounded border border-gray-300"
              value={todoInput}
              style={{ color: "black" }}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <input
              type="number"
              placeholder="Time in minutes"
              className="p-2 rounded border border-gray-300 text-black"
              min={0}
              value={time || ""}
              onChange={(e) => setTime(Number(e.target.value))}
            />
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setShowPopup(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddTodo}>Add</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
