import {
    Box, Flex,
    useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Add from './components/Add'
import Edit from './components/Edit'
import Remove from './components/Remove'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../state/ProductPage'

export default function Product() {
    const toast = useToast()
    const [view, setView] = useState('')
    const dispatch = useDispatch()

    const page = useSelector((state) => state.page.page)

    return (
        <>
            <Box bg={'#481E14'} color={'white'}>
                <Flex h="100vh">

                    <AdminSidebar />
                    <Flex flex="1" direction="column" p="6" >
                        {/* add container */}
                        <Flex w='100%' p={8} justifyContent={'space-evenly'}>
                            <Box
                                border={page === 'add' ? '2px solid #F2613F' : '3px solid black'}
                                w='30%'
                                p='4'
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={'17px'}
                                onClick={() => dispatch(setPage({ page: 'add' }))}
                                _hover={{ cursor: 'pointer' }}
                            >
                                Add Product
                            </Box>

                            <Box
                                border={page === 'edit' ? '2px solid #F2613F' : '3px solid black'}
                                w='30%'
                                p='4'
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={'17px'}
                                onClick={() => dispatch(setPage({ page: 'edit' }))}
                                _hover={{ cursor: 'pointer' }}>
                                Edit Product
                            </Box>

                            <Box
                                border={page === 'remove' ? '2px solid #F2613F' : '3px solid black'}
                                w='30%'
                                p='4'
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={'17px'}
                                onClick={() => dispatch(setPage({ page: 'remove' }))}
                                _hover={{ cursor: 'pointer' }}>
                                Remove Product
                            </Box>
                        </Flex>

                        {page === 'add' ? <Add /> : ''}
                        {page === 'edit' ? <Edit /> : ''}
                        {page === 'remove' ? <Remove /> : ''}
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
