const Question = (props) => {
  return (
    <article className="p-4 flex space-x-2 border-2 mt-2 rounded-md hover:bg-gray-100">
      <div className="flex flex-col justify-center text-center text-gray-500 mr-2">
        Answers
        <br />
        {props.answers}
      </div>
      <a href={props.link}>
        <img
          src={props.owner.image}
          alt=""
          className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="80"
          height="80"
        />
      </a>
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-md text-blue-500 hover:text-blue-700">
          <a href={props.link}>{props.title}</a>
        </h2>
        <div className="text-sm text-gray-600 mb-3">
          Asked by: <a href={props.owner.link}>{props.owner.name}</a>
        </div>
        <div className="flex flex-wrap self-end text-sm font-medium whitespace-pre">
          {props.tags.map((tag) => (
            <div className="px-1 mr-1 mb-1 text-blue-800 rounded-sm bg-blue-100 hover:bg-blue-200">
              <a href={`https://stackoverflow.com/questions/tagged/${tag}`}>
                {tag}
              </a>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gray-200 px-2 rounded-md text-gray-600">
          Score: {props.score}
        </div>
      </div>
    </article>
  );
};

export default Question;