import React from 'react'
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
import '../App.css'

export default function Login() {
    return (
        <>
            <VStack spacing={4} mt='' p='9'>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="name" placeholder="Enter your name" />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button bg='#e66063' mt='3'>Login</Button>
            </VStack>
        </>
    )
}
