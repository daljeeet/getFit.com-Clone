import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  Button
} from "@chakra-ui/react";
import { HomeText } from "../../../components/FancyWrds";
const FitnessHero = () => {
  return (
    <Flex w={{md:'90%'}} ml={{ md:'10%'}} direction={{base:'column-reverse',md:"row"}} >
      <Box pl={{md:'0',base:"5"}}>
        <Box display='flex' gap={'4'} my='10' > 
        <Heading>
          Cultpass
        </Heading>
            <HomeText />
        </Box>
        <Text fontWeight={'bold'} fontSize='3xl'>
          Best of at-home group <br /> workouts
        </Text>
        <List spacing={3} fontWeight='bold' my='10' >
          <ListItem>
            <ListIcon color="green.500" />
            1200+ at-home workouts across formats including strength, dance &
            yoga
          </ListItem>
          <ListItem>
            <ListIcon color="green.500" />
            30+ goal based fitness programs
          </ListItem>
          <ListItem>
            <ListIcon color="green.500" />
            Meditation sessions, health podcasts and more
          </ListItem>
        </List>

        <Text>Starting at ₹117 / month</Text>
        <Button color='red.600' fontSize='sm' my='10' fontWeight={'bold'} >
            TAKE 7 DAYS FREE TRIAL
        </Button>
      </Box>
      <Box >
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_968,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/3d854a77-bcc9-4764-8aaf-da2fb03df18e.png" />
      </Box>
    </Flex>
  );
};

export default FitnessHero;
