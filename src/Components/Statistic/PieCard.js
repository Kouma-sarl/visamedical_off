// Chakra imports
import { Box, Flex, Text,  useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../Acceuil/Component/Card";
import PieChart from "../Chart/PieChart";
import { pieChartData, pieChartOptions } from "../variable/chart";

import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card
      p="20px"
      align="center"
      direction="column"
      w="99%"
      bg="white"
      mr="10px"
      borderRadius="10px"
      {...rest}
    >
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Circulaire
        </Text>
        {/* <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
  </Select>*/}
      </Flex>

      <PieChart
        h="100%"
        w="100%"
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection="row"
        boxShadow={cardShadow}
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
      >
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="brand.500" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
             Nbre Hospitalisation
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            63%
          </Text>
        </Flex>

        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
             Nbre consulation
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            25%
          </Text>
        </Flex>
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
             Nbre de décès
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            25%
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
