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

export default function Signup() {
    return (
        <>
            <VStack spacing={4} mt='' p='9'>
                <Flex>
                    <FormControl flex="1">
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Enter your name" />
                    </FormControl>
                    <FormControl flex="1.3" ml={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" />
                    </FormControl>
                </Flex>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" placeholder="Confirm your password" />
                </FormControl>
                <Button bg='#e66063' mt='3'>Signup</Button>
            </VStack >
        </>
    )
}
