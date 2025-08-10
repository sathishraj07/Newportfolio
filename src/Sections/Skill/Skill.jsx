import "./Skill.scss";
import { useEffect, useRef, useState } from "react";
import HTML from "../../assets/Skills/HTML5.svg";
import Css from "../../assets/Skills/CSS.svg";
import Sass from "../../assets/Skills/Sass.svg";
import Bootstrap from "../../assets/Skills/bootstrap.svg";
import JS from "../../assets/Skills/JS.svg";
import Redux from "../../assets/Skills/Redux.svg";
import Typscript from "../../assets/Skills/Typscript.svg";
import ReactJS from "../../assets/Skills/React.svg";
import Csharp from "../../assets/Skills/CSharp.svg";
import SQl from "../../assets/Skills/SQL.svg";
import Github from "../../assets/Skills/github.svg";
import Jenkins from "../../assets/Skills/jenkins.svg";
import Bitbucket from "../../assets/Skills/bitbucket.svg";
import Postman from "../../assets/Skills/Postman.svg";
import Debugging from "../../assets/Skills/debugging.svg";
import Ps from "../../assets/Skills/ProblemSolv.svg";
import RD from "../../assets/Skills/Responsive Design.svg";

export default function Skills() {
    const allSkills = [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: Css },
        { name: "Sass", icon: Sass },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "Responsive Design", icon: RD },
        { name: "JavaScript", icon: JS },
        { name: "TypeScript", icon: Typscript },
        { name: "React JS", icon: ReactJS },
        { name: "Redux", icon: Redux },
        { name: "Asp.net Web Api", icon: Csharp },
        { name: "SQL", icon: SQl },
        { name: "Git Hub", icon: Github },
        { name: "Bit Bucket", icon: Bitbucket },
        { name: "Jenkins", icon: Jenkins },
        { name: "Postman", icon: Postman },
        { name: "Debugging", icon: Debugging },
        { name: "Problem Solving", icon: Ps },
    ];

    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect(); // run only once
                    }
                });
            },
            { threshold: 0.2 } // 20% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="container">
                <h2>Skills</h2>
                <div className={`skills__grid ${visible ? "show" : ""}`}>
                    {allSkills.map((skill, index) => (
                        <div
                            className="skill-card"
                            key={index}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <img className="icon" src={skill.icon} width={30} height={30} alt={skill.name} />
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
