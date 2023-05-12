import { Outlet } from "react-router";
import Header from "../modules/Header/Header";
import { Flex, useMantineTheme } from "@mantine/core";

const Frame = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      mih={"100vh"}
      direction="column"
      sx={{ backgroundColor: theme.colors.grey[5] }}
    >
      <Header />
      <Outlet />
    </Flex>
  );
};

export default Frame;
