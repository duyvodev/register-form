import "./styles.css";

// export default
export default function FormInput(props) {
  const {
    formRequired,
    inputType,
    inputId,
    placeholderValue,
    isAutoComplete,
    handleOnInput,
    handleOnBlur,
    inputValue,
    hiddenPwElement,
  } = props;
  return (
    <>
      <input
        required={formRequired}
        className="formInput"
        type={inputType}
        id={inputId}
        placeholder={placeholderValue}
        autoComplete={isAutoComplete}
        onInput={(e) => {
          handleOnInput(e);
        }}
        value={inputValue}
        onBlur={(e) => {
          handleOnBlur(e);
        }}
      />
      {hiddenPwElement || null}
    </>
  );
}
