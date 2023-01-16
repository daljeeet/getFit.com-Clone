import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./landing_components/Hero";
import Cards from "./landing_components/Card";
import Static from "./landing_components/Static";
import Price from './landing_components/Price'
import FeatureCards from "./landing_components/FeatureCards";
import AOS from 'aos';
import Wellness from "./landing_components/Wellness";
import ScrollButton from "../../components/ScrollBtn";
import 'aos/dist/aos.css';
const Home = () => {
  AOS.init()
  const cardsData = [
    {
      heading: "cultpass",
      main: "ELITE",
      des: "Unlimited access to group classes",
      des2: "all gyms and at-home workouts",
      bgGradient: "linear(to-l, #f5bf42, #fadd02)",
    },
    {
      heading: "cultpass",
      main: "PRO",
      des: "Unlimited access to all PRO gyms",
      bgGradient: "linear(to-l, #d6d6d6, #ffffff, #d6d6d6)",
      des2: "and at-home workouts",
    },
    {
      heading: "cultpass",
      main: "HOME",
      des: "Unlimited access to at-home",
      bgGradient: "linear(to-l, #f74c02, #f302f7)",
      des2: "workouts with calorie tracking",
    },
  ];
  //scrollIntoView();
  return (
    <Box bg={"gray.900"}  >
      <Navbar theme={'transparent'} />
      <Hero />
      {/* Three boxes below the hero component  */}
      <Box bg={"gray.900"} w="100%">
        <Grid
          display={"grid"}
          gridTemplateColumns={{sm:"repeat(1,1fr)",md:"repeat(1,1fr)", lg:"repeat(3,1fr)"}}
          gap={4}
          w="80%"
          py="10"
          justifyContent={"space-around"}
          m="auto"
        >
          {cardsData.map((el) => (
            <Cards
              key={el.main}
              heading={el.heading}
              main={el.main}
              des={el.des}
              des2={el.des2}
              bgGradient={el.bgGradient}
            />
          ))}
        </Grid>
      </Box>
       {/* Animated background and the constent text  */}
      <Box py='10px'mb='20'>
            <Static />   
      </Box>
      {/* pricing secection  */}
      <Box position='relative' >
        <Price />
      </Box>
      <Box position='relative' >
        <FeatureCards />
      </Box>
      <Box my='20' >
        <Wellness />
      </Box>
      <Footer />
      <ScrollButton/>
    </Box>
  );
};

export default Home;
