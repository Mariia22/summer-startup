import { TextInput, Image, Button } from '@mantine/core';

const SearchForm = () => {
  return (
    <TextInput
      icon={<Image width={16} height={16} src='/search.svg' />}
      rightSection={<Button variant="filled">Поиск</Button>}
      rightSectionWidth={120}
      size="lg"
      placeholder='Введите название вакансии'
    />
  )
}

export default SearchForm
