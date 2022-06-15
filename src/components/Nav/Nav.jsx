import {
    Flex, 
    Spacer,
    Box,
    Heading,
    ButtonGroup,
    Button,
    Center
} from "@chakra-ui/react";

const Nav = () => {
    return (
        <Flex gap='2' marginTop="1rem" justify="center">
            <Box p='2'>
                <Heading size='md'>Chakra App</Heading>
            </Box>
            <Spacer></Spacer>
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Nav