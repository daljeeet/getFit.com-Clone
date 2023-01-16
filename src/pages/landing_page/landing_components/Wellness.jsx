import { Box, Grid, Heading, Text, Flex, Image } from '@chakra-ui/react';


const Wellness = () => {
  return (
    <>
    <Box w='85%' display='flex' color='gray.200' h='400px' px='10' bgGradient='linear(to-b, gray.600, gray.200)' borderRadius='3xl' m='auto' >
    <Box w='300px' my='auto' >
        <Box  >
        <Heading fontSize='4xl' >
            Wellness Hub
        </Heading>
        <Text fontWeight='bold' mb='6' >
            One place for all your well- <br /> being needs
        </Text>
        </Box>
        <Box color='gray.900'>
            <Text fontWeight='semibold' pl='4' py='1' w='80%' _hover={{bg:'gray.200',}} _after={`content:'>'`} borderRadius='full' cursor='pointer'>WORKOUT GEAR</Text> 
            <Text fontWeight='semibold' my='2' pl='4' py='1' w='80%' _hover={{bg:'gray.200',}} _after={`content:'>'`} borderRadius='full' cursor='pointer'>LABS</Text>
            <Text fontWeight='semibold' pl='4' py='1' w='80%' _hover={{bg:'gray.200',}} _after={`content:'>'`} borderRadius='full' cursor='pointer'>THERAPY</Text>
        </Box>
    </Box>
    <Box width='80%' display='flex' overflow='hidden' >
        <Image h={'380px'} borderRadius='20px' my='auto' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/z6Zjmc6vcaMmurfCHYMMP4kr' />
        <Image borderRadius='full' src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    </Box>
    </Box>
    <Box m='auto' w='85%'  overflow='hidden' my='20' position='relative' >
        <Image m='auto' h='350px' w='100%' zIndex='1' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1200,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/download-app/download-app-variant-2.png' />
        <Box zIndex='10' position='absolute' color='gray.200' top='10' left='10'  >
            <Heading fontSize='2xl' mb='10' >
                Download the most loved <br /> fitness app
            </Heading>
            <Text fontWeight='semibold' >
                Start your fitness journey with us. Join the cult!
            </Text>
            <Box display={'flex'} mt='16' >
            <Image w='160px' h='50px' cursor={'pointer'} mr='10' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png' />
            <Image w='160px' h='50px' cursor={'pointer'} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png' />
            </Box>
        </Box>
    </Box>
    <Box color='gray.200' >
        <Heading textAlign={'center'} fontSize='6xl' my='10' >
            Join the cult family
        </Heading>
        <Grid w='75%' m='auto' gap='30'  gridTemplateColumns={{lg:'repeat(2,1fr)',md:"repeat(1,1fr)"}} >
        <Box position={'relative'} display='flex' flexDirection='column' p={'8'}justifyContent='space-between' height='350px' rounded='xl' bgGradient='linear(to-tl,blue.800,gray.800)'cursor={'pointer'} >
            <Text fontSize={'4xl'} fontWeight='bold' >
                Careers at Cult
            </Text>
            <Image src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/join-the-cult/career-icons-v2.png' />
        </Box>
        <Box position={'relative'} display='flex' flexDirection='column' p={'8'}justifyContent='space-around' height='350px' rounded='xl' bgGradient='linear(to-bl,purple.900,green.900)' cursor={'pointer'} textAlign={'center'} >
            <Heading  bgGradient='linear(to-l, pink.600, yellow.300)'
  bgClip='text' fontSize={'4xl'} >cult.fit franchise <br /> Opportunities </Heading>
            <Text fontSize={'xl'} fontWeight='semibold' >
                Partner with the largest fitness brand in <br /> India
            </Text>
        </Box>
        <Box>

        </Box>
        </Grid>
    </Box >
    <Box color='gray.400' justifyContent={'space-around'} w='80%' m='auto' my='10' h='300px' display={'flex'}  >
        <Box  height={'100%'} position='relative' w='60%' display='flex'>
    <Image w='300px' m='auto' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png" />
    <Image position={'absolute'} width='300px' top='0px' left='22px' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg' />
        </Box>
    
    <Box w='30%'  h='100' my='auto'>

    <Text fontWeight={'bold'} >At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.</Text>
    <Text fontWeight={'bold'} fontSize='xl' >#BeBetterEveryDay</Text>
    </Box>
    </Box>
    </>
    
  )
}

export default Wellness