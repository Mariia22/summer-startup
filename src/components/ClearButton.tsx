import { Button, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";

type ClearButtonType = {
  handleClick: () => void;
};

const ClearButton: FC<ClearButtonType> = ({ handleClick }) => {
  const smallScreen = useMediaQuery('(max-width: 47em)');
  return (
    <Button
      variant="none"
      rightIcon={<Image width={16} height={16} src="/close.svg" />}
      sx={{ fontSize: smallScreen ? '0.7rem' : '0.875rem' }}
      onClick={handleClick}
    >
      Сбросить все
    </Button>
  );
};

export default ClearButton;
