<template>
  <main>
    
    <!-- banner -->
    <section>
      <div>
        <swiper
          :modules="modules"
          :navigation="true"
          :pagination="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :slides-per-view="1"
          :space-between="0"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="relative lg:pt-28 lg:pb-44 py-14">
              <!-- bg -->
              <img
                alt="bg"
                src="../assets/img/slider2-bg.jpg"
                class="w-full h-full inset-0 absolute"
              />
              <!--  -->
              <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-y-8 sm:gap-8">
                  <div class="lg:col-span-7 col-span-12 relative">
                    <!-- play icon -->
                    <a
                      class="mb-16 w-20 h-20 lg:hidden rounded-full bg-white flex items-center justify-center cursor-pointer m-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="text-primary bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                        />
                      </svg>
                    </a>
                    <!--  -->
                    <h3
                      class="text-xl text-center lg:text-left font-bold text-white"
                    >
                      #1 Best It <span class="text-primary">Solution</span>
                    </h3>
                    <h1
                      class="text-center lg:text-left md:text-[55px] md:leading-[65px] text-2xl text-white font-bold"
                    >
                      Provide IT Solution <br />
                      & Business.
                    </h1>
                    <p
                      class="text-center lg:text-left text-2xl text-white mt-10 lg:max-w-[332px] w-full"
                    >
                      Businesses across every major industry to make ama
                      products and connect the dots.
                    </p>
                    <a
                      class="transition-all hover:bg-[#191f2d] mx-auto lg:mx-0 font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
                      >Discover More</a
                    >
                  </div>
                  <div class="lg:col-span-5 col-span-12 hidden lg:block">
                    <div class="relative">
                      <!-- play icon -->
                      <a
                        class="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer absolute inset-0 m-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="text-primary bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                          />
                        </svg>
                      </a>
                      <!--  -->
                      <img
                        alt="img"
                        src="../assets/img/slider-thumb-01.jpg"
                        class="w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative lg:pt-28 lg:pb-44 py-14">
              <!-- bg -->
              <img
                alt="bg"
                src="../assets/img/slider2-bg.jpg"
                class="w-full h-full inset-0 absolute"
              />
              <!--  -->
              <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-y-8 sm:gap-8">
                  <div class="lg:col-span-7 col-span-12 relative">
                    <!-- play icon -->
                    <a
                      class="mb-16 w-20 h-20 lg:hidden rounded-full bg-white flex items-center justify-center cursor-pointer m-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="text-primary bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                        />
                      </svg>
                    </a>
                    <!--  -->
                    <h3
                      class="text-xl text-center lg:text-left font-bold text-white"
                    >
                      #1 Best It <span class="text-primary">Solution</span>
                    </h3>
                    <h1
                      class="text-center lg:text-left md:text-[55px] md:leading-[65px] text-2xl text-white font-bold"
                    >
                      Provide IT Solution <br />
                      & Business.
                    </h1>
                    <p
                      class="text-center lg:text-left text-2xl text-white mt-10 lg:max-w-[332px] w-full"
                    >
                      Businesses across every major industry to make ama
                      products and connect the dots.
                    </p>
                    <a
                      class="transition-all hover:bg-[#191f2d] mx-auto lg:mx-0 font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
                      >Discover More</a
                    >
                  </div>
                  <div class="lg:col-span-5 col-span-12 hidden lg:block">
                    <div class="relative">
                      <!-- play icon -->
                      <a
                        class="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer absolute inset-0 m-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="text-primary bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                          />
                        </svg>
                      </a>
                      <!--  -->
                      <img
                        alt="img"
                        src="../assets/img/slider-thumb-01.jpg"
                        class="w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

        </swiper>
      </div>
    </section>

  </main>
</template>
  
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

export default {
  name: "Home-component",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
  
<style></style>