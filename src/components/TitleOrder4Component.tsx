import { Title, useMantineTheme } from "@mantine/core";
import { FC } from "react";

type TitleType = {
  children: string;
};

const TitleOrder4Component: FC<TitleType> = ({ children }) => {
  const theme = useMantineTheme();
  return (
    <Title
      order={4}
      sx={{
        marginTop: "20px",
        "@media (max-width: 63em)": {
          fontSize: theme.fontSizes.md,
        },
      }}
    >
      {children}
    </Title>
  );
};

export default TitleOrder4Component;
