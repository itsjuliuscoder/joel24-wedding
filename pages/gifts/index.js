import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav } from "react-bootstrap";
import logoImg from "../../public/confab-ft.png";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gifts Catalog - John & Elizabeth - JOEl24</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bodyContainer}>
        <div className={styles.header}>
          <Navbar bg="light" expand="lg" variant="light" className={`${styles.navbar} justify-content-center`}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className={`${styles.navLinks} text-center`}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about" >About the Couple</Nav.Link>
                    <Nav.Link href="/details">Wedding Details</Nav.Link>
                    <Nav.Link href="/gifts" className={styles.active}>Gifts Catalog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
          <div className={styles.about__banner}>
              <h3>Gifts Catalog</h3>
              <p></p>
          </div> 
          <div className={styles.body__container}>
            <Container>
                <Row>
                  <Col xs={12} md={6}>
                    
                  </Col>
                  <Col xs={12} md={6}>
                    
                  </Col>
                </Row>
            </Container>
          </div>
          <div className={styles.footer__styles}>
            <Container>
                <div className={styles.footer__inner}>
                    <p>&copy; JOEL24 Wedding. All rights reserved. Website by <a href="https://github.com/itsjuliuscoder" target="_blank"><b>Julius</b></a></p>
                </div>
            </Container>
          </div>
      </div>
    </div>
  )
}
