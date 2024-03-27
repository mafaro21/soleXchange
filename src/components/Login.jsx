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

export default function Login() {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = () => {
        const loginData = {
            name: name,
            password: pass
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
            <VStack spacing={4} mt='' p='9'>
                <FormControl>
                    {response}
                    <FormLabel>Name </FormLabel>
                    <Input type="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} />
                </FormControl>
                <Button bg='#e66063' mt='3' onClick={handleSubmit}>Login</Button>
            </VStack>
        </>
    )
}
