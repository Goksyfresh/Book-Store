import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import { Box, IconButton } from '@chakra-ui/react'

const BackButton = ({destination='/'}) => {
  return (
    <Box>
        <Link to={destination}>
            <IconButton icon={<BsArrowLeft/>} color={'black'} bg={'white'}/>
        </Link>
    </Box>
  )
}

export default BackButton