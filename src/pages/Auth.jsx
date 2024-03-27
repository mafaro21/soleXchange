import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Center,
    VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import '../App.css'
import Signup from '../components/Signup'
import Login from '../components/Login'


export default function Auth() {
    const [showAuth, setShowAuth] = useState('signup')

    return (
        <>
            <Box className='auth max'>
                <Center h="100vh" >
                    <Box w="500px" bg="rgba(0, 0, 0, 0.9)" p='' style={{ border: '1px rgba(128, 128, 128, 0.2) solid', borderRadius: '4%', color: 'white' }}>

                        <Box bg='' p='' >
                            <Flex >
                                <Center p='3' style={{ width: '50%', cursor: 'pointer', backgroundColor: `${showAuth === 'signup' ? '#e66063' : ''}`, borderTopLeftRadius: '15px' }} onClick={() => setShowAuth('signup')}>
                                    Signup
                                </Center>
                                <Center p='3' style={{ width: '50%', cursor: 'pointer', backgroundColor: `${showAuth === 'login' ? '#e66063' : ''}`, borderTopRightRadius: '15px' }} onClick={() => setShowAuth('login')}>
                                    Login
                                </Center>
                            </Flex>
                        </Box>

                        {showAuth === 'signup' ? <Signup /> : ''}
                        {showAuth === 'login' ? <Login /> : ''}

                    </Box >
                </Center >
            </Box >
        </>
    )
}
