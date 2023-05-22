import { useEffect, useState } from "react";
import { VacancyCardType } from "./VacanciesPage/utils/types";
import {
  getFavouritesVacancies,
  toggleFavouriteVacancy,
} from "../utils/helpers";
import { Flex, useMantineTheme } from "@mantine/core";
import EmptyList from "../components/EmptyList";
import VacancyCard from "../components/VacancyCard";
import { useNavigate, useParams } from "react-router-dom";
import { vacanciesPerPage } from "./VacanciesPage/utils/const";
import PaginationComponent from "../components/PaginationComponent";

const FavouriteList = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { page } = useParams();
  const [favouriteVacancies, setFavouriteVacancies] = useState<
    VacancyCardType[]
  >([]);
  const [activePage, setActivePage] = useState(Number(page));
  const total = Math.ceil(favouriteVacancies.length / vacanciesPerPage);
  const start = (Number(activePage) - 1) * vacanciesPerPage;
  const sliceVacancies = favouriteVacancies.slice(
    start,
    start + vacanciesPerPage
  );

  useEffect(() => {
    const vacancies = getFavouritesVacancies();
    setFavouriteVacancies(vacancies);
  }, []);

  useEffect(() => {
    navigate(`/favourites/${activePage}`);
  }, [activePage, navigate]);

  function handleClick(vacancy: VacancyCardType) {
    const isActive = vacancy.isFavourite;
    const vacansies = toggleFavouriteVacancy({
      ...vacancy,
      isFavourite: !isActive,
    });
    setFavouriteVacancies(vacansies);
  }

  function handleChangePage(value: number) {
    setActivePage(value);
  }

  return (
    <Flex
      direction="column" gap="7rem" align="center"
      sx={{
        padding: "40px 40px 44px",
        backgroundColor: theme.colors.grey[5],
        minHeight: "89vh",
      }}
    >
      <Flex direction="column" gap="1rem"
        sx={{
          width: "57%",
          '@media (max-width: 37em)': {
            width: "100%", gap: "0.3rem"
          }
        }} >
        {
          sliceVacancies.length > 0 ? (
            sliceVacancies.map((vacancy) => {
              return (
                <VacancyCard
                  data-elem={`vacancy-${vacancy.id}`}
                  key={vacancy.id}
                  id={vacancy.id}
                  profession={vacancy.profession}
                  paymentFrom={vacancy.paymentFrom}
                  paymentTo={vacancy.paymentTo}
                  currency={vacancy.currency}
                  typeOfWork={vacancy.typeOfWork}
                  town={vacancy.town}
                  detailes={vacancy.detailes}
                  isFavourite={vacancy.isFavourite}
                  handleClick={handleClick}
                />
              );
            })
          ) : (
            <EmptyList />
          )
        }
      </Flex>
      {favouriteVacancies.length > 0 && (
        <PaginationComponent
          value={activePage}
          total={total}
          handleChange={handleChangePage}
        />
      )}
    </Flex >
  );
};

export default FavouriteList;
