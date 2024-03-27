"use client";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
export default function Home() {
  return (
  <main className="p-5" >
    <section className="bg-white flex flex-row justify-between">
      <div className="flex flex-col text-black">
        <h3 className="text-xs mt-6">Explore</h3>
        <h1 className="text-3xl">Aspen</h1>
      </div>
      <div className="flex flex-row justify-end space-x-2">
        <img src="/location.svg" />
        <h3 className="text-grey text-xs mt-7" >Aspen, USA</h3>
        <img src="/arrow.svg" />
      </div>
    </section>

    <section className="bg-babyblue pt-8 relative">
      <img className="absolute pt-3 pl-4" src="/search.svg" />
      <input type="text" placeholder="Find things to do" className="bg-blue-50 px-12 py-3 
  w-full rounded-full" />
    </section>

    <Swiper className="my-10 text-gray-400" spaceBetween={50} slidesPerView={4.2}>
      <SwiperSlide className="tag-menu active">Location</SwiperSlide>
      <SwiperSlide className="tag-menu">Hotels</SwiperSlide>
      <SwiperSlide className="tag-menu">Food</SwiperSlide>
      <SwiperSlide className="tag-menu">Adventure</SwiperSlide>
      <SwiperSlide className="tag-menu">Adventure</SwiperSlide>
    </Swiper> 

    <h2 className="text-lg">Popular</h2>
    <img className="pt-3" src="/alley.svg" />
    <h2 className="text-lg pt-8">Recommended</h2>
    <section className="flex flex-row space-x-10">
      <img className="pt-3" src="/explore.svg" />
      <img className="pt-3" src="/luxurious.svg" />
    </section>

    
  </main>
  );
}