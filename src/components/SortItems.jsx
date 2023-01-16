import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
const SortItems = ({handleSort, short}) => {
  return (
    <Flex py='4' rounded='2xl' w='60%'justifyContent='space-around' align='center'>
    <Button
  loadingText='wait'
  colorScheme='teal'
  variant='outline'
  disabled={short=='asc'}
  size={'xs'}
  onClick={()=>{handleSort('asc')}}
>Low</Button>
    <Button
 colorScheme='teal'
 variant='outline'
 size='xs'
 disabled={short==='desc'}
 onClick={()=>{handleSort('desc')}}
>High</Button>
    </Flex>
  )
}

export default SortItems