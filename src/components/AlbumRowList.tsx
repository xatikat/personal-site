"use client";
import { albumsData } from "@/components/AlbumData";
import AlbumRow from "@/components/ui/AlbumRow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCoverflow, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/effect-coverflow";
import "swiper/css/keyboard";

export default function AlbumRowList() {
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
        depth: 400,
        modifier: 0.4,
        rotate: -30,
        slideShadows: false,
        stretch: -400,
      }}
      keyboard={{ enabled: true }}
      loop={true}
      mousewheel={true}
      //onSlideChange={(swiper) => {}}
      //onSwiper={(swiper) => {}}
    >
      {albumsData.map((album) => (
        <SwiperSlide className="px-[20vw]" key={album.id}>
          <AlbumRow
            key={album.id}
            id={album.id}
            imageName={album.cover_file}
            title={album.name}
            artist={album.artist}
            year={album.year}
            imageSize={150}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
}
