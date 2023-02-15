import React from "react";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CalculetorContext } from "../context/CalContext";

function Btn({ value }) {
  const { calc, setCalc } = useContext(CalculetorContext);
  const uniqueStyle = (value) => {
    const className = {
      "=": "solid",
      x: "outline",
      "-": "outline",
      "+": "outline",
      "/": "outline",
    };
    if (className[value]) {
      return className[value];
    } else {
      return "outline";
    }
  };
  const handleNumBtnClick = () => {
    const buttonValue = value.toString();

    let numOnScreen;
    let err = calc.num;
    if (calc.num === "0" && buttonValue === "0") {
      numOnScreen = "0";
    } else if (calc.num === "Invail Number") {
      numOnScreen = buttonValue;
    } else if (err.toString().length > 14) {
      numOnScreen = "Invail Number";
    } else {
      numOnScreen = Number(calc.num + buttonValue);
    }
    setCalc({
      ...calc,
      num: numOnScreen,
    });
  };
  const handleClick = () => {
    const func = {
      ".": commaClick,
      C: resetClick,
      "/": optClick,
      x: optClick,
      D: delClick,
      "-": optClick,
      "+": optClick,
      "=": equalsClick,
      "%": persenClick,
      "+-": invertClick,
    };
    if (func[value]) {
      func[value]();
    } else {
      handleNumBtnClick();
    }
  };

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  const delClick = () => {
    setCalc({
      ...calc,

      num: calc.num.toString().slice(0, -1) || 0,
    });
  };

  const resetClick = () => {
    setCalc({
      opt: "",
      num: 0,
      result: 0,
    });
    console.log("sign is : " + calc.opt);
    console.log("num is : " + calc.num);
    console.log("result is : " + calc.result);
  };

  const optClick = () => {
    setCalc({
      opt: value,
      num: 0,
      result: !calc.result && calc.num ? calc.num : calc.result,
    });
  };

  const equalsClick = () => {
    if (calc.result && calc.num) {
      const math = (a, b, opt) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[opt](a, b);
      };
      if (typeof calc.num === "string") {
        setCalc({
          result: math(calc.result, Number(calc.num), calc.opt),
          opt: "",
          num: 0,
        });
      } else {
        setCalc({
          result: math(calc.result, calc.num, calc.opt),
          opt: "",
          num: 0,
        });
      }
    }
  };

  const persenClick = () => {
    setCalc({
      opt: "",
      num: calc.num / 100,
      result: calc.num / 100,
    });
  };

  const invertClick = () => {
    setCalc({
      opt: "",
      num: calc.num * -1,
      result: calc.num * -1,
    });
  };

  return (
    <Button
      color={"teal"}
      colorScheme={"teal"}
      variant={`${uniqueStyle(value)}`}
      onClick={handleClick}
    >
      {value}
    </Button>
  );
}

export default Btn;
