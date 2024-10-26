import {
  DashBoardHeader,
  TodoDashBoard,
  TodoFooter,
  TodoHeader,
} from "@/components/TodoComponents";

export default function TodoPage() {
  const sections = [
    {
      Deadline: "Today",
      Greeting: "Hurray! No more todos for today! Enjoy🎉",
    },
    {
      Deadline: "This week",
      Greeting: "Great! No mroe todos for this week! 🥳",
    },
    {
      Deadline: "Eventually",
      Greeting: "No other things to do. Have fun!🏝️",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gray-900 px-4">
      <TodoHeader />
      <DashBoardHeader />
      <section className="m-4 flex flex-grow flex-wrap gap-4 p-4">
        {sections.map((item, index) => (
          <TodoDashBoard
            key={index}
            timeRange={item.Deadline}
            greet={item.Greeting}
          />
        ))}
      </section>
      <TodoFooter/>
    </main>
  );
}
