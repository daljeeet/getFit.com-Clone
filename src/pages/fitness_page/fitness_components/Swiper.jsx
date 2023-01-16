// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import {Image, Box} from '@chakra-ui/react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Swipe= ({slides,count=4}) => {
   
  return (
    <Swiper
        className='mySwiper'
        modules={[Pagination, Navigation]}
        navigation={true}
       spaceBetween={20}
       loop={true}
       slidesPerView={count}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      >
        {
            slides.map((el,id)=><SwiperSlide key={id} > 
                <Image _hover={{boxShadow:'2xl',rounded:'md'}} cursor='pointer' src={el.image} />
                 </SwiperSlide>)
        }
    </Swiper>
  );
};

export default Swipe;