import { TextInput, Image, Button, useMantineTheme } from '@mantine/core';

const SearchForm = () => {
  const theme = useMantineTheme();
  return (
    <TextInput
      icon={<Image width={16} height={16} src='/search.svg' />}
      rightSection={<Button variant="filled">Поиск</Button>}
      rightSectionWidth={120}
      styles={{
        input: {
          border: `1px solid ${theme.colors.grey[1]}`, borderRadius: '8px'
        }
      }}
      size="lg"
      placeholder='Введите название вакансии'
    />
  )
}

export default SearchForm
