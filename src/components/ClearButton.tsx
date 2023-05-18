import { Button, Image } from "@mantine/core";
import { FC, useContext } from "react";
import { FilterContext } from "../pages/VacanciesPage/utils/context";
import { ActionsTypes } from "../pages/VacanciesPage/utils/types";

type ClearButtonType = {
  handleClick: () => void;
};

const ClearButton: FC<ClearButtonType> = ({ handleClick }) => {
  const { dispatch } = useContext(FilterContext);

  function clearFilters() {
    dispatch({ type: ActionsTypes.clearStateType });
    handleClick();
  }

  return (
    <Button
      variant="none"
      rightIcon={<Image width={16} height={16} src="/close.svg" />}
      onClick={clearFilters}
    >
      Сбросить все
    </Button>
  );
};

export default ClearButton;
