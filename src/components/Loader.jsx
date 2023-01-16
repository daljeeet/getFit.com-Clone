import { Box } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box  left='40%' position='fixed' top='20' >
   <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_100,q_auto:eco,dpr_1,f_auto,fl_progressive//image/loader_compressed-v3.gif" alt="" />
    </Box>
  )
}
export default Loader;