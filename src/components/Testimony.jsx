const Testimony = (props) => {
  return (
    <div className="border border-gray-200 p-5 break-inside-avoid-column  ">
      <p className="text-sm text-larablack">{props.children}</p>
      <div className="flex gap-4 text-xs mt-5">
        <img
          src={props.img}
          alt={props.author + "ProfilPic"}
          className="h-[40px] w-[40px]"
        />
        <div>
          <h3>{props.author}</h3>
          <p>
            {props.description}{" "}
            <a href={props.link} className="text-red-500">
              {props.entreprise}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
