import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper";

export default function FullSlider({arr}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            arr.map((el,id)=><SwiperSlide key={id}>
                <Image  src={el} />
            </SwiperSlide>)
        }
        
      </Swiper>
    </>
  );
}
