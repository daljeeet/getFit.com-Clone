import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SportNav from "../components/SportNav";
import axios from "axios";
import { useEffect } from "react";
import Footer from "../components/Footer";
import {
  Heading,
  Flex,
  Box,
  Text,
  Image,
  Input,
  Button,
  UnorderedList,
  ListItem,
  InputGroup,
  InputRightElement,
  Grid,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'


const ProductDetail = () => {
  const { id, catagory } = useParams();
  const [prod, setProd] = useState({});
  const [inCart, setIncart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate()
  const toast = useToast()
  useEffect(() => {
    getProd();
    getCart();
    setIncart(compareItems(catagory, id));
  }, []);
  useEffect(()=>{
  compareItems(catagory, id)
  },[cartItems])
  const getProd = async () => {
    axios
      .get(`https://mercury-breezy-cave.glitch.me/${catagory}/${id}`)
      .then((res) => setProd(res.data));
  };
  const getCart = () => {
    axios
      .get(`https://mercury-breezy-cave.glitch.me/cart`)
      .then((res) => setCartItems(res.data));
  };
  const compareItems = (catagory, id) => {
  cartItems.forEach((el) => {
       if (el.catagory === catagory && el.num === id) {
        setIncart(true)
        }
      })
  };
  const addToCart = () => {
    cartItems.forEach((el) => {
      if (el.catagory === catagory && el.num === id) {
        toast({
          title: 'Attention!',
          description: 'Product Already exist in cart',
          status:'info',
          duration: 5000,
          isClosable: true,
         })
        return true
       }
     })
       axios
       .post(`https://mercury-breezy-cave.glitch.me/cart`, { src:prod.src,brand:prod.brand,title:prod.title,price:prod.price,num:prod.id,catagory,qnty:1})
       .then((res) => {
         setIncart(true);
         toast({
           title: 'Added Successfully!',
           description: 'product Added in cart.',
           status:'success',
           duration: 5000,
           isClosable: true,
          })
        })
        .catch((err) =>  setIncart(true))
  };
  const goToCart=()=>{
    navigate('/cart')
  }
  return (
    <Box mt="12">
      <SportNav top="0" cart="show" />
      <Grid  gap='20' padding={'10'} alignItems={'center'} templateColumns={{md:"repeat(2,1fr)",base:"repeat(1,1fr)"}} m='auto' w="100%">
        <Box w={{md:"50%",base:"100%"}}>
          <Image src={prod.src} />
        </Box>
        <Box w={{md:"50%",base:"100%"}}>
          <Text fontWeight="semibold" color="gray.500">
            {prod.brand}
          </Text>
          <Heading fontSize="2xl" my="2" w="70%">
            {prod.title}
          </Heading>
          <Flex w={{base:"100%"}} my="4" justify="space-between">
            <Text color="#f83f46" fontWeight="bold">
              {" "}
              ₹ {prod.price}
            </Text>
            <Text
              fontWeight={"bold"}
              color="gray.500"
              textDecoration="line-through"
            >
              ₹ {prod.original_price}
            </Text>
            <Text
              bg="yellow.500"
              px="4"
              fontWeight={"semibold"}
              borderRadius="md"
              color="gray.50"
            >
              {prod.off}
            </Text>
          </Flex>
          <Text fontSize="xs" w="80%" color="gray.800">
            {" "}
            {prod.title} Get 1 Year Free Subscription of cultsport play - An
            Immersive Fitness Game, Free Diet & Fitness Plan for 3 month along
            with 1 Doctor Consultation & Personal Video Training Session,
            Warranty: 6 Months Warranty on Manufacturing defects.
          </Text>
          {inCart ? (
            <Flex my="4" w='100%' h="12" justifyContent={"space-between"}>
              <Button
                w="45%"
                rounded="full"
                bg="#f83f46"
                color="gray.50"
                _hover={{ bg: "teal.500" }}
                h="10"
                disabled
              >
                Exist in Cart
              </Button>
              <Button
                w="45%"
                rounded="full"
                bg="#f83f46"
                color="gray.50"
                _hover={{ bg: "teal.500" }}
                h="10"
                onClick={goToCart}
              >
                Go To Cart
              </Button>
            </Flex>
          ) : (
            <Flex my="4" w="100%" h="12" justifyContent={"space-between"}>
              <Button
                w="45%"
                rounded="full"
                bg="#f83f46"
                color="gray.50"
                _hover={{ bg: "teal.500" }}
                h="10"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
              <Button
                w="45%"
                rounded="full"
                bg="#f83f46"
                color="gray.50"
                _hover={{ bg: "teal.500" }}
                h="10"
                fontSize={{md:'normal',sm:"small"}}
              >
                Buy Now
              </Button>
            </Flex>
          )}
          <Box>
            <Heading fontSize="2xl" my="4">
              PRODUCT DETAILS
            </Heading>
            <UnorderedList fontSize="sm">
              <ListItem>Model : {prod.title}</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Box>
          <InputGroup my="4" w="70%">
            <Input variant="filled" placeholder="Enter Pin Code" />
            <InputRightElement pr="8">
              <Button color="gray.600" w="20">
                {" "}
                Check{" "}
              </Button>
            </InputRightElement>
          </InputGroup>
          <UnorderedList fontSize="sm">
            <ListItem> Free delivery within 5-7 days</ListItem>
            <ListItem fontWeight="semibold"> No returns available</ListItem>
            <ListItem> 10 days exchange available</ListItem>
            <ListItem>
              {" "}
              Free door-step installation by cultsport team after delivery
            </ListItem>
            <ListItem fontWeight="semibold">
              To minimise contact between you and the delivery partner, Pay on
              Delivery option is temporarily disabled.
            </ListItem>
          </UnorderedList>
        </Box>
      </Grid>
      <Footer />
    </Box>
  );
};
export default ProductDetail;
