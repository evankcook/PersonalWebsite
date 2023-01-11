import Button from "./Button";
import "./Project.css";

function Project(props) {
  if (props.isImageLeft) {
    return (
      <div className="content-container">
        <div className="image-box">
          <img src={props.imgPath} alt={props.alt} id="project-img-left" />
        </div>
        <div className="text-box-left">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Button link="https://github.com/evankcook" text="Check it out" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="content-container">
        <div className="text-box-right">
          <h3>{props.title}</h3>
          <p>{props.description} hi</p>
          <Button link="https://github.com/evankcook" text="Check it out" />
        </div>
        <div className="image-box">
          <img src={props.imgPath} alt={props.alt} id="project-img-right" />
        </div>
      </div>
    );
  }
}

export default Project;
