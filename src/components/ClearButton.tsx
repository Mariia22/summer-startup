import { Button, Image } from "@mantine/core";
import { FC } from "react";

type ClearButtonType = {
  handleClick: () => void;
};

const ClearButton: FC<ClearButtonType> = ({ handleClick }) => {
  return (
    <Button
      variant="none"
      rightIcon={<Image width={16} height={16} src="/close.svg" />}
      onClick={handleClick}
    >
      Сбросить все
    </Button>
  );
};

export default ClearButton;
