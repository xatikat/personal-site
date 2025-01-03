import {albumsData} from "@/app/AlbumData";
import { notFound } from 'next/navigation'
import BackButton from "@/app/BackButton";
import AlbumImage from "@/app/AlbumImage";
import Image from "next/image";

function getAlbum(id: string | string[] | undefined){
    if (typeof id === "string") {
        const albumId: number = Number.parseInt(id);

        return albumsData.find(album => album.id === albumId);
    }
    return null;
}

export default async function Page(
    {
        params,
    }: {
        params: Promise<{slug: string}>
    })
{

    const slug = (await params).slug
    const album = getAlbum(slug);

    // check if any album was returned
    if (!album) {
        return notFound()
    }

    return (
        <div>
            <Image
                className={"object-fill blur-3xl absolute brightness-50"}
                objectFit={"cover"}
                fill
                src={'/' + album.cover_file}
                alt={""}
                draggable={false}
            />
            <div className={` 
            grid grid-rows-[20px_1fr_20px] items-center justify-items-center
            min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
            >

                <div className="text-center relative top-10">
                    <h1 className="text-5xl font-bold">{album.name}</h1>
                    <h1 className="text-3xl">{album.artist}</h1>
                </div>

                <main className="flex flex-row items-center justify-around">

                    <div className="">
                        <AlbumImage
                            imageName={album.cover_file} altText={album.name}
                        />
                    </div>

                    <div className="flex flex-col max-w-[50%]">
                        <p className={"text-xl"}>{album.description}</p>
                        <p className={"text-xl"}></p>
                    </div>

                </main>

            </div>


            <BackButton/>

            <div
                className="flex flex-row items-center justify-between
                top-0 right-0 absolute gap-10 m-20"
            >

            </div>
        </div>
    );
}