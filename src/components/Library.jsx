const Library = (props) => {
  const title = `${props.title}`;
  let titleLow = title.toLowerCase();
  const src = `https://laravel.com/img/ecosystem/${titleLow}.min.svg`;
  return (
    <a
      href={props.link}
      className={
        "border border-gray-200/60 px-4 flex " +
        (props.pb ? "pt-4 pb-6" : "py-4")
      }
    >
      <div
        className={
          props.color +
          " h-[48px] w-[48px] rounded-md p-2 mr-4 shrink-0 flex items-center justify-center"
        }
      >
        <img src={src} alt="forgelogo" />
      </div>
      <div>
        <h3 className="text-base text-[#232323]">{props.title}</h3>
        <p className="mt-1">{props.children}</p>
      </div>
    </a>
  );
};
export const LibraryTwo = (props) => {
  const title = `${props.title}`;
  let titleLow = title.toLowerCase();
  const src = `https://laravel.com/img/ecosystem/${titleLow}.min.svg`;
  return (
    <a href={props.link} className={"px-2 py-4 flex "}>
      <div
        className={
          props.color +
          " h-[48px] w-[48px] rounded-md p-2 mr-4 shrink-0 flex items-center justify-center"
        }
      >
        <img src={src} alt="forgelogo" />
      </div>
      <div>
        <h3 className="text-base text-[#232323]">{props.title}</h3>
        <p className="mt-1">{props.children}</p>
      </div>
    </a>
  );
};

export default Library;
