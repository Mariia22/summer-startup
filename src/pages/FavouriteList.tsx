import { useEffect, useState } from "react";
import { VacancyCardType } from "./VacanciesPage/utils/types";
import { getFavouritesVacancies } from "../utils/helpers";
import { Flex, Pagination, useMantineTheme } from "@mantine/core";
import EmptyList from "../components/EmptyList";
import VacancyCard from "../components/VacancyCard";

const FavouriteList = () => {
  const theme = useMantineTheme();
  const [favouriteVacancies, setFavouriteVacancies] = useState<VacancyCardType[]>([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const vacancies = getFavouritesVacancies();
    setFavouriteVacancies(vacancies);
  }, [])
  return (
    <Flex justify='center'
      sx={{
        padding: '40px 40px 44px',
        backgroundColor: theme.colors.grey[5],
        height: '91vh'
      }}>
      <Flex direction='column'>
        {favouriteVacancies.length > 0
          ? favouriteVacancies.map(vacancy => {
            return (
              <VacancyCard
                key={vacancy.id}
                id={vacancy.id}
                profession={vacancy.profession}
                paymentFrom={vacancy.paymentFrom}
                paymentTo={vacancy.paymentTo}
                currency={vacancy.currency}
                typeOfWork={vacancy.typeOfWork}
                town={vacancy.town}
                detailes={vacancy.detailes}
                isFavourite={true} />
            )
          })
          :
          <EmptyList />
        }
        {favouriteVacancies.length > 0 && <Pagination
          value={activePage}
          total={favouriteVacancies.length}
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
        />}
      </Flex>
    </Flex>
  )
};

export default FavouriteList;
