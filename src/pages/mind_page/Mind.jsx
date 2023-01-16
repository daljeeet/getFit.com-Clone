import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box, Heading, Text, Grid, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import ScrollButton from "../../components/ScrollBtn";
const Mind = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      axios
        .get("https://mercury-breezy-cave.glitch.me/mindfullness")
        .then((res) => setData(res.data))
        .then(() => setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };
  
  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <Box bg='#f3f3fa' >
          <Navbar theme={"gray.800"} />
          <Box pt="10" w="85%" m="auto">
            <Heading fontSize="xl" my="4">
              Lab Tests
            </Heading>
            <Text fontSize="sm">
              Assess and monitor your health from the comfort of your home now.
            </Text>
            <Grid
              templateColumns={{md:"repeat(2, 1fr)",base:"repeat(1,1fr)"}}
              templateRows="repeat(20, 220px)"
              my="8"
              rowGap="6"
              columnGap="4"
              
            >
              {data.map((el) =>{
                let limit = el.description.substring(0,160)+'...'
                return <Box bg='#ffffff'
                  key={el.id}
                  rounded='md'
                  shadow="base"
                  cursor="pointer"
                  p="4"
                  display="flex"
                  justifyContent="space-between"
                  duratoin='500'
                  _hover={{shadow:"xl"}}
                >
                  <Image w="40%" src={el.src} />
                  <Box fontSize="sm">
                    <Heading fontSize={"xl"} my="4" ml="4">
                      {el.title}
                    </Heading>
                    <Text
                      my="2"
                      mx="4"
                      text-overflow="ellipsis"
                      max-width="13ch"
                      fontSize="x-sm"
                    >
                     {limit}
                    </Text>
                  </Box>
                </Box>
  })}
            </Grid>
          </Box>
          <Box bg="gray.900" color="gray.300" py="10">
            <Footer />
          </Box>
        </Box>
        <ScrollButton theme='dark' />
      </>
    );
  }
};

export default Mind;
