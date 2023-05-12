import React from "react";
import { Flex, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { navListConfig } from "./navListConfig";
import { useState } from "react";

const Navbar = () => {
  const theme = useMantineTheme();
  const [isActive, setActive] = useState(1);

  function handleChange(id: number) {
    setActive(id);
  }

  return (
    <Flex justify="space-around" align="center" gap="60px">
      {navListConfig.map(({ id, text, url }) => {
        return (
          <Text
            key={id}
            component={Link}
            variant="link"
            to={url}
            sx={{
              color:
                id === isActive ? theme.colors.blue[1] : theme.colors.grey[6],
              lineHeight: "1.25rem",
            }}
            onClick={() => handleChange(id)}
          >
            {text}
          </Text>
        );
      })}
    </Flex>
  );
};

export default Navbar;
