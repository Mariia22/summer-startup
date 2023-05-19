import { TextInput, Image, Button, useMantineTheme } from "@mantine/core";
import { ChangeEvent, FC, useContext } from "react";
import { FilterContext } from "../../pages/App/utils/context";
import { ActionsTypes } from "../../pages/App/utils/types";

type SearchFormType = {
  handleClick: () => void;
};

const SearchForm: FC<SearchFormType> = ({ handleClick }) => {
  const theme = useMantineTheme();
  const { state, dispatch } = useContext(FilterContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: ActionsTypes.changeSearch,
      payload: event.currentTarget.value,
    });
  }

  return (
    <TextInput
      data-elem="search-input"
      icon={<Image width={16} height={16} src="/search.svg" />}
      rightSection={
        <Button
          variant="filled"
          data-elem="search-button"
          onClick={handleClick}
        >
          Поиск
        </Button>
      }
      rightSectionWidth={120}
      styles={{
        input: {
          border: `1px solid ${theme.colors.grey[1]}`,
          borderRadius: "8px",
        },
      }}
      size="lg"
      placeholder="Введите название вакансии"
      value={state.search}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default SearchForm;
