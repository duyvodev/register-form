import { useEffect } from "react";
import "./styles.css";

export default function TextValidation(props) {
  const { id, value, color, hidden } = props;
  useEffect(() => {
    const item = document.getElementById(id);
    if (color === "red") {
      item.classList.add("red");
      item.classList.remove("green");
    } else if (color === "green") {
      item.classList.add("green");
      item.classList.remove("red");
    }

    if (hidden === true) {
      item.classList.remove("opacity1");
    } else {
      item.classList.add("opacity1");
    }
  }, [color, hidden]);
  return (
    <p id={id} className="validationText">
      {value}
    </p>
  );
}
