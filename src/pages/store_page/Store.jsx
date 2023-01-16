import React from 'react'
import {Box} from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import SportNav from '../../components/SportNav';
import AllItems from './store_page_components/AllItems';
import Footer from '../../components/Footer'
import ScrollBtn from '../../components/ScrollBtn'
const Store = () => {
  return (
    <Box mt='24' >
    <Navbar theme={'gray.900'} />
    <Box w='full'>
    <SportNav show={false} />
    </Box>
    <Box >
      <AllItems/>
    </Box>
    <Box>
    </Box>
    <Box>
      <Footer/>
    </Box>
    <ScrollBtn theme='dark'/>
    </Box>
  )
}

export default Store