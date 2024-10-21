"use client"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import styles from "../styles/home.module.css"

export default function HomePage() {
  
  const apps = [
    { title: "App 0", description: "This is App 0", route: "/apps/weather", content: "whatever!", footer: "footer message" },
    { title: "App 1", description: "This is App 1", route: "/apps/weather", content: "whatever!", footer: "footer message" },
    { title: "App 2", description: "This is App 2", route: "/apps/weather", content: "whatever!", footer: "footer message" },
    { title: "App 3", description: "This is App 3", route: "/apps/weather", content: "whatever!", footer: "footer message" },
    { title: "App 4", description: "This is App 4", route: "/apps/weather", content: "whatever!", footer: "footer message" },
    { title: "App 5", description: "This is App 5", route: "/apps/weather", content: "whatever!", footer: "footer message" },
  ];

  return (
    <main className={styles.main}>
      <h4 className={styles.card_box_heading}>Apps</h4>
      <div className={styles.cards_container}>
        {apps.map((item, index) => (
          <Card className={styles.cards} key={index}>
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
