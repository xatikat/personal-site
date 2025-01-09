import { albumsData } from "@/components/AlbumData";
import { notFound } from "next/navigation";
import BackButton from "@/app/BackButton";
import AlbumImage from "@/components/ui/AlbumImage";
import Image from "next/image";

function getAlbum(id: string | string[] | undefined) {
  if (typeof id === "string") {
    const albumId: number = Number.parseInt(id);

    return albumsData.find((album) => album.id === albumId);
  }
  return null;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const album = getAlbum(slug);

  // check if any album was returned
  if (!album) {
    return notFound();
  }

  return (
    <div>
      <Image
        className={"absolute object-fill blur-3xl brightness-50"}
        objectFit={"cover"}
        fill
        src={"/" + album.cover_file}
        alt={""}
        draggable={false}
      />
      <div
        className={`grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20`}
      >
        <div className="relative top-10 text-center">
          <h1 className="text-5xl font-bold">{album.name}</h1>
          <h1 className="text-3xl">{album.artist}</h1>
        </div>

        <main className="flex flex-row items-center justify-around">
          <div className="">
            <AlbumImage imageName={album.cover_file} altText={album.name} />
          </div>

          <div className="flex max-w-[50%] flex-col">
            <p className={"text-xl"}>{album.description}</p>
            <p className={"text-xl"}></p>
          </div>
        </main>
      </div>

      <BackButton />

      <div className="absolute right-0 top-0 m-20 flex flex-row items-center justify-between gap-10"></div>
    </div>
  );
}
