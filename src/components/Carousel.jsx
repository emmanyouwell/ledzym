import React, {useState}from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import cctv from "../images/services/cctv.png"
const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <>
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image
          style={{backgroundSize:'cover', objectFit:'cover', width: '100%', height: '100%'}}
          src={cctv}
          alt="First slide"
          fluid
        />
        <Carousel.Caption className='text-dark'>
          <h3>CCTV Installation</h3>
          <p>IP based configuration</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselComponent