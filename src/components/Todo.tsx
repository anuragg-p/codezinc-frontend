"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import type { TodoItemType } from "@/types/todo.types";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { TagInput } from "./TodoTagInput";
import { TodoItem } from "./TodoItem";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "@/components/ui/input";

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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute left-0 top-0 h-full w-full bg-gray-800 opacity-80"
            onClick={handleClick}
          ></div>

          <div className="relative left-[40%] top-[15%] h-screen w-[100%]">
            <Dialog open={showPopup} onOpenChange={setShowPopup}>
              <DialogContent className="flex flex-col bg-gray-900 p-8 gap-10 sm:max-w-md text-xl rounded-[8px]">
                <div className={"flex flex-col"}>
                  <DialogHeader className="ml-2 mb-2">
                    <DialogTitle>What do you want to do?</DialogTitle>
                  </DialogHeader>
                  <Input
                    id="add-todo"
                    type="text"
                    placeholder="Write your Task here..."
                    defaultValue="rounded-xl"
                    className="bg-gray-900 rounded-xl h-16 border-2 text-base border-gray-600"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                  />
                </div>
                <div className={"flex flex-col"}>
                  <div className="ml-2 mb-2">
                    When do you want to do this?
                  </div>
                  <div className="flex h-12 justify-around border-2 border-gray-600 rounded-xl">
                    {timeSpanOption.map((value) => (
                      <div
                        key={value}
                        className={`relative flex flex-grow rounded-xl items-center justify-center cursor-pointer text-center transition-colors duration-200 
                      ${timeSpan === value ? 'text-green-300 border-2 border-gray-400' : 'text-green-700 border-2 border-transparent'}`}
                      >
                        <input
                          type="radio"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          value={value}
                          checked={timeSpan === value}
                          onChange={() => setTimeSpan(value)}
                        />
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={"mb-2"}>
                  <div className="ml-2 mb-2">
                    Tags <i className="text-sm text-gray-400">(optional, press Enter to add)</i>
                  </div>
                  <TagInput/>
                </div>
                <DialogFooter className="sm:justify-start">
                  <Button
                    type="submit"
                    size="sm"
                    className="p-3 rounded-[8px] "
                    onClick={() => {
                      addTodo(timeSpan, todoInput);
                      handleClick();
                    }}
                  >
                    save Todo
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-[8px]"
                    onClick={handleClick}
                  >
                    Cancel
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
};

//Component export
export { TodoSection as TodoDashBoard };
