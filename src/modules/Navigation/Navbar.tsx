import { Flex, useMantineTheme } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { navListConfig } from "./navListConfig";
import { useMediaQuery } from "@mantine/hooks";

const Navbar = () => {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery("(max-width: 63em)");

  return (
    <Flex
      justify="center"
      align="center"
      gap={smallScreen ? "20px" : "60px"}
      sx={{ flexGrow: 2 }}
    >
      {navListConfig.map(({ id, text, url }) => {
        return (
          <NavLink
            to={url}
            key={id}
            style={({ isActive }) => {
              return {
                fontWeight: "400",
                lineHeight: "1.25rem",
                textDecoration: "none",
                textAlign: "center",
                color: isActive
                  ? `${theme.colors.blue[1]}`
                  : `${theme.colors.grey[6]}`,
                fontSize: smallScreen ? "0.7rem" : "1rem",
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
