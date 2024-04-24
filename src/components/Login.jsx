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
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../state/AuthSlice.js'

export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // const [response, setResponse] = useState('')
    const [errorDiv, setErrorDiv] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [errorFromDB, setErrorFromDB] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const dispatch = useDispatch()

    const userName = useSelector((state) => state.auth.name)

    const handleSubmit = () => {
        setErrorDiv(false)
        setErrorFromDB(false)
        setErrorText('')

        const loginData = {
            name: name,
            password: password
        }

        if (Validation()) {
            axios.post('http://localhost:8888/auth/login', loginData)
                .then((res) => {
                    // setResponse(res.data.name)
                    const api = res.data[0].name
                    // console.log(api)
                    dispatch(
                        setLogin({
                            isLoggedIn: true,
                            name: api,
                        })
                    )

                    if (res.data.length === 0) {
                        toast({
                            title: "User does not exist",
                            description: response,
                            status: "error",
                            duration: 4000,
                            isClosable: true,
                            position: "top-right",
                        });
                    } else {
                        toast({
                            title: "Logged In!",
                            description: "Welcome Back! ",
                            status: "success",
                            duration: 4000,
                            isClosable: true,
                            position: "top-right",
                        });

                        // add last login date 
                        axios.put('http://localhost:8888/auth/login/date')
                            .then((res) => {
                                console.log(res.data)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        navigate('/')
                    }


                })
                .catch((err) => {
                    console.log(err.data)
                    setErrorFromDB(true)
                    toast({
                        title: "Error",
                        description: "Name or Password is incorrect",
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
                    <FormLabel>Name {userName}</FormLabel>
                    <Input type="name"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={errorDiv ? 'red' : '' || errorFromDB == true ? 'red' : ''}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={errorDiv ? 'red' : '' || errorFromDB == true ? 'red' : ''}
                    />
                </FormControl>
                <Button bg='#e66063' mt='3' onClick={handleSubmit}>Login</Button>
            </VStack>
        </>
    )
}
