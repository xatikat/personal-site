import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AlbumRow({
  id,
  imageName,
  title,
  artist,
  imageSize,
}: {
  key: number;
  id: number;
  imageName: string;
  title: string;
  artist: string;
  imageSize: number;
}) {
  return (
    <motion.div className="overflow-visible" whileHover={{ scale: 1.1 }}>
      <Link
        className="group-albumrow transition-all duration-200 active:brightness-105"
        href={"/album/" + id}
        draggable={false}
      >
        <div className="flex flex-col items-center gap-10 overflow-hidden rounded-3xl border-10 border-accent-2 bg-accent-1 p-10 transition-all duration-300 sm:flex-col md:flex-row">
          <Image
            className="scale-100 rounded-xl"
            src={"/" + imageName}
            alt={title + " by " + artist}
            height={imageSize}
            width={imageSize}
            unoptimized={false}
            draggable={false}
          />
          <div className={"flex flex-col"}>
            <p className="text-3xl font-bold">{title}</p>
            <p className={"text-2xl"}>{artist}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
