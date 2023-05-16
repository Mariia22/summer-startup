import { Flex, useMantineTheme } from "@mantine/core";
import { useLocation } from "react-router-dom";
import VacancyCard from "../components/VacancyCard";
import DOMPurify from "dompurify";

const VacancyPage = () => {
  const theme = useMantineTheme();
  const location = useLocation();
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
  } = location.state;

  const cleanHTML = DOMPurify.sanitize(detailes, {
    USE_PROFILES: { html: true },
  });

  return (
    <Flex
      justify="center"
      sx={{ padding: "40px 40px 50px", backgroundColor: theme.colors.grey[5] }}
    >
      <Flex direction="column" sx={{ maxWidth: "54%" }} gap="20px">
        <VacancyCard
          id={id}
          profession={profession}
          paymentFrom={paymentFrom}
          paymentTo={paymentTo}
          currency={currency}
          typeOfWork={typeOfWork}
          town={town}
          detailes={detailes}
          isFavourite={isFavourite}
          isDetailed={true}
        />
        <Flex
          sx={{
            padding: "24px",
            backgroundColor: theme.white,
            border: `1px solid ${theme.colors.grey[1]}`,
            borderRadius: "12px",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VacancyPage;
