import { albumsData } from "@/components/AlbumData";
import AlbumRow from "@/components/ui/AlbumRow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/effect-coverflow";

// TODO: add row component

export default function AlbumRowList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const listAlbums = albumsData.map((album) => (
    <AlbumRow
      key={album.id}
      id={album.id}
      imageName={album.cover_file}
      title={album.name}
      artist={album.artist}
      imageSize={150}
    />
  ));
  return albumsData ? (
    <Swiper
      className="absolute top-0 h-[100vh] w-[48vw] select-none overflow-visible"
      modules={[Mousewheel, EffectCoverflow]}
      direction={"vertical"}
      effect={"coverflow"}
      spaceBetween={-100}
      slidesPerView={3}
      coverflowEffect={{ scale: 0.5 }}
      loop={true}
      mousewheel={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {albumsData.map((album) => (
        <SwiperSlide key={album.id}>
          <AlbumRow
            key={album.id}
            id={album.id}
            imageName={album.cover_file}
            title={album.name}
            artist={album.artist}
            imageSize={150}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
}
