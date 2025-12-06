export default function Profile() {
  return (
    <div className="profile">
      <h1>
        Portfolio Web<br />
        App, using <span className="blue-text">ReactJS.</span>
      </h1>

      <p>
        Curious about me? Look below!
      </p>

      <div className="profile-buttons">
        <a 
          href="/Johnson_s_Resume_Nov_2025.pdf" 
          className="btn-outline" 
          download
        >
          Download Resume
        </a>

        <a 
          href="https://github.com/JohnsonTran-cs" 
          className="btn-outline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/johnson-tran-392572204/" 
          className="btn-outline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
