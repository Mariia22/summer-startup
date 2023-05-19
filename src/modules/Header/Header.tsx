import { Flex, useMantineTheme } from "@mantine/core";
import Logo from "../../components/Logo";
import Navbar from "../Navigation/Navbar";

const Header = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      justify="flex-start"
      sx={{
        height: "9vh",
        padding: "0 162px",
        backgroundColor: theme.white,
        gap: "280px",
        '@media (max-width: 63em)': {
          padding: "0 80px",
          gap: "30%",
        },
        '@media (max-width: 47em)': {
          padding: "0 30px",
          gap: "10%",
        },
      }}
    >
      <Logo />
      <Navbar />
    </Flex>
  );
};

export default Header;
