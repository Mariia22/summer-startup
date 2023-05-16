import { ActionIcon, useMantineTheme } from "@mantine/core";
import { ReactComponent as FavouriteIcon } from "../../assets/saveButton.svg";
import { FC, SyntheticEvent } from "react";

type FavouriteIconType = {
  isActive: boolean;
  handleChangeFavourite: () => void;
};

const FavouriteIconComponent: FC<FavouriteIconType> = ({
  isActive,
  handleChangeFavourite,
}) => {
  const theme = useMantineTheme();

  const handleChange = (e: SyntheticEvent) => {
    e.stopPropagation();
    handleChangeFavourite();
  };

  return (
    <ActionIcon variant="transparent" onClick={handleChange}>
      <FavouriteIcon
        width={24}
        height={24}
        style={{
          fill: isActive ? `${theme.colors.blue[1]}` : "none",
          stroke: isActive
            ? `${theme.colors.blue[1]}`
            : `${theme.colors.grey[7]}`,
        }}
      />
    </ActionIcon>
  );
};
export default FavouriteIconComponent;
