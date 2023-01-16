import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      zIndex="0"
      position="relative"
      h={"100vh"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Box position="absolute" h="100vh" overflow={"hidden"}>
        <video
          autoPlay
          loop
          playsInline
          poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
          preload="metadata"
          muted
        >
          <source
            src='https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4'
            type="video/mp4"
          />
        </video>
      </Box>
      <VStack
        zIndex={"10"}
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} mt="32">
          <Text>
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png" />
          </Text>
          <Box align="center">
            <Text
              color={"white"}
              fontWeight="semibold"
              textAlign={"center"}
              fontSize={"2xl"}
              mt="6"
            >
              A fitness movemnet that is worth <br /> breaking a sweat for
            </Text>
            <Button
              color={"red.500"}
              fontSize="smaller"
              fontWeight="bold"
              p="2"
              h="35px"
              mt={"6"}
            >
              EXPLORE CULTPASS
            </Button>
            <Text
              color={"white"}
              fontSize="5xl"
              w="10"
              fontWeight={"lighter"}
              cursor={"pointer"}
            >
              <ChevronDownIcon />
            </Text>
          </Box>
        </Stack>
      </VStack>
      <Box
        left="0"
        right="0"
        h="30"
        bottom={"0"}
        position="absolute"
        bgGradient="linear(to-t, gray.900, transparent)"
      />
    </Flex>
  );
}
