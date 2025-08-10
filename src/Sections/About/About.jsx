import Button from "../../Component/Button/Button";
import "./About.scss";
import Resume from "../../assets/Resume/Sathish_Resume.pdf"

function About() {
  //href="/assests/Sathish_resume.pdf" download target="Resume.pdf"
  const HandleResume = () => {
    window.open(Resume , "_blank")
  }
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p data-aos="zoom-in">
          I’m a passionate React JS developer with 2 years of experience building responsive and dynamic web applications using HTML, CSS, JavaScript, TypeScript, and React, with additional basic knowledge of ASP.NET Web API, Entity Framework, and SQL Server.
          I thrive on creating clean, maintainable, and efficient code that delivers seamless user experiences across devices.
          Always eager to learn and adapt, I embrace new technologies to build innovative and impactful solutions.
        </p>
        <Button onClick ={ HandleResume}className="Cv_btn" buttonName="Download CV" />
      </div>
    </section>
  );
}
export default About;