import { DashBoardHeader, TodoHeader } from "@/components/TodoComponents";

export default function TodoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 px-4">
      <TodoHeader />
      <DashBoardHeader />
    </main>
  );
}
