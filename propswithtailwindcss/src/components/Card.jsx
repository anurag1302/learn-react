function Card(props) {
  console.log("props", props);
  console.log("text", props.content.text);
  const { text, userName, designation } = props.content; //destructuring

  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-5">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://random.imagecdn.app/500/150"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{text}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div>{userName}</div>
            <div>{designation}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;
