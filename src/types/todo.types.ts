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