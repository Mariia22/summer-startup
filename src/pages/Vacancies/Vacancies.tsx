import { Flex, Loader, Text } from '@mantine/core';
import SearchForm from '../../modules/SearchForm/SearchForm';
import FiltersForm from '../../modules/FiltersForm/FiltersForm';
import VacancyList from '../../modules/VacancyList/VacancyList';
import PaginationBlock from '../../components/Pagination';
//import { getVacancies } from './hooks/getVacancies';
import { authGetData } from '../App/api/auth';

const Vacancies = () => {
  const { authData, isLoading, error, isError } = authGetData();
  if (authData) {
    localStorage.setItem("token", `${authData.access_token}`);
  }
  
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
        {isLoading && <Loader />}
        {isError && <Text sx={{ fontSize: "1.5rem", lineHeight: "2.25rem" }}>{error.message}</Text>}
        <SearchForm />
        <VacancyList />
        <PaginationBlock />
      </Flex>
    </Flex>
  )
}

export default Vacancies
