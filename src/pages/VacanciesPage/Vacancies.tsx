import { Flex, Loader, Text, useMantineTheme } from "@mantine/core";
import SearchForm from "../../modules/SearchForm/SearchForm";
import FiltersForm from "../../modules/FiltersForm/FiltersForm";
import { ActionsTypes, VacanciesType } from "./utils/types";
import VacancyCard from "../../components/VacancyCard";
import { useEffect, useReducer, useState } from "react";
import {
  initialState,
  maxNumberOfResultsFromAPI,
  vacanciesPerPage,
} from "./utils/const";
import { useVacansiesWithFavouritesField } from "./hooks/useVacansiesWithFavouritesField";
import { useNavigate, useParams } from "react-router-dom";
import PaginationComponent from "../../components/PaginationComponent";
import { FilterContext } from "./utils/context";
import { reducer } from "./utils/reducer";
import { useGetIndustries } from "../../modules/FiltersForm/api/getIndustries";
import EmptyList from "../../components/EmptyList";
import { saveDataToLS } from "../../utils/helpers";

const VacanciesPage = () => {
  const token = localStorage.getItem("token")?.toString();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { page } = useParams();
  const [activePage, setActivePage] = useState(Number(page));
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState<string | null>("");
  const [paymentFrom, setPaymentFrom] = useState<number | string>("");
  const [paymentTo, setPaymentTo] = useState<number | string>("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { vacanciesWithFavoriteFlag, total, isLoading, isError, error } =
    useVacansiesWithFavouritesField(
      token ? token : null,
      activePage - 1,
      keyword,
      industry,
      paymentFrom,
      paymentTo
    );
  const { industries } = useGetIndustries(token ? token : null);
  const numberOfPages =
    total && total < maxNumberOfResultsFromAPI
      ? Math.ceil(total / vacanciesPerPage)
      : Math.ceil(maxNumberOfResultsFromAPI / vacanciesPerPage);

  useEffect(() => {
    const filters = localStorage.getItem("filters")?.toString();
    if (filters) {
      const payload = JSON.parse(filters);
      const { search, industry, from, to } = payload;
      dispatch({ type: ActionsTypes.downloadFilter, payload });
      setKeyword(search);
      setIndustry(industry);
      setPaymentFrom(from);
      setPaymentTo(to);
    }
  }, []);

  useEffect(() => {
    navigate(`/vacancies/${activePage}`);
  }, [activePage, navigate]);

  function handleChangePage(value: number) {
    setActivePage(value);
  }

  function applyFiltersToVacancies() {
    const { industry, from, to } = state;
    setActivePage(1);
    setIndustry(industry);
    setPaymentFrom(from);
    setPaymentTo(to);
  }

  function searchVacancies() {
    setActivePage(1);
    setKeyword(state.search);
  }

  function clearAllFilters() {
    setActivePage(1);
    setIndustry("");
    setPaymentFrom("");
    setPaymentTo("");
    saveDataToLS("filters", state);
  }

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      <Flex
        justify="center"
        gap="28px"
        sx={{
          padding: "40px 44px 162px",
          backgroundColor: theme.colors.grey[5],
          minHeight: "91vh",
        }}
      >
        <FiltersForm
          industries={industries}
          handleClick={applyFiltersToVacancies}
          handleReset={clearAllFilters}
        />
        <Flex direction="column" gap="1rem" sx={{ width: "53.6%" }}>
          <SearchForm handleClick={searchVacancies} />
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
          {!isLoading &&
            vacanciesWithFavoriteFlag &&
            vacanciesWithFavoriteFlag.length === 0 && <EmptyList />}
          {!isLoading && vacanciesWithFavoriteFlag.length !== 0 && (
            <PaginationComponent
              value={activePage}
              total={numberOfPages}
              handleChange={handleChangePage}
            />
          )}
        </Flex>
      </Flex>
    </FilterContext.Provider>
  );
};

export default VacanciesPage;
