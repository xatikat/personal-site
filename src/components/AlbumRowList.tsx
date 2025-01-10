import { albumsData } from "@/components/AlbumData";
import AlbumRow from "@/components/ui/AlbumRow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCoverflow, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/effect-coverflow";
import "swiper/css/keyboard";

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
      className="absolute top-0 mx-auto h-screen w-screen select-none overflow-visible"
      modules={[Mousewheel, EffectCoverflow, Keyboard]}
      direction={"vertical"}
      effect={"coverflow"}
      spaceBetween={-100}
      slidesPerView={5}
      coverflowEffect={{
        scale: 0.8,
        depth: 600,
        modifier: 0.4,
        slideShadows: false,
        stretch: -500,
      }}
      keyboard={{ enabled: true }}
      loop={true}
      mousewheel={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {albumsData.map((album) => (
        <SwiperSlide className="px-[20vw]" key={album.id}>
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
