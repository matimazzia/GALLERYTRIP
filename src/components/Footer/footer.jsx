import React from "react";
import Boton from "./button_footer";
const Footer = ({textbutton})=>{
    return(
        <div className="footer">
            <Boton>
                {textbutton}
            </Boton>
        </div>
    )
}
export default Footer