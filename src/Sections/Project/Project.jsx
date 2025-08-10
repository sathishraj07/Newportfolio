import "./Project.scss";
import project1 from "../../assets/E-COMMERCE.JPG";
import project2 from "../../assets/Food.JPG";
import Button from "../../Component/Button/Button";

export default function Projects() {
  const HandleViewProject = (val) => {
   window.open(val.link , "_blank")
  }
  const projects = [
    {
      title: "E-Commerce store",
      img: project1,
      aos:"fade-right",
      description:
       "Developed a functional e-commerce website featuring login authentication with local storage, enabling secure user access. Built using React.js, HTML, CSS, and JavaScript, the application includes product listings, a shopping cart, and a  optimal user experience.",
      link: "https://e-commerece-by-sathish.netlify.app/",
    },
    {
      title: "Food Order",
      img: project2,
      aos:"fade-left",
      description:
      "Created a simple food ordering website using HTML, CSS, and JavaScript, featuring an interactive menu and a responsive layout for a smooth user experience.",
      link: "https://simplefoodorderwebsite.netlify.app/",
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects__grid">
          {projects.map((proj, index) => (
            <div className="project-card" data-aos={proj.aos} key={index}>
              <img src={proj.img} alt={proj.title} />
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                {/* <a href={proj.link} target="_blank" rel="noreferrer">
                  View Project
                </a> */}
                <Button onClick = {() => HandleViewProject(proj)}buttonName = "View Project"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
