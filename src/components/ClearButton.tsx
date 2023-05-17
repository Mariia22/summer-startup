import { Button, Image } from "@mantine/core";
import { useContext } from "react";
import { FilterContext } from "../pages/VacanciesPage/utils/context";
import { ActionsTypes } from "../pages/VacanciesPage/utils/types";

const ClearButton = () => {
  const { dispatch } = useContext(FilterContext);

  function clearFilters() {
    dispatch({ type: ActionsTypes.clearStateType });
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
