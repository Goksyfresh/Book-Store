import React, { useEffect, useState } from 'react'
import { useBookStore } from '../store/store'
import BackButton from '../components/backButton'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ShowBook = () => {

    const {id} = useParams();
    const {selectedBook, getSpecBook} = useBookStore()
  
    useEffect(()=> {
        getSpecBook(id);
    },[id, getSpecBook])

    if (!selectedBook) {
        return <Text>Loading book details...</Text>;
      }
  
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
            About {selectedBook.title}
          </Heading>
          <Text>
           {selectedBook.about}
          </Text>
        </Box>

        {/* Review Section */}
        <Box textAlign="center">
          <Heading size="md" mb={2}>
            Review
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            {selectedBook.review}/5
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

    
   
        


export default ShowBook