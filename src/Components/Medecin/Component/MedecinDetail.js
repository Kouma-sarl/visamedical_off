import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorModeValue,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Card from "../../Acceuil/Component/Card";
import { useParams } from "react-router-dom";
import TopBar from "../../../TopBar/TopBar";
import Upload from "./Upload";
import axios from "axios";
//import axios from 'axios'

const MedecinDetail = (props) => {
  const { medecinid } = useParams();
  const [docteurdetail, setDocteurdetail] = useState([]);
  useEffect(() => {
    const getDocteurdetail = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_KEY}/bi/doctor/${medecinid}`
        );
        console.log(data);
        setDocteurdetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDocteurdetail();
  }, [medecinid]);

  
  const { last_name, gender, specialty, phone } = props;

  // const { banner, avatar, name, job, posts, followers, following } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Box w="100%" mt="-50px">
      <TopBar />
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} mr="10px" ml="10px">
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="20px" mb="20px">
          <Card mb={{ base: "0px", lg: "20px" }} align="center">
            <Box
              bg="#179CBC"
              bgSize="cover"
              borderRadius="16px"
              h="131px"
              w="100%"
            />
            <Avatar
              mx="auto"
              src={docteurdetail.profile}
              h="87px"
              w="87px"
              mt="-43px"
              border="4px solid"
              borderColor={borderColor}
            />
            <Text
              color={textColorPrimary}
              fontWeight="bold"
              fontSize="xl"
              mt="10px"
            >
              {docteurdetail.first_name} {docteurdetail.last_name}
              {docteurdetail.state}
            </Text>

            {docteurdetail.state ? (
              <Text color={textColorSecondary} fontSize="sm">
                Actif
              </Text>
            ) : (
              <Text color={textColorSecondary} fontSize="sm">
                Desactif
              </Text>
            )}
            <Flex w="max-content" mx="auto" mt="26px">
              <Flex mx="auto" me="60px" align="center" direction="column">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  fontWeight="700"
                  ml="5px"
                >
                  {docteurdetail.specialty}
                </Text>
                <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
                  Spécialitée
                </Text>
              </Flex>
              <Flex mx="auto" me="60px" align="center" direction="column">
                <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
                  {docteurdetail.phone}
                </Text>
                <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
                  Téléphone
                </Text>
              </Flex>
            </Flex>
            <Box
              w="100%"
              display={"flex"}
              justifyContent="space-evenly"
              mt="10px"
            >
              <Flex>
                <Button
                  me="100%"
                  //mb='50px'
                  w="140px"
                  minW="140px"
                  mt={{ base: "20px", "1xl": "auto" }}
                  variant="brand"
                  fontWeight="100"
                >
                  Activer
                </Button>
              </Flex>
              <Flex>
                <Button
                  me="100%"
                  //mb='50px'
                  w="140px"
                  minW="140px"
                  mt={{ base: "20px", "1xl": "auto" }}
                  color="white"
                  fontWeight="100"
                  bg="red"
                  _hover={"none"}
                >
                  Desactiver
                </Button>
              </Flex>
            </Box>
          </Card>
          <Upload />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MedecinDetail;
