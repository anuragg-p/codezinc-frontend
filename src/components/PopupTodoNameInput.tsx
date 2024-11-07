import React from "react"
import type { PopupTodoNameProps } from "@/types/todo.types"
import { Input } from "@/components/ui/input";
import { DialogHeader } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";


const PopupTodoName: React.FC<PopupTodoNameProps> = ({
    todoInput,
    setTodoInput,
  }) => {
    return (
      <div className={"flex flex-col"}>
      <DialogHeader className="mb-2 ml-2">
        <DialogTitle>What do you want to do?</DialogTitle>
      </DialogHeader>
      <Input
        id="add-todo"
        type="text"
        placeholder="Write your Task here..."
        defaultValue="rounded-xl"
        className="h-16 rounded-xl border-2 border-gray-600 bg-gray-900 text-base"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
    </div>
    )
  }

export {PopupTodoName}