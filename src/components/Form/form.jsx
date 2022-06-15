import React from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
import { useState } from "react";


const Form =()=>{
    const [mail, setMail] = useState('')
    const [name, setName] = useState('')

    const handleMailChange = (e) => setMail(e.target.value)
    const handleNameChange = (e) => setName(e.target.value)
  
    const isError = mail === ''
    const isError2 = name === ''
  
    return(
        <div>        
            <FormControl isInvalid={isError}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    type='email'
                    value={mail}
                    onChange={handleMailChange}
                />
                {!isError ? (
                    <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isInvalid={isError2}>
                <FormLabel htmlFor='first-name'>First name</FormLabel>
                <Input 
                    id='first-name' 
                    placeholder='First name'
                    value={name}
                    onChange={handleNameChange}
                />
                {isError2 ? <FormErrorMessage>Name is required.</FormErrorMessage> : <></>}
            </FormControl>
        </div> 
    )
}

export default Form