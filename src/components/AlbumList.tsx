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
        "flex h-screen flex-col items-center justify-center overflow-y-auto"
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
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-visible">
          <AlbumRowList />
        </div>
      )}
    </div>
  );
}
