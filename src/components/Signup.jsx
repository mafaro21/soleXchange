import React, { useState } from 'react'
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
import axios from 'axios'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = () => {
        const loginData = {
            name: name,
            email: email,
            password: pass,
            confirmPassword: confirmPass
        }

        axios.post('http://localhost:8888/auth/login', loginData)
            .then((res) => {
                setResponse(res.data)
            })
            .catch((err) => {
                setResponse(err.data)
            })

    }

    return (
        <>
            {response}

            <VStack spacing={4} mt='' p='9'>
                <Flex>
                    <FormControl flex="1">
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                    <FormControl flex="1.3" ml={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                </Flex>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" placeholder="Confirm your password" onChange={(e) => setConfirmPass(e.target.value)} />
                </FormControl>
                <Button bg='#e66063' mt='3' onClick={handleSubmit}>Signup</Button>
            </VStack >
        </>
    )
}
