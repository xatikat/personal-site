import Image from "next/image";

//TODO: FIX THE BRIGHTNESS

function AlbumImage({
  imageName,
  altText,
}: {
  imageName: string;
  altText: string;
}) {
  return (
    <div className="group/album-tiles relative flex select-none items-center justify-center transition-all duration-300 sm:w-36 md:w-52 lg:w-60 xl:w-80">
      <div className="scale-100 rounded-2xl bg-accent-2 transition-all duration-500 group-hover/album-tiles:scale-105 group-hover/album-tiles:brightness-150">
        <Image
          className="scale-90 rounded-lg"
          src={"/" + imageName}
          alt={altText}
          width={700}
          height={700}
          unoptimized={true}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default AlbumImage;
