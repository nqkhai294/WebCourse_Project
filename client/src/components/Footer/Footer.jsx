import "./Footer.css"

const Footer = (props) => {
    return(
        <footer>
            <div className="row">
            <div className="col">
                    <h3>About Us</h3>
                    <p className="aboutUs">
                        The phrase "about us" is typically used to describe a section of a website or online presence that provides information about the entity behind it.
                        This could be a company, organization, individual, or even a group of people working on a project.
                        </p>
                </div>
                <div className="col"> 
                    <h3>Office</h3>
                    <p className="office"> Số 773/10 Nguyễn Duy Trinh, Phường Phú Hữu, Quận 9, Thành phố Hồ Chí Minh, Việt Nam </p>
                    
                </div>
                
                <div className="col">
                    <h3>Developers</h3>
                    <ul>
                        <li>Ha Tien Dong</li>
                        <li>Nguyen Quang Khai</li>
                        <li>Pham Quy Son</li>
                    </ul>
                    
                </div>
                <div className="col">
                    <h3>Contact </h3>
                    <div className="hotline">1900 1900</div>
                    <br />
                    <img className="social" src="https://img.icons8.com/ios/100/facebook-new.png" alt="facebook-new"/>
                    <img className="social" src="https://img.icons8.com/ios/100/twitter--v1.png" alt="twitter--v1"/>
                    <img className="social" src="https://img.icons8.com/ios/100/instagram-new--v1.png" alt="instagram-new--v1"/>
                    <img className="social" src="https://img.icons8.com/ios/100/pinterest--v1.png" alt="pinterest--v1"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;