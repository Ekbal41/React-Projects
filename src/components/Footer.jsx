import { ArrowUpIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    const scrollToTop = () => {
        //scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <Box textAlign={'center'} position={'relative'}>
    <Heading color={'teal'} fontSize={15} mb={5}>Copyright 2023 | website.com</Heading>
    <Button rightIcon={<ArrowUpIcon />} onClick={scrollToTop} position={'absolute'}right={4} bottom={{base:"7", md:"1", lg:"1"}} colorScheme='teal' variant='solid'>
    Top
  </Button>
    </Box>
  )
}

export default Footer