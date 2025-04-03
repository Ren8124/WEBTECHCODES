export default function Body({ selectedSection }) {
  return (
    <div className="body">
      {/* Custom Titles for Sections */}
      <h1>
        {selectedSection === "Home" && "Welcome to My Portfolio"}
        {selectedSection === "About" && "About Me"}
        {selectedSection === "Contact" && "Get in Touch"}
      </h1>

      {/* Content for Each Section */}
      {selectedSection === "Home" && (
        <p>
          <strong>Hi!! I'm Ren Patel</strong>, a passionate student pursuing B.Tech in Information and Communication Technology at Pandit Deendayal Energy University. I have a keen interest in software development and love working on innovative projects. My skills include web development, cloud computing, and cybersecurity. I am always eager to learn new technologies and enhance my problem-solving abilities. Looking forward to exploring more opportunities in the tech world!
        </p>
      )}

      {selectedSection === "About" && (
        <p>
           B.Tech student specializing in Information and Communication Technology at Pandit Deendayal Energy University. With a strong passion for software development and cybersecurity, I enjoy building innovative solutions and exploring emerging technologies. My skill set includes web development, cloud computing, and cybersecurity, along with proficiency in languages like Python, Java, and JavaScript. I have worked on projects such as a Generative AI-powered ATS Resume Analyzer and cybersecurity applications, gaining hands-on experience in real-world problem-solving. I am always eager to learn, collaborate, and contribute to impactful tech solutions. Let's connect and create something extraordinary!
        </p>
      )}

      {selectedSection === "Contact" && <p> Contact No. - 1234567890 <br></br><br></br> Email - renaptel8124@gmail.com</p> 
      }
    </div>
  );
}
