import React from "react";
import Boton from "./button_footer";
import {Center} from "@chakra-ui/react";

const Footer = ({textbutton})=>{
    return(
        <Center marginTop={"5rem"}>
            <Boton>
                {/* {textbutton} */}
            </Boton>
        </Center>
    )
}
export default Footer