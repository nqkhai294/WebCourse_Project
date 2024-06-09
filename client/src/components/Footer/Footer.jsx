import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-2 justify-content-start ml-2">
                        <h5>About Us</h5>
                        <p className="small">
                        University of Engineering and Technology, Vietnam National University, Hanoi
                        </p>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5>Developer</h5>
                        <ul className="list-unstyled small">
                            <li>Ha Tien Dong</li>
                            <li>Nguyen Quang Khai</li>
                            <li>Pham Quy Son</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5>Contact Us</h5>
                        <p className="small"><b>Hotline: </b> 0964737054</p>
                        <p className="small"><b>Email: </b> nextgenAI@gmail.com</p>
                        <h5>Office:</h5>
                        <span className="small">
                            E3, 144 Xuan Thuy, Cau Giay, Ha Noi.
                        </span>
                    </div>
                    <div className="col-md-3 mb-2" id="social_media">
                        <h5>Social Media</h5>
                        <div className="d-flex align-items-center">
                            <a href="#" className="mr-2"><img width="30" height="30" src="https://img.icons8.com/fluency/240/twitter.png" alt="twitter" /></a>
                            <a href="#" className="mr-2"><img width="30" height="30" src="https://img.icons8.com/color/144/facebook-new.png" alt="facebook" /></a>
                            <a href="#" className="mr-2"><img width="30" height="30" src="https://img.icons8.com/fluency/240/instagram-new.png" alt="instagram" /></a>
                            <a href="#"><img width="30" height="30" src="https://img.icons8.com/color/144/youtube-play.png" alt="youtube" /></a>
                        </div>
                    </div>
                </div>
                <hr className="bg-white my-1" />
                <div className="text-center py-1">
                    <p className="mb-0 small">
                        &copy; {new Date().getFullYear()} CodeInn. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;