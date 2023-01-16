import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userAuth } from '../../contexts/ContextProvider';

export default function Signup() {
  const [user, setuser]= useState({email:"",password:""})
  const [name, setName] = useState({fname:"",lname:""})
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }
  const handleName = (e)=>{
    setName({...name, [e.target.name]:e.target.value})
  }
  const handleSignup = ()=>{
    setUser()
  }
  const {userLogin} = useContext(userAuth)
  const setUser = async()=>{
    try{
      axios.post(`https://cliff-wary-fennel.glitch.me/api/auth/register`,user).then((res)=>userLogin(res.data))
    }catch(err){
      console.log(err)
    }
  }

  const navigate = useNavigate()
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg='gray.900'
      color='gray.200'
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.400'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={4}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="fname" value={user.fname} onChange={handleName}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name='lname' value={user.lname} onChange={handleName}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' value={user.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='password' value={user.password} onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={handleSignup}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={4}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={()=>navigate('/login')}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}