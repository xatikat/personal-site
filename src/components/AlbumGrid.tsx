import { albumsData } from "@/components/AlbumData";
import AlbumTile from "@/components/ui/AlbumTile";

export default function AlbumGrid() {
  const listAlbums = albumsData.map((album) => (
    <AlbumTile
      key={album.id}
      id={album.id}
      imageName={album.cover_file}
      altText={album.name + " by " + album.artist}
      imageSize={300}
    />
  ));
  return (
    <div className="grid grid-cols-2 items-center gap-0 overflow-visible transition-all duration-300 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3 xl:gap-16">
      {listAlbums}
    </div>
  );
}
