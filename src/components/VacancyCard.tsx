import React from 'react';
import { Flex, Title, Image, useMantineTheme, Text } from '@mantine/core';

const VacancyCard = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      justify='space-between'
      sx={{
        padding: '24px',
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.grey[1]}`,
        borderRadius: '12px'
      }}
    >
      <Flex direction='column' gap='12px'>
        <Title order={3} sx={{ color: theme.colors.blue[1] }}>Менеджер-дизайнер</Title>
        <Flex>
          <Text fw={600}>з/п от 70000 rub</Text>
          <Text span
            sx={{
              fontFamily: 'Poppins',
              fontSize: '1.25rem',
              lineHeight: '21px',
              margin: '0 12px',
              color: theme.colors.grey[4],
            }}
          >
            &bull;
          </Text>
          <Text fw={400}>Полный рабочий день</Text>
        </Flex>
        <Flex align='center'>
          <Image width={20} height={20} src='/location.svg' sx={{ marginRight: '2px' }} />
          <Text fw={400}>Новый Уренгой</Text>
        </Flex>
      </Flex>
      <Flex>
        <Image width={24} height={24} src='/saveButton.svg' />
      </Flex>
    </Flex>
  )
}

export default VacancyCard
