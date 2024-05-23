import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Container, Flex, VStack, useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams, redirect } from 'react-router-dom'
import axios from 'axios'
import Error from './404'

export default function MyAccount() {
    const [data, setData] = useState('')
    const [regDate, setRegDate] = useState('')
    const [notFound, setNotFound] = useState(false)
    const user = useParams()
    const username = user.userName
    const navigate = useNavigate()
    const toast = useToast()

    const loggedInName = useSelector((state) => state.auth.name)


    // const Error = () => {
    //     navigate('*')
    // }

    useEffect(() => {
        axios.get(`http://localhost:8888/user/profile/?q=${username}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data[0])
                console.log(data)
                const date = new Date(res.data[0].registration_date)
                const formattedDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date)
                setRegDate(formattedDate)
            })
            .catch((err) => {
                if (err.message === 'Network Error') {
                    return navigate('/500')
                } else if (err.response.status === 404) {
                    toast({
                        title: "User does not exist",
                        description: "Try again",
                        status: "error",
                        duration: 4000,
                        isClosable: true,
                        position: "top-right",
                    });
                    return navigate("/404")
                }

            })
    }, [username])


    return (
        <>
            {/* {notFound && <Redirect/>} */}
            <Navbar />
            <Box p='9' mt='7' color='white'>
                <Container maxW={'2xl'} bg={'black'}>

                    <Flex justifyContent={'space-between'}>
                        <VStack p={6} spacing={2} align={'left'}>
                            <Box>
                                {data.user_name}
                            </Box>
                            <Box>
                                {data.email}
                            </Box>
                            <Box>
                                Joined: {regDate}
                            </Box>
                        </VStack>

                        {username === loggedInName ? <Button bg={'#e66063'} mt={12}>Edit Profile </Button> : ''}
                    </Flex>

                </Container>
            </Box>
        </>
    )
}
