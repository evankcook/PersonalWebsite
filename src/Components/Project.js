import Button from "./Button";
import "./Project.css";

function Project(props) {
  return (
    <div className="content-container">
      <div className="image-box">
        <img src={props.imgPath} alt={props.alt} id="project-img" />
      </div>
      <div className="text-box">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Button link="https://github.com/evankcook" text="Check it out" />
      </div>
    </div>
  );
}

export default Project;
