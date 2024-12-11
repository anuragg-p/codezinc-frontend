"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const apps = [
    {
      title: "Todo App",
      description: "Todo App",
      route: "/apps/simple-todo",
      content: "A simple todo app",
    },
    {
      title: "Msnger App",
      description: "Messanger App",
      route: "/apps/messanger",
      content: "Content",
    },
    {
      title: "Weather App",
      description: "Weather App",
      route: "/apps/weather",
      content: "Content",
    },
    {
      title: "Games App",
      description: "Games App",
      route: "/apps/games",
      content: "Content",
    },
    {
      title: "Msnger App",
      description: "Messanger App",
      route: "/apps/messanger",
      content: "Content",
    },
    {
      title: "Weather App",
      description: "Weather App",
      route: "/apps/weather",
      content: "Content",
    },
    {
      title: "IMDB",
      description: "imdb",
      route: "/apps/imdb",
      content: "Watch Imdb shows",
    },
  ];

  return (
    <main className="flex h-full w-full flex-col items-center">
      <h4 className="self-start pl-8 text-lg font-medium text-text">Apps</h4>
      <div className="flex flex-wrap gap-8 rounded-xl p-6 shadow-inner shadow-black/50">
        {apps.map((item, index) => (
          <Card
            className="border-3 bg-card-default h-[200px] w-[250px] transform cursor-pointer rounded-xl border border-[#758694] text-[#F7E7DC] shadow-md shadow-black/40 transition-transform hover:scale-110"
            key={index}
            onClick={() => router.push(item.route)}
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>{item.content}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
