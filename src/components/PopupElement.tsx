import React from "react";
import type { PopupElementProps } from "@/types/todo.types";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { PopupTodoTag } from "./PopupTodoTagInput";
import { PopupTodoName } from "./PopupTodoNameInput";
import { PopupTodoRadio } from "./PopupTodoRadioInput";
import { PopupTodoFooter } from "./PopupTodoFooterButtons";

const PopupElement: React.FC<PopupElementProps> = ({
  showPopup,
  setShowPopup,
  todoInput,
  setTodoInput,
  timeSpan,
  setTimeSpan,
  handleClick,
  timeSpanOption,
  addTodo,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute left-0 top-0 h-full w-full bg-gray-800 opacity-80"
        onClick={handleClick}
      ></div>

      <div className="relative left-[40%] top-[15%] h-screen w-[100%]">
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="flex flex-col gap-10 rounded-[8px] bg-gray-900 p-8 text-xl sm:max-w-md">
            <PopupTodoName 
            todoInput = {todoInput} 
            setTodoInput = {setTodoInput}
            />
            <PopupTodoRadio
            setTimeSpan={setTimeSpan} 
            timeSpan={timeSpan} 
            timeSpanOption={timeSpanOption}/>
            <PopupTodoTag />
            <PopupTodoFooter
            todoInput = {todoInput} 
            timeSpan={timeSpan} 
            addTodo={addTodo}
            handleClick={handleClick}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { PopupElement };
