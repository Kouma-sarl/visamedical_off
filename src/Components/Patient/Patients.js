import React, { useEffect, useState } from "react";
// Chakra imports
import { SimpleGrid, Text, useColorModeValue, Box } from "@chakra-ui/react";
// Assets
import patient from "../../Icones/profile_patient.png";
// Custom components
import Card from "../Acceuil/Component/Card";
import APatient from "./Component/APatient";
import TopBar from "../../TopBar/TopBar";

import axios from "axios";
const Patients = () => {
  const [patientlist, setPatientlist] = useState([]);
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          ` ${process.env.REACT_APP_API_KEY}/bi/patients`
        );
        setPatientlist(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box w="100%">
      <TopBar />
      <Card
        mb={{ base: "0px", "2xl": "20px" }}
       ml="10px"
       // borderRaduis="10px"
        mt="20px"
      >
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mt="10px"
          mb="4px"
        >
          Liste des Patients
        </Text>
        <SimpleGrid
          columns={{ sm: 1, md: 3 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          {patientlist?.map((item) => {
            return (
              <APatient
              key={item._id}
                boxShadow={cardShadow}
                mb="10px"
                image={patient}
                first_name={item.first_name}
                last_name={item.last_name}
                profession={item.profession}
                ville={item.city}
                link={`/Patient/${item.id}`}
              />
            );
          })}
        </SimpleGrid>
      </Card>
    </Box>
  );
};

export default Patients;
