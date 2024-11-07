import type { PopupTodoRadioProps } from "@/types/todo.types";
import React from "react";

const PopupTodoRadio: React.FC<PopupTodoRadioProps> = ({
  setTimeSpan,
  timeSpan,
  timeSpanOption,
}) => {
  return (
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
  );
};

export { PopupTodoRadio };
