import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';
const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.200', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} fontSize='small' spacing={8}>
          <Stack align={'flex-start'}>
            <Logo/>
            <Text fontSize={'smaller'}>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Link href={'#'}>cult.fit for business</Link>
            <Link href={'#'}>cult.fit franchise</Link>
            <Link href={'#'}>corporate pratnerships</Link>
            <Link href={'#'}>cult pass network</Link>
            <Link href={'#'}>t&c for business</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Link href={'#'}>partner.fit</Link>
            <Link href={'#'}>blogs</Link>
            <Link href={'#'}>security</Link>
            <Link href={'#'}>careers</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Link href={'#'}>contact us</Link>
            <Link href={'#'}>privacy policy</Link>
            <Link href={'#'}>cult bmi calculator</Link>
            <Link href={'#'}>terms & conditions</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Image w='140px' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png' />
            <Image w='140px' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png' />
            <Stack direction={'row'} w='10' >
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text m='auto' fontSize={'sm'} >© 2022 Sproute-Routes All rights reserved</Text>
         
        </Container>
      </Box>
    </Box>
  );
}