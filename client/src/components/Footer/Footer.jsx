import "./Footer.css"

const Footer = (props) => {
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>About Us</h4>
                        <p>
                    I need more context to answer your question accurately. Please provide more information about what you mean by "doan van gi do". Are you asking about a specific phrase or concept in Vietnamese?
                    I need more context to answer your question accurately. Please provide more information about what you mean by "doan van gi do". Are you asking about a specific phrase or concept in Vietnamese?
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
                        <p><b>Email: </b>nextgenaideptraikhonghai@gmail.com</p>
                        <h4>Office</h4>
                        <p>Ha Noi,Viet Nam Ha Noi,Viet NamHa Noi,Viet NamHa Noi,Viet Nam
                        Ha Noi,Viet NamHa Noi,Viet NamHa Noi,Viet Nam Ha Noi,Viet NamHa
                        </p>
                    </div>
                    <div className="sb_footer-links-div" id="social_media">
                        <h4>Social Media  </h4>
                        <img width="40" height="40" src="https://img.icons8.com/fluency/240/twitter.png" alt="facebook-new"/>
                        <img width="40" height="40"  src="https://img.icons8.com/color/144/facebook-new.png" alt="instagram-new--v1"/>
                        <img width="40" height="40"  src="https://img.icons8.com/fluency/240/instagram-new.png" alt="twitter--v1"/>
                        <img width="40" height="40"  src="https://img.icons8.com/color/144/youtube-play.png"/>

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