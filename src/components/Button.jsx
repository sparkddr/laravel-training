const Button = (props) => {
  return (
    <button
      className={
        props.color === "red"
          ? "text-white bg-larared px-4 py-2 mb-4 font-medium text-sm " +
            props.className
          : " text-larared border border-larared  px-4 py-2 mb-4 font-medium text-sm " +
            props.className
      }
    >
      {props.text}
    </button>
  );
};

export default Button;
