import React from "react";
import type { PopupElementProps } from "@/types/todo.types";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { TagInput } from "./TodoTagInput";

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
            <div className={"flex flex-col"}>
              <div className="mb-2 ml-2">When do you want to do this?</div>
              <div className="flex h-12 justify-around rounded-xl border-2 border-gray-600">
                {timeSpanOption.map((value) => (
                  <div
                    key={value}
                    className={`relative flex flex-grow cursor-pointer items-center justify-center rounded-xl text-center transition-colors duration-200 ${timeSpan === value ? "border-2 border-gray-400 text-green-300" : "border-2 border-transparent text-green-700"}`}
                  >
                    <input
                      type="radio"
                      className="absolute inset-0 cursor-pointer opacity-0"
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
              <div className="mb-2 ml-2">
                Tags{" "}
                <i className="text-sm text-gray-400">
                  (optional, press Enter to add)
                </i>
              </div>
              <TagInput />
            </div>
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
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { PopupElement };
