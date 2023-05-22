import { TextInput, Image, Button, useMantineTheme } from "@mantine/core";
import { ChangeEvent, FC, useContext } from "react";
import { FilterContext } from "../../pages/App/utils/context";
import { ActionsTypes } from "../../pages/App/utils/types";
import { useMediaQuery } from "@mantine/hooks";

type SearchFormType = {
  handleClick: () => void;
};

const SearchForm: FC<SearchFormType> = ({ handleClick }) => {
  const theme = useMantineTheme();
  const { state, dispatch } = useContext(FilterContext);
  const smallScreen = useMediaQuery("(max-width: 63em)");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: ActionsTypes.changeSearch,
      payload: event.currentTarget.value,
    });
  }

  return (
    <TextInput
      data-elem="search-input"
      icon={<Image width={22} height={22} src="/search.png" />}
      iconWidth={40}
      rightSection={
        <Button
          variant="filled"
          data-elem="search-button"
          onClick={handleClick}
          sx={{
            height: smallScreen ? "1.8rem" : "2rem",
            width: smallScreen ? "3rem" : "5.3rem",
            fontSize: smallScreen ? "0.5rem" : "0.875rem",
            padding: smallScreen ? "0rem" : "5.5px 20px",
          }}
        >
          Поиск
        </Button>
      }
      rightSectionWidth={smallScreen ? 60 : 100}
      styles={{
        input: {
          fontSize: smallScreen ? "0.7rem" : "0.875rem",
          border: `1px solid ${theme.colors.grey[1]}`,
          borderRadius: "8px",
          "&[data-with-icon]": {
            paddingLeft: "36px",
          },
          "&:hover, &:focus": {
            border: `1px solid ${theme.colors.blue[1]}`,
          },
        },
        icon: {
          paddingLeft: "5px",
          paddingTop: "6px",
        },
      }}
      size={smallScreen ? "sm" : "lg"}
      placeholder="Введите название вакансии"
      value={state.search}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default SearchForm;
