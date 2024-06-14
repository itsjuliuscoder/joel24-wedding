import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav } from "react-bootstrap";
import logoImg from "../../public/confab-ft.png";
import sliderImg1 from "../../public/images/bg2.png";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaCalendarAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Events() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events - Conference of Faithful Ambassadors</title>
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
                          <Nav.Link href="/events" className={styles.active}>Events</Nav.Link>
                          <Nav.Link href="/contact">Contact</Nav.Link>
                      </Nav>
                      <Button className={styles.buttonRegister} variant="primary">Register</Button>
                      
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className={styles.Event__banner}>
              <Container>
                    <Row>

                    </Row>
              </Container>
          </div>
          <div className={styles.Event__body}>
            <Container>
                <div className={styles.Event__body__row}>
                    <Row>
                      <Col xs={12} md={4}>
                          <div className={styles.event__col__1}>
                              <div className={styles.event__title}>
                                  <h4>CONFAB SERIES</h4>
                              </div>
                              <div className={styles.event__para}>
                                <h5>THEME</h5>
                                <h4>BOLD AND DARING</h4>
                                <p>Succeeding Despite All Odds</p>
                              </div>
                              <div className={styles.event__details}>
                                <p><FaCalendarAlt />  6th of MAY, 2023</p>
                                <p><FaRegClock />  10:00 am Prompt</p>
                                <p><FaMapMarkerAlt />  6th of MAY, 2023</p>
                              </div>
                          </div>
                      </Col>
                      <Col xs={12} md={4}>
                        <div className={styles.event__col__2}>
                            <div className={styles.event__title}>
                              <h4>ABUJA CONFAB'23</h4>
                            </div>
                            <div className={styles.event__para}>
                              <h5>THEME</h5>
                              <h4>UNLEASHED:</h4>
                              <p>Driving Change, Scaling Heights, Taking Territories</p>
                            </div>
                            <div className={styles.event__details}>
                              <p><FaCalendarAlt />  24th of JUNE, 2023</p>
                              <p><FaRegClock />  9:00 am Prompt</p>
                              <p><FaMapMarkerAlt />  6th of MAY, 2023</p>
                            </div>
                        </div>
                      </Col>
                      <Col xs={12} md={4}>
                        <div className={styles.event__col__1}>    
                            <div className={styles.event__title}>
                              <h4>LAGOS CONFAB'23</h4>
                            </div>
                            <div className={styles.event__para}>
                                <h5>THEME</h5>
                                <h4>BEATING THE SYSTEM:</h4>
                                <p>How Visionaries Upset the Establishment to Create New Industries</p>
                            </div>
                            <div className={styles.event__details}>
                              <p><FaCalendarAlt />  12th of AUGUST, 2023</p>
                              <p><FaRegClock />  9:00 am Prompt</p>
                              <p><FaMapMarkerAlt />  Ikeja GRA, Lagos</p>
                            </div>
                        </div>
                      </Col>
                    </Row>
                </div>
                <div className={styles.Event__body__details}>
                  <h3>UPCOMING EVENTS</h3>
                      <div className={styles.list__events}>
                        <Row>
                          <Col xs={12} md={6}>
                            <h6>Save the date</h6>
                            <h2>CONFAB SERIES</h2>
                            <h5>THEME</h5>
                            <h4>BOLD AND DARING</h4>
                            <p>Succeeding Despite All Odds</p>
                            <h5 className={styles.icnText}>ZOOM</h5>
                            <h5 className={styles.icnText}>6th of MAY, 2023</h5>
                            <h5 className={styles.icnText}>10:00AM</h5>
                          </Col>
                          <Col xs={12} md={6}></Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                Welcome
                            </Col>
                            <Col xs={12} md={6}>
                              <h6>Save the date</h6>
                              <h2>CONFAB SERIES</h2>
                              <h5>THEME</h5>
                              <h4>BOLD AND DARING</h4>
                              <p>Succeeding Despite All Odds</p>
                              <h5 className={styles.icnText}>ZOOM</h5>
                              <h5 className={styles.icnText}>6th of MAY, 2023</h5>
                              <h5 className={styles.icnText}>10:00AM</h5>
                            </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <h6>Save the date</h6>
                            <h2>CONFAB SERIES</h2>
                            <h5>THEME</h5>
                            <h4>BOLD AND DARING</h4>
                            <p>Succeeding Despite All Odds</p>
                            <h5 className={styles.icnText}>ZOOM</h5>
                            <h5 className={styles.icnText}>6th of MAY, 2023</h5>
                            <h5 className={styles.icnText}>10:00AM</h5>
                          </Col>
                          <Col xs={12} md={6}></Col>
                        </Row>
                      </div>
                 
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
