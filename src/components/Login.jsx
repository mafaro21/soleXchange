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
    useToast
} from '@chakra-ui/react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')
    const [errorDiv, setErrorDiv] = useState(false);
    const [errorText, setErrorText] = useState("");
    const navigate = useNavigate()
    const toast = useToast()

    const handleSubmit = () => {
        setErrorDiv(false)
        setErrorText('')
        const loginData = {
            name: name,
            password: password
        }

        if (Validation()) {
            axios.post('http://localhost:8888/auth/login', loginData)
                .then((res) => {
                    setResponse(res.data)
                    // toast({
                    //     title: "Logged In!",
                    //     description: { response },
                    //     status: "success",
                    //     duration: 4000,
                    //     isClosable: true,
                    //     position: "top-right",
                    // });
                })
                .catch((err) => {
                    setResponse(err.data)
                })
        }
    }

    const Validation = () => {
        const namePatt = /^[a-zA-Z0-9_-]{3,16}$/
        const passPatt = /^[a-zA-Z0-9_-]{8,}$/

        if (name.length === 0 || password.length === 0) {
            setErrorDiv(true)
            setErrorText('You have left out some empty fields')
        } else if (!namePatt.test(name)) {
            setErrorDiv(true)
            setErrorText('That can\'t be your name.... lol')
        } else if (password.length < 8) {
            setErrorDiv(true)
            setErrorText('Password too short')
        }
        else if (!passPatt.test(password)) {
            setErrorDiv(true)
            setErrorText('Password is suspiscious')
        } else return true

    }

    const errorMessage = errorDiv ? (
        <div style={{ color: "red", fontSize: "18px" }}>{errorText}</div>
    ) : (
        ""
    );

    return (
        <>
            <VStack spacing={4} mt='' p='9'>
                {errorMessage}
                <FormControl>
                    <FormLabel>Name </FormLabel>
                    <Input type="name"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={errorDiv ? 'red' : ''}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={errorDiv ? 'red' : ''}
                    />
                </FormControl>
                <Button bg='#e66063' mt='3' onClick={handleSubmit}>Login</Button>
            </VStack>
        </>
    )
}
