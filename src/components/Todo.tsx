"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import type { TodoItemType } from "@/types/todo.types";
import { ChevronDown, PlusIcon, SettingsIcon, Trash2, XIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "@/components/ui/input";

type TodoDashBoardProps = {
  variant: TodoEnum;
  todos: Array<TodoItemType>;
  // addTodo: (todoType: TodoItemType, name: string) => void;
  addTodo: (todoType: TodoEnum, name: string) => void;
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
        <SettingsIcon />
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
      <div className="flex justify-center">
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
        <Button className="rounded-xl bg-gray-900 hover:opacity-50 hover:bg-green-700">
          <XIcon />
        </Button>
        <button className="ml-7 mr-5 rounded-xl bg-green-700 px-2 py-1">
          Add Todo
        </button>
        <button className="text-sm text-gray-400">Remove Done</button>
      </div>
    </div>
  );
};

// const TodoItem: React.FC<TodoItemType> = ({ type, name, tags }) => {
  const TodoItem: React.FC<TodoItemType> = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
      <div className="flex justify-between items-center rounded-xl bg-gray-900 px-2 py-2">
        <div className="inline-flex mx-2 space-x-2">
          <input 
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="cursor-pointer"
          />
          <div className={isChecked? 'text-gray-400 line-through': 'text-white'}>{name}</div>
        </div>
        <button className="p-2 hover:opacity-70">
          <Trash2 size={18}/>
        </button>
      </div>
  );
};

// Component for Tags box
const TagInput = () => {
  const [tagInput, setTagInput] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div 
    className="flex items-center"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <Input
        id="add-tag"
        type="text"
        placeholder="Add your Tag here..."
        defaultValue="rounded-xl"
        className="block bg-gray-900 rounded-xl h-12 text-base border-2 border-gray-600 focus:outline-none"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        />

      {isHovered &&
        <button 
        className="absolute transform translate-x-[350px] cursor-pointer"
        >
          <ChevronDown/>
        </button>
      }
    </div>
  );
};

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
          }} // Set the popup visibility reset the toggle and clear todo name
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
            }} // Set the popup visibility reset the toggle and clear todo name
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
                    onClick={handleClick} // Close the dialog and clear todo name and reset the toggle 
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

const TodoFooter = () => {
  return (
    <div className="sticky bottom-0 flex flex-wrap gap-4 mx-4 mb-2">
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
