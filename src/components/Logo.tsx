import { Flex, Title, Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import LogoImage from "../assets/union.svg";

const Logo = () => {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery("(max-width: 47em)");

  return (
    <Link
      to="/vacancies/1"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <Flex justify="flex-start" align="center">
        <Image width={30} height={30} src={LogoImage} alt="Jobored's logo" />
        <Title
          order={1}
          sx={{
            fontFamily: "Poppins",
            marginLeft: "12px",
            letterSpacing: "-0.02em",
            color: theme.colors.grey[6],
            fontSize: smallScreen ? "1rem" : "1.5rem",
          }}
          fw={600}
        >
          Jobored
        </Title>
      </Flex>
    </Link>
  );
};

export default Logo;
