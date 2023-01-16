import { Box, Grid, Heading, Text, Flex, Image } from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons'
import React from 'react'

const FeatureCards = () => {
  return (
    <>
    <Box>
        <Grid gridTemplateColumns={{lg:"repeat(2,1fr)",md:"repeat(2,1fr)",sm:'repeat(1,1fr)'}} gap='20' width='85%'  m='auto' overflow='hidden' gridTemplateRows={{lg:'repeat(2, 400px)',md:"repeat(4,400px)"}} >
    <Flex direction={'column'} position='relative' bg='RGBA(56,178,172,0.5)' borderRadius='2xl' zIndex='10' cursor="pointer" >
        <Box color='gray.300' >
            <Box display='flex' position='relative'>
        <Heading fontSize='2xl' ml='8' mt='4' >
            cult transform
        </Heading>
        <Text position='absolute' right='5' top='4' fontSize='3xl' w='8' textAlign='center' h='8' >
             <ChevronRightIcon />
        </Text>
            </Box>
        <Text fontSize='md' ml='8' fontWeight='semibold' mt='2' >
            Get coached to lose weight for good
        </Text>
        </Box>
        <Image w='70%' left='15%' position='absolute' bottom='0'  borderTopRadius='2xl'src='https://cdn.xxl.thumbs.canstockphoto.com/person-standing-on-weighing-scale-close-up-of-person-feet-standing-on-weighing-scale-picture_csp44060917.jpg' /> 
        </Flex>    
       
    <Flex direction={'column'} position='relative' bg='RGBA(50, 50, 50, 0.7)' zIndex='10' borderRadius='2xl'cursor="pointer" >
        <Box color='gray.300' >
            <Box display='flex' position='relative'>
        <Heading fontSize='2xl' ml='8' mt='4' >
            The .fit way
        </Heading>
        <Text position='absolute' right='5' top='4' fontSize='3xl' w='8' textAlign='center' h='8' >
             <ChevronRightIcon />
        </Text>
            </Box>
        <Text fontSize='md' ml='8' fontWeight='semibold' mt='2' >
            Making health easy, one day at a time
        </Text>
        </Box>
        <Image w='70%' left='15%' position='absolute' bottom='0'  borderTopRadius='2xl' src='https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' /> 
        </Flex>    
    <Flex direction={'column'} position='relative' bg='RGBA(45,55,72, 0.8)'  zIndex='10' borderRadius='2xl'cursor="pointer" >
        <Box color='gray.300' >
            <Box display='flex' position='relative'>
        <Heading fontSize='2xl' ml='8' mt='4' >
            Workout Gear
        </Heading>
        <Text position='absolute' right='5' top='4' fontSize='3xl' w='8' textAlign='center' h='8' >
             <ChevronRightIcon />
        </Text>
            </Box>
        <Text fontSize='md' ml='8' fontWeight='semibold' mt='2' >
            Everything you need for your workout
        </Text>
        </Box>
        <Image w='60%' left='20%' position='absolute' bottom='0'  borderTopRadius='2xl' src='https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' /> 
        </Flex>    
    <Flex direction={'column'} position='relative' bg='RGBA(112,36,89, 0.5)' zIndex='10' borderRadius='2xl' cursor="pointer">
        <Box color='gray.300' >
            <Box display='flex' position='relative'>
        <Heading fontSize='2xl' ml='8' mt='4' >
            Sugar.fit
        </Heading>
        <Text position='absolute' right='5' top='4' fontSize='3xl' w='8' textAlign='center' h='8' >
             <ChevronRightIcon />
        </Text>
            </Box>
        <Text fontSize='md' ml='8' fontWeight='semibold' mt='2' >
            Reverse Type 2 Diabetes and Prediabetes
        </Text>
        </Box>
        <Image w='60%' left='20%' position='absolute' bottom='0'  borderTopRadius='2xl' border='2px' borderColor='gray.300' h='50%' src='https://5.imimg.com/data5/FU/LK/MY-4583283/handheld-blood-glucometer-250x250.jpg' /> 
        </Flex>    
        </Grid>
        <Image position='absolute' top='-50px' left='0' width='30%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg' />
        <Image position='absolute' top='-20' right='0' width='30%' blur='3xl' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg' />
        <Image position='absolute' bottom='-10' right='0' blur='2xl' width='40%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg' />
        <Image position='absolute' bottom='0' left='0' blur='100px' width='30%' filter='auto' brightness='60%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg' />
    </Box>
    </>
  )
}

export default FeatureCards