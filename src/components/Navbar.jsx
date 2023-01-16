import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import Logo from './Logo';
import { useContext, useEffect } from 'react';
import {userAuth} from '../contexts/ContextProvider'
import { useState } from 'react';
import axios from 'axios'

export default function Navbar({theme}) {
  const links = ['FITNESS', 'CARE', 'MIND', 'STORE'];
  const {isAuth, userLogout} = useContext(userAuth)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState(0);
  useEffect(() => {
    getCart()
  }, [])
const getCart = ()=>{
  axios.get('https://mercury-breezy-cave.glitch.me/cart').then((res)=>setCart(res.data.length))
}
const handleLogout = ()=>{
  userLogout()
}

  const navigate = useNavigate()
  return (
    <>
      <Box bg={useColorModeValue(`${theme}`, 'gray.900')} zIndex='100' textColor="gray.200" position={'fixed'} right='0' left='0' w='screen' top={'0'} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack width='60%' justify={'space-between'}  alignItems={'center'}>
            <Box onClick={()=>{navigate('/')}} cursor='pointer' > <Logo/> </Box>
            <HStack
              as={'button'}
              spacing={10}
              fontWeight='bold'
              color={'gray.300'}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link} to={`/${link.toLowerCase()}`}  _hover={{color:"gray.200" }} >{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} bg='gray.900' color='gray.200' >
            {
             isAuth===false?<Button
             variant={'outline'}
             size={'xs'}
             mr={4}
             onClick={()=>{navigate('/login')}}
             >
             Login
           </Button>:""
            }
            
            <Menu bg='gray.900' >
              <MenuButton
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList bg='gray.800' h='52'p='4'zIndex='110' >
                  <Box display='flex' flexDirection='column' w='100%' zIndex='200' h='100%' justifyContent={'space-around'}>
                    <MenuItem bg='gray.900' zIndex='200'>Profile</MenuItem>
                    <MenuItem bg='gray.900' zIndex='200'>General</MenuItem>
                    <MenuItem bg='gray.900' zIndex='200'>Setting</MenuItem>
                    <MenuItem bg='gray.900' zIndex='200' onClick={()=>navigate("/cart")} >Cart <span style={{marginLeft:"20px"}}> {cart}</span> </MenuItem>
                    <MenuDivider/>
                    {isAuth===true?<MenuItem bg='gray.900' onClick={handleLogout} >Log-out</MenuItem>:''
                    }
                  </Box>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} backgroundColor={'gray.900'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link} to={`/${link.toLowerCase()}`}  _hover={{color:"gray.200" }} >{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}