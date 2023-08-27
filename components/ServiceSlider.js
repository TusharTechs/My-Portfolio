// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper sty;es
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// required modules
import { FreeMode, Pagination } from "swiper";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Crafting brand identities that resonate, merging creativity with strategic thinking to establish lasting impressions.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Creating captivating designs, where creativity meets user-centric aesthetics for memorable experiences.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Building seamless digital solutions through code and innovation, turning concepts into functional realities.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Optimizing online presence with technical finesse, elevating visibility and user engagement through effective SEO.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMode, Pagination }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
