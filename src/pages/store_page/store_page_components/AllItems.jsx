import { Box, Heading, Flex, Image, Grid } from "@chakra-ui/react";
import Slider from "../../../components/Slider";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ItemsBox from "./ItemsBox";
import FullSlider from "../../../components/FullSlider";
const AllItems = () => {
  const [shirts, setShirts] = useState([]);
  const [cycles, setCycles] = useState([]);
  const [spinBikes, setSpinBikes] = useState([]); 
  const [treadmills, setTreadmills] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [bottom, setBottomwear] = useState([]);
  const [health, setHealth] = useState([]);
  useEffect(() => {
    getshirts();
    getCycles();
      getSpinbikes();
    getTreadmills();
    getAccessories();
    getBottomwear();
    getHealth();
  }, []);
  let baseUrl = "https://mercury-breezy-cave.glitch.me/";
  const getshirts = async () => {
    axios.get(`${baseUrl}tshirts?_limit=12`).then((res) => setShirts(res.data));
  };
  const getCycles = async () => {
    axios.get(`${baseUrl}cycles?_limit=12`).then((res) => setCycles(res.data));
  };
  const getSpinbikes = async () => {
    axios.get(`${baseUrl}/spinbikes?_limit=12`).then(res=>setSpinBikes(res.data));
  };
  const getTreadmills = async () => {
    axios
      .get(`${baseUrl}trademill?_limit=12`)
      .then((res) => setTreadmills(res.data));
  };
  const getAccessories = async () => {
    axios
      .get(`${baseUrl}accessories?_limit=12`)
      .then((res) => setAccessories(res.data));
  };
  const getBottomwear = async () => {
    axios
      .get(`${baseUrl}bottomwear?_limit=8`)
      .then((res) => setBottomwear(res.data));
  };
  const getHealth = async () => {
    axios
      .get(`${baseUrl}suppliments?_limit=12`)
      .then((res) => setHealth(res.data));
  };

  const arr = [
    'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ba218024-d957-4b3f-9b77-3ee55d913beb.png','https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png','https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/89af0281-a833-4383-b04f-cfcaeec7a0f0.png','https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png',
  ]




  return (
    <>
        <Box>
            <FullSlider arr={arr}/>
        </Box>
    <Box w="90%" m="auto" my="10">
      <Box my="10">
        <ItemsBox prod="T-SHIRTS" prod_link="/men" />
        <Slider arr={shirts} />
      </Box>
      <Box my="10">
        <ItemsBox prod="CYCLES" prod_link="/cycles" />
        <Slider arr={cycles} />
      </Box>
      <Box my="10">
        <ItemsBox prod="SPINBIKES" prod_link="/cardio" />
        <Slider arr={spinBikes} />
      </Box>
      <Box my="10">
        <ItemsBox prod="TREADMILLS" prod_link="/cardio" />
        <Slider arr={treadmills} />
      </Box>
      <Box my="10">
        <ItemsBox prod="ACCESSORIES" prod_link="/accessories" />
        <Slider arr={accessories} />
      </Box>
      <Box my="10">
        <ItemsBox prod="BOTTOMWEAR" prod_link="/women" />
        <Slider arr={bottom} />
      </Box>
      <Box my="10">
        <ItemsBox prod="HEALTH & NUTRITION" prod_link="/supplements" />
        <Slider arr={health} />
      </Box>
      {/* SHOP BY WORKOUT SECTION  */}
      <Box>
        <Heading>SHOP BY WORKOUT</Heading>
        <Grid w="100%" rowGap={10} templateColumns={{lg:'repeat(4,1fr)',base:"repeat(1,1fr)", md:'repeat(3,1fr)'}} >
          <Box margin={'auto'} >
            <NavLink to="/yoga">
              <Image
                w="280px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_317,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png"
              />
            </NavLink>
          </Box>
          <Box margin={'auto'} >
            <NavLink to="/strength">
              <Image
                w="280px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_317,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png"
              />
            </NavLink>{" "}
          </Box>
          <Box margin={'auto'}>
            <NavLink to="/running">
              <Image
                w="280px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_317,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png"
              />
            </NavLink>{" "}
          </Box>
          <Box margin={'auto'}>
            <NavLink to="/dance">
              <Image
                w="280px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_317,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png"
              />
            </NavLink>{" "}
          </Box>
        </Grid>
      </Box>
      {/* SPOTLIGHT SECTION */}
      <Box my="10">
        <Heading>SPOTLIGHT</Heading>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} >
          <Box>
            <NavLink>
              {" "}
              <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_709,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png" />{" "}
            </NavLink>
          </Box>
          <Box>
            <NavLink>
              {" "}
              <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_709,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png" />{" "}
            </NavLink>
          </Box>
        </Grid>
      </Box>
    </Box>
    </>
  );
};
export default AllItems;
