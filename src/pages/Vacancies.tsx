import { Flex } from '@mantine/core';
import SearchForm from '../modules/SearchForm/SearchForm';
import FiltersForm from '../modules/FiltersForm/FiltersForm';
import VacancyList from '../modules/VacancyList/VacancyList';
import PaginationBlock from '../components/Pagination';

const Vacancies = () => {
  return (
    <Flex
      justify='center'
      gap='28px'
      sx={{ padding: '40px 44px 162px' }}
    >
      <FiltersForm />
      <Flex
        direction='column'
        gap='1rem'
        sx={{ width: '53.6%' }}
      >
        <SearchForm />
        <VacancyList />
        <PaginationBlock />
      </Flex>
    </Flex>
  )
}

export default Vacancies
