import { Select, SelectItem, Image } from "@mantine/core";
import { FC, useContext } from "react";
import { FilterContext } from "../pages/VacanciesPage/utils/context";
import { ActionsTypes } from "../pages/VacanciesPage/utils/types";

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
      placeholder="От"
      rightSection={<Image width={24} height={24} src="/down.svg" />}
      rightSectionWidth={50}
      styles={{ rightSection: { pointerEvents: "none" } }}
      value={state.industry}
      onChange={(value) => handleChange(value)}
    />
  );
};

export default SelectComponent;
