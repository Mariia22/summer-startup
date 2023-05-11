import React from 'react';
import { Flex } from '@mantine/core';
import VacancyCard from "../../components/VacancyCard"

const VacancyList = () => {
  return (
    <Flex direction='column' gap='1rem'>
      <VacancyCard />
    </Flex>
  )
}

export default VacancyList
