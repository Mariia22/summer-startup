import {
  Flex,
  Title,
  Button,
  Image,
  Select,
  useMantineTheme,
} from "@mantine/core";

const FiltersForm = () => {
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
        <Button
          variant="none"
          rightIcon={<Image width={16} height={16} src="/close.svg" />}
        >
          Сбросить все
        </Button>
      </Flex>
      <Title order={4}>Отрасль</Title>
      <Select
        data={[]}
        placeholder="От"
        rightSection={<Image width={24} height={24} src="/down.svg" />}
        rightSectionWidth={50}
        styles={{ rightSection: { pointerEvents: "none" } }}
      />
      <Title order={4}>Оклад</Title>
      <Select data={[]} placeholder="От" />
      <Select data={[]} placeholder="До" />
      <Button variant="filled">Применить</Button>
    </Flex>
  );
};

export default FiltersForm;
