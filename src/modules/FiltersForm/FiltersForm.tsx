import { Flex, Title, Button, Image, Select } from '@mantine/core';

const FiltersForm = () => {
  return (
    <Flex direction='column' gap='20px' sx={{ width: '315px', padding: '20px' }}>
      <Flex sx={{ marginBottom: '12px' }}>
        <Title order={2}>Фильтры</Title>
        <Button
          variant='none'
          rightIcon={<Image width={16} height={16} src='/close.svg' />}
        >
          Сбросить все
        </Button>
      </Flex>
      <Title order={3}>Отрасль</Title>
      <Select data={[]}
        placeholder="От"
        rightSection={<Image width={24} height={24} src='/down.svg' />}
        rightSectionWidth={50}
        styles={{ rightSection: { pointerEvents: 'none' } }} />
      <Title order={3}>Оклад</Title>
      <Select data={[]} placeholder="От" />
      <Select data={[]} placeholder="До" />
      <Button variant="filled">Применить</Button>
    </Flex>
  )
}

export default FiltersForm
