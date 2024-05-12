import React from 'react'
import '../App.css'
import { Box, Flex, HStack, Image, MenuButton, Spacer, Text, Avatar, MenuDivider, Menu, MenuList, MenuItem, useToast } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import logo from '../img/Asset 4.png'
import logo1 from '../img/Asset 6.png'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../state/AuthSlice.js'

export default function Navbar() {
    const dispatch = useDispatch()
    const toast = useToast
    const isAuth = useSelector((state) => state.auth.isLoggedIn)
    const userName = useSelector((state) => state.auth.name)

    const handleLogout = () => {
        dispatch(
            setLogout()
        )
        toast({
            title: "You have logged out",
            description: "See you again!",
            status: "info",
            duration: 4000,
            isClosable: true,
            position: "top-right",
        });
    }

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
                        <Link to={'/admin'}>Contact Us</Link>
                        {isAuth ?

                            <Menu>
                                <MenuButton>
                                    <Avatar bg='teal.500' />
                                </MenuButton>
                                <MenuList>
                                    <Link to={'/' + userName}><MenuItem>My Account</MenuItem></Link>
                                    <MenuItem>Edit Profile </MenuItem>
                                    <MenuDivider />
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                            :
                            <Box>
                                <Link to="/auth" >Login | Signup</Link>
                            </Box>
                        }

                    </HStack>
                </Flex>
            </Box>
        </>
    )
}
