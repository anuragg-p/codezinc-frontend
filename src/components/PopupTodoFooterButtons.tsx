import React from "react";
import { Button } from "./ui/button";
import { DialogFooter } from "./ui/dialog";
import type { PopupTodoFooterProps } from "@/types/todo.types";

const PopupTodoFooter: React.FC<PopupTodoFooterProps> = ({
  todoInput,
  timeSpan,
  addTodo,
  handleClick,
}) => {
  return (
    <DialogFooter className="sm:justify-start">
      <Button
        type="submit"
        size="sm"
        className="rounded-[8px] p-3"
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
  );
};

export { PopupTodoFooter };
