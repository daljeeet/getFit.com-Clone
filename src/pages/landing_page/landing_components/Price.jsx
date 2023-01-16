import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Image,
  Flex,
  Grid,
} from "@chakra-ui/react";

export default function Price() {
  return (
    <>
    <Box py={12} color='white' bg='#171A26' >
      <Heading textAlign={'center'}>cultpass</Heading>
      <Text mt='15px' mb='20' textAlign={'center'} color='blue.600' fontWeight='bold' fontSize='sm' >LEARN MORE</Text>
      <Grid gridTemplateColumns={{lg:"repeat(3,300px)",md:"repeat(2,300px)",sm:'repeat(1,300px)'}}  w='85%' m='auto' gap={20} >
      <Flex direction={'column'}  zIndex='10'>
        <Box position={'relative'} cursor='pointer'>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png" />
          <Box position={'absolute'} bottom='10px' left={'10px'} >
          <Text fontWeight={'bold'} color='gray.300' >cultpass</Text>
          <Heading bgGradient="linear(to-l, #f5bf42, #fadd02)" bgClip='text'  >ELITE</Heading>
          </Box>
        </Box>
        <Box mx='20px' mt='20px' mb='10' fontWeight={'bold'} >
          <Heading fontSize='xl' mb='20px' color={'gray.300'} >Unlimited access to</Heading>
          <UnorderedList color='gray.400' >
            <ListItem>At-center group classes</ListItem>
            <ListItem>All ELITE & PRO gyms</ListItem>
            <ListItem>At-home live workouts</ListItem>
          </UnorderedList>
        </Box>
        <Box my='10' w='100' display='flex' justifyContent={'space-around'} >
            <Button fontSize='sm' bg={'gray.600'} >
                TRY FOR FREE
            </Button>
            <Button fontSize={'sm'} color={'red'} >
                LEARN MORE
            </Button>
        </Box>
      </Flex>
      <Flex direction={'column'} zIndex='10' >
        <Box position={'relative'} cursor='pointer' hover={'1.2'} >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png" />
          <Box position={'absolute'} bottom='10px' left={'10px'} >
          <Text fontWeight={'bold'} color='gray.300' >cultpass</Text>
          <Heading bgGradient="linear(to-l, #d6d6d6, #ffffff, #d6d6d6)" bgClip='text'  >PRO</Heading>
          </Box>
        </Box>
        <Box mx='20px' mt='20px' mb='10' fontWeight={'bold'} >
          <Heading fontSize='xl' mb='20px' color={'gray.300'} >Unlimited access to</Heading>
          <UnorderedList color='gray.400' >
            <ListItem>All PRO gyms</ListItem>
            <ListItem>2 Seassions/m at ELITE gyms & group classes</ListItem>
            <ListItem>At-home live workouts</ListItem>
          </UnorderedList>
        </Box>
        <Box my='10' w='100' display='flex' justifyContent={'space-around'} >
            <Button fontSize='sm' bg={'gray.600'} >
                TRY FOR FREE
            </Button>
            <Button fontSize={'sm'} color={'red'} >
                LEARN MORE
            </Button>
        </Box>
      </Flex>
      <Flex direction={'column'} zIndex='10' >
        <Box position={'relative'} cursor='pointer' hover={'1.2'} >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png" />
          <Box position={'absolute'} bottom='10px' left={'10px'} >
          <Text fontWeight={'bold'} color='gray.300' >cultpass</Text>
          <Heading bgGradient="linear(to-l, #f74c02, #f302f7)" bgClip='text'  >HOME</Heading>
          </Box>
        </Box>
        <Box mx='20px' mt='20px' mb='10' fontWeight={'bold'} >
          <Heading fontSize='xl' mb='20px' color={'gray.300'} >Unlimited access to</Heading>
          <UnorderedList color='gray.400' >
            <ListItem>At home workouts</ListItem>
            <ListItem>Celebrity Wrokouts</ListItem>
            <ListItem>Goal-based Workouts and Meditation</ListItem>
          </UnorderedList>
        </Box>
        <Box my='10' w='100' display='flex' justifyContent={'space-around'} >
            <Button fontSize='sm' bg={'gray.600'} >
                TRY FOR FREE
            </Button>
            <Button fontSize={'sm'} color={'red'} >
                LEARN MORE
            </Button>
        </Box>
      </Flex>
      </Grid>
    </Box>
    <Image position='absolute' filter='grayscale(30%)' top='10' blur='60px' zIndex='0' w='50%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg' />
    <Image position='absolute'right='10' filter='auto' blur='50px' brightness='60%' top='16%' zIndex='0' w='30%' h='50%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg' />
    </>
  );
}
