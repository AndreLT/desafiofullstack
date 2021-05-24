const Input = (props) => {
  return (
    <label className="block font-mono text-gray-500 font-semibold">
      {props.label}
      {props.children ? (
        props.children
      ) : (
        <input
          className="block w-60 p-1 px-2"
          type="text"
          value={props.value}
          onChange={(e) => props.setter(e.target.value)}
        />
      )}
    </label>
  );
};

export default Input;
