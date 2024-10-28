import React, { useEffect, useState } from 'react'
import { useBookStore } from '../store/store'
import BackButton from '../components/backButton'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const ShowBook = () => {
    const {books, getSpecBook} = useBookStore()
  

  
  return (
    
    <Box 

      borderWidth="1px" 
      borderRadius="lg" 
      p={5} 
      maxW="sm" 
      mx="auto" 
      boxShadow="md"
    >
             <BackButton/>
      <VStack spacing={4} align="center">
        {/* About Section */}
        <Box textAlign="center">
          <Heading size="md" mb={2}>
            About {books.title}
          </Heading>
          <Text>
           {books.about}
          </Text>
        </Box>

        {/* Review Section */}
        <Box textAlign="center">
          <Heading size="md" mb={2}>
            Review
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            {books.review}/5
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

    
   
        


export default ShowBook