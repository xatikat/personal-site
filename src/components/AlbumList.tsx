"use client";
import AlbumGrid from "@/components/AlbumGrid";
import AlbumRowList from "@/components/AlbumRowList";
import { Button } from "@/components/ui/button";
import { Grid3x3, Rows3 } from "lucide-react";

import { useAtom } from "jotai";
import { isGridAtom } from "@/atoms/view";

export default function AlbumList() {
  const [isGrid, setIsGrid] = useAtom(isGridAtom);
  // default to true but using false for testing purposes

  function onGridToggle() {
    setIsGrid((prev) => !prev);
  }

  return (
    <div
      className={
        "relative flex h-screen w-full flex-col items-center overflow-scroll bg-gradient-to-r from-background via-dark-accent to-background"
      }
    >
      <Button
        variant="default"
        className="fixed right-0 top-0 z-50 m-10 size-10 bg-dark-accent transition-all duration-100 active:scale-90"
        onClick={onGridToggle}
      >
        {isGrid ? <Rows3 size={20} /> : <Grid3x3 size={20} />}
      </Button>
      {isGrid ? (
        <div className="m-16 w-[42vw]">
          <AlbumGrid />
        </div>
      ) : (
        <div className="h-full w-full">
          <AlbumRowList />
        </div>
      )}
    </div>
  );
}
