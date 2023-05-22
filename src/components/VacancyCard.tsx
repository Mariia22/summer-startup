import { FC, useState } from "react";
import { Flex, Title, Image, useMantineTheme, Text } from "@mantine/core";
import { saveDataToLS, toggleFavouriteVacancy } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import FavouriteIconComponent from "../modules/FavouritesIcon/FavouritesIcon";
import { VacancyCardType } from "../pages/VacanciesPage/utils/types";
import { useMediaQuery } from "@mantine/hooks";

const VacancyCard: FC<VacancyCardType> = (props) => {
  const {
    id,
    profession,
    paymentFrom,
    paymentTo,
    currency,
    typeOfWork,
    town,
    detailes,
    isFavourite,
    isDetailed,
    handleClick,
  } = props;
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(isFavourite);
  const smallScreen = useMediaQuery('(max-width: 47em)');

  function handleChangeCard() {
    setActive(!isActive);
    handleClick && handleClick(props);
    const favourites = toggleFavouriteVacancy({
      ...props,
      isFavourite: !isActive,
    });
    saveDataToLS("favourite", favourites);
  }

  function handleOpenCard() {
    !isDetailed &&
      navigate(`vacancy/${id}`, {
        state: {
          id,
          profession,
          paymentFrom,
          paymentTo,
          currency,
          typeOfWork,
          town,
          detailes,
          isFavourite: isActive,
        },
      });
  }

  return (
    <Flex
      justify="space-between"
      sx={{
        padding: "20px 18px 20px 20px",
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.grey[1]}`,
        borderRadius: "12px",
        cursor: "pointer",
      }}
      onClick={handleOpenCard}
    >
      <Flex direction="column" gap={isDetailed ? "1rem" : "0.75rem"}>
        <Title
          order={3}
          fw={isDetailed ? 700 : 600}
          fz={isDetailed ? "1.75rem" : "1.25rem"}
          lh={isDetailed ? "2.12rem" : "1.5rem"}
          sx={{
            color: isDetailed ? theme.black : theme.colors.blue[1],
            '@media (max-width: 63em)': {
              fontSize: theme.fontSizes.md,
            }
          }}
        >
          {profession}
        </Title>
        <Flex
          sx={{ '@media (max-width: 37em)': { flexDirection: "column" } }}>
          {paymentFrom <= 0 ? (
            <Text fw={isDetailed ? 700 : 600} fz={isDetailed ? "1.25rem" : "1rem"} sx={{
              '@media (max-width: 63em)': {
                fontSize: "0.8rem",
              }
            }}>з/п по договоренности</Text>
          ) : paymentTo > 0 ? (
            <Text fw={isDetailed ? 700 : 600} fz={isDetailed ? "1.25rem" : "1rem"} sx={{
              '@media (max-width: 63em)': {
                fontSize: "0.8rem",
              }
            }}>
              з/п от {paymentFrom} - {paymentTo} {currency}
            </Text>
          ) : (
            <Text fw={isDetailed ? 700 : 600} fz={isDetailed ? "1.25rem" : "1rem"} sx={{
              '@media (max-width: 63em)': {
                fontSize: "0.8rem",
              }
            }}>
              з/п от {paymentFrom} {currency}
            </Text>
          )}
          {!smallScreen && <Text
            span
            sx={{
              fontFamily: "Poppins",
              fontSize: "1.25rem",
              lineHeight: "21px",
              margin: "0 12px",
              color: theme.colors.grey[4],
            }}
          >
            &bull;
          </Text>}
          <Text fw={400} fz={isDetailed ? "1.25rem" : "1rem"} sx={{
            '@media (max-width: 63em)': {
              fontSize: "0.8rem",
            }
          }}>{typeOfWork}</Text>
        </Flex>
        <Flex align="center">
          <Image
            width={20}
            height={20}
            src="/location.svg"
            sx={{ marginRight: "2px" }}
          />
          <Text fw={400} lh={isDetailed ? "1.4rem" : "1.25rem"} sx={{
            '@media (max-width: 63em)': {
              fontSize: "0.8rem",
            }
          }}>{town}</Text>
        </Flex>
      </Flex>
      <Flex>
        <FavouriteIconComponent
          data-elem={`vacancy-${id}-shortlist-button`}
          isActive={isActive}
          handleChangeFavourite={handleChangeCard}
        />
      </Flex>
    </Flex>
  );
};

export default VacancyCard;
