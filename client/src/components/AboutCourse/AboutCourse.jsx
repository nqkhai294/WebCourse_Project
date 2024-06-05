import "./AboutCourse.css";

const AboutCourse = (props) => {
  return (
    <div className="about-course">
      <div class="overall-introduction">
        <div class="sub-title">/ About course</div>

        <h1>Inspiring the Future Innovators of AI</h1>

        <div className="blog-description">
          <p>
            Our Artificial Intelligence course is designed to equip students
            with the knowledge and skills needed to excel in the rapidly
            evolving field of AI. With experienced instructors, state-of-the-art
            facilities, and a comprehensive curriculum, we ensure our students
            are well-prepared to become leaders in the world of artificial
            intelligence.
          </p>
        </div>
      </div>

      <div className="ab-information">
        <div class="sub-title">/ Information</div>
        <div className="ab-header">
          <h2>Khóa học trí tuệ nhân tạo (AI)</h2>
        </div>

        <div className="ab-content">
          <h3>Nội dung khóa học</h3>
          <ul>
            <li>Giới thiệu về Trí tuệ nhân tạo</li>
            <li>Học máy và Học sâu</li>
            <li>Xử lý ngôn ngữ tự nhiên</li>
            <li>Thị giác máy tính</li>
            <li>Robot học</li>
            <li>Ứng dụng AI trong công nghiệp</li>
          </ul>
        </div>

        <div className="ab-schedule">
          <h3>Thời gian khóa học</h3>
          <p>Thời gian: 2 tháng</p>
          <p>Lịch học: Thứ 2, Thứ 4, Thứ 6 từ 7:30 - 10:30</p>
        </div>

        <div className="ab-requirements">
          <h3>Yêu cầu đầu vào</h3>
          <ul>
            <li>Kiến thức cơ bản về lập trình</li>
            <li>Kiến thức cơ bản về toán học và thống kê</li>
          </ul>
        </div>

        <div className="ab-benefits">
          <h2>Lợi ích khi tham gia khóa học</h2>
          <ul>
            <li>Có hình dung cơ bản về Trí tuệ nhân tạo</li>
            <li>Truy cập vào cộng đồng học viên và chuyên gia AI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
