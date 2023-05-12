import { FC } from "react";
import { Flex, Title, Image, useMantineTheme, Text } from "@mantine/core";

type VacancyCardType = {
  id: number;
  profession: string;
  paymentFrom: number;
  paymentTo: number;
  currency: string;
  typeOfWork: string;
  town: string;
};

const VacancyCard: FC<VacancyCardType> = ({
  id,
  profession,
  paymentFrom,
  paymentTo,
  currency,
  typeOfWork,
  town,
}) => {
  const theme = useMantineTheme();
  const handleOnClick = () => {
    console.log(id);
    // const favouriteVacancies = localStorage.getItem('favourite') || [];
    // if (favouriteVacancies.includes(key)) {
    //   favouriteVacancies.filter(id => id !== key)
    // } else {
    //   favouriteVacancies.push(key);
    // }
    // localStorage.setItem('favourite', favouriteVacancies);
  };

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
        <Image
          width={24}
          height={24}
          src="/saveButton.svg"
          onClick={handleOnClick}
        />
      </Flex>
    </Flex>
  );
};

export default VacancyCard;
