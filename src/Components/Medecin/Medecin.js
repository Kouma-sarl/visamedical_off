import React, { useEffect, useState } from "react";
// Chakra imports
import {
 
  SimpleGrid,
  Text,
  useColorModeValue,
  Box,
  
} from "@chakra-ui/react";
// Assets
import patient from "../../Icones/profile_patient.png";

// Custom components
import Card from "../Acceuil/Component/Card";
import AMedecin from "./Component/AMedecin";
import TopBar from "../../TopBar/TopBar";


const Medecin = () => {
  const [docteurlist, setDocteurlist] = useState([]);
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  
  useEffect(() => {
    async function getlist() {
      const res = await fetch(`${process.env.REACT_APP_API_KEY}/bi/doctors`);
      const docteur = await res.json();
      setDocteurlist(docteur);
      console.log(docteur)
     // console.log(docteur)
      
    }
    getlist();
  }, []);
  return (
    <Box w="100%">
      <TopBar />
      <Card
        mb={{ base: "0px", "2xl": "20px" }}
        ml="10px"
       // borderRaduis="10px"
        mr="10px"
        mt="20px"
      >
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mt="10px"
          mb="4px"
        >
          Liste des Médecins
        </Text>
        <SimpleGrid
          mb="5px"
          columns={{ sm: 1, md: 3 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          {docteurlist?.map((item) => {
                console.log(item.profile)
            return (
              
          
               
              <AMedecin
                 key={item._id}
                boxShadow={cardShadow}
                mb="20px"
                image={item.profile}
                alt={item.first_name}
                first_name={item.first_name}
                last_name={item.last_name}
                profession={item.specialty}
                ville={item.phone}
                link={`/Medecin/${item._id}`}
              />
           
             
            );
          })}
        </SimpleGrid>
      </Card>
    </Box>
  );
};

export default Medecin;
