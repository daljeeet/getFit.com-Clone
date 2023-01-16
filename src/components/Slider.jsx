// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Slider = ({ arr, count=4 }) => {
  const [screen, setScreen ] = useState(0)
  useEffect(() => {
    window.addEventListener("scroll",()=>{setScreen(window.innerWidth)})
  }, [])
  console.log(screen)
  if(screen<1120){
    count = 3
  }
  if(screen<880){
    count=2
  }
  if(screen<600){
    count=1
  }
  return (
    <Box w="100%" p="2" border='2'>
      <Swiper
        slidesPerView={count}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {arr.map((el) => (
          <SwiperSlide key={el.id}>
            <Box
              cursor="pointer"
              w="260px"
              shadow="base"
              rounded="xl"
              overflow="hidden"
            >
              <Image src={el.src} />
              <Box>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                  {el.brand}
                </Text>
                <Text fontWeight="semibold">{el.title}</Text>
              </Box>
              <Flex>
                <Text fontWeight="bold">₹{el.price}</Text>
                <Text
                  fontWeight="semibold"
                  color="gray.700"
                  mx="4"
                  textDecoration="line-through"
                >
                  {el.original_price}
                </Text>
                <Text color="pink.300" fontWeight="bold">
                  {el.off}
                </Text>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
