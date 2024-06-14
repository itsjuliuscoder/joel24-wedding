import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav } from "react-bootstrap";
import logoImg from "../../public/confab-ft.png";
import conveerImg from "../../public/images/convener.png"
import sliderImg1 from "../../public/images/bg2.png";
import team1 from "../../public/images/team-1.png";
import team2 from "../../public/images/team-2.png";
import team3 from "../../public/images/team/team-2.png"
import team4 from "../../public/images/team/team-3.png"
import team5 from "../../public/images/team/team-4.png"
import team6 from "../../public/images/team/team-5.png"
import team7 from "../../public/images/team/julImg.png"
import team8 from "../../public/images/team/team-1.png"
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
                          <Nav.Link href="/about" className={styles.active}>About</Nav.Link>
                          <Nav.Link href="/events">Events</Nav.Link>
                          <Nav.Link href="/contact">Contact</Nav.Link>
                      </Nav>
                      <Button className={styles.buttonRegister} variant="primary">Register</Button>
                      
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className={styles.About__banner}>
              <Container>
                    <Row>

                    </Row>
              </Container>
          </div>
          <div className={styles.AboutBody}>
              <Container style={{ marginBottom: '8em' }}>
                <div className={styles.About__body__row}>
                    <Row>
                        <h3>HOW WE BEGAN...</h3>
                        <p>On 2nd October, 2010 I was appointed Youth Leader of Unity District, a district church of Deeper Life Bible Church (DLBC) in Ikeja, Lagos State. On assumption of duty, I engaged the young people and discovered that a good number of them were done with Secondary School but did not have proper direction for their lives.</p>
                        <p>As I pondered on these for many weeks in prayers and deep thought, the Lord dropped THE CONFAB on my mind. We put together a Conference designed to inspire the youths, young adults and professionals to reach their full potentials; be the best; dream big and take bold steps; and most importantly, live for God in righteousness.</p>
                        <p>That was how The Conference of Faithful Ambassadors (The CONFAB), was birthed.</p>
                        <p style={{ color: '#FFFFFF' }}>~ Oluwakoyejo Oluwatosin~</p>
                        <h4>CONFAB Convener</h4>
                    </Row>
                </div>
              </Container>
              <Container>
                    <div className={styles.about_rower}>
                        <Row>
                            <h4>OUR OBJECTIVE</h4>
                            <p>To empower the mind of young people to think different, develop desired competencies, take the lead and become change agents and solution providers to the world around them. We plan to achieve this by delivering conferences, summits, personal development programmes, and coaching/mentoring sessions.</p>
                        </Row>
                        <Row>
                            <h4>MISSION</h4>
                            <p>To support future leaders in their quest to develop themselves to reach the highest point in their chosen field of endeavour and impact society for the common good of all.</p>
                        </Row>
                        <Row>
                            <h4>VISION</h4>
                            <p>To inspire the next generation to fully discover themselves, maximize their God-given potential and positively transform society.</p>
                        </Row>
                        <Row style={{ margin: '4em auto' }}>
                            <h4 style={{ fontSize: '3em' }}>MEET OUR LEADERS</h4>
                            <p>Here are people whom God has used to create and continue to sponsor the CONFAB event.</p>
                            <div className={styles.convenerImg}>
                                <Image
                                    src={conveerImg}
                                    alt="Confab Logo"
                                    width="150px"
                                    height="100px" 
                                />
                            </div>
                            <div className={styles.teamText}>
                              <p>Mr Koyejo OLUWATOSIN</p>
                              <h4>Convener CONFAB</h4>
                            </div>
                        </Row>
                        
                    </div>
              </Container>
              <Container style={{ marginBottom: '4em' }}>
                <Row className='mb-3'>
                    <Col xs={12} md={3}>
                      <div className={styles.teamImg}>
                          <Image
                              src={team5}
                              alt="Confab Team"
                              width="200px"
                              height="250px" 
                          />
                      </div>
                      <div className={styles.teamText}>
                        <p>Mr Emmanuel OJEKUNLE</p>
                        <h4>President CONFAB Lagos</h4>
                      </div>
                    </Col>
                    <Col xs={12} md={3}>
                      <div className={styles.teamImg}>
                          <Image
                              src={team3}
                              alt="Confab Team"
                              width="200px"
                              height="250px" 
                          />
                      </div>
                      <div className={styles.teamText}>
                        <p>Dr. Abiodun MUSTAPHA</p>
                        <h4>Chairman CONFAB'24</h4>
                      </div>
                    </Col>
                    <Col xs={12} md={3}>
                      <div className={styles.teamImg}>
                          <Image
                              src={team4}
                              alt="Confab Team"
                              width="200px"
                              height="250px" 
                          />
                      </div>
                      <div className={styles.teamText}>
                        <p>Mr Raymond</p>
                        <h4>Lead Organizer</h4>
                      </div>
                    </Col>
                    <Col xs={12} md={3}>
                      <div className={styles.teamImg}>
                          <Image
                              src={team6}
                              alt="Confab Team"
                              width="200px"
                              height="100px" 
                          />
                      </div>
                      <div className={styles.teamText}>
                        <p>Mr Jerry HUGO</p>
                        <h4>Lead Organizer</h4>
                      </div>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} md={3}>
                      <div className={styles.teamImg}>
                          <Image
                              src={team8}
                              alt="Confab Team"
                              width="200px"
                              height="250px" 
                          />
                      </div>
                      <div className={styles.teamText}>
                        <p>Mr Chidi GODWIN</p>
                        <h4>Lead Organizer Member</h4>
                      </div>
                    </Col>
                    <Col xs={12} md={3}>
                      <div className={styles.teamImg}>
                          <Image
                              src={team7}
                              alt="Confab Team"
                              width="200px"
                              height="250px" 
                          />
                      </div>
                      <div className={styles.teamText}>
                        <p>Mr. Julius OLAJUMOKE</p>
                        <h4>Organizing Member</h4>
                      </div>
                    </Col>
                </Row>
              </Container>
          </div>
          <Container style={{ marginTop: '4em' }}>
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
