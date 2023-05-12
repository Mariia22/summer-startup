import { FC, useState } from "react";
import {
  Flex,
  Title,
  Image,
  useMantineTheme,
  Text,
  ActionIcon,
} from "@mantine/core";
import { ReactComponent as FavouriteIcon } from "../../public/saveButton.svg";
import { saveDataToLS, toggleFavouriteVacancy } from "../utils/helpers";

type VacancyCardType = {
  id: number;
  profession: string;
  paymentFrom: number;
  paymentTo: number;
  currency: string;
  typeOfWork: string;
  town: string;
  isFavourite: boolean;
};

const VacancyCard: FC<VacancyCardType> = ({
  id,
  profession,
  paymentFrom,
  paymentTo,
  currency,
  typeOfWork,
  town,
  isFavourite,
}) => {
  const theme = useMantineTheme();
  const [isActive, setActive] = useState(isFavourite);

  function handleChangeCard() {
    setActive(!isActive);
    const favourites = toggleFavouriteVacancy(id);
    saveDataToLS("favourite", favourites);
  }

  return (
    <Flex
      justify="space-between"
      sx={{
        padding: "24px",
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.grey[1]}`,
        borderRadius: "12px",
      }}
    >
      <Flex direction="column" gap="12px">
        <Title order={3} sx={{ color: theme.colors.blue[1] }}>
          {profession}
        </Title>
        <Flex>
          {paymentFrom <= 0 ? (
            <Text fw={600}>з/п по договоренности</Text>
          ) : paymentTo > 0 ? (
            <Text fw={600}>
              з/п от {paymentFrom} - {paymentTo} {currency}
            </Text>
          ) : (
            <Text fw={600}>
              з/п от {paymentFrom} {currency}
            </Text>
          )}
          <Text
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
          </Text>
          <Text fw={400}>{typeOfWork}</Text>
        </Flex>
        <Flex align="center">
          <Image
            width={20}
            height={20}
            src="/location.svg"
            sx={{ marginRight: "2px" }}
          />
          <Text fw={400}>{town}</Text>
        </Flex>
      </Flex>
      <Flex>
        <ActionIcon variant="transparent" onClick={handleChangeCard}>
          <FavouriteIcon
            width={24}
            height={24}
            style={{
              fill: isActive ? `${theme.colors.blue[1]}` : "none",
              stroke: isActive
                ? `${theme.colors.blue[1]}`
                : `${theme.colors.grey[7]}`,
            }}
          />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default VacancyCard;
