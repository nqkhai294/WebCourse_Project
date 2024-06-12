import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>About Us</h4>
            <p>
              University of Engineering and Technology, Vietnam National
              University, Hanoi
            </p>
          </div>
          <div className="sb_footer-links-div">
            <h4>Developer</h4>
            <>
              Ha Tien Dong <br />
              Pham Quy Son <br />
              Nguyen Quang Khai
            </>
          </div>
          <div className="sb_footer-links-div">
            <h4>Contact Us</h4>
            <p>
              <b>Hotline: </b> 1900.1900 - 1800.1900
            </p>
            <p>
              <b>Email: </b>nextgenAI@gmail.com
            </p>
            <h4>Office</h4>
            <p>E3, 144 Xuan Thuy, Cau Giay, Ha Noi.</p>
          </div>
          <div className="sb_footer-links-div" id="social_media">
            <h4>Social Media </h4>
            <div className="social_media_list">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/fluency/240/twitter.png"
                alt="facebook-new"
              />
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/144/facebook-new.png"
                alt="instagram-new--v1"
              />
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/fluency/240/instagram-new.png"
                alt="twitter--v1"
              />
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/144/youtube-play.png"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
