import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
// Custom components
import Card from '../Acceuil/Component/Card'
import PatientLineChart from '../Chart/PatientLineChart'
import {
  lineChartDataPatient,
  lineChartOptionsDataPatient,
} from '../variable/PatientChart'

const PatientEvolu = (props) => {
  const { ...rest } = props
  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      bg="white"
      borderRadius="10px"
      {...rest}
    >
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          //color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Evolution du Diabete du Patient
        </Text>
      </Flex>

      <Flex w="100%" flexDirection={{ base: 'column', lg: 'row' }}>
        <Box minH="250px" minW="75%" mt="auto">
          <PatientLineChart
            chartData={lineChartDataPatient}
            chartOptions={lineChartOptionsDataPatient}
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default PatientEvolu
