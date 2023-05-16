import { Pagination } from "@mantine/core";
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
  return (
    <Pagination
      value={value}
      total={total}
      position="center"
      styles={(theme) => ({
        control: {
          marginTop: "12px",
          "&[data-active]": {
            backgroundColor: theme.colors.blue[1],
          },
          "&:not([data-disabled]):hover": {
            color: theme.black,
          },
        },
      })}
      onChange={(value) => handleChange(value)}
    />
  );
};

export default PaginationComponent;
