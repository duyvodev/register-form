import "./styles.css";

function FormHeader(props) {
  const { value } = props;
  return <h1 className="formHeading">{value}</h1>;
}

export default FormHeader;
