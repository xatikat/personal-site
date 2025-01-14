import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AlbumRow({
  id,
  imageName,
  title,
  artist,
  year,
  imageSize,
}: {
  key: number;
  id: number;
  imageName: string;
  title: string;
  artist: string;
  year: number;
  imageSize: number;
}) {
  return (
    <motion.div
      className="overflow-visible"
      style={{ scale: 1.15 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 1.1,
        filter: "brightness(85%)",
      }}
    >
      <Link
        className="group-albumrow transition-all duration-200"
        href={"/album/" + id}
        draggable={false}
      >
        <div className="border- flex items-center gap-4 overflow-hidden border-amber-100 p-10 sm:gap-4 md:flex-row md:justify-center md:gap-6 lg:gap-10">
          <div className="absolute -z-50 w-[48vw] border-4 border-accent-2 bg-accent-1 py-[5vh] align-middle transition-all duration-500 sm:w-[50vw] sm:py-[5vh] md:m-20 md:w-[40vw] md:py-[5vh]"></div>
          <Image
            className="scale-[80%] rounded-xl transition-all duration-500 sm:ml-[4vw] sm:scale-90 md:ml-[9vw] md:scale-100"
            src={"/" + imageName}
            alt={title + " by " + artist}
            height={imageSize}
            width={imageSize}
            unoptimized={false}
            draggable={false}
          />

          <div className="flex w-full flex-row items-center justify-between text-wrap transition-all duration-500 md:justify-normal">
            <div className={"flex flex-col gap-y-2"}>
              <p className="text-wrap pr-10 text-sm font-bold transition-all duration-500 sm:text-sm md:text-[1.5vw]">
                {title}
              </p>
              <p className="text-wrap text-xs transition-all duration-500 sm:text-xs md:text-[1.3vw]">
                {artist} ({year})
              </p>
            </div>
          </div>

          <div className={"right-0"}>
            <div></div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
