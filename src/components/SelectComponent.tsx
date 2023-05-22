import { Select, SelectItem } from "@mantine/core";
import { FC, useContext, useState } from "react";
import { FilterContext } from "../pages/App/utils/context";
import { ActionsTypes } from "../pages/App/utils/types";
import { ReactComponent as DropdownIcon } from "../assets/down.svg";

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
      rightSection={<DropdownIcon />}
      rightSectionWidth={50}
      searchable
      nothingFound="No options"
      value={state.industry}
      fz={"1.2rem"}
      onChange={(value) => handleChange(value)}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
      styles={(theme) => ({
        rightSection: {
          stroke: isOpened ? theme.colors.blue[1] : theme.colors.grey[3],
          pointerEvents: "none",
          transition: 'transform 150ms ease',
          transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)'
        },
        input: {
          height: "42px",
          border: isOpened ? `1px solid ${theme.colors.blue[1]}` : `1px solid ${theme.colors.grey[2]}`,
          '&:hover, &:focus': {
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
            backgroundColor: theme.colors.blue[5]
          },
        },
      })}
    />
  );
};

export default SelectComponent;
