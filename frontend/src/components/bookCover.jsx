// BookCover.js
import { Box, HStack, IconButton, Text, VStack, useDisclosure } from "@chakra-ui/react";
import {MdDelete} from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useBookStore } from "../store/store";

const BookCover = ({ book}) => {

    const {deleteBooks, getSpecBook, updateBooks} = useBookStore()

    const handleDeleteBook = async (pid) => {
        const {success, message} = await deleteBooks(pid);
 
        if (!success){
         toast({
             title:"Error",
             description: message,
             status: "error",
             duration: 3000,
             isClosable: true,
         })
        } else{
         toast({
             title:"Success",
             description: message,
             status: "success",
             duration: 3000,
             isClosable: true,
         })
        }
     }

    const handleBookDetail = async (bookId) => {
        await getSpecBook(bookId)
       
    }

    // const [updatedBook, setUpdatedBook] = useState(book)

    // const {isOpen ,onOpen, onClose} = useDisclosure();

    // const handleUpdateBook = async (bid, updatedBook) => {
    //     const {success, message} = await updateBooks(bid, updatedBook)

    //     onClose();
    //     if(!success){
    //         toast({
    //             title:"Error",
    //             description: message,
    //             status: "error",
    //             duration: 3000,
    //             isClosable: true,
    //         })
    //     }else{
    //         toast({
    //             title:"Success",
    //             description: "Product updated successfully",
    //             status: "success",
    //             duration: 3000,
    //             isClosable: true,
    //         })
           
    //     }
    // }
  return (
    <Box
      bg="orange.600"
      color="white"
      w="180px"
      h="300px"
      borderRadius="lg"
      boxShadow="xl"
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack spacing={3} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          {book.title}
        </Text>
        <Text fontSize="md" fontStyle="italic">
          by {book.author}
        </Text>
      </VStack>
      <Text alignSelf="flex-end" fontSize="md" opacity={0.8}>
        Published: {book.publishYear}
      </Text>
      <HStack spacing={3} justify={'center'} mt={4}>
        <Link to={'/books/details'}>
        <IconButton icon={<FaInfoCircle/>} color='white'  onClick={()=> handleBookDetail(book._id)}/>
        </Link>
      
      <IconButton icon={<MdDelete/>} color='white' onClick={() => handleDeleteBook(book._id)}/>
      
        <Link to={'/books/edit/id'}>
        <IconButton icon={<FaEdit/>} color='white'/>
        </Link>
        
      </HStack>
    </Box>
  );
};

export default BookCover;