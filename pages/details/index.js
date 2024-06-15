import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav, Card } from "react-bootstrap";
import logoImg from "../../public/confab-ft.png";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCalendarDay } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wedding Details - John & Elizabeth - JOEl24</title>
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
                    <Nav.Link href="/details" className={styles.active}>Wedding Details</Nav.Link>
                    <Nav.Link href="/gifts">Gifts Catalog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
          <div className={styles.about__banner}>
              <h3>Wedding Details</h3>
              
          </div> 
          <div className={styles.body__container}>
            <Container>
                <h2>Wedding Details</h2>
                <p className="text-center">We want you to share in our joy. Find below the details of our engagement and wedding ceremony.</p>
                <Row style={{ marginTop: '5em' }}>
                  <Col xs={12} md={4}>
                    <Card className="mb-4">
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                        <Card.Title className={styles.cardTitle}>Engagement Ceremony</Card.Title>
                        <Card.Text className={styles.cardText}>
                            <h5><FaCalendarDay /> <b>12th July, 2024</b></h5>
                            <h5><FaClock /> <b>3 PM</b></h5>
                            <h5><FaMapMarkerAlt /> <b>Novatel Hotel, Chevy View Estate, Lekki, Lagos.</b></h5>
                        </Card.Text>
                        <Button variant="primary" className={styles.btnDetails}>Click for Direction</Button>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className="mb-4">
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                        <Card.Title className={styles.cardTitle}>Wedding Ceremony</Card.Title>
                        <Card.Text className={styles.cardText}>
                            <h5><FaCalendarDay /> <b>13th July, 2024</b></h5>
                            <h5><FaClock /> <b>10 AM</b></h5>
                            <h5><FaMapMarkerAlt /> <b>Deeper Life Bible Church, Opp. Shoprite Exit gate, VI, Lagos.</b></h5>
                        </Card.Text>
                        <Button variant="primary" className={styles.btnDetails}>Click for Direction</Button>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className="mb-4">
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                        <Card.Title className={styles.cardTitle}>Reception</Card.Title>
                        <Card.Text className={styles.cardText}>
                            <h5><FaCalendarDay /> <b>13th July, 2024</b></h5>
                            <h5><FaClock /> <b>Immediately after the Wedding Ceremony</b></h5>
                            <h5><FaMapMarkerAlt /> <b>Novatel Hotel, Chevy View Estate, Lekki, Lagos.</b></h5>
                        </Card.Text>
                        <Button variant="primary" className={styles.btnDetails}>Click for Direction</Button>
                        </Card.Body>
                    </Card>
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