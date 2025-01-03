import { albumsData } from "./AlbumData";
import AlbumTile from "@/app/AlbumTile";

export default function AlbumList() {
    const listAlbums = albumsData.map(album =>
        <AlbumTile
            key={album.id}
            id={album.id}
            imageName={album.cover_file}
            altText={album.name + " by " + album.artist}
            size={300}
        />
    );

    return (<div className="grid grid-cols-3 gap-16 items-center overflow-visible">{listAlbums}</div>);
}
