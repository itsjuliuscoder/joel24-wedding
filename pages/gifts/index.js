import React, { useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import img1 from '../../public/images/gifts/blender.jpg'
import { Button, Col, Container, Row, Form, Navbar, Nav, Modal, Card } from "react-bootstrap";
import logoImg from "../../public/confab-ft.png";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt, FaGift } from "react-icons/fa";

const gifts = [
    { id: 1, name: 'Blender', image: '/images/gifts/blender.jpg', price: '35,000 NGN', giftId: 'JOEL201' },
    { id: 2, name: 'Toaster', image: '/images/gifts/toaster.jpg', price: '25,000 NGN', giftId: 'JOEL202' },
    { id: 3, name: 'Microwave', image: '/images/gifts/microwave.jpg', price: '77,000 NGN', giftId: 'JOEL203' },
    { id: 4, name: 'Coffee Maker', image: '/images/gifts/coffee-machine.jpg', price: '51,000 NGN', giftId: 'JOEL204' },
    { id: 5, name: 'Dinner Set', image: '/images/gifts/dinner-set.jpg', price: '53,000 NGN', giftId: 'JOEL205' },
    { id: 6, name: 'Cookware Set', image: '/images/gifts/Cookware-Set-70k.jpg', price: '70,000 NGN', giftId: 'JOEL206' },
    { id: 7, name: 'Vacuum Cleaner', image: '/images/gifts/vaccum-cleaner35250.jpg', price: '36,000 NGN', giftId: 'JOEL207' },
    { id: 8, name: 'Cash Gift 1', image: '/images/gifts/nairanotes.png', price: '100,000 NGN', giftId: 'JOEL208' },
    { id: 9, name: 'Wall Clock', image: '/images/gifts/wall-clock-10k.jpg', price: '10,000 NGN', giftId: 'JOEL209' },
    { id: 10, name: 'Air Conditional', image: '/images/gifts/ac515k.jpg', price: '515,000 NGN', giftId: 'JOEL210' },
    { id: 11, name: 'Water Dispenser', image: '/images/gifts/dispenser183k.jpg', price: '183,000 NGN', giftId: 'JOEL211' },
    { id: 12, name: 'Electric Kettle', image: '/images/gifts/electric-kettle7800.jpg', price: '7,800 NGN', giftId: 'JOEL212' },
    { id: 13, name: 'Table Lamp', image: '/images/gifts/lamp-125k.jpg', price: '125,000 NGN', giftId: 'JOEL213' },
    { id: 14, name: 'Iron Stand', image: '/images/gifts/iron-stand49k.jpg', price: '49,000 NGN', giftId: 'JOEL214' },
    { id: 15, name: 'Sound System', image: '/images/gifts/sound-system-43k.jpg', price: '43,000 NGN', giftId: 'JOEL2015' },
    { id: 16, name: 'Shoe Rack', image: '/images/gifts/shoe-rack14k.jpg', price: '35,000 NGN', giftId: 'JOEL216' },
    { id: 17, name: 'Washing Machine', image: '/images/gifts/washing-machine340k.jpg', price: '340,000 NGN', giftId: 'JOEL217' },
    { id: 18, name: 'Duvet', image: '/images/gifts/duvey-30k.jpg', price: '30,000 NGN', giftId: 'JOEL218' },
    { id: 19, name: 'Tray', image: '/images/gifts/tray-13400.jpg', price: '13,400 NGN', giftId: 'JOEL219' },
    { id: 20, name: 'Curtains', image: '/images/gifts/curtain-44500.jpg', price: '44,500 NGN', giftId: 'JOEL220' },
    { id: 21, name: 'Cooking Spoon Set', image: '/images/gifts/cooking-spoon-9k.jpg', price: '9,000 NGN', giftId: 'JOEL221' },
    { id: 22, name: 'Stainless Flask', image: '/images/gifts/stainless-flask-9500.jpg', price: '9,500 NGN', giftId: 'JOEL222' },
    { id: 23, name: 'Wall Mirror', image: '/images/gifts/wall-mirror-10500.jpg', price: '10,500 NGN', giftId: 'JOEL223' },
    { id: 24, name: 'Center Rug', image: '/images/gifts/center-rug-20500.jpg', price: '20,500 NGN', giftId: 'JOEL224' },
    { id: 25, name: 'Covered Plates', image: '/images/gifts/cover-plates21500.jpg', price: '21,500 NGN', giftId: 'JOEL225' },
    { id: 26, name: 'Electric Iron', image: '/images/gifts/Pressing-Iron17k.jpg', price: '17,000 NGN', giftId: 'JOEL226' },
    { id: 27, name: 'Kitchen Apron', image: '/images/gifts/apron8k.jpg', price: '8,000 NGN', giftId: 'JOEL227' },
    { id: 28, name: 'Electric Cooker', image: '/images/gifts/electriccooker22500.jpg', price: '22,500 NGN', giftId: 'JOEL228' },
    { id: 29, name: 'Sets of Glass Cups', image: '/images/gifts/glass-cups-8500.jpg', price: '8,500 NGN', giftId: 'JOEL229' },
    { id: 30, name: 'Wall Decoration', image: '/images/gifts/wall-decorated-30k.jpg', price: '30,000 NGN', giftId: 'JOEL230' },
    { id: 31, name: 'Sets of Knives', image: '/images/gifts/Sets of Knives7k.jpg', price: '7,000 NGN', giftId: 'JOEL231' },
    { id: 32, name: 'Air Diffusers', image: '/images/gifts/diffusers-6k.jpg', price: '6,000 NGN', giftId: 'JOEL232' },
    { id: 33, name: 'Hangers', image: '/images/gifts/Hanger-11k.jpg', price: '11,000 NGN', giftId: 'JOEL233' },
    { id: 34, name: 'Measuring Cups & Spoons', image: '/images/gifts/Measuring-Cups-Spoons4500.jpg', price: '4,500 NGN', giftId: 'JOEL234' },
    { id: 35, name: 'Napkins', image: '/images/gifts/Napkins-8k.jpg', price: '8,000 NGN', giftId: 'JOEL235' },
    { id: 36, name: 'Standing Fan', image: '/images/gifts/standing-fan-26k.jpg', price: '26,000 NGN', giftId: 'JOEL236' },
    { id: 37, name: 'Cash Gift 2', image: '/images/gifts/nairanotes.png', price: '50,000 NGN', giftId: 'JOEL237' },
    { id: 38, name: 'Mixer', image: '/images/gifts/mixer.jpg', price: '25,000 NGN', giftId: 'JOEL238' },
    { id: 39, name: 'Swivel Chair', image: '/images/gifts/swivel-office-chair.jpg', price: '75,000 NGN', giftId: 'JOEL237' },
    { id: 40, name: 'Oven', image: '/images/gifts/oven70k.jpg', price: '70,000 NGN', giftId: 'JOEL238' },
    
];

export default function About() {
    const [selectedGifts, setSelectedGifts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentGift, setCurrentGift] = useState(null);

    const handleSelectGift = (gift) => {
        setCurrentGift(gift);
        setShowModal(true);
    };

    const confirmSelection = () => {
        setSelectedGifts([...selectedGifts, currentGift]);
        setShowModal(false);
    };

    const isSelected = (gift) => selectedGifts.some((g) => g.id === gift.id);


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
            <Container className="mt-5">
                <h1 className="text-center">Wedding Gifts Catalog</h1>
                <p className="text-center mb-5">Purpose: To Broaden your Gift Options so your gifts are put in good use 😌</p>
                <Row>
                    {gifts.map((gift) => (
                    <Col md={3} key={gift.id} className="mb-4">
                        <Card className={isSelected(gift) ? styles.selected : ''}>
                          <Image 
                              src={gift.image} 
                              alt={gift.name} 
                              layout="responsive"
                              width={150}
                              height={150}
                              className="card-img-top"
                          />
                        <Card.Body>
                            <Card.Title className={styles.cardTitle}>{gift.name}</Card.Title>
                            <Card.Title className={styles.cardPara1}><b>Gift ID: - </b>{gift.giftId}</Card.Title>
                            <Card.Title className={styles.cardPara}><b>Gift Price: - </b>{gift.price}</Card.Title>
                            <Button variant="primary" onClick={() => handleSelectGift(gift)}>
                            {isSelected(gift) ? 'Selected' : 'Select Gift'}
                            </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title className={styles.cardTitle1}> <FaGift style={{ 'fontSize': '1.4em' }}/> Send Us a Gift </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                          <h4 className={styles.cardTitle2}>You selected <strong>{currentGift?.name}</strong> with Gift ID: - <strong>{currentGift?.giftId}</strong> and Gift Price <strong>{currentGift?.price}</strong> as your gift?</h4>
                          <p className={styles.cardPara3}>Send the gift price to the account details below</p>
                          <h3 className={styles.cardPara2}><b>Bank Name: </b>United Bank for Africa</h3>
                          <h3 className={styles.cardPara2}><strong>Account Name: </strong>John Omotola</h3>
                          <h3 className={styles.cardPara2}><strong>Account Number: </strong>2121189165</h3>
                          {/* <h3 className={styles.cardPara2}><strong>Transaction Description: </strong>United Bank for Africa</h3> */}

                          <p className={styles.cardPara4}><i><strong>NB: </strong>Make sure to include the <b>Gift ID</b> in the transaction description, to enable us identify the gift you transferred money for.</i></p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmSelection}>
                        Confirmed, Money Sent! 
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div className="mt-4 text-center">
                    <h2>Total Gifts Selected: {selectedGifts.length}</h2>
                </div>
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
