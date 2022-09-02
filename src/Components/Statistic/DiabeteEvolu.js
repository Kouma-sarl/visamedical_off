import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../Acceuil/Component/Card";
import LineChart from "../../Components/Chart/LineChart";
import React from "react";

// Assets

import {
  lineChartDataEvolutiondiabete,
  lineChartOptionsEvolutiondiabete,
} from "../variable/chart";

const DiabeteEvolu = (props) => {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  

  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      bg="white"
      ml="5px"
      borderRadius="10px"
      {...rest}
    >
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Evolution du Diabete
        </Text>
      </Flex>

      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart
            chartData={lineChartDataEvolutiondiabete}
            chartOptions={lineChartOptionsEvolutiondiabete}
          />
        </Box>
      </Flex>
    </Card>
  );
};

export default DiabeteEvolu;
