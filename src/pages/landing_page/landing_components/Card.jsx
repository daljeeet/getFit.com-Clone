import React from 'react'
import { Card, Heading,Text  } from '@chakra-ui/react'
const Cards = ({heading,main,des,des2, bgGradient}) => {
  return (
    <Card border={'1px'}  borderColor='gray.500' textColor='gray.400' py='3' align={'center'} cursor='pointer' _hover={{bg:'gray.800'}} >
        <Text fontSize={'2xl'} fontWeight='semibold' mb='-1' >
            {heading}
        </Text>
        <Heading bgGradient={bgGradient} bgClip='text' >
            {main}
        </Heading>
        <Text fontSize={'smaller'} fontWeight='semibold' mt='6px' >
            {des}
        </Text>
        <Text fontSize={'smaller'} fontWeight='semibold' >
            {des2}
        </Text>
    </Card>
  )
}

export default Cards