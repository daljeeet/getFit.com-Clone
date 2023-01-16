import React from "react";
import { Box, Image, Text, Flex, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ProductList = ({data,catagery}) => {
  const navigate = useNavigate()
  const handleRoute=(id)=>{
    navigate(`/${catagery}/${id}`)
  }
  return (
    <>
    <Grid w={{md:'85%'}} m='auto' rowGap='8' columnGap='6' gridTemplateColumns={{md:"repeat(3,1fr)",base:"repeat(1,1fr)", sm:"repeat(2,1fr)", lg:'repeat(4,1fr)'}} >
    { 
        data.map((el,id)=><Box
        key={id}
        cursor="pointer"
        w="260px"
        shadow="base"
        p='2'
        rounded="xl"
        overflow="hidden"
        onClick={()=>handleRoute(el.id)}
        margin='auto'
      >
        <Image src={el.src} />
        <Box>
          <Text fontSize="sm" fontWeight="semibold" color="gray.600">
            {el.brand}
          </Text>
          <Text fontWeight="semibold">{el.title}</Text>
        </Box>
        <Flex>
          <Text fontWeight="bold">₹ {el.price} </Text>
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
      )}
      </Grid>
    </>
  );
};

export default ProductList;
