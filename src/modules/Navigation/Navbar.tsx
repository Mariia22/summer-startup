import { Flex, useMantineTheme } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { navListConfig } from "./navListConfig";

const Navbar = () => {
  const theme = useMantineTheme();

  return (
    <Flex justify="space-around" align="center" gap="60px">
      {navListConfig.map(({ id, text, url }) => {
        return (
          <NavLink
            to={url}
            key={id}
            style={({ isActive }) => {
              return {
                lineHeight: "1.25rem",
                textDecoration: "none",
                color: isActive
                  ? `${theme.colors.blue[1]}`
                  : `${theme.colors.grey[6]}`,
              };
            }}
          >
            {text}
          </NavLink>
        );
      })}
    </Flex>
  );
};

export default Navbar;
