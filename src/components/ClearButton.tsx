import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";
import { ReactComponent as CloseIcon } from "../assets/close.svg";

type ClearButtonType = {
  handleClick: () => void;
};

const ClearButton: FC<ClearButtonType> = ({ handleClick }) => {
  const smallScreen = useMediaQuery("(max-width: 47em)");
  return (
    <Button
      variant="none"
      rightIcon={<CloseIcon />}
      sx={{ fontSize: smallScreen ? "0.7rem" : "0.875rem" }}
      onClick={handleClick}
      styles={(theme) => ({
        rightIcon: {
          width: "16px",
          height: "16px",
          stroke: theme.colors.grey[3],
        },
        root: {
          "&:hover .mantine-Button-rightIcon": {
            stroke: theme.colors.blue[2],
          },
          "&:active .mantine-Button-rightIcon": {
            stroke: theme.colors.blue[1],
          },
        },
      })}
    >
      Сбросить все
    </Button>
  );
};

export default ClearButton;
