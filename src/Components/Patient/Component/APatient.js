import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../Acceuil/Component/Card";
import { MdEdit } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const APatient = (props) => {
  const { first_name, last_name, profession, ville, link, image, ...rest } =
    props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  const bg = useColorModeValue("white", "navy.700");
  return (
    <Link fontWeight="500" as={RouterLink} to={link}>
      <Card bg={bg} {...rest} p="14px" borderRadius="10px">
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          flexWrap={{ sm: "nowrap", md: "wrap" }}
        >
          <Image h="50px" w="50px" src={image} borderRadius="8px" me="20px" />
          <Box mt={{ base: "10px", md: "0" }}>
            <Text
              color={textColorPrimary}
              fontWeight="500"
              fontSize="md"
              mb="4px"
            >
              {first_name} {last_name}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              {profession}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              {ville}
            </Text>
          </Box>
          <Link variant="no-hover" me="16px" ms="auto" p="0px !important">
            <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
          </Link>
        </Flex>
      </Card>
    </Link>
  );
};

export default APatient;
