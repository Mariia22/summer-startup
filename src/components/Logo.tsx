import { Flex, Text, Image, useMantineTheme } from "@mantine/core";

const Logo = () => {
  const theme = useMantineTheme();
  return (
    <Flex justify='flex-start' align='center'>
      <Image width={30} height={30} src="/union.svg" alt="Jobored's logo" />
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          lineHeight: '2.25rem',
          marginLeft: '12px',
          letterSpacing: '-0.02em',
          color: theme.colors.grey[6]
        }}
        fz='1.5rem'
        fw={600}>
        Jobored
      </Text>
    </Flex >
  )
}

export default Logo
