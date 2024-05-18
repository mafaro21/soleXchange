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
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { setLogin } from '../state/AuthSlice.js'
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirm, setConfirm] = useState('')
    const [errorDiv, setErrorDiv] = useState(false);
    const [errorText, setErrorText] = useState("");
    const toast = useToast()
    const [response, setResponse] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorDiv(false)
        setErrorText('')

        const loginData = {
            name: name,
            email: email,
            password: password,
            confirm: confirm
        }

        if (Validation()) {
            axios.post('http://localhost:8888/auth/signup', loginData)
                .then((res) => {
                    // setResponse(res.data)
                    // console.log(res.data)
                    // const api = res.data[0].name
                    dispatch(
                        setLogin({
                            isLoggedIn: true,
                            name: name,

                        })
                    )

                    toast({
                        title: "Welcome newcomer!",
                        description: "You have successfully created an account.",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                        position: "top-right",
                    });
                    navigate('/')
                })
                .catch((err) => {
                    // setResponse(err.data)
                    console.log(err)
                    navigate('/500')

                    toast({
                        title: "Error",
                        description: "error",
                        status: "error",
                        duration: 4000,
                        isClosable: true,
                        position: "top-right",
                    });
                })
        }

    }

    const Validation = () => {
        const namePatt = /^[a-zA-Z0-9_-]{3,16}$/
        const passPatt = /^[a-zA-Z0-9_-]{8,}$/
        const emailPatt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (name.length === 0 || password.length === 0 || email.length === 0 || confirm.length === 0) {
            setErrorDiv(true)
            setErrorText('You have left out some empty fields')
        } else if (!namePatt.test(name)) {
            setErrorDiv(true)
            setErrorText('That can\'t be your name.... lol')
        } else if (password.length < 8) {
            setErrorDiv(true)
            setErrorText('Password needs to be more than 8 characters')
        } else if (!passPatt.test(password)) {
            setErrorDiv(true)
            setErrorText('Password is suspiscious')
        } else if (!emailPatt.test(email)) {
            setErrorDiv(true)
            setErrorText('Email not valid')
        } else if (password !== confirm) {
            setErrorDiv(true)
            setErrorText('Passwords not matching')
        } else return true
    }

    const errorMessage = errorDiv ? (
        <div style={{ color: "red", fontSize: "18px" }}>{errorText}</div>
    ) : (
        ""
    );

    return (
        <>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} mt='' p='9'>
                    {errorMessage}
                    <Flex>
                        <FormControl flex="1">
                            <FormLabel>Name</FormLabel>
                            <Input type="text"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                isInvalid={errorDiv ? 'red' : ''}
                                required />
                        </FormControl>
                        <FormControl flex="1.3" ml={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={errorDiv ? 'red' : ''}
                                required />
                        </FormControl>
                    </Flex>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={errorDiv ? 'red' : ''}
                            required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type="password"
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirm(e.target.value)}
                            isInvalid={errorDiv ? 'red' : ''}
                            required />
                    </FormControl>
                    <Button bg='#e66063' mt='3' onClick={handleSubmit} type='submit'>Signup</Button>
                </VStack >
            </form>
        </>
    )
}
