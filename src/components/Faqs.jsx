import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Heading, Text
  } from '@chakra-ui/react'
import React from 'react'

const Faqs = ({faqs}) => {
    return (
    <Box w='80%'m='auto'>
        <Box my='10' >
        <Heading>FAQS</Heading>
        <Text fontWeight='bold' color='gray.500' mt='4' >CULTPASS HOME</Text>
        </Box>
        <Box>
        <Accordion allowToggle>
            {
                faqs.map((el,id)=><AccordionItem key={id} p='10px' borderColor='gray.600' >
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    {el.q}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {el.a}
                </AccordionPanel>
              </AccordionItem>)
            }
</Accordion>
        </Box>
    </Box>
  )
}

export default Faqs 