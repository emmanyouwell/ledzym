import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
const FeaturedBrands = () => {
    return (
        <>
            <div className='p-3 p-lg-4'>
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
            <div className='p-3 p-lg-4'>
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
        </>
    )
}

export default FeaturedBrands