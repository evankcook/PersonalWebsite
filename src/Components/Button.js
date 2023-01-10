import "./Button.css";

function Button(props) {
  return (
    <a href={props.link} className="button" target="_blank" rel="noreferrer">
      <span>{props.text}</span>
    </a>
  );
}

export default Button;
