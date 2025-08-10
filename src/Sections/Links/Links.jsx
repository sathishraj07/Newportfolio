import "./Links.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import naukri from "../../assets/Skills/naukri.svg"

export default function Links() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sathishrajprofile/",
      color: "#0A66C2"
    },
        {
      name: "Naukuri",
      icon:  <img src ={naukri} width={20} height={20}/>,
      url: "https://www.naukri.com/mnjuser/homepage",
      color: "#0A66C2"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/sathishraj07",
      color: "#181717"
    },

    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:rajsathish775@example.com",
      color: "#D14836"
    }
  ];

  return (
    <section className="links" id="links">
      <h2>Connect with Me</h2>
      <div className="links__container">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
            style={{ "--hover-color": link.color }}
          >
            <span className="icon">{link.icon}</span>
            <span className="name">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
