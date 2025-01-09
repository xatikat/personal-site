import Image from "next/image";
import Link from "next/link";

//sm:w-36 md:w-48 lg:w-60 xl:w-80

function AlbumTile({
  id,
  imageName,
  altText,
  imageSize,
}: {
  key: number;
  id: number;
  imageName: string;
  altText: string;
  imageSize: number;
}) {
  return (
    <Link
      className="transition-all duration-200 active:scale-[80%]"
      href={"/album/" + id}
      draggable={false}
    >
      <div className="group/album-tiles relative flex select-none items-center justify-center transition-all duration-300">
        <div className="flex flex-grow scale-100 items-center justify-center transition-all duration-300 group-hover/album-tiles:scale-110">
          <div className="absolute scale-100 rounded-2xl bg-accent-2 transition-all duration-300 group-hover/album-tiles:brightness-150" />
          <Image
            className="rounded-lg transition-all duration-300 active:brightness-75"
            src={"./" + imageName}
            alt={altText}
            width={imageSize}
            height={imageSize}
            unoptimized={true}
            draggable={false}
          />
        </div>
      </div>
    </Link>
  );
}

export default AlbumTile;
