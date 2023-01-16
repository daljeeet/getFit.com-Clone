import React, {useState} from 'react';
import {TriangleUpIcon} from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
  
const ScrollButton = ({theme='white'}) =>{
  
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Box position='fixed' bottom='10' variant='outline' right='10' border='2px' color={theme} w='10' h='10' rounded='full' display='flex'alignItems='center' justifyContent='center' onClick={scrollToTop} cursor='pointer' hidden={!visible} >
     <TriangleUpIcon style={{display: visible ? 'inline' : 'none'}} />
    </Box>
  );
}
  
export default ScrollButton;