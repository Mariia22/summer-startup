import { Pagination } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";

type PaginationType = {
  value: number;
  total: number;
  handleChange: (value: number) => void;
};
const PaginationComponent: FC<PaginationType> = ({
  value,
  total,
  handleChange,
}) => {
  const smallScreen = useMediaQuery('(max-width: 63em)');
  return (
    <Pagination
      value={value}
      total={total}
      size={smallScreen ? "xs" : "md"}
      spacing={smallScreen ? 1 : 8}
      position="center"
      styles={(theme) => ({
        control: {
          borderRadius: "4px",
          "&[data-active]": {
            backgroundColor: theme.colors.blue[1],
          },
          "&:not([data-disabled]):hover": {
            color: theme.black,
          },
          [`@media (max-width: 47em)`]: {
            fontSize: theme.fontSizes.sm
          },
        },
      })}
      onChange={(value) => handleChange(value)}
    />
  );
};

export default PaginationComponent;
