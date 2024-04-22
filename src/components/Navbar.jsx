import React from 'react'
import '../App.css'
import { Box, Flex, HStack, Image, MenuButton, Spacer, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import logo from '../img/Asset 4.png'
import logo1 from '../img/Asset 6.png'

export default function Navbar() {
    return (
        <>
            <Box
                as="nav"
                px={4}
                bg='#f4d18c'
                // style={{ borderBottom: '1px #fff solid' }}
                position="fixed"
                top={0}
                left={0}
                right={0}
                zIndex="sticky"
                width="100%"
            >
                <Flex h={'65px'} alignItems="center" justifyContent="space-between">
                    <HamburgerIcon />
                    <Link to={'/'}>
                        <Image src={logo1} height={39} ml={3} />
                        {/* <Image src={logo} height={50} ml={3} /> */}
                    </Link>

                    <Spacer />

                    {/* <Link to={'/'} >
                        <Image src={logo} height={50} ml={3} />
                    </Link> */}

                    <Spacer />
                    <HStack spacing={10}>
                        {/* <Box>Home</Box> */}
                        <Link to={'/category'}>Category</Link>
                        <Box>Contact Us</Box>
                        {/* <Avatar bg='teal.500' /> */}
                        <Box>
                            <Link to="/auth">Login | Signup</Link>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}
