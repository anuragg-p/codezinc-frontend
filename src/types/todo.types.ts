import type { TodoEnum } from "@/components/Todo";

export type TodoItemType = {
  type: TodoEnum;
  name: string;
  tags?: Array<string>;
};

// making an initial type for imported json data
export type  Raw = {
  type: string;
  name: string;
  tags?: Array<string>;
}

export type PopupElementProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
  timeSpan: TodoEnum;
  setTimeSpan: React.Dispatch<React.SetStateAction<TodoEnum>>;
  handleClick: () => void;
  timeSpanOption: TodoEnum[];
  addTodo: (todoType: TodoEnum, name: string) => void;
};