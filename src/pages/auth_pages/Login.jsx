import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useState,useEffect,useContext } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../../contexts/ContextProvider';
import Logo from '../../components/Logo';

export default function Login() {
  const toast = useToast()
const [user, setUser] = useState({email:'',password:''})
const [message, setMessage] = useState({title:'',desc:"",status:""})
const [disable, setDisable] = useState(false)
const navigate = useNavigate()
const handleChange = (e)=>{
  setUser({...user, [e.target.name]:e.target.value})
}
const {userLogin} = useContext(userAuth)
useEffect(() => {
  toast({
    title: message.title,
    description: message.desc,
    status:message.status||'info',
    duration: 5000,
    isClosable: true,
  })
}, [message])

const handleClick = ()=>{
  getUser()
  setDisable(true)
}
const getUser = async()=>{
  try{
    axios.post('https://cliff-wary-fennel.glitch.me/api/auth/login',user).then(res=>{
      setMessage({title:'Login Success',desc:"Welcome to Cult-fit-sotre.",status:"success"})
      setDisable(false)
      navigate('/store')
    return userLogin(res.data)
    }).catch(err=>{
      setMessage({title:"Login Fail",desc:"Invalid UserDetails",status:"error"})
    return setDisable(false)
    })
  }catch(err){
    setMessage({title:"Login Fail",desc:"Invalid UserDetails",status:"error"})
  }
}
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg='gray.900'
      color='gray.200'
      border='2px'
      direction={'column'}
      >
        <Box onClick={()=>navigate("/")} > <Logo/> </Box>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>Products</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          // bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' value={user.email} onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' value={user.password} onChange={handleChange}  />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                disabled={disable}
                color={'white'}
                onClick={handleClick}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Text fontSize='sm' >
                Don't have Account!
              <Link color={'blue.400'}fontWeight={'semibold'} onClick={()=>navigate('/signup')} > Sign Up</Link> Here
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}