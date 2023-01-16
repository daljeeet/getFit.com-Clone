import { Box, Flex, Image, Text, Heading, Button,Spinner, Grid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SportNav from "../components/SportNav";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const navigate= useNavigate()
  useEffect(() => {
    getCartItems();
  }, [loading]);
useEffect(()=>{
    getTotal()
},[items])
const getTotal= ()=>{
if(items.length!==0){
    let tot = items.reduce((ac,el)=>ac+(+el.price*el.qnty),0)
    setTotal(tot)
}
}
  const getCartItems = async () => {
    axios
      .get(`https://mercury-breezy-cave.glitch.me/cart`)
      .then((res) => setItems(res.data));
  };
  const handleAdd = (id)=>{
    setLoading(true)
   let elem = items.filter((el)=>{
    if(el.id===id){
        return el
    }})
    elem[0].qnty=elem[0].qnty+1
    let element = elem[0]
    patchItem(element)
  }

  const patchItem = (el)=>{
    axios.patch(`https://mercury-breezy-cave.glitch.me/cart/${el.id}`,el).then((res)=>setLoading(false))
  }
const deleteItem = (el)=>{
    axios.delete(`https://mercury-breezy-cave.glitch.me/cart/${el.id}`,el).then((res)=>setLoading(false))
}
  const handleSub = (id)=>{
    setLoading(true)
    let elem = items.filter((el)=>{
        if(el.id===id){
            return el
        }})
        if(elem[0].qnty==1){
            deleteItem(elem[0])
        }else{
            elem[0].qnty=elem[0].qnty-1
            let element = elem[0]
            patchItem(element)
        }
  }
  return (
    <>
      <SportNav top="0" />
     {items.length===0?<Box mt='12' w='100%' h='96' textAlign='center' >
        <Heading mt='10%' fontSize='6xl' color='gray.500'>Your Cart is Empty</Heading>
        <NavLink to='/store' mt='10'>Go Back To Home</NavLink>
     </Box>
     
     :<Box w="70%" m="auto" h='100vh' overflowY='scroll' mt="12" position="relative">
        <Box>
        <Flex
          alignItems={"center"}
          w="70%"
          m="auto"
          right="0"
          left="0"
          justifyContent="space-between"
          position="fixed"
          bg='teal.50'
          px='10'
          py='2'
          >
          <Heading fontSize={{md:"2xl",base:"sm"}} color='#f83f46' >Your Cart</Heading>
          <Heading fontSize={{md:"2xl",base:"sm"}}>Cart Value {total}</Heading>
        </Flex>
          {
              items.map((el)=><Box key={el.id} >
        <Grid pt="20" templateColumns={{md:'repeat(2,1fr)',base:"repeat(1,1fr)"}} >
          <Box w={{md:"50%",base:"100%"}} p="0" pt="0">
            <Image
            width={'100%'}
              rounded="xl"
              border='1px'
              borderColor="#f83f46"
              src={el.src}
            />
          </Box>
          <Box w={{md:"50%",base:"100%"}} border='2px' p="4" textAlign="center">
            <Text fontSize="sm" fontWeight="semibold" color="#f83f46">
              {el.catagory}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.600">
              {el.brand}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" my="8" color="gray.600">
              {el.title}
            </Text>
            <Text fontWeight="bold" color='gray.700' >₹ {el.price}</Text>
            <Text mt='4' fontSize='sm' fontWeight='semibold'>select Quantity</Text>
            <Box
              border="2px"
              overflow="hidden"
              borderColor="#f83f46"
              w="40%"
              m="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              rounded="full"
            >
              <Button variant="outline" onClick={()=>handleSub(el.id)} >-</Button>
              {
                loading?<Spinner thickness='4px'speed='0.65s'emptyColor='gray.200'color='blue.500'size='xl'/>:<Text fontWeight="semibold" fontSize="xl">
                {el.qnty}
              </Text>
              
            }
              <Button variant="outline" onClick={()=>handleAdd(el.id)} >+</Button>
            </Box>
            <Text fontWeight='semibold' my='4' >₹ {+el.price*el.qnty}</Text>
          </Box>
        </Grid>
        </Box>
          )}
          <Box textAlign='center' my='10' >
            <Button variant='outline' bg="#f83f46" w='52' color='white' fontWeight={'bold'} _hover='' onClick={()=>{navigate('/payments')}} >Checkout</Button>
          </Box>
      </Box>
      </Box>
      }
    </>
  );
};

export default CartPage;
