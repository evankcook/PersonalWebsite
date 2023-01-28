import Button from "./Button";
import "./Project.css";

function Project(props) {
  return (
    <div className="content-container">
      {props.isImageLeft || (
        <div className="text-box-right">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Button link={props.link} text="Check it out" />
        </div>
      )}
      <div className="image-box">
        <img src={props.imgPath} alt={props.alt} id="project-img-left" />
      </div>
      {props.isImageLeft && (
        <div className="text-box-left">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Button link={props.link} text="Check it out" />
        </div>
      )}
    </div>
  );
}

export default Project;
