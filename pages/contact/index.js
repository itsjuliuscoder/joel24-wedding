import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav } from "react-bootstrap";
import logoImg from "../../public/confab-ft.png";
import sliderImg1 from "../../public/images/bg2.png";
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
            <Navbar bg="light" expand="lg" variant="light" className={styles.navbar}>
              <Container>
                  <Navbar.Brand href="/">
                    <div className={styles.logo}>
                        <Image
                          src={logoImg}
                          alt="Confab Logo"
                          width="150px"
                          height="100px" 
                        />
                      </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                      <Nav className={`mr-auto ${styles.navLinks}`}>
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/about">About</Nav.Link>
                          <Nav.Link href="/events">Events</Nav.Link>
                          <Nav.Link href="/contact" className={styles.active}>Contact</Nav.Link>
                      </Nav>
                      <Button className={styles.buttonRegister} variant="primary">Register</Button>
                      
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
        <div className={styles.contactBody}>
            <Container>
            <div className={styles.contact__body__row}>
                <Row>
                    <Col xs={12} md={4}>
                        <Row className='mb-2'>
                            <div className={styles.contact__rower_1}>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <div className={styles.contact__icn}>
                                            <FaEnvelope />
                                        </div>
                                    </Col>
                                    <Col xs={9} md={9}>
                                        <h4>Email Address</h4>
                                        <p>theconfab01@gmail.com</p>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                        <Row className='mt-2'>  
                            <div className={styles.contact__rower_2}>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <div className={styles.contact__icn}>
                                            <FaPhoneAlt /> 
                                        </div>
                                    </Col>
                                    <Col xs={9} md={9}>
                                        <h4>Phone Number</h4>
                                        <p>+234 8037699362</p>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                        <Row className='mt-2'>  
                            <div className={styles.contact__rower_3}>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <div className={styles.contact__icn}>
                                            <FaMapMarkerAlt style={{ fontSize: '20px' }} />
                                        </div>
                                    </Col>
                                    <Col xs={9} md={9}>
                                        <h4>Location</h4>
                                        <p>Lagos, Nigeria</p>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={7}>
                        <Row>
                            <div className={styles.contact__box}>
                                <h4>Send Us a Message</h4>
                                <p>Reach out to us through this form, we are interested in working with you.</p>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Control className={styles.form__input} placeholder="Full name" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Control className={styles.form__input} placeholder="Email Address" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Control className={styles.form__input} placeholder="Subject of Message" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Control className={styles.form__input} placeholder="Phone number" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className={styles.form__input} as="textarea" row={3} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Button variant="outline-secondary" size="lg" className={styles.footer__form__btn}>Send Message</Button>
                                </Row>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
        <Container>
            <div className={styles.footer__note}>
            <Row>
                <div className={styles.footer__note__row}>
                    <h1>Register for CONFAB 2024!!!</h1>
                    <Button variant="outline-secondary" size="lg" className={styles.footer__note__btn}>Register Now</Button>
                </div>
            </Row>
            </div>
        </Container>  
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
