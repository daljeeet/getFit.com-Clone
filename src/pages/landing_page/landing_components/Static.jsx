import {
  Heading,
  Image,
  Box,
  Grid,
} from '@chakra-ui/react';
import AOS from 'aos'

export default function Static() {
  AOS.init({debounceDelay: 100, throttleDelay: 200, offset: 220, duration:'1000' })
  return (
    <>
    <Box  position='relative' overflow={"hidden"}>
      <Grid filter='auto' brightness='80%' gridTemplateColumns={{lg:"repeat(2,400px)",sm:"repeat(1,400px)"}} justifyContent='space-around' rowGap={'40px'} >
        <Image data-aos="zoom-out" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png' />
      
        <Image data-aos="zoom-out" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png' />
      </Grid>
      <Grid filter='auto' brightness='60%' gridTemplateColumns={{lg:"repeat(3,300px)",sm:"repeat(1,200px)"}} justifyContent='space-around' rowGap={'40px'} mt='52' >     
        <Image data-aos="zoom-out" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png' />
        <Image data-aos="zoom-out"  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png' />
        <Image data-aos="zoom-out" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png' />
      </Grid>
      <Heading color='white' position='absolute' top='40%' left='30%' fontSize={{lg:'5xl',md:"2xl",sm:"xl"}} textAlign={'center'} >
        One membership for all <br /> your fitness needs
      </Heading>
    </Box>
    <Box mt='20'  position='relative'>
      <Grid filter='auto' brightness='60%' gridTemplateColumns={{lg:"repeat(4,300px)",md:"repeat(2,300px)",sm:'repeat(1,300px)'}} data-aos="zoom-in" justifyContent='space-around' rowGap={'10px'} >
        <Image src='https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
      
        <Image src='https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Image src='https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Image src='https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
      </Grid>
      <Grid filter='auto' brightness='60%' gridTemplateColumns={{lg:"repeat(4,300px)",md:"repeat(2,300px)",sm:'repeat(1,300px)'}}  data-aos="zoom-in" justifyContent='space-around' rowGap={'10px'} mt='20' >     
        <Image src='https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' />
        <Image src='https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Image src='https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80' />
        <Image src='https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
      </Grid>
      <Heading color='white' position='absolute' top='40%' left='30%' fontSize='5xl' textAlign={'center'} >
        Fun, trainer let group <br /> classes
      </Heading>
    </Box>
    </>
  );
}