import Button from "./Button";
import "./Interests.css";

function Interests(props) {
  return (
    <div className="interests-box">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div>
        <Button link={props.link} text="Check it out" />
      </div>
    </div>
  );
}

export default Interests;
