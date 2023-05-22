import { Flex, Image, Text, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import emptyImage from "../assets/emptyPage.png";

type EmptyListType = {
  handleClick?: () => void;
};

const EmptyList: FC<EmptyListType> = ({ handleClick }) => {
  const theme = useMantineTheme();

  return (
    <Flex
      direction="column"
      gap="32px"
      sx={{ padding: "80px 0", alignItems: "center" }}
    >
      <Image width="240px" height="230px" src={emptyImage} />
      <Text fz="1.5rem" sx={{ fontWeight: "bold", lineHeight: "1.8rem" }}>
        Упс, здесь еще ничего нет!
      </Text>
      <Link
        to="../vacancies/1"
        style={{
          fontSize: "0.875rem",
          lineHeight: "1.36rem",
          width: "164px",
          height: "42px",
          padding: "10px 24px",
          textAlign: "center",
          borderRadius: "8px",
          textDecoration: "none",
          backgroundColor: `${theme.colors.blue[5]}`,
          color: `${theme.colors.blue[0]}`,
        }}
        onClick={handleClick}
      >
        Поиск Вакансий
      </Link>
    </Flex>
  );
};

export default EmptyList;
