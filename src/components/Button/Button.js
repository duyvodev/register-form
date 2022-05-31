import "./styles.css";

export default function Button(props) {
  const { handleOnClick, value } = props;
  return (
    <button onClick={handleOnClick} className="formBtn">
      {value}
    </button>
  );
}
