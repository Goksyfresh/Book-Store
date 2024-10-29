import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import LoadingScreen from '../components/spinner'
import { useBookStore } from '../store/store';
import {CiSquarePlus} from "react-icons/ci";
import { Box, Button, Container,Flex,SimpleGrid, Text } from '@chakra-ui/react';
import BookCover from '../components/bookCover';

const Home = () => {
  
    const {fetchBooks, books} = useBookStore()
    const [loading, setLoading] = useState(false);
    

    useEffect( ()=>{
        
            
        setLoading(true);
        fetchBooks()
        setLoading(false)   

    
        

    },[fetchBooks])
  return (
    <Box>
        <Box
            display={'flex'}
            mx={{base: 100, lg:250}}
            justifyContent={'space-between'}
            alignItems={'center'}>
                <Text as={'h1'}
                fontSize={'3xl'}
                marginY={'8'}>
                    Books List
                </Text>
                <Link to={'/books/create'}>
                <Button>
                <CiSquarePlus fontSize={"20px"}/>
              </Button>
                </Link>
        </Box>
        <Flex
            align={'center'}
            justify={'center'}
           
            width={'100vw'}
            p={5} 
       >
        {loading ? (
            <LoadingScreen/>
        ) : (
            <SimpleGrid columns={{sm:2, lg:4}}
        spacingX={5}
        spacingY={6}
        padding={10}
        
        
        justifyContent={'center'}
       >
            {books.map((book, index ) => (
                <BookCover book={book} key={book._id}/>
              

            ))}
       
        </SimpleGrid>
          
       )}     
        </Flex>
         
        </Box>
    
  )
}

export default Home