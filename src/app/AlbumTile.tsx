import Image from 'next/image';
import Link from "next/link";

function AlbumTile({ id, imageName, altText, size }: { key: number, id: number, imageName: string, altText: string, size: number}) {
    return (
        <Link className="active:scale-[80%] duration-200 transition-all" href={"/album/" + id} draggable={false}>
            <div className="group/album-tiles flex items-center justify-center relative select-none">
                <div
                    className="
                    flex flex-grow items-center justify-center
                    group-hover/album-tiles:scale-110
                    duration-500 transition-all
                    "
                >
                    <div
                        className=" absolute p-[50%]
                        rounded-2xl bg-accent-2 scale-100
                        group-hover/album-tiles:brightness-150
                        duration-500 transition-all
                        "
                    />
                    <Image
                        className="rounded-lg scale-90
                        active:brightness-75
                        duration-200 transition-all"
                        src={"./" + imageName}
                        alt={altText}
                        width={size}
                        height={size}
                        unoptimized={true}
                        draggable={false}
                    />
                </div>

            </div>
        </Link>
    )
}

export default AlbumTile;