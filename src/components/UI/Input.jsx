const Input = ({ label, type, id, name, ...props }) => {
  return (
    <p className="control">
      <label className="control label" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        type={type}
        className="control input"
        id={id}
        name={id}
        required
      ></input>
    </p>
  );
};

export default Input;
