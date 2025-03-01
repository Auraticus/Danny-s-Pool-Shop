import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Image from '../image';
import logo from "../../assets/logo.png";

function NavBarComponent() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Image image={logo} styles={{ width: "60px", height: "60px" }} className="d-inline-block align-top" />
        </Navbar.Brand>

        <div className={`${styles.searchBar} d-none d-lg-flex`}>
          <Form.Control
            type="search"
            placeholder="Find pool supplies..."
            aria-label="Search"
          />
          <Button variant="outline-success" className={styles.searchButton}>Search</Button>
        </div>

        <div className="d-flex d-lg-none align-items-center">
          <Form.Control
            type="search"
            placeholder="Find supplies..."
            aria-label="Search"
            className={styles.searchBar}
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav className={styles.navbarMobileSub}>
            <Nav.Link className={styles.text} onClick={handleHomeClick}>Home</Nav.Link>
            <Nav.Link className={styles.text} onClick={handleContactClick}>Contact</Nav.Link>
            <NavDropdown
              className={styles.text}
              title="Products"
              id="navbarScrollingDropdown"
              align="end"
            >
              <NavDropdown.Item href="#action3">Chemical Supplies</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hardware</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;