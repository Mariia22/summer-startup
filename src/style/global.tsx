import { Global } from "@mantine/core";
import inter from "Inter.ttf";
import poppins from "poppins.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${inter}') format("ttf")`,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Poppins",
            src: `url('${poppins}') format("ttf")`,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
