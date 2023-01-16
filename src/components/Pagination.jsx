import React from 'react'
import {Box,Flex, Text, Button} from '@chakra-ui/react'
const Pagination =({page=1, handlePage}) => {
  return (
    <Flex py='4' rounded='2xl' w='50%'justifyContent='space-around' align='center'>
    <Button
  loadingText='wait'
  colorScheme='teal'
  variant='outline'
  disabled={page===1}
  size={'xs'}
  onClick={()=>{handlePage(page-1)}}
>-</Button>
    <Text fontSize='2xl' fontWeight='semibold' >{page}</Text>
    <Button
 colorScheme='teal'
 variant='outline'
 size='xs'
 onClick={()=>{handlePage(page+1)}}
>+</Button>
    </Flex>
  )
}

export default Pagination