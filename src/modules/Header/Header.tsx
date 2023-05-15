import { Flex, useMantineTheme } from "@mantine/core";
import Logo from "../../components/Logo";
import Navbar from "../Navigation/Navbar";

const Header = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      justify="flex-start"
      gap="280px"
      sx={{
        height: '9vh',
        padding: "0 162px",
        backgroundColor: theme.white,
      }}
    >
      <Logo />
      <Navbar />
    </Flex>
  );
};

export default Header;
