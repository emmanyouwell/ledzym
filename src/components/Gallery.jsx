import React,{useState} from 'react'
import img1 from '../images/gallery/img1.jpg'
import img2 from '../images/gallery/img2.jpg'
import img3 from '../images/gallery/img3.jpg'
import img4 from '../images/gallery/img4.jpg'
import img5 from '../images/gallery/img5.jpg'
import img6 from '../images/gallery/img6.jpg'
import img7 from '../images/gallery/img7.jpg'
import img8 from '../images/gallery/img8.jpg'
import img9 from '../images/gallery/img9.jpg'
import img10 from '../images/gallery/img10.jpg'
import img11 from '../images/gallery/img11.jpg'
import img12 from '../images/gallery/img12.jpg'
import img13 from '../images/gallery/img13.jpg'
import img14 from '../images/gallery/img14.jpg'
import img15 from '../images/gallery/img15.jpg'
import img16 from '../images/gallery/img16.jpg'
import img17 from '../images/gallery/img17.jpg'
import img18 from '../images/gallery/img18.jpg'
import img19 from '../images/gallery/img19.jpg'
import img20 from '../images/gallery/img20.jpg'
import CloseIcon from '@mui/icons-material/Close';
import '../css/gallery.css'
const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1
        },
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 3,
            imgSrc: img3
        },
        {
            id: 4,
            imgSrc: img4
        },
        {
            id: 5,
            imgSrc: img5
        },
        {
            id: 6,
            imgSrc: img6
        },
        {
            id: 7,
            imgSrc: img7
        },
        {
            id: 8,
            imgSrc: img8
        },
        {
            id: 9,
            imgSrc: img9
        },
        {
            id: 10,
            imgSrc: img10
        },
        {
            id: 11,
            imgSrc: img11
        },
        {
            id: 12,
            imgSrc: img12
        },
        {
            id: 13,
            imgSrc: img13
        },
        {
            id: 14,
            imgSrc: img14
        },
        {
            id: 15,
            imgSrc: img15
        },
        {
            id: 16,
            imgSrc: img16
        },
        {
            id: 17,
            imgSrc: img17
        },
        {
            id: 18,
            imgSrc: img18
        },
        {
            id: 19,
            imgSrc: img19
        },
        {
            id: 20,
            imgSrc: img20
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <h1 className='display-3 text-center mb-4'>Gallery</h1>
            <div className={model?"model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={()=>{setModel(false)}}/>
            </div>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index} onClick={()=>{getImg(item.imgSrc)}}>
                                <img src={item.imgSrc} alt="gallery" style={{width: '100%'}} />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Gallery