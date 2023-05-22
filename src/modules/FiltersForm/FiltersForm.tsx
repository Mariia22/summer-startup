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
import TitleOrder4Component from "../../components/TitleOrder4Component";

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
      gap="8px"
      sx={{
        width: "315px",
        maxHeight: "360px",
        padding: "15px 20px",
        border: `1px solid ${theme.colors.grey[1]}`,
        borderRadius: "12px",
        backgroundColor: theme.white,
        "@media (max-width: 63em)": {
          width: "250px",
          maxHeight: "60vh",
        },
        "@media (max-width: 37em)": {
          width: "100%",
        },
      }}
    >
      <Flex justify="space-between">
        <Title
          order={2}
          sx={{ "@media (max-width: 63em)": { fontSize: theme.fontSizes.md } }}
        >
          Фильтры
        </Title>
        <ClearButton handleClick={handleReset} />
      </Flex>
      <TitleOrder4Component>Отрасль</TitleOrder4Component>
      <SelectComponent data={industries} />
      <TitleOrder4Component>Оклад</TitleOrder4Component>
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
      <Button
        variant="filled"
        data-elem="search-button"
        onClick={handleClick}
        sx={{
          marginTop: "8px",
          width: "275px",
          height: "40px",
          alignContent: "center",
          "@media (max-width: 63em)": {
            width: "200px",
          },
        }}
      >
        Применить
      </Button>
    </Flex>
  );
};

export default FiltersForm;
