import { Box, Button, Container, Heading, Input, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useBookStore } from '../store/store';
import BackButton from '../components/backButton';

const Createpage=()=> {
  const [newBook, setNewBook] = useState({
    title:'',
    author:'',
    publishYear:'',
    about: '',
    review: ''
  });
const toast = useToast()
  const {createBook} = useBookStore();

  const handleAddBook = async() => {
    const {success, message} = await createBook(newBook);
    if(!success ){
      toast({
            title:"Error",
            description: message,
            status:"error",
            isClosable: true});
    } else{
      toast({
            title:"Success",
            description: message,
            status:"success",
            isClosable: true});
    }

    setNewProduct({
        title:'',
        author:'',
        publishYear:'',
        about: '',
        review: ''
    })
    

  }
  return (
   <Container maxH={"container.sm"}>
    <BackButton/>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create New Book
      </Heading>
      <Box
      w={"full"} bg={"grey.100"}
      p={6} rounded={"lg"} shadow={"md"} >

        <VStack spacing={4}>
          <Input
          placeholder='Book Title'
          name='Title'
          value={newBook.title}
          onChange={(e)=> setNewBook({...newBook, title: e.target.value})}/>

<Input
          placeholder='Book Author'
          name='author'
          value={newBook.author}
          onChange={(e)=> setNewBook({...newBook, author: e.target.value})}/>

<Input
          placeholder='Book Publish Year'
          name='publish year'
          value={newBook.publishYear}
          onChange={(e)=> setNewBook({...newBook, publishYear: e.target.value})}/>

<Input
          placeholder='About Book'
          name='About '
          value={newBook.about}
          onChange={(e)=> setNewBook({...newBook, about: e.target.value})}/>

<Input
          placeholder='Book Rating'
          name='Rating'
          value={newBook.review}
          onChange={(e)=> setNewBook({...newBook, review: e.target.value})}/>

          <Button w={'full'} colorScheme='blue' onClick={handleAddBook}>
            Add Book
          </Button>
        </VStack>
      </Box>
    </VStack>
   </Container>
  )
}

export default Createpage;
