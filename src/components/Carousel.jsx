import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Pic1 from '../images/logo.jpg'
import Image from 'react-bootstrap/Image'
const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={Pic1} fluid />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={Pic1} fluid />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={Pic1} fluid />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent