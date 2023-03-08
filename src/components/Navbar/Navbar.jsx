import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'



const Navbars = () => {

    return (
        
        <Navbar variant='dark' expand="lg" className='topnav'>
        <Container fluid>
          <Navbar.Brand href="/" className='topname'>Natalie &nbsp; &nbsp;  Dixon</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0 ms-auto py-2 px-5"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
             
              
              <Nav.Link href="/skills" >
                Skills
              </Nav.Link>
              <Nav.Link href="/works">Works</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Contact Me" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/contact">Contact Me</NavDropdown.Item>
                {/* <NavDropdown.Item href="ResumeforSept2022.pdf" download="ResumeforSept2022.pdf">
                  Download Resume
                </NavDropdown.Item> */}
               
              </NavDropdown>
              <Nav.Link href="https://github.com/nataliemajadixon/"> <i class="bi bi-github"></i></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/nataliedixon369/"> <i class="bi bi-linkedin"></i></Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      
    )
}

export default Navbars;