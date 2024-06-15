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
        <title>About Us - Conference of Faithful Ambassadors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bodyContainer}>
        <div className={styles.header}>
          <Navbar bg="light" expand="lg" variant="light" className={`${styles.navbar} justify-content-center`}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className={`${styles.navLinks} text-center`}>
                  <Nav.Link href="/" className={styles.active}>Home</Nav.Link>
                  <Nav.Link hrecf="/about">About</Nav.Link>
                  <Nav.Link href="/events">Events</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
           
          <div className={styles.footer__styles}>
            <Container>
                <div className={styles.footer__inner}>
                  <Row>
                    <div className={styles.logo__footer}>
                      <Image
                          src={logoImg}
                          alt="Confab Logo"
                          width="150px"
                          height="100px" 
                      />
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.footer_links}>
                      <ul>
                        <li><Link href="/">Home</Link><BsFillCircleFill className={styles.footer__icn} /></li>
                        <li><Link href="/events">Events</Link><BsFillCircleFill className={styles.footer__icn} /></li>
                        <li><Link href="/about">About</Link><BsFillCircleFill className={styles.footer__icn} /></li>
                        <li><Link href="/contact">Contact</Link><BsFillCircleFill className={styles.footer__icn} /></li>
                      </ul>
                    </div>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.form__label}>SUBSCRIBE TO OUR NEWSLETTER</Form.Label>
                      <Form.Control className={styles.form__input} placeholder="Enter Your Email Address" />
                      <Button variant="outline-secondary" size="lg" className={styles.footer__form__btn}>Subscribe Now</Button>
                    </Form.Group>
                  </Row>
                  <Row>
                      <div className={styles.socialIcons}>
                          <ul>
                            <li><a href="https://web.facebook.com/theofficialconfab" target="blank"><FaFacebook className={styles.footer__icn__2} /></a></li>
                            <li><a href="https://www.instagram.com/confab_global/" target="blank"><FaInstagramSquare className={styles.footer__icn__3}/></a></li>
                            <li><a href="https://x.com/ConfabGlobal" target="blank"><FaTwitter className={styles.footer__icn__4} /></a></li>
                            <li><a href="https://www.youtube.com/@confabnigeria7469" target="blank"><FaYoutube className={styles.footer__icn__5} /></a></li>
                          </ul>
                      </div>
                  </Row>
                </div>
            </Container>
          </div>
      </div>
    </div>
  )
}
