import "./Register.css";

const Register = () => {
  return (
    <div className="Register-form">
      <div className="register-container">
        <div className="register-header">A Logo</div>

        <div className="register-title">Connect with us!</div>

        <div className="register-welcome">
          Join the course, open the future!
        </div>

        <div className="register-form">
          <div>
            <label>Họ tên</label>
            <input
              type="text"
              className="name"
              placeholder="Điền tên bạn"
            ></input>
          </div>

          <div>
            <label>Ngày sinh</label>
            <input type="date" className="name"></input>
          </div>

          <div>
            <label>Giới tính</label>
            <input type="radio" name="gender" id="male"></input>
            <label for="male">Nam</label>

            <input type="radio" name="gender" id="female"></input>
            <label for="female">Nữ</label>
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              className="name"
              placeholder="123abc@gmail.com"
            ></input>
          </div>

          <div>
            <label>Số điện thoại</label>
            <input type="text" className="name"></input>
          </div>

          <div>
            <label>Bạn là?</label>
            <select>
              <option>Sinh viên</option>
              <option>Người đi làm</option>
              <option>Khác</option>
            </select>
          </div>

          <div>
            <label>Bạn biết khóa học này từ đâu?</label>

            <input type="checkbox" id="mxh"></input>
            <label for="mxh">Mạng xã hội</label>

            <input type="checkbox" id="banbe"></input>
            <label for="banbe">Bạn bè giới thiệu</label>
          </div>

          <div>
            <label>Bạn đã hiểu gì về chủ đề này?</label>
            <select>
              <option>Chưa biết gì</option>
              <option>Tương đối hiểu</option>
              <option>Hiểu biết</option>
              <option>Chuyên gia</option>
            </select>
          </div>

          <div>
            <label>Bạn mong muốn đạt được gì qua khóa học</label>
            <input type="text"></input>
          </div>

          <div className="submit">
            <button className="submit-btn">Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
