import React from 'react'
import { Box } from '@chakra-ui/react'

// Custom components

import {
  barChartDataPatient,
  barChartOptionsPatient,
} from '../variable/PatientChart'

import PatientBarChart from '../Chart/PatientBarChart'

const PatientBar = () => {
  return (
    <Box h="240px" mt="-20px">
      <PatientBarChart
        chartData={barChartDataPatient}
        chartOptions={barChartOptionsPatient}
      />
    </Box>
  )
}

export default PatientBar
