"use client"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  
  const apps = [
    { title: "Games App", description: "Games App", route: "/apps/games", content: "Content", footer: "footer message" },
    { title: "Msnger App", description: "Messanger App", route: "/apps/messanger", content: "Content", footer: "footer message" },
    { title: "Weather App", description: "Weather App", route: "/apps/weather", content: "Content", footer: "footer message" },
    { title: "Games App", description: "Games App", route: "/apps/games", content: "Content", footer: "footer message" },
    { title: "Msnger App", description: "Messanger App", route: "/apps/messanger", content: "Content", footer: "footer message" },
    { title: "Weather App", description: "Weather App", route: "/apps/weather", content: "Content", footer: "footer message" },
  ];

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white px-[20%]">
      <h4 className="text-[#FB773C] text-lg font-medium self-start pl-8">Apps</h4>
      <div className="grid grid-cols-5 gap-8 bg-gradient-to-t from-[#392e6d] to-[#23038e] p-6 border-4 border-[#405D72] shadow-inner shadow-black/50 rounded-[3cap]">
        {apps.map((item, index) => (
          <Card 
          className="h-[250px] w-[200px] text-[#F7E7DC] bg-[#405D72] border-3 border-[#758694] rounded-[3cap] shadow-md shadow-black/40 
          transition-transform transform hover:scale-110 hover:rounded-[3ch] cursor-pointer" 
          key={index} onClick={() => router.push(item.route)}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>{item.content}</CardContent>
          <CardFooter>{item.footer}</CardFooter>
        </Card>
        ))}
      </div>
    </main>
  );
}
