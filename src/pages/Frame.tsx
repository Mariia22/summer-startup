import { Outlet } from "react-router";
import Header from "../modules/Header";
import { Flex } from '@mantine/core';

const Frame = () => {
  return (
    <Flex
      mih={"100vh"}
      direction="column"
    >
      <Header />
      <Outlet />
    </Flex>
  )
}

export default Frame
