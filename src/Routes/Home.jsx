import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//Assets
import logo from '../images/logo.jpg';
import test from '../images/test3.png';
import '../css/custom-style.css';
import axis from '../images/brands/axis.png';
import dahua from '../images/brands/dahua.png';
import hanwha from '../images/brands/hanwha.png';
import hikvision from '../images/brands/hikvision.png';
import rover from '../images/brands/rover.png';
import unv from '../images/brands/unv.png';
import biostar from '../images/brands/biostar.png';
import hid from '../images/brands/hid.png';
import zkteco from '../images/brands/zkteco.png';
import lenel from '../images/brands/lenel.png';


import CarouselComponent from '../components/Carousel';
//Custom components
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
const Home = () => {
  return (
    <>
      <NavbarComponent />


      <section className="p-lg-5 p-3">
        <Container className="mb-5 p-lg-5 p-3">
          <div className="mb-5 p-lg-5 p-3">
            <Row className="d-flex align-items-center">
              <Col lg={7}>
                <h1 className='display-2 text-white'><b>LEDZYM</b> Computer Trading</h1>
                <p className='text-white'>LEDZYM Computer Trading specializes in installing and integrating advanced technology systems, including CCTV surveillance, solar power, fiber optics, wireless networks, and more. Committed to enhancing security, sustainability, and connectivity, they offer tailored solutions for businesses and individuals.</p>
              </Col>
              <Col lg={5} className="d-flex align-items-center">
                <Image src={test} fluid />
                {/* <CarouselComponent /> */}
              </Col>
            </Row>
          </div>
        </Container>
        <div className="divider2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>

      </section>


      <section className="p-3 p-lg-5 bg-white">
        <Container className='p-3 p-lg-5 my-lg-5'>
          <h1 className="display-3 mb-5 text-center">
            Our Services
          </h1>
          <div>
            <Row className="g-4 d-flex justify-content-center">
              <Col lg={3} >
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>CCTV Systems</Card.Title>
                    <Card.Text>
                      Including IP based and video
                      analytics systems
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Solar Street Lights Supplies and Installation</Card.Title>
                    <Card.Text>

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Solar Power System Installation </Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Fiber Optics Cabling </Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div className='d-flex justify-content-center p-5'>
            <a href="#">View more</a>
          </div>
        </Container>
        {/* <div class="divider3">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div> */}

      </section>


      <section className="p-5 ">
        <div class="divider5">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
          </svg>
        </div>
        <Container className='mt-5 p-lg-5 p-3'>
          <h1 className="display-3 mb-5 text-white text-center">
            Featured Brands
          </h1>
          <div className='p-3 p-lg-5'>
            {/* <h1 className='lead text-secondary text-center mb-3'>CCTV Systems</h1> */}
            <Row xs={2} md={3} className='d-flex align-items-center justify-content-center g-4'>

              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={axis} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={dahua} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={hanwha} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={hikvision} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={rover} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={unv} className='hover' fluid />
              </Col>
            </Row>
          </div>
          <div className='p-3 p-lg-5'>
            {/* <h1 className='lead text-secondary text-center mb-3'>Door Access Systems</h1> */}
            <Row xs={2} md={3} className='d-flex align-items-center justify-content-center g-4'>

              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={biostar} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={hid} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={lenel} className='hover' fluid />
              </Col>
              <Col lg={2} className='d-flex align-items-center justify-content-center'>
                <Image src={zkteco} className='hover' fluid />
              </Col>

            </Row>
          </div>
          <div className='d-flex justify-content-center p-5'>

          </div>
        </Container>
        {/* <div class="divider6">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
          </svg>
        </div> */}
        {/* <div class="divider7">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
        </div> */}
      </section>
      <section className='p-5 bg-white'>
        {/* <div class="divider4">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div> */}
      </section>
      {/* <div className="spacer layer4"></div> */}
      <Footer />



    </>
  )
}

export default Home