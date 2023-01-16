import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
const SportNav = ({top=12, show=true }) => {
const [cart, setCart] = useState(0);
const [visible, setVisible] = useState(false)
useEffect(() => {
  getCart()
}, [])
const getCart = ()=>{
  axios.get(`https://mercury-breezy-cave.glitch.me/cart`).then((res)=>setCart(res.data.length))
}

  const navitems = [
    "Men",
    "Women",
    "Cardio",
    "Cycles",
    "accessories",
    "Supplements",
    "Equipments",
  ];
  return (
    <Box zIndex='90' h="10" bg='white' display='flex' shadow='base'top={`${top}`} left='0' right='0' position='fixed' >
      <Flex
        fontSize="xs"
        m="auto"
        w="40%"
        justify={"space-between"}
        h="100%"
        align="center"
        fontWeight="semibold"
        display={{lg:'flex',base:"none" }}
      >
        {navitems.map((el, id) => {
          let link = el.toLowerCase()
          return(<Box key={id}>
          <NavLink to={`/${link}`} >{el}</NavLink>
        </Box>
        )})
                
        }
      </Flex>
      {
        show?
        <Box h='100%' ml='4' display='flex' justifyContent={'center'} alignItems='center' position='absolute' cursor='pointer' >
          <Box fontWeight={'bold'} mr='20px' display={{lg:'none'}} onClick={()=>setVisible(val=>!val)} > Menu</Box>
        <NavLink to='/store' >
        <Image w='120px' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg' /></NavLink></Box>:<Box fontWeight={'bold'} mt='6px' mr='20px' display={{lg:'none'}} onClick={()=>setVisible(val=>!val)} > Menu</Box>
  }


   {
   show?<Box position={'absolute'} rounded='full' right='6' h='100%' textAlign='center' cursor='pointer' >
      <NavLink to='/cart' >
    <Image h='100%' src='https://cdn.iconscout.com/icon/premium/png-128-thumb/basket-1956913-1650879.png' />
      </NavLink>
      <Box w='4' h='4' position='absolute' color="#f83f46" rounded={'full'} fontWeight='bold' right='-1' bottom='1' >
      <Text >{cart}</Text>
      </Box>
    </Box> :"" }
    <Box pb={4} w='fit-content' pl='5' pr='10'  display={{ lg: 'none',base:`${visible?"block":"none"}` }} left='0' background='white' position="absolute" top='10' >
            <Stack as={'nav'} spacing={4}>
            {navitems.map((el, id) => {
          let link = el.toLowerCase()
          return(<Box key={id}>
          <NavLink to={`/${link}`} >{el}</NavLink>
        </Box>
        )})
        }
            </Stack>
          </Box>
    </Box>
  );
};

export default SportNav;
