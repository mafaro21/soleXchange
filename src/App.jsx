import { useState } from 'react'
import { Box, Center, Container, Flex, HStack, Image, MenuButton, Spacer, Text, Button, SimpleGrid } from '@chakra-ui/react'
import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Navbar from './components/Navbar'
import img from './img/tennis.webp'
import adidas from './img/Adidas.jpg'
import nike from './img/Nike.jpg'
import puma from './img/PUMA.jpg'
import vans from './img/Vans.jpg'
import newB from './img/newb.webp'
import asi from './img/asi.webp'
import crocs from './img/crocs.webp'
import ree from './img/ree.webp'
import lac from './img/lac.webp'
import woman1 from './img/3.jpg'
import woman2 from './img/5.jpg'
import uni from './img/7.jpg'
import man from './img/8.jpg'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function App() {
  const userName = useSelector((state) => state.auth.name)

  // console.log(userName)

  const mainCard = [
    { img: adidas, link: '/brand/adidas' },
    { img: nike, link: '/brand/nike' },
    { img: puma, link: '/brand/puma' },
    { img: vans, link: '/brand/vans' },
  ]

  const rare = [
    { img: newB, name: 'New Balance Numeric 425', price: '69.99', sex: 'Unisex' },
    { img: asi, name: 'Asics GEL-Cumulus 23', price: '79.99', sex: 'Men' },
    { img: crocs, name: 'Crocs Classic Clogs', price: '55.00', sex: 'Women' },
    { img: ree, name: 'Reebok Workout Plus', price: '49.99', sex: 'Men' },
    { img: lac, name: 'Lacoste Baseshot 223 3 SMA', price: '110.00', sex: 'Men' }
  ]

  return (
    <>
      <Navbar />

      <Box bg='#f4d18c' p='9' className='test' mt='10'>

        <Container bg='' mt='9' maxW='container.2xl'>
          <Flex justify={'space-around'}>
            <Box bg='' ml='1' flex='1.2' mt='10'>
              <Text fontSize='4xl' as='b'>Not selling souls</Text>
              <Text fontSize='6xl'>Just premium quality soles</Text>
            </Box>
            <Box bg='' ml='' flex='1'>
              <Image src={img} loading='lazy' className='main-img' />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg='white' p='9'>
        <Container maxW='container.2xl'>
          <Box bg='' style={{ marginTop: '-109px' }} >
            <Flex justifyContent="space-between" p={4}  >
              {mainCard.map((card, index) => (
                <Box mr={5} bg="white" maxW="320px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} position="relative" _hover={{ '.button': { opacity: 1 } }} zIndex={0}>
                  {/* <Text mt={2}>Content for Card 1</Text> */}
                  <Image src={card.img} height={'130px'} />
                  <Link to={card.link}>
                    <Button
                      className="button "
                      position="absolute"
                      bottom={'0px'}
                      left="50%"
                      transform="translateX(-50%)"
                      opacity={0}
                      transition="opacity 0.5s"
                      zIndex={1} //still not able to hover outside the box
                      bg={'#e66063'}
                      color={'white'}
                      _hover={{ bg: '#25292a' }}
                    >
                      Shop Now
                      <ChevronRightIcon mt={'1'} />
                    </Button>
                  </Link>
                </Box>
              ))}

            </Flex>


            <Box mt='10'>
              <Text fontSize='3xl'>New & Rare</Text>
              <Flex justifyContent="space-between" p={6} >
                {rare.map((rare, index) => (
                  <Box
                    bg="white"
                    maxW="300px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                    p={4}
                    mr={5}>
                    <Image src={rare.img} />
                    <Text mt={5} as={'b'}>{rare.name}</Text>
                    <Text mt={1}>${rare.price}</Text>
                    <Text mt={1}>{rare.sex}</Text>
                  </Box>
                ))}
              </Flex>
            </Box>

            {/* {rare.map((rare, index) => (
              <Flex justifyContent="center" p={1} >
                <Box ml={1} bg={''} maxW={'2050px'}>
                  <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4} p={1}>
                    <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                      <Image src={rare.img} />
                      <Text mt={5} as={'b'}>{rare.name}</Text>
                      <Text mt={1}>${rare.price}</Text>
                      <Text mt={1}>{rare.sex}</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>
            ))} */}


          </Box>

        </Container>
      </Box>

      <Flex justifyContent="center" alignItems="center" mt={8} color={'white'} fontSize={'22px'} fontWeight={'bold'}>
        {/* Left picture */}
        <Box mr={0}>
          <Image src={man} alt="Picture 1" boxSize="800px" objectFit="cover" loading='lazy' />
          <Text marginTop={'-8'} marginLeft={'90%'} color={'white'}>Men</Text>
        </Box>
        {/* Middle pictures */}
        <Flex flexDirection="column" alignItems="center">
          <Box mb={1}>
            <Image src={uni} alt="Picture 2" boxSize="408px" objectFit="cover" loading='lazy' />
            <Text marginTop={'-10'} marginLeft={'76%'} color={'black'}>Unisex</Text>
          </Box>
          <Box mb={2}>
            <Image src={woman1} alt="Picture 3" boxSize="395px" objectFit="cover" loading='lazy' />
            <Text marginTop={'-10'} marginLeft={'75%'}>Colorful</Text>
          </Box>
        </Flex>
        {/* Right picture */}
        <Box ml={0}>
          <Image src={woman2} alt="Picture 4" boxSize="800px" objectFit="cover" loading='lazy' />
          <Text marginTop={'-8'} marginLeft={'85%'}>Women</Text>
        </Box>
      </Flex>

      <Footer />

    </>
  )
}

export default App
