"use client";
import { useState } from "react";
import AlbumGrid from "@/components/AlbumGrid";
import AlbumRowList from "@/components/AlbumRowList";

export default function AlbumList() {
  const [isGrid, setIsGrid] = useState(false);
  // default to true but using false for testing purposes

  function onGridToggle() {
    setIsGrid(!isGrid);
  }

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <button
        className="absolute right-0 top-0 z-50 m-12 size-10 rounded-full border-4 border-accent-3 bg-accent-2"
        onClick={onGridToggle}
      />
      {isGrid ? (
        <div className="m-16 w-[42vw] items-center justify-center overflow-visible">
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
