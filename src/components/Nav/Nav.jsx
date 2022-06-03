import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://hieloandino.cl/wp-content/uploads/2019/09/whatsapp-logo-png-hd-2.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                React Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav