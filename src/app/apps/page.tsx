"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { push } = useRouter();

  const apps = [
    {
      title: "Weather APP",
      description: "Shows you weather",
      route: "/apps/weather",
    },
    {
      title: "App 2",
      description: "App 2",
      route: "/apps/weather",
    },
    { title: "App 3", description: "App 3", route: "/apps/weather" },
    { title: "App 4", description: "App 4", route: "/apps/weather" },
    { title: "App 5", description: "App 5", route: "/apps/weather" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="grid grid-cols-3 gap-8">
        {apps.map((item) => (
          <Card
            className="w-[300px] rounded-xl transition-all hover:scale-110 hover:cursor-pointer"
            onClick={() => push(item.route)}
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
