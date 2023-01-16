import { Box, Grid,Button, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { CheckIcon,MinusIcon } from "@chakra-ui/icons";
import { EliteText, HomeText, ProText } from "../../../components/FancyWrds";
const FitnessPricing = () => {
  return (
    <Box w="80%" textAlign={"center"} m="auto" display={{md:'block',base:"none"}} >
      <Heading fontSize="4xl" mb="4">
        Choose your cultpass
      </Heading>
      <Text color="gray.400" fontWeight="semibold" fontSize="xl">
        3 flexible plans to suit fitness needs
      </Text>
      {/* <EliteText/><ProText/><HomeText/> */}
      <Grid
        gridTemplateColumns="repeat(4,1fr)"
        p="6"
        templateRows="repeat(auto)"
      >
        <Box>
          <Box h='10' ></Box>
          <Flex
            borderTop="none"
            borderColor="gray.500"
            h="500px"
            direction="column"
            justifyContent="space-between"
            borderBottom={"none"}
            mt="10"
          >
            <Box>
             <Text fontWeight='semibold'>
                ELITE Gyms & At <br /> Center Group Classes
             </Text>
            </Box>
            <Box>
              <Text fontWeight='semibold'>PRO Gyms</Text>
            </Box>
            <Box>
              <Text fontWeight='semibold'>Smart wrokout plan</Text>
            </Box>
            <Box>
              <Text fontWeight='semibold'>At home workouts</Text>
            </Box>
            <Box>
              <Text h='50px'></Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <EliteText />
          <Flex
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            h="500px"
            direction="column"
            justifyContent="space-between"
            borderBottom={"none"}
            mt="10"
          >
            <Box borderBottom="1px" borderColor="gray.500" >
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box>
              <Text>Starting at ₹1611/ <br /> month</Text>
              <Button color='red' fontSize='sm' fontWeight='semibold'>BUY NOW</Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <ProText />
          <Flex
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            h="500px"
            direction="column"
            justifyContent="space-between"
            borderBottom={"none"}
            mt="10"
          >
            <Box borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box  borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box>
              <Text>Starting at ₹987/ <br /> month</Text>
              <Button color='red' fontSize='sm' fontWeight='semibold'>BUY NOW</Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <HomeText />
          <Flex
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            h="500px"
            direction="column"
            justifyContent="space-between"
            borderBottom={"none"}
            mt="10"
          >
             <Box borderBottom="1px" h='54px' borderColor="gray.500">
            <MinusIcon/>
            </Box>
            <Box borderBottom="1px" h='60px' borderColor="gray.500">
            <MinusIcon/>
            </Box>
            <Box borderBottom="1px" h='60px' borderColor="gray.500">
            <MinusIcon/>
            </Box>
            <Box  borderBottom="1px" borderColor="gray.500">
              <CheckIcon />
              <Text>Unlimited</Text>
            </Box>
            <Box>
              <Text>Starting at ₹117/ <br /> month</Text>
              <Button color='red' fontSize='sm' fontWeight='semibold'>BUY NOW</Button>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default FitnessPricing;
