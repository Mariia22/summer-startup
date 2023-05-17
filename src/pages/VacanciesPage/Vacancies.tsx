import { Flex, Loader, Text, useMantineTheme } from "@mantine/core";
import SearchForm from "../../modules/SearchForm/SearchForm";
import FiltersForm from "../../modules/FiltersForm/FiltersForm";
import { VacanciesType } from "./utils/types";
import VacancyCard from "../../components/VacancyCard";
import { useEffect, useReducer, useState } from "react";
import { initialState, numberOfPages } from "./utils/const";
import { useVacansiesWithFavouritesField } from "./hooks/useVacansiesWithFavouritesField";
import { useNavigate, useParams } from "react-router-dom";
import PaginationComponent from "../../components/PaginationComponent";
import { FilterContext } from "./utils/context";
import { reducer } from "./utils/reducer";
import { useGetIndustries } from "../../modules/FiltersForm/api/getIndustries";

const VacanciesPage = () => {
  const token = localStorage.getItem("token")?.toString();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { page } = useParams();
  const [activePage, setActivePage] = useState(Number(page));
  const [state, dispatch] = useReducer(reducer, initialState);
  const { vacanciesWithFavoriteFlag, isLoading, isError, error } =
    useVacansiesWithFavouritesField(token ? token : null, activePage - 1);
  const { industries } = useGetIndustries(token ? token : null);

  useEffect(() => {
    navigate(`/vacancies/${activePage}`);
  }, [activePage, navigate]);

  function handleChangePage(value: number) {
    setActivePage(value);
  }

  function applyFiltersToVacancies() {
    console.log(state);
  }

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      <Flex
        justify="center"
        gap="28px"
        sx={{
          padding: "40px 44px 162px",
          backgroundColor: theme.colors.grey[5],
        }}
      >
        <FiltersForm
          industries={industries}
          handleClick={applyFiltersToVacancies}
        />
        <Flex direction="column" gap="1rem" sx={{ width: "53.6%" }}>
          <SearchForm />
          {isLoading && (
            <Loader
              size="xl"
              color={theme.colors.blue[1]}
              sx={{ alignSelf: "center" }}
            />
          )}
          {isError && (
            <Text sx={{ fontSize: "1.5rem", lineHeight: "2.25rem" }}>
              {error.message}
            </Text>
          )}
          {vacanciesWithFavoriteFlag &&
            vacanciesWithFavoriteFlag.length > 0 &&
            vacanciesWithFavoriteFlag.map((vacancy: VacanciesType) => {
              return (
                <VacancyCard
                  data-elem={`vacancy-${vacancy.id}`}
                  key={vacancy.id}
                  id={vacancy.id}
                  profession={vacancy.profession}
                  paymentFrom={vacancy.payment_from}
                  paymentTo={vacancy.payment_to}
                  currency={vacancy.currency}
                  typeOfWork={vacancy.type_of_work?.title}
                  town={vacancy.town?.title}
                  detailes={vacancy.vacancyRichText}
                  isFavourite={vacancy.isFavourite}
                />
              );
            })}
          <PaginationComponent
            value={activePage}
            total={numberOfPages}
            handleChange={handleChangePage}
          />
        </Flex>
      </Flex>
    </FilterContext.Provider>
  );
};

export default VacanciesPage;
