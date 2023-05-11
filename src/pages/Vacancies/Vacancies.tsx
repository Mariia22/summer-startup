import { Flex, Loader, Text } from '@mantine/core';
import SearchForm from '../../modules/SearchForm/SearchForm';
import FiltersForm from '../../modules/FiltersForm/FiltersForm';
import PaginationBlock from '../../components/Pagination';
import { VacanciesResponseType } from './types';
import VacancyCard from '../../components/VacancyCard';
import { authGetData } from './api/auth';
import { getVacancies } from './api/getVacancies';

const Vacancies = () => {
  let token = localStorage.getItem("token")?.toString();
  const response = authGetData();
  token = response.authData?.access_token;
  localStorage.setItem("token", `${token}`);
  const { vacancies, isLoading, isError, error } = getVacancies(token);

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
        {isLoading || response.isLoading && <Loader />}
        {isError && <Text sx={{ fontSize: "1.5rem", lineHeight: "2.25rem" }}>{error.message}</Text>}
        {response.isError && <Text sx={{ fontSize: "1.5rem", lineHeight: "2.25rem" }}>{response.error.message}</Text>}
        {vacancies &&
          vacancies.length > 0 &&
          (vacancies.map((vacancy: VacanciesResponseType) => {
            return (
              <VacancyCard
                key={vacancy.id_vacancy}
                profession={vacancy.profession}
                payment_from={vacancy.payment_from}
                currency={vacancy.currency}
                type_of_work={vacancy.type_of_work}
                town={vacancy.town} />)
          }))}
        <PaginationBlock />
      </Flex>
    </Flex>
  )
}

export default Vacancies
