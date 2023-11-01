import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/footer.css'
const FooterBootstrap = () => {
    return (
        <>
            <footer className="text-white text-center text-lg-start bg-dark">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About company</h5>
                            <p>
                                We provide the best installation services for CCTV, Door access systems, Biometrics, and more. We want you to know that your safety and comfort are very important to us.
                            </p>
                            <p>
                                We appreciate you for trusting us in our services. Stay safe and choose Ledzym Computer Trading!
                            </p>
                            <div className="mt-4">
                                <a href="https://www.facebook.com/profile.php?id=100063454244804" type="button" className="me-3 btn rounded-circle btn-light btn-lg"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="mailto:ledzymcctv@gmail.com" type="button" className="me-3 btn rounded-circle btn-light btn-lg"><i className="fa-solid fa-envelope"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Contact us</h5>
                            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">415 first street Honradez Extension <span className='ms-2'>Sampaloc,Manila</span></span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">ledzymcctv@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+63 926 696 6300</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>
                            <table className="table text-center text-white">
                                <tbody className="fw-normal">
                                    <tr>
                                        <td>Monday - Sunday:</td>
                                        <td>7am - 5pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <a className="text-white" href="/">Ledzym Computer Trading</a>
                </div>
            </footer>
        </>
    )
}

export default FooterBootstrap