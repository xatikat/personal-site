import Image from 'next/image';

//TODO: FIX THE BRIGHTNESS

function AlbumImage({ imageName, altText }: { imageName: string, altText: string }) {
    return (
        <div className="group/album-tiles flex items-center justify-center relative select-none">
            <div
                className="rounded-2xl bg-accent-2 scale-100
                    group-hover/album-tiles:brightness-150 group-hover/album-tiles:scale-105
                    duration-500 transition-all">
                <Image
                    className="rounded-lg scale-90"
                    src={"/" + imageName}
                    alt={altText}
                    width={700}
                    height={700}
                    unoptimized={true}
                    draggable={false}
                />
            </div>
        </div>
    )
}

export default AlbumImage;