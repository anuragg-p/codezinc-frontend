import { TodoEnum } from "@/components/Todo";

export type TodoItemType = {
  type: TodoEnum;
  name: string;
  tags?: Array<string>;
};
