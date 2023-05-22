import { Select, SelectItem, Image } from "@mantine/core";
import { FC, useContext, useState } from "react";
import { FilterContext } from "../pages/App/utils/context";
import { ActionsTypes } from "../pages/App/utils/types";

type SelectType = {
  data: SelectItem[] | undefined;
};

const SelectComponent: FC<SelectType> = ({ data }) => {
  const { state, dispatch } = useContext(FilterContext);
  const [isOpened, setOpened] = useState(false);

  function handleChange(value: string | null) {
    dispatch({ type: ActionsTypes.changeIndustry, payload: value });
  }

  return (
    <Select
      data-elem="industry-select"
      data={data?.length ? [...data] : []}
      placeholder="Выберете отрасль"
      rightSection={isOpened ? <Image width={24} height={24} src="/upArrow.svg" /> : <Image width={24} height={24} src="/down.svg" />}
      rightSectionWidth={50}
      searchable
      nothingFound="No options"
      value={state.industry}
      fz={"1.2rem"}
      onChange={(value) => handleChange(value)}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
      styles={(theme) => ({
        rightSection: { pointerEvents: "none" },
        input: {
          height: "42px",
          border: isOpened ? `1px solid ${theme.colors.blue[1]}` : `1px solid ${theme.colors.grey[2]}`,
          '&:hover': {
            border: `1px solid ${theme.colors.blue[1]}`
          }
        },
        dropdown: {
          fontSize: '0.85rem'
        },
        item: {
          '&[data-selected]': {
            '&, &:hover': {
              width: "97%",
              backgroundColor: theme.colors.blue[1],
              color: theme.white,
            },
          },
          '&[data-hovered]': {
            width: "97%",
            backgroundColor: theme.colors.blue[1],
            color: theme.white,
          },
        },
      })}
    />
  );
};

export default SelectComponent;
