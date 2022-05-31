import "./styles.css";
import FormInput from "../FormInput/FormInput";
import TextValidation from "../TextValidation/TextValidation";
import { useState } from "react";
export default function FormItem(props) {
  const {
    labelValue,
    formRequired,
    inputType,
    inputId,
    placeholderValue,
    isAutoComplete,
    handleOnInput,
    handleOnBlur,
    inputValue,
    textValidationValue,
    textValidationId,
    textValidationColor,
    textValidationHidden,
    hiddenPwElement,
  } = props;
  const [initialType, setInitalType] = useState(inputType);
  return (
    <>
      {initialType === "password" ? (
        <div className="formItem">
          <label className="formLabel" htmlFor={inputId}>
            {labelValue}
          </label>
          <div className="formPassWd">
            <FormInput
              formRequired={formRequired}
              inputType={inputType}
              inputId={inputId}
              placeholderValue={placeholderValue}
              isAutoComplete={isAutoComplete}
              handleOnInput={handleOnInput}
              handleOnBlur={handleOnBlur}
              inputValue={inputValue}
              hiddenPwElement={hiddenPwElement}
            />
          </div>
          <TextValidation
            value={textValidationValue}
            id={textValidationId}
            color={textValidationColor}
            hidden={textValidationHidden}
          />
        </div>
      ) : (
        <div className="formItem">
          <label className="formLabel" htmlFor={inputId}>
            {labelValue}
          </label>
          <FormInput
            formRequired={formRequired}
            inputType={inputType}
            inputId={inputId}
            placeholderValue={placeholderValue}
            isAutoComplete={isAutoComplete}
            handleOnInput={handleOnInput}
            handleOnBlur={handleOnBlur}
            inputValue={inputValue}
            hiddenPwElement={hiddenPwElement}
          />
          <TextValidation
            value={textValidationValue}
            id={textValidationId}
            color={textValidationColor}
            hidden={textValidationHidden}
          />
        </div>
      )}
    </>
  );

  //   (
  //     <div className="formItem">
  //       <label className="formLabel" htmlFor={inputId}>
  //         {labelValue}
  //       </label>
  //       <FormInput
  //         formRequired={formRequired}
  //         inputType={inputType}
  //         inputId="name"
  //         placeholderValue={placeholderValue}
  //         isAutoComplete={isAutoComplete}
  //         handleOnInput={handleOnInput}
  //         handleOnBlur={handleOnBlur}
  //         inputValue={inputValue}
  //       ></FormInput>
  //       <TextValidation
  //         value={textValidationValue}
  //         id={textValidationId}
  //         color={textValidationColor}
  //         hidden={textValidationHidden}
  //       />
  //     </div>
  //   );
}
