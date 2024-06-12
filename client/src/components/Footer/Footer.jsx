import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>About Us</h4>
                        <p>
                        University of Engineering and Technology, Vietnam National University, Hanoi.
                    </p>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Developer</h4>
                        <ul>
                            <li>Ha Tien Dong</li>
                            <li>Nguyen Quang Khai</li>
                            <li>Pham Quy Son</li>
                        </ul>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Contact Us</h4>
                        <p><b>Hotline: </b> 1900.1900  -  1800.1900</p>
                        <p><b>Email: </b>nextgenAI@gmail.com</p>
                        <h4>Office</h4>
                        <p>E3, 144 Xuan Thuy, Cau Giay, Ha Noi.
                        </p>
                    </div>
                    <div className="sb_footer-links-div" id="social_media">
                        <h4>Social Media  </h4>
                        <div className="d-flex align-items-center">
                            <a href="#" className="mr-2"><img width="30" height="30" src="https://img.icons8.com/fluency/240/twitter.png" alt="twitter" /></a>
                            <a href="#" className="mr-2"><img width="30" height="30" src="https://img.icons8.com/color/144/facebook-new.png" alt="facebook" /></a>
                            <a href="#" className="mr-2"><img width="30" height="30" src="https://img.icons8.com/fluency/240/instagram-new.png" alt="instagram" /></a>
                            <a href="#"><img width="30" height="30" src="https://img.icons8.com/color/144/youtube-play.png" alt="youtube" /></a>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="sb_footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>

                </div>
                </div>
        </div>
    )
}
export default Footer;