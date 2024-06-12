import "./AboutCourse.css";

const AboutCourse = ({ date }) => {
  console.log(date);
  console.log(date.data.attributes.open);

  const openDate = new Date(date.data.attributes.open);
  const closeDate = new Date(date.data.attributes.close);

  // Định dạng ngày tháng thành chuỗi mong muốn
  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const formattedOpenDate = formatDate(openDate);
  const formattedCloseDate = formatDate(closeDate);

  return (
    <div className="about-course">
      <div className="overall-introduction">
        <div className="sub-title">/ About course</div>

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
        <div className="sub-title">/ Information</div>
        <div className="ab-header">
          <h2>Artificial Intelligence (AI) Course</h2>
        </div>
        
        <div className="ab-content">
          <h4>Registration Time:</h4>
          <ul>
            <li>Open: {formattedOpenDate}</li>
            <li>Close: {formattedCloseDate}</li>
          </ul>
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
          <ul>
          <li>Duration: 2 months</li>
          <li>Schedule: Monday, Wednesday, Friday from 7:30 AM to 10:30 AM</li>
          </ul>
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
