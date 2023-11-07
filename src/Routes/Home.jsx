import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Assets
import '../css/custom-style.css';

//Custom components
import NavbarComponent from '../components/Navbar';
import FooterBootstrap from '../components/FooterBootstrap';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import FeaturedBrands from '../components/FeaturedBrands';

const Home = () => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 1000;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) clearInterval(counter);
      }, duration)
    });
  }, []);
  return (
    <>
      <NavbarComponent />
      
      <section className="p-lg-5 p-3">
        <Container className="mb-5 p-lg-5 p-3">
          <div className="mb-5 p-lg-5 p-3">
            <Row className="mb-5 p-3 p-lg-5 offset">
              <Col lg={8}>
                <h1 className='display-4 text-white'>Local Experts in Keeping Your Space Secure</h1>
                <p className=' text-white'>LEDZYM Computer Trading specializes in installing and integrating advanced technology systems, including CCTV surveillance, solar power, fiber optics, wireless networks, and more. Committed to enhancing security, sustainability, and connectivity, they offer tailored solutions for businesses and individuals.</p>
              </Col>
              <Col lg={4} className="d-flex align-items-center">
                <div className="wrapper">
                  <div className="card-glass">
                    <i className="fa-solid fa-people-group white-icon"></i>
                    <span className="num" data-val="120">000</span>
                    <span className="text">Clients</span>
                  </div>
                  <div className="card-glass">
                    <i className="fa-brands fa-facebook white-icon"></i>
                    <span className="num" data-val="558">000</span>
                    <span className="text">Followers</span>
                  </div>
                </div>
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
            <Services/>
          </div>
        </Container>
      </section>

      <section className="p-5 ">
        <div className="divider5">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
          </svg>
        </div>
        <Container className='mt-5 p-lg-4 p-3'>
          <h1 className="display-3 mb-5 text-white text-center">
            Featured Brands
          </h1>
          <div>
            <FeaturedBrands/>
          </div>
          <div className='p-5'>

          </div>
        </Container>
      </section>

      <section className='p-5 bg-white'>
        <Container >
          <Gallery />
        </Container>
      </section>
      <FooterBootstrap />
    </>
  )
}

export default Home