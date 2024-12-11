"use client";

import { ComboBox } from "@/components/ComboBox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LocalStorage } from "@/lib/LocalStorage";
import { cn } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const VID_URL = "https://vidsrc.in/embed";
const STORAGE_KEY = "imdbTvShowsAndMovies";

interface Show {
  title: string;
  imdbId: string;
  type: "tv" | "movie";
}

const imdbMoviesAndTvShows: Show[] = [
  {
    title: "Malcom In the Middle",
    imdbId: "tt0212671",
    type: "tv",
  },
];

export default function WeatherPage() {
  const storage = new LocalStorage();
  const router = useRouter();
  const [addingShow, setAddingShow] = useState(false);

  const [name, setName] = useState("");
  const [imdbId, setImdbId] = useState("");
  const [showType, setShowType] = useState<Show["type"]>("tv");
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const tvShowsAndMovies = storage.get(STORAGE_KEY) || [];
    setShows([...imdbMoviesAndTvShows, ...tvShowsAndMovies]);
  }, []);

  const addNewShow = () => {
    if (!window || !name || !imdbId) return;

    const newShow: Show = { title: name, imdbId, type: showType };
    const updatedShows = [...shows, newShow];

    setShows(updatedShows);
    storage.set(STORAGE_KEY, updatedShows);

    setName("");
    setImdbId("");
    setAddingShow(false);
  };

  const removeShow = (title: string) => {
    const updatedShows = shows.filter((item) => item.title !== title);
    setShows(updatedShows);
    storage.set(STORAGE_KEY, updatedShows);
  };

  return (
    <main className="flex flex-wrap gap-10 py-[10%]">
      <Card
        className={cn(
          "border-3 bg-card-default h-[200px] w-[250px] transform rounded-xl border border-[#758694] text-[#F7E7DC] shadow-md shadow-black/40 transition-transform hover:scale-110",
          { "h-[280px] w-[300px]": addingShow },
        )}
        onClick={() => setAddingShow(true)}
      >
        {!addingShow && (
          <CardHeader>
            <CardTitle>Add a Show</CardTitle>
          </CardHeader>
        )}
        {addingShow && (
          <CardContent>
            <h2>Name</h2>
            <Input
              name="Show name"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
            <h2>IMDB ID</h2>
            <Input
              name="IMDB Id"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImdbId(e.target.value)
              }
              value={imdbId}
            />
            <h2>Type</h2>
            <ComboBox
              options={[
                { label: "TV", value: "tv" },
                { label: "Movie", value: "movie" },
              ]}
              value={showType}
              onValueChange={(value: Show["type"]) => setShowType(value)}
            />

            <div className="my-4 flex justify-between">
              <Button
                type="button"
                variant="secondary"
                className="rounded-[8px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setAddingShow(false);
                }}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                size="sm"
                className="rounded-[8px] p-3"
                onClick={() => addNewShow()}
              >
                Save
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
      {shows.map((item, index) => (
        <Card
          className="border-3 bg-card-default relative h-[200px] w-[250px] transform cursor-pointer rounded-xl border border-[#758694] text-[#F7E7DC] shadow-md shadow-black/40 transition-transform"
          key={index}
          onClick={() =>
            window.open([VID_URL, item.type, item.imdbId].join("/"), "_blank")
          }
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <div
            className="absolute right-2 top-2 hover:font-bold"
            onClick={(e) => {
              e.stopPropagation();
              removeShow(item.title);
            }}
          >
            <TrashIcon color="red" />
          </div>
        </Card>
      ))}
    </main>
  );
}
