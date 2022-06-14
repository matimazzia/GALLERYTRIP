import {
    Editable,
    EditableInput,
    EditablePreview,
} from "@chakra-ui/react";

const Nav = () => {
    return (
        <Editable defaultValue='Take some chakra'>
            <EditablePreview />
            <EditableInput />
        </Editable>
    )
}

export default Nav