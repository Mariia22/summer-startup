import { NumberInput } from "@mantine/core";
import { FC, useContext } from "react";
import { FilterContext } from "../pages/App/utils/context";
import { ActionsTypes, InputsNameType } from "../pages/App/utils/types";

type NumberInputType = {
  name: InputsNameType;
  dataElem: string;
  placeholder: string;
};

const NumberInputComponent: FC<NumberInputType> = ({
  dataElem,
  placeholder,
  name,
}) => {
  const { state, dispatch } = useContext(FilterContext);

  function handleChange(value: number | "") {
    name === "from"
      ? dispatch({ type: ActionsTypes.changeFrom, payload: value })
      : dispatch({ type: ActionsTypes.changeTo, payload: value });
  }

  return (
    <NumberInput
      data-elem={dataElem}
      placeholder={placeholder}
      min={0}
      step={100}
      value={state[name]}
      onChange={(value) => handleChange(value)}
      styles={(theme) => ({
        control: {
          width: "12px",
          height: "12px",
          border: "none",
          color: theme.colors.grey[3],
        },
      })}
    />
  );
};

export default NumberInputComponent;
