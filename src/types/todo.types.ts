import type { TodoEnum } from "@/components/Todo";

export type TodoItemType = {
  type: TodoEnum;
  name: string;
  tags?: Array<string>;
  checked: boolean;

};

export type TodoItemType1 = {
  type: TodoEnum;
  name: string;
  tags?: Array<string>;
  checked: boolean;
  removeTodo: (name: string, type: TodoEnum) => void;
  setChecked: (name: string, type: TodoEnum) => void;
};

export type PopupElementProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
  timeSpan: TodoEnum;
  setTimeSpan: React.Dispatch<React.SetStateAction<TodoEnum>>;
  handleClick: () => void;
  timeSpanOption: TodoEnum[];
  addTodo: (todoType: TodoEnum, name: string, checked: boolean) => void;
};

export type PopupTodoNameProps = {
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
}

export type PopupTodoRadioProps = {
  setTimeSpan: React.Dispatch<React.SetStateAction<TodoEnum>>;
  timeSpan: TodoEnum;
  timeSpanOption: TodoEnum[];
}

export type PopupTodoFooterProps = {
  todoInput: string;
  timeSpan: TodoEnum;
  addTodo: (todoType: TodoEnum, name: string, checked: boolean) => void;
  handleClick: () => void;
}