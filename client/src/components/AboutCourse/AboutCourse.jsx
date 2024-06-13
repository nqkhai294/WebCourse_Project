import "./AboutCourse.css";

const AboutCourse = ({date}) => {
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
          <h4>Registration Time:</h4>
          <ul>
            <li>Open: {formattedOpenDate}</li>
            <li>Close: {formattedCloseDate}</li>
          </ul>
        </div>

        <div className="ab-content">
          <h4>Course Content:</h4>
          <ul>
            <li><strong>Introduction to Artificial Intelligence</strong>
                <ul>
                    <li>Overview of AI: Definition, history, and significance.</li>
                    <li>Key concepts and terminology.</li>
                    <li>Types of AI: Narrow AI, General AI, and Superintelligent AI.</li>
                    <li>Ethical considerations in AI development and deployment.</li>
                </ul>
            </li>
            <li><strong>Machine Learning and Deep Learning</strong>
                <ul>
                    <li>Fundamentals of Machine Learning (ML): Supervised, Unsupervised, and Reinforcement Learning.</li>
                    <li>Key algorithms and models: Linear Regression, Decision Trees, Support Vector Machines, etc.</li>
                    <li>Introduction to Deep Learning: Neural Networks, Convolutional Neural Networks (CNNs), and Recurrent Neural Networks (RNNs).</li>
                    <li>Practical applications of ML and DL in various industries.</li>
                </ul>
            </li>
            <li><strong>Natural Language Processing (NLP)</strong>
                <ul>
                    <li>Basics of NLP: Text processing, tokenization, and sentiment analysis.</li>
                    <li>Advanced NLP techniques: Named Entity Recognition (NER), Part-of-Speech (POS) tagging, and machine translation.</li>
                    <li>Applications of NLP: Chatbots, language modeling, and information retrieval.</li>
                </ul>
            </li>
            <li><strong>Computer Vision</strong>
                <ul>
                    <li>Fundamentals of Computer Vision: Image processing, object detection, and image classification.</li>
                    <li>Key algorithms: Edge detection, feature extraction, and pattern recognition.</li>
                    <li>Deep Learning in Computer Vision: CNN architectures and their applications.</li>
                    <li>Real-world applications: Facial recognition, autonomous vehicles, and medical imaging.</li>
                </ul>
            </li>
            <li><strong>Robotics</strong>
                <ul>
                    <li>Introduction to Robotics: Types of robots, sensors, and actuators.</li>
                    <li>AI in Robotics: Path planning, obstacle avoidance, and robot learning.</li>
                    <li>Applications of Robotics: Industrial automation, service robots, and exploration robots.</li>
                    <li>Future trends in Robotics and AI integration.</li>
                </ul>
            </li>
            <li><strong>AI Applications in Industry</strong>
                <ul>
                    <li>Overview of AI applications in various sectors: Healthcare, Finance, Retail, Manufacturing, and more.</li>
                    <li>Case studies of successful AI implementations.</li>
                    <li>Challenges and opportunities in deploying AI solutions.</li>
                    <li>Future trends and innovations in AI technology.</li>
                </ul>
            </li>
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
          <h4>Benefits of attending the Course:</h4>
          <ul>
            <li><strong>Gain a Fundamental Understanding of Artificial Intelligence:</strong>
                <ul>
                    <li>Learn the core concepts and techniques in AI, ML, DL, NLP, and Computer Vision.</li>
                    <li>Develop the skills to implement AI solutions in real-world scenarios.</li>
                </ul>
            </li>
            <li><strong>Access to a Community of AI Learners and Experts:</strong>
                <ul>
                    <li>Join a network of peers and professionals passionate about AI.</li>
                    <li>Participate in discussions, workshops, and collaborative projects.</li>
                    <li>Benefit from mentorship and guidance from experienced AI practitioners.</li>
                </ul>
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;