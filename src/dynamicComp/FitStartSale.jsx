import React from 'react'
import { Box,Flex, Heading, Text } from '@chakra-ui/react'
import { useReducer } from 'react'
const FitStartSale = ( ) => {
    // const [startTime, setStartTime] = useState({days:'01',hrs:'04',mins:'11',sec:'34'})
    const updateVal = (startTime,action)=>{
        switch (action.type) {
            case 'change':
                return {days:'01',hrs:'04',mins:'11',[startTime.sec]:startTime.sec}
            default:
                break;
        }
    }

    const [startTime, dispatch] = useReducer(updateVal, {days:10,hrs:4,mins:8,sec:45})
    setInterval(() => {
    }, 1000);

    const getTimeRemaining = () => {
        dispatch({type:"change"})
    }

    return (
    <Box w={{md:'80%'}} display={{base:"none",md:'block'}} m='auto' my='10' h='140px' rounded='3xl' bgGradient='linear(to-l, pink.600, orange.500)' > 
        <Flex align={'center'} justify='space-around' h='100%' >
            <Box w='60%' >
            <Heading fontSize={{md:'3xl',base:"xl"}} >FIT START SALE | STARTS IN </Heading>
            <Text fontWeight='bold' >
                on cultpass HOME
            </Text>
            </Box>
            {/* <Box display={'flex'} h='100%' alignItems='center' mt='4'  flexDirection='column'> */}
                <Box fontSize={{md:'xl',base:"sm"}} display={'flex'} mt='10' h='100%'>
                    <Box>
                    <Heading >{startTime.days}</Heading>
                    <Text>Days</Text>
                    </Box>
                    <Heading mx='2' >:</Heading>
                    <Box>
                    <Heading>{startTime.hrs}</Heading>
                    <Text>Hrs</Text>
                    </Box>
                    <Heading mx='2' >:</Heading>
                    <Box>
                    <Heading>{startTime.mins}</Heading>
                    <Text>Mins</Text>
                    </Box>
                    <Heading mx='2' >:</Heading>
                    <Box>
                    <Heading>{startTime.sec}</Heading>
                    <Text>Sec</Text>
                    </Box>
                </Box>
            {/* </Box> */}
        </Flex>
    </Box>
  )
}

export default FitStartSale