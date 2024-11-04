import { TodoEnum } from "@/components/Todo";
import { type TodoItemType } from "@/types/todo.types";


const __todosNew: TodoItemType[] = []

const __todos: TodoItemType[] = [
    {
        type: TodoEnum.TODAY,
        name: "Finish project report",
        tags: ["work", "urgent"],
    },
    {
        type: TodoEnum.TODAY,
        name: "Grocery shopping",
        tags: ["personal", "errands"],
    },
    {
        type: TodoEnum.TODAY,
        name: "Workout at the gym",
        tags: ["health", "fitness"],
    },
    {
        type: TodoEnum.THIS_WEEK,
        name: "Prepare presentation slides",
        tags: ["work", "presentation"],
    },
    {
        type: TodoEnum.THIS_WEEK,
        name: "Visit the dentist",
        tags: ["health", "appointment"],
    },
    {
        type: TodoEnum.THIS_WEEK,
        name: "Read the new book",
        tags: ["personal", "reading"],
    },
    {
        type: TodoEnum.EVENTUALLY,
        name: "Learn TypeScript basics",
        tags: ["learning", "development"],
    },
    {
        type: TodoEnum.EVENTUALLY,
        name: "Plan a vacation",
        tags: ["personal", "travel"],
    },
    {
        type: TodoEnum.EVENTUALLY,
        name: "Organize the photo gallery",
        tags: ["personal", "organization"],
    },
    {
        type: TodoEnum.EVENTUALLY,
        name: "Start a side project",
        tags: ["development", "hobby"],
    },
];

export {__todos, __todosNew}