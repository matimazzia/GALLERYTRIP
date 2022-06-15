import { Button } from '@chakra-ui/react'
import React from 'react'

const Boton=({textbutton})=>{
    return(
    <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
      >
      {textbutton}
      </Button>

    )
}
export default Boton