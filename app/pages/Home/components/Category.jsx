import SectionTitle from "../../../components/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import feturedImg1 from "../../../../public/assets/home/slide1.jpg";
import feturedImg2 from "../../../../public/assets/home/slide2.jpg";
import feturedImg3 from "../../../../public/assets/home/slide3.jpg";
import feturedImg4 from "../../../../public/assets/home/slide4.jpg";
import feturedImg5 from "../../../../public/assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="my-20 max-w-5xl mx-auto">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      />

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="relative w-full">
              <img
                src={feturedImg1}
                alt="Overlay Image"
                class="w-full h-full object-cover"
              />

              <div class="absolute inset-0 bg-black opacity-25"></div>

              <div class="absolute inset-0 flex items-end justify-center text-white text-2xl py-6 font-cinzel uppercase">
                Salads
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full">
              <img
                src={feturedImg2}
                alt="Overlay Image"
                class="w-full h-full object-cover"
              />

              <div class="absolute inset-0 bg-black opacity-25"></div>

              <div class="absolute inset-0 flex items-end justify-center text-white text-2xl py-6 font-cinzel uppercase">
                Pizzas
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full">
              <img
                src={feturedImg3}
                alt="Overlay Image"
                class="w-full h-full object-cover"
              />

              <div class="absolute inset-0 bg-black opacity-25"></div>

              <div class="absolute inset-0 flex items-end justify-center text-white text-2xl py-6 font-cinzel uppercase">
                Soups
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full">
              <img
                src={feturedImg4}
                alt="Overlay Image"
                class="w-full h-full object-cover"
              />

              <div class="absolute inset-0 bg-black opacity-25"></div>

              <div class="absolute inset-0 flex items-end justify-center text-white text-2xl py-6 font-cinzel uppercase">
                Desserts
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full">
              <img
                src={feturedImg5}
                alt="Overlay Image"
                class="w-full h-full object-cover"
              />

              <div class="absolute inset-0 bg-black opacity-25"></div>

              <div class="absolute inset-0 flex items-end justify-center text-white text-2xl py-6 font-cinzel uppercase">
               Salads
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
