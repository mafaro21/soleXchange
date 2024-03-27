import React from 'react'
import '../App.css'
import { Box, Flex, HStack, MenuButton, Spacer, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

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
                    <Link to={'/'}><Text ml="6" as='b' fontSize='2xl'>soleXchange</Text></Link>
                    <Spacer />
                    <HStack spacing={10}>
                        {/* <Box>Home</Box> */}
                        <Link to={'/category'}>Category</Link>
                        <Box>Contact Us</Box>
                        <Box>
                            <Link to="/auth">Login | Signup</Link>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}
