const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}) => {
  // return (
  //   <div className="input-group">
  //     <label className="input-label">
  //       {label}
  //       {required && <span className="required">*</span>}
  //     </label>
  //     <input
  //       type={type}
  //       name={name}
  //       value={value}
  //       onChange={onChange}
  //       className="input-box"
  //       required={required}
  //     />
  //   </div>
  // );

  return (
    <div className="floating-input-group">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="floating-input"
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className={`floating-label ${value ? "filled" : ""}`}
      >
        {label}
        {required && <span className="required">*</span>}
      </label>
    </div>
  );
};

export default InputField;
