import { Flex, Loader, Text, Pagination, useMantineTheme } from "@mantine/core";
import SearchForm from "../../modules/SearchForm/SearchForm";
import FiltersForm from "../../modules/FiltersForm/FiltersForm";
import { VacanciesType } from "./types";
import VacancyCard from "../../components/VacancyCard";
import { useState } from "react";
import { numberOfPages } from "./const";
import { useVacansiesWithFavouritesField } from "./hooks/useVacansiesWithFavouritesField";

const VacanciesPage = () => {
  const token = localStorage.getItem("token")?.toString();
  const theme = useMantineTheme();
  const [activePage, setActivePage] = useState(1);
  const { vacanciesWithFavoriteFlag, isLoading, isError, error } =
    useVacansiesWithFavouritesField(token ? token : null, activePage - 1);

  return (
    <Flex justify="center" gap="28px" sx={{ padding: "40px 44px 162px" }}>
      <FiltersForm />
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
        {/* {errorMessage && <Text sx={{ fontSize: "1.5rem", lineHeight: "2.25rem" }}>{errorMessage}</Text>} */}
        {vacanciesWithFavoriteFlag &&
          vacanciesWithFavoriteFlag.length > 0 &&
          vacanciesWithFavoriteFlag.map((vacancy: VacanciesType) => {
            return (
              <VacancyCard
                key={vacancy.id}
                id={vacancy.id}
                profession={vacancy.profession}
                paymentFrom={vacancy.payment_from}
                paymentTo={vacancy.payment_to}
                currency={vacancy.currency}
                typeOfWork={vacancy.type_of_work?.title}
                town={vacancy.town?.title}
                isFavourite={vacancy.isFavourite}
              />
            );
          })}
        <Pagination
          value={activePage}
          total={numberOfPages}
          position="center"
          styles={(theme) => ({
            control: {
              marginTop: "12px",
              "&[data-active]": {
                backgroundColor: theme.colors.blue[1],
              },
            },
          })}
          onChange={setActivePage}
        />
      </Flex>
    </Flex>
  );
};

export default VacanciesPage;
