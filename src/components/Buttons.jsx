function Button({ text, onClick, className }) {
  return (
    <button className={className} onClick={onClick} type="">
      {text}
    </button>
  );
}

export default Button;
