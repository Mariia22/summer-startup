import { Flex, Loader, Text, useMantineTheme } from "@mantine/core";
import SearchForm from "../../modules/SearchForm/SearchForm";
import FiltersForm from "../../modules/FiltersForm/FiltersForm";
import { VacanciesType } from "./utils/types";
import VacancyCard from "../../components/VacancyCard";
import { useContext, useEffect, useState } from "react";
import { maxNumberOfResultsFromAPI, vacanciesPerPage } from "./utils/const";
import { useVacansiesWithFavouritesField } from "./hooks/useVacansiesWithFavouritesField";
import { useNavigate, useParams } from "react-router-dom";
import PaginationComponent from "../../components/PaginationComponent";
import { useGetIndustries } from "../../modules/FiltersForm/api/getIndustries";
import EmptyList from "../../components/EmptyList";
import { FilterContext } from "../App/utils/context";
import { ActionsTypes } from "../App/utils/types";

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
  const { state, dispatch } = useContext(FilterContext);

  useEffect(() => {
    const { industry, search, from, to } = state;
    changeAllFilters(industry, from, to);
    setKeyword(search);
  }, []);

  useEffect(() => {
    navigate(`/vacancies/${activePage}`);
  }, [activePage, navigate]);

  function handleChangePage(value: number) {
    setActivePage(value);
  }

  function changeAllFilters(
    industry: string | null,
    from: number | string,
    to: number | string
  ) {
    setIndustry(industry);
    setPaymentFrom(from);
    setPaymentTo(to);
  }

  function applyFiltersToVacancies() {
    handleChangePage(1);
    const { industry, from, to } = state;
    changeAllFilters(industry, from, to);
  }

  function searchVacancies() {
    handleChangePage(1);
    setKeyword(state.search);
  }

  function clearAllFilters() {
    handleChangePage(1);
    dispatch({ type: ActionsTypes.clearFiltersType });
    changeAllFilters("", "", "");
  }

  function clearFiltersAndSearch() {
    handleChangePage(1);
    dispatch({ type: ActionsTypes.clearAllFiltersAndSearchType });
    changeAllFilters("", "", "");
    setKeyword("");
  }

  return (
    <Flex
      justify="center"
      gap="28px"
      sx={{
        padding: "40px 0px 162px",
        backgroundColor: theme.colors.grey[5],
        minHeight: "89vh",
        '@media (max-width: 63em)': {
          fontSize: theme.fontSizes.sm,
        },
        '@media (max-width: 37em)': {
          flexDirection: "column",
          alignItems: "center"
        },
      }}
    >
      {vacanciesWithFavoriteFlag && vacanciesWithFavoriteFlag.length !== 0 && (
        <FiltersForm
          industries={industries}
          handleClick={applyFiltersToVacancies}
          handleReset={clearAllFilters}
        />
      )}
      <Flex direction="column" sx={{
        width: "53.6%",
        gap: "1rem",
        '@media (max-width: 37em)': { width: "100%", gap: "0.3rem" }
      }}>
        {vacanciesWithFavoriteFlag &&
          vacanciesWithFavoriteFlag.length !== 0 && (
            <SearchForm handleClick={searchVacancies} />
          )}
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
          vacanciesWithFavoriteFlag.length === 0 && (
            <EmptyList handleClick={clearFiltersAndSearch} />
          )}
        {!isLoading && vacanciesWithFavoriteFlag.length !== 0 && (
          <PaginationComponent
            value={activePage}
            total={numberOfPages}
            handleChange={handleChangePage}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default VacanciesPage;
