import { Button } from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons';

const Boton=({textbutton})=>{
    return(
    <Button
        size='md'
        height='48px'
        width='100px'
        border='2px'
        borderColor='green.500'
        rounded={"full"}
      >
      {/* {textbutton} */}
        <AddIcon/>
      </Button>

    )
}
export default Boton