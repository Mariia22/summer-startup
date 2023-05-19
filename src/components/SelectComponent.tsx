import { Select, SelectItem, Image } from "@mantine/core";
import { FC, useContext } from "react";
import { FilterContext } from "../pages/App/utils/context";
import { ActionsTypes } from "../pages/App/utils/types";

type SelectType = {
  data: SelectItem[] | undefined;
};

const SelectComponent: FC<SelectType> = ({ data }) => {
  const { state, dispatch } = useContext(FilterContext);

  function handleChange(value: string | null) {
    dispatch({ type: ActionsTypes.changeIndustry, payload: value });
  }

  return (
    <Select
      data-elem="industry-select"
      data={data?.length ? [...data] : []}
      placeholder="Выберете отрасль"
      rightSection={<Image width={24} height={24} src="/down.svg" />}
      rightSectionWidth={50}
      styles={{ rightSection: { pointerEvents: "none" }, input: { height: "42px" } }}
      value={state.industry}
      fz={"1.2rem"}
      onChange={(value) => handleChange(value)}
    />
  );
};

export default SelectComponent;
