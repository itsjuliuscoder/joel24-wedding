import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav } from "react-bootstrap";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Conference of Faithful Ambassadors</title>
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
                    <Nav.Link href="/about" className={styles.active}>About the Couple</Nav.Link>
                    <Nav.Link href="/events">Wedding Details</Nav.Link>
                    <Nav.Link href="/contact">Gifts Catalog</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
        <div className={styles.contact__banner}>
            <Container>
                <Row>

                </Row>
            </Container>
        </div>  
        <div className={styles.footer__styles}>
            <Container>
                <div className={styles.footer__inner}>
                    <p>&copy; JOEL24 Wedding. All rights reserved. Website by<a href="" target="_blank"><b>Julius</b></a></p>
                </div>
            </Container>
        </div>
      </div>
    </div>
  )
}
