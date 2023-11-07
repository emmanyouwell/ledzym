import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/services.css'
import $ from 'jquery'
const Services = () => {
  useEffect(() => {
    $('.card').on('mouseenter', function () {
      $(this).find('.card-text').slideDown(300);
    });

    $('.card').on('mouseleave', function (event) {
      $(this).find('.card-text').css({
        'display': 'none'
      });
    });
  }, [])

  return (
    <div>
      <div className="container-fluid main-cont">
        <div className="row news-row">
          <div className="container-fluid col-md-12 col-sm-6 justify-content-center news-block">
            <div className="card-group">
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699345144/services/cctv_pzfsaz.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>CCTV Installation (Including IP based and Video Analytics)<hr /></h5>
                    <p className="card-text" >Experience cutting-edge security with our CCTV installation service, featuring advanced IP-based cameras and intelligent video analytics. Safeguard your premises like never before with precision and peace of mind.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699345868/services/343919361_1285029519084873_8699363183243108001_n_t5ljz5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Solar Street Lights Supplies and Installation<hr /></h5>
                    <p className="card-text" >Illuminate your streets sustainably with our Solar Street Lights Supplies and Installation service. A brighter and greener future is just one installation away.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699346033/services/5712HSA-solar-panels-1_ixtxyg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Solar Power System Installation <hr /></h5>
                    <p className="card-text" >Empower your life with clean energy through our Solar Power System Installation service. Say goodbye to high bills and hello to a brighter, eco-friendly future.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699346142/services/fiber-optic-cable-types_dq3qxt.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Fiber Optics Cabling <hr /></h5>
                    <p className="card-text" >Transform your connectivity with our Fiber Optics Cabling service. Speed, reliability, and limitless possibilities await your network infrastructure.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699346283/services/dahua_technology_dhi_nvr4104_w_nvr4104_w_smart_wifi_network_1445877491_1189795_wfg5ez.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Wireless Networks<hr /></h5>
                    <p className="card-text" >Unlock the power of seamless connectivity with our Wireless Networks service. Experience faster, more reliable connections that redefine your digital world.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699346441/services/structured-cabling-company_yim7rj.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Structural Cabling <hr /></h5>
                    <p className="card-text" >Elevate your business's foundation with our Structural Cabling service. Streamline data flow and communications with a rock-solid infrastructure.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699346704/services/R_1_msx5ti.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Public Address System  <hr /></h5>
                    <p className="card-text" >Amplify your message with precision through our Public Address System service. Ensure your voice is heard, loud and clear, in any space or event.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699346896/services/347589129_728055742652894_8646773765390133233_n_a3qqjm.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Access Control Systems <hr /></h5>
                    <p className="card-text" >Secure your world with confidence using our Access Control Systems service. Empower your business with advanced protection and convenience.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699347022/services/R_2_lsjdwc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Biometrics Systems <hr /></h5>
                    <p className="card-text" >Elevate your security to the next level with our Biometrics Systems service. Embrace cutting-edge technology for accurate, personalized access control.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699347086/services/electric-fence-in-kenya_svqfy2.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Electric Fence <hr /></h5>
                    <p className="card-text" >Guard your perimeter like never before with our Electric Fence service. A shockingly effective solution to protect your property.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699347174/services/gates-barriers_ch1vfm.jpg')", backgroundSize: 'cover',backgroundPosition: 'center' }}></div>
                  <div className="card-block" >
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Automatic Gates and Barriers <hr /></h5>
                    <p className="card-text" >Experience convenience and security in perfect harmony with our Automatic Gates and Barriers service. Your gateway to hassle-free access control.</p>
                  </div>
                </div>
              </div>
              <div className="underlay">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: "url('https://res.cloudinary.com/dtrr0ihcb/image/upload/v1699347349/services/354892945_727434592715009_1978792278678394448_n_ov1lsr.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} ></div>
                  <div className="card-block">
                    <h5 className="card-title" style={{ fontFamily: "'Anton', sans-serif" }}>Contact us<hr /></h5>
                    <p className="card-text" >
                      <ul className='fa-ul'>
                        <li className="mb-3">
                          <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">415 first street Honradez <span className='ms-2'>Extension Sampaloc,Manila</span></span>
                        </li>
                        <li className="mb-3">
                          <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">ledzymcctv@gmail.com</span>
                        </li>
                        <li className="mb-3">
                          <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+63 926 696 6300</span>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services