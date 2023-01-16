import { Box, Flex, Grid, Text, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Features = () => {
  return (
    <Box margin='auto' w='80%' my='10' textAlign='center' color='gray.200' >
      <Text fontWeight='semibold' fontSize='xl' color='gray.400' >FEATURES</Text>
      <Heading>For an active lifestyle</Heading>
    <Grid gridTemplateColumns={{md:'repeat(3, 1fr)',base:"repeat(1,1fr)"}} gap='10' gridTemplateRows='repeat(1,auto)' mt='10' >
      <Box>
        <Box h='60%' border='1px' borderColor='gray.400' mb='8' rounded='2xl' overflow='hidden' bg='#23233b' >
        <video
          rounded='xl'
          autoPlay
          playsInline
          preload="metadata"
          muted
        >
          <source
            src='https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_170,ar_1.25,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/glass-card-feature-widget/cult-pass-live/first-feature-video-v2.mp4'
            type="video/mp4"
          />
        </video>
        <Text textAlign='center' fontWeight='bold' >
          Track calorie burn with <br /> energy meter
        </Text>
           </Box>
        <Box w='100%' h={'fit'} position='relative' textAlign='center' > <Image w={{md:"auto",base:"100%"}} rounded='xl' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_370,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/glass-card-feature-widget/cult-pass-live/fourth-feature-background-v3.png' /> 
        <Box textAlign='center' w='100%' position='absolute' bottom='6' >
        <Text fontWeight='bold' fontSize='2xl' >Meditation Content</Text>
        </Box>
        </Box>
      </Box>
      <Box position='relative'border={'2px solid black'} overflow='hidden' rounded='3xl' >
      <video
          rounded='xl'
          autoPlay
          playsInline
          preload="metadata"
          muted
        >
          <source
            src='https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_370,ar_0.54,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/glass-card-feature-widget/cult-pass-live/center-background-video.mp4'
            type="video/mp4"
          />
        </video>
        <Box position='absolute' bottom='10' w='100%'  >
        <Text fontWeight='bold' fontSize='xl' >Access to</Text>
        <Heading bgGradient='linear(to-l, #e16d9d, #bd79ca)'fontSize='6xl' bgClip='text'>5K+</Heading>
        <Text fontSize='xl' fontWeight='bold'  >ONLINE WORKOUT</Text>
        </Box>
        <Box position='absolute' bg='#0f1b2b' w='50%' h='30px' top='0' left='25%' borderBottomRadius='2xl' ></Box>
      </Box>
      <Box>
        <Box h='60%'  border='1px' borderColor='gray.400' mb='8' rounded='2xl' overflow='hidden' bgGradient='linear(to-b, #23233b, gray.800 )' >
        <Image mx='auto' mt='8' w='30%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_100,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/glass-card-feature-widget/cult-pass-live/third-feature-logo.png' />
        <Text fontSize='xl' mb='10' fontWeight='semibold' >
          7400 Cal
        </Text>
        <Text fontSize='2xl' fontWeight='bold' >
          Track your Progress
        </Text>

           </Box>
        <Box w='100%' position='relative' textAlign='center' border='1px' h='32%' rounded='xl' bgGradient='linear(to-b, #23233b, gray.800 )'> 
        <Text fontSize='xl' my='2' >Programs</Text>
        <Box fontSize='2xl' >
        <Text fontWeight='semibold' bgGradient='linear(to-l, #e86f8e, #9989dd)' bgClip='text'  >
          Belly Burn
        </Text>
        <Text fontWeight='bold'bgGradient='linear(to-l, #e86f8e, #9989dd)' bgClip='text'  >Weight Loss</Text>
        <Text fontWeight='semibold'bgGradient='linear(to-l, #e86f8e, #9989dd)' bgClip='text'  >Strength </Text>
        </Box>
        </Box>
      </Box>
    </Grid>
    </Box>
  )
}

export default Features