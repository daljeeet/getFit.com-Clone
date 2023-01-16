import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const ItemsBox = ({prod,prod_link}) => {
  return (
        <Box display={'flex'} ml='4' alignItems='center' >
            <Heading fontSize='2xl' >{prod}</Heading>
            <Box ml='2' fontSize='xs' color='red.600' >
            <NavLink to={`${prod_link}`}>VIEW ALL </NavLink>
            </Box>
        </Box>
  )
}
export default ItemsBox