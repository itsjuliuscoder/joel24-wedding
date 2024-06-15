import Head from 'next/head';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import { Button, Col, Container, Row, Form, Navbar, Nav } from "react-bootstrap";
import { Slider } from '../components/Slider';
import { Footer } from '../components';
import logoImg from "../public/confab-ft.png";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { GoHeartFill } from 'react-icons/go';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaMapMarkerAlt, FaCalendarDay, FaClock,  } from "react-icons/fa";


export default function Home() {
  
  const slides = [
    {
      image: '/images/slider3.jpg',
      title: 'CONFAB 2024',
      //caption: 'YOU DON\'T WANT TO MISS THIS!',
    },
    {
      image: '/images/slider2.jpg',
      title: 'Slide 2',
     // caption: 'This is the caption for slide 2.',
    },
    {
      image: '/images/slider3.jpg',
      title: 'Slide 3',
      caption: 'This is the caption for slide 3.',
    },
  ];

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className={styles.container}>
      <Head>
        <title>John & Elizabeth - JOEl24 </title>
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
                    <Nav.Link href="/about">About the Couple</Nav.Link>
                    <Nav.Link href="/events">Wedding Details</Nav.Link>
                    <Nav.Link href="/contact">Gifts Catalog</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className={styles.banner_row}>
              <div className={styles.banner__text}>
                  <h2>#JOEL24</h2>
                  <h1>John weds Elizabeth</h1>
              </div>
          </div>
          <div className={styles.bodyContent}>
              <Container fluid className={styles.noPadding}>
                <Row>
                  <Col xs={12} md={6}>
                    <div className={styles.textContent}>
                      <h1>Toasts to our Love </h1>
                      <div className={styles.col__text1}>
                          <h4>God bless the broken road that led me to you.</h4>
                          <p>- Elizabeth</p>
                      </div>
                      <div className={styles.col__text2}>
                        <h4>For it was not into my ear you whispered, but into my heart. It was not my hand you pierced, but my soul with your love.</h4>
                        <p>- John</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                      <div className={styles.imageWrapper}></div>
                  </Col>
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

