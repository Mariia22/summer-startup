import { Flex } from '@mantine/core';
import SearchForm from '../modules/SearchForm/SearchForm';
import FiltersForm from '../modules/FiltersForm/FiltersForm';

const VacancyList = () => {
  return (
    <Flex
      justify='center'
      gap='28px'
      sx={{ padding: "40px 44px 162px" }}
    >
      <FiltersForm />
      <Flex
        direction="column"
        sx={{ width: "53.6%" }}
      >
        <SearchForm />
        <div>VacancyList</div>
      </Flex>
    </Flex>
  )
}

export default VacancyList
