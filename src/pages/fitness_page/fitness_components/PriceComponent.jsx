import {
  Box,
  Button,
  List,
  Heading,
  Image,
  Text,
  ListItem,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { HomeText } from "../../../components/FancyWrds";
const PriceComponent = () => {
  const pricing = [
    {
      rate: "₹ 2799",
      perMonth: "117 per month",
      features:"+ Only Today: Free Amazon woucher worth...",
      months: "MONTHS",
      duration: "24",
    },
    {
      rate: "₹ 1899",
      perMonth: "158 per month",
      features:"+ Only Today: Free Amazon woucher worth...",
      months: "MONTHS",
      duration: "12",
    },
    {
      rate: "₹ 1399",
      perMonth: "233 per month",
      features:"+ get FREE 3 Months extension",
      months: "MONTHS",
      duration: "6",
    },
    {
      rate: "₹ 1099",
      perMonth: "366 per month",
      features: "+ Get FREE 2 months extension",
      months: "MONTHS",
      duration: "3",
    },{
      rate:"Free Trial",
          perMonth:"",
          features:"",
          months:"DAYS",
          duration:"7",
    }   
  ];

  return (
    <Box w="100%" m="auto" display="block">
      <Box
        display="flex"
        flexDirection="column"
        w="50%"
        m="auto"
        alignItems="center"
      >
        <Box display="flex">
          <Heading mr="4">cultpass </Heading>
          <HomeText />
        </Box>
        <Box display="flex" mt="10">
          <Box>
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_70,h_70,q_auto:eco,dpr_1,r_max,f_auto,fl_progressive/image/vm/4c057205-db5c-459d-ad4a-aa2af3d9154a.png" />
            <Text fontWeight="semibold" fontSize="sm">
              Fresh
            </Text>
            <Text fontWeight="semibold" fontSize="sm">
              workout
            </Text>
            <Text fontWeight="semibold" fontSize="sm">
              everyday
            </Text>
          </Box>
          <Box mx="10">
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_70,h_70,q_auto:eco,dpr_1,r_max,f_auto,fl_progressive/image/vm/e1b80aec-a8c4-4d3a-ae79-aeea9ea81b10.png" />
            <Text fontWeight="semibold" fontSize="sm">
              Energy meter
            </Text>
            <Text fontWeight="semibold" fontSize="sm">
              to track
            </Text>
            <Text fontWeight="semibold" fontSize="sm">
              calories
            </Text>
          </Box>
          <Box>
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_70,h_70,q_auto:eco,dpr_1,r_max,f_auto,fl_progressive/image/vm/fea27fd6-db2d-4643-826a-32d6f7710e6a.png" />
            <Text fontWeight="semibold" fontSize="sm">
              Track progress
            </Text>
            <Text fontWeight="semibold" fontSize="sm">
              with weekly
            </Text>
            <Text fontWeight="semibold" fontSize="sm">
              reports
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
      <Swiper
        className='mySwiper'
        modules={[Navigation]}
        navigation={true}
       spaceBetween={10}
       slidesPerView={3}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      >
        {
            pricing.map((el,id)=><SwiperSlide key={id}> 
                <Box
      position="relative"
      px="4"
      rounded="xl"
      cursor="pointer"
      textAlign="center"
      bgGradient="linear(to-t, RGBA(53,55,74, 0.6), gray.800 )"
      _hover={{bgGradient:"linear(to-b, gray.800, RGBA(53,55,74))"}}
    >
      <Box display="flex" justifyContent="space-around"  my="6">
        <Box>
          <Heading>{el.duration}</Heading>
          <Text fontWeight="semibold">{el.months}</Text>
        </Box>
        <Box>
          <Heading bgGradient="linear(to-l, purple, pink)" bgClip="text">
            {" "}
            {el.rate}{" "}
          </Heading>
          <Text fontWeight="semibold" fontSize="sm">
            {el.perMonth}
          </Text>
        </Box>
      </Box>
      <hr />
      <Box fontWeight="semibold" h='160px' fontSize="sm" w="90%" m="auto" my="10">
        <List>
          <ListItem>{el.features} </ListItem>
        </List>
      </Box>
      <Button
        color="red.500"
        h="35px"
        fontSize="sm"
        fontWeight="bold"
        position="absolute"
        bottom="4%"
        left="35%"
      >
        BUY NOW
      </Button>
    </Box>
                 </SwiperSlide>)
        }
    </Swiper>
      </Box>
    </Box>
  );
};

export default PriceComponent;

// export const PriceCard = ({  }) => {
//   const { one, two, three } = features;
//   return (
//     <Box
//       position="relative"
//       px="4"
//       rounded="xl"
//       cursor="pointer"
//       textAlign="center"
//       bgGradient="linear(to-b, RGBA(53,55,74, 0.6), gray.800 )"
//     >
//       <Box display="flex" justifyContent="space-around" my="6">
//         <Box>
//           <Heading>{duration}</Heading>
//           <Text fontWeight="semibold">{months}</Text>
//         </Box>
//         <Box>
//           <Heading bgGradient="linear(to-l, pink, purple)" bgClip="text">
//             {" "}
//             {rate}{" "}
//           </Heading>
//           <Text fontWeight="semibold" fontSize="sm">
//             {perMonth}
//           </Text>
//         </Box>
//       </Box>
//       <hr />
//       <Box fontWeight="semibold" fontSize="sm" w="90%" m="auto" my="6">
//         <List>
//           <ListItem>{one} </ListItem>
//           <ListItem>{two} </ListItem>
//           <ListItem>{three} </ListItem>
//         </List>
//       </Box>
//       <Button
//         color="red.500"
//         h="35px"
//         fontSize="sm"
//         fontWeight="bold"
//         position="absolute"
//         bottom="4%"
//         left="35%"
//       >
//         BUY NOW
//       </Button>
//     </Box>
//   );
// };
