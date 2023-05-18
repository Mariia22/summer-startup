import {
  Flex,
  Title,
  Button,
  useMantineTheme,
  SelectItem,
} from "@mantine/core";
import { FC } from "react";
import NumberInputComponent from "../../components/NumberInputComponent";
import SelectComponent from "../../components/SelectComponent";
import ClearButton from "../../components/ClearButton";

type FiltersFormType = {
  industries: SelectItem[] | undefined;
  handleClick: () => void;
  handleReset: () => void;
};

const FiltersForm: FC<FiltersFormType> = ({
  industries,
  handleClick,
  handleReset,
}: FiltersFormType) => {
  const theme = useMantineTheme();
  return (
    <Flex
      direction="column"
      gap="20px"
      sx={{
        width: "315px",
        maxHeight: "50vh",
        padding: "20px",
        border: `1px solid ${theme.colors.grey[1]}`,
        borderRadius: "12px",
        backgroundColor: theme.white,
      }}
    >
      <Flex sx={{ marginBottom: "12px" }}>
        <Title order={2}>Фильтры</Title>
        <ClearButton handleClick={handleReset} />
      </Flex>
      <Title order={4}>Отрасль</Title>
      <SelectComponent data={industries} />
      <Title order={4}>Оклад</Title>
      <NumberInputComponent
        dataElem="salary-from-input"
        placeholder="От"
        name="from"
      />
      <NumberInputComponent
        dataElem="salary-to-input"
        placeholder="До"
        name="to"
      />
      <Button variant="filled" data-elem="search-button" onClick={handleClick}>
        Применить
      </Button>
    </Flex>
  );
};

export default FiltersForm;
