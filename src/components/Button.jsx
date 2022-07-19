const Button = (props) => {
  return (
    <a
      href={props.link}
      className={
        "group relative inline-block " + (props.hidden && props.hidden)
      }
    >
      <button
        className={
          "z-10 px-4 py-2 font-medium text-sm transition-all duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 relative ease-in-out" +
          (props.color === "red"
            ? " text-white border border-larared  bg-larared "
            : " text-larared border border-larared bg-white ") +
          (props.className && props.className)
        }
      >
        {props.children}
      </button>
      <div className="absolute left-0 top-0  w-full h-full  border border-larared z-0"></div>
    </a>
  );
};

export default Button;
