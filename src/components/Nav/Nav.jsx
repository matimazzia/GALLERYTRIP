import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://i.pinimg.com/originals/4a/a5/34/4aa534605d1afc465c5bdc5dd80f1ecb.png"
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