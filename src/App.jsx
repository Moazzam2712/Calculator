import React, { useState } from "react";
import Container from "./components/Container";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

const App = () => {
  const calculatorButtons = [
    "7",
    "8",
    "9",
    "Del",
    "CE",
    "4",
    "5",
    "6",
    "*",
    "/",
    "1",
    "2",
    "3",
    "+",
    "-",
    "0",
    "00",
    ".",
    "=",
  ];
  const [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    if (buttonText === "Del") {
    } else if (buttonText === "=") {
      const result= eval(calVal)
      setCalVal(result)
    } else if (buttonText === "CE") {
      setCalVal("")
    } else {
      let newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  };
  return (
    <Container>
      <Display dispVal={calVal} />
      <Buttons onButtonClick={onButtonClicked} buttons={calculatorButtons} />
    </Container>
  );
};

export default App;
