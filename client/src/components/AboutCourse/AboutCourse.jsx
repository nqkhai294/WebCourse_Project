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
          <h2>Artificial Intelligence (AI) Course</h2>
        </div>

        <div className="ab-content">
          <h4>Course Content:</h4>
          <ul>
            <li>Introduction to Artificial Intelligence</li>
            <li>Machine Learning and Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Robotics</li>
            <li>AI Applications in Industry</li>
          </ul>
        </div>

        <div className="ab-schedule">
          <h4>Course Duration:</h4>
          <p>Duration: 2 months</p>
          <p>Schedule: Monday, Wednesday, Friday from 7:30 AM to 10:30 AM</p>
        </div>

        <div className="ab-requirements">
          <h4>Entry Requirements:</h4>
          <ul>
            <li>Basic knowledge of programming</li>
            <li>Basic knowledge of mathematics and statistics</li>
          </ul>
        </div>

        <div className="ab-benefits">
          <h4>Benefits of Attending the Course:</h4>
          <ul>
            <li>Gain a fundamental understanding of Artificial Intelligence</li>
            <li>Access to a community of AI learners and experts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
