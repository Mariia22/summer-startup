import { Global } from '@mantine/core';
import inter from '../fonts/Inter.ttf';
import poppins from '../fonts/Poppins-SemiBold.ttf';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${inter}') format("ttf")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${poppins}') format("ttf")`,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
