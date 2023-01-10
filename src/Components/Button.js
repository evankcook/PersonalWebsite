function Button(props) {
  return (
    <a href={props.link}>
      <span>{props.text}</span>
    </a>
  );
}

export default Button;
