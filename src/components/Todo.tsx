"use client";
import React, { useState } from "react";

import SettingIcon from "@/icons/SettingIcon";
import CrossIcon from "@/icons/CrossIcon";
import { Button } from "./ui/button";
import { TodoItemType } from "@/types/todo.types";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "@/components/ui/input";

type TodoDashBoardProps = {
  variant: TodoEnum;
  todos: Array<TodoItemType>;
  addTodo: (todoType: TodoItemType, name: string) => void;
};

export enum TodoEnum {
  TODAY = "Today",
  THIS_WEEK = "This Week",
  EVENTUALLY = "Eventually",
}

// Actual Component
const TodoHeader = () => {
  return (
    <div className="m-2 flex flex-wrap justify-end p-1">
      <button className="">
        <SettingIcon />
      </button>
    </div>
  );
};

const today = new Date();

// Array of abbreviated day names
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Array of abbreviated month names
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOfWeek = days[today.getDay()];
const month = months[today.getMonth()];
const day = today.getDate();

const DashboardHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-10 py-2">
      <h1 className="text-4xl">
        {dayOfWeek}, {month} {day}
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search todos"
          className="rounded-xl border-2 border-gray-400 bg-gray-900 px-2 py-1 text-white"
        />
        <select
          name=""
          id=""
          className="mx-2 rounded-xl border-2 border-gray-400 bg-gray-900 px-2 py-1"
        >
          <option value="null">All todos</option>
        </select>
        <button>
          <CrossIcon />
        </button>
        <button className="ml-7 mr-5 rounded-xl bg-green-700 px-2 py-1">
          Add Todo
        </button>
        <button className="text-sm text-gray-400">Remove Done</button>
      </div>
    </div>
  );
};

const TodoItem: React.FC<TodoItemType> = ({ type, name, tags }) => {
  return (
    <div className="flex items-center gap-x-2 rounded-xl bg-gray-900 px-2 py-4">
      <input type="checkbox" />
      <div>{name}</div>
    </div>
  );
};

const TodoPopup = ({}) => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const TodoSection: React.FC<TodoDashBoardProps> = ({
  variant,
  todos,
  addTodo,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [todoInput, setTodoInput] = useState("");

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

  return (
    <div className="m-2 flex w-[300px] flex-grow flex-col rounded-xl border border-white bg-gray-800 p-4">
      <header className="flex items-center justify-between">
        <div>{variant}</div>
        <Button
          variant="default"
          className="rounded-xl bg-gray-900 hover:opacity-50"
          onClick={() => setShowPopup(true)} // Set the popup visibility
        >
          <PlusIcon />
        </Button>
      </header>

      <div className="mt-6 flex flex-col gap-y-4">
        {todos?.length === 0 ? (
          <div className="-mt-52 self-center text-center">
            <p className="text-gray-500">{getGreeting()}</p>
            <Button className="rounded-xl">Add Todo</Button>
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
            className="absolute left-0 top-0 h-full w-full bg-black opacity-90"
            onClick={() => setShowPopup(false)}
          ></div>

          <div className="relative left-[40%] top-[40%] h-screen w-[100%]">
            <Dialog open={showPopup} onOpenChange={setShowPopup}>
              <DialogContent className="flex flex-col gap-y-4 bg-gray-900 p-8 sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add a Todo</DialogTitle>
                </DialogHeader>

                <div className={"flex items-center space-x-2"}>
                  <Input
                    id="add-todo"
                    type="text"
                    defaultValue="rounded-xl"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="px-3"
                    onClick={() => {
                      //@ts-ignore
                      addTodo(variant, todoInput);
                      setShowPopup(false);
                    }}
                  >
                    Add
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setShowPopup(false)} // Close the dialog
                  >
                    Close
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

const TodoFooter = () => {
  return (
    <div className="sticky bottom-0 flex flex-wrap gap-2">
      <p>Built by</p>
      <a
        href="https://www.google.com/"
        className="text-blue-500 underline hover:no-underline"
      >
        Codezinc
      </a>
      <a
        href="https://www.google.com/"
        className="text-blue-500 underline hover:no-underline"
      >
        GitHub
      </a>
      <a
        href="https://www.google.com/"
        className="text-blue-500 underline hover:no-underline"
      >
        Twitter
      </a>
    </div>
  );
};

//Component export
export {
  TodoHeader,
  DashboardHeader as DashBoardHeader,
  TodoSection as TodoDashBoard,
  TodoFooter,
};
