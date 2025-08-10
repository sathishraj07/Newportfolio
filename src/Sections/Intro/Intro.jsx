import "./Intro.scss";
import heroImg from "../../assets/Profile_img.png";
import Button from "../../Component/Button/Button";

 function Intro() {

  const HandleView = (e) => {
   e.preventDefault()
 const tag =   document.getElementById("Hiddentag");
 console.log(tag);
 
 tag.click()
  }
  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <div className="hero__text">
          <h1>Hi, I'm <span>Sathish R</span></h1>
          <p>React JS Developer | 2 + Years Experience</p>
          <a href="#projects  ">
             <Button onClick={HandleView} buttonName = "View My Work" />
             <a href="#projects"  id="Hiddentag" style={{visibility:"hidden"}}></a>
          </a>
       
        </div>
        <div className="hero__image">
          <img src={heroImg} alt="Profile"/>
        </div>
      </div>
    </section>
  );
}
export default Intro;