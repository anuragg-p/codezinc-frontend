"use client"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import styles from "../styles/home.module.css"
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { push } = useRouter();
  
  const apps = [
    { title: "Games App", description: "Games App", route: "/apps/games", content: "Content", footer: "footer message" },
    { title: "Msnger App", description: "Messanger App", route: "/apps/messanger", content: "Content", footer: "footer message" },
    { title: "Weather App", description: "Weather App", route: "/apps/weather", content: "Content", footer: "footer message" },
    { title: "Games App", description: "Games App", route: "/apps/games", content: "Content", footer: "footer message" },
    { title: "Msnger App", description: "Messanger App", route: "/apps/messanger", content: "Content", footer: "footer message" },
    { title: "Weather App", description: "Weather App", route: "/apps/weather", content: "Content", footer: "footer message" },
  ];

  return (
    <main className={styles.main}>
      <h4 className={styles.card_box_heading}>Apps</h4>
      <div className={styles.cards_container}>
        {apps.map((item, index) => (
          <Card className={styles.cards} key={index} onClick={() => push(item.route)}>
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
