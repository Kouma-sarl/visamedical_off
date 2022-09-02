import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Icon,
} from "@chakra-ui/react";
import { MdArrowBack,MdCheckCircle } from "react-icons/md";
import Card from "../../Acceuil/Component/Card";
import { useParams } from "react-router-dom";

import TopBar from "../../../TopBar/TopBar";
import MiniCalender from "./MiniCalender";

import consultation from "../../../Icones/consultation.png";
import decoudiabete from "../../../Icones/glycemie.png";
import suivi from "../../../Icones/glucose.png";
import Minidoc from "./Minidoc";
import MapPatient from "./MapPatient";

import PatientEvolu from "../../Statistic/PatientEvolu";

import PatientBar from "../../Statistic/PatientBar";
import PatientConclusion from "./PatientConclusion";
import axios from 'axios'

const PatientDetail = (props) => {
  const { patientid } = useParams();
  const [consul,setConsul]= useState(false)
  const [pdetail,setPdetail]=useState([]);
  

  const {  name, job, posts } = props;
  const d = new Date(Date.now()).getFullYear()
  console.log(d)
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  useEffect(()=>{
    
      const getPatientDetail=async()=>{
        try {
          const {data} = await axios.get(`${process.env.REACT_APP_API_KEY}/bi/patient/${patientid}`)
          setPdetail(data)
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      
      }
 
   
    getPatientDetail()
  },[])
  const age= pdetail.birthdate
  console.log(age)
  return (
    <Box w="100%" h="100vh" overflowX={"scroll"}>
      <TopBar />
      <SimpleGrid
      columns={{ base: 1, md: 1, lg: 2 }}
      //  pt={{ base: "130px", md: "80px", xl: "80px" }}
        display="flex"
        mt="10px"
        
        mr="10px"
      >
        <Box w="75%" m="10px" display={consul? "none":"block"}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="20px"  >
            <Card mb={{ base: "0px", lg: "20px",sm:"10px"}} align="center">
              <Avatar
                mx="auto"
                // src={data.icon}
                h="87px"
                w="87px"
                //mt='-43px'
                border="4px solid"
                borderColor={borderColor}
              />
              <Text
                color={textColorPrimary}
                fontWeight="bold"
                fontSize="xl"
                mt="10px"
              >
                {pdetail.first_name} {pdetail.last_name}
              </Text>
              <Flex w="max-content" mx="auto"  mt="20px">
                <Flex mx="auto" me="60px" align="center" direction="column">
                  <Text
                    color={textColorPrimary}
                    fontSize="xl"
                    fontWeight="700"
                    ml="5px"
                  >
                    {pdetail.phone}
                  </Text>
                  <Text
                    color={textColorSecondary}
                    fontSize="sm"
                    fontWeight="400"
                  >
                    Téléphone
                  </Text>
                </Flex>
                <Flex mx="auto" me="60px" align="center" direction="column">
                  <Text
                    color={textColorPrimary}
                    fontSize="xl"
                    fontWeight="700"
                  >
                    {pdetail.profession}
                  </Text>
                  <Text
                    color={textColorSecondary}
                    fontSize="sm"
                    fontWeight="400"
                  >
                    Profession
                  </Text>
                </Flex>
                <Flex mx="auto" me="60px" align="center" direction="column">
                  <Text
                    color={textColorPrimary}
                    fontSize="xl"
                    fontWeight="700"
                  >
                    {pdetail.city}
                  </Text>
                  <Text
                    color={textColorSecondary}
                    fontSize="sm"
                    fontWeight="400"
                  >
                    Ville
                  </Text>
                </Flex>
               
              </Flex>
            </Card>
                 <Box>
            <Card mb={{ base: "0px", lg: "10px",sm:"10px" }} align="center" h="100px" >
              <Box display="flex" justifyContent="space-evenly" >
                <Box>
                  <Text>Sante Général</Text>
                  <CircularProgress value={40} color="green.400">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
                <Box>
                  <Text>Sante Général</Text>
                  <CircularProgress value={70} color="green.400">
                    <CircularProgressLabel>70%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Box>
            </Card>

            <Card mb={{ base: "0px", lg: "10px",sm:"10px" }} align="center" h="150px">
            <PatientBar/>
            </Card>
            
            </Box>
            
          </SimpleGrid>

          <PatientEvolu />
        </Box>
        {consul&&(
          <Box w="75%" mr="10px" ml="10px">
            <Box display={"flex"} alignItems="center">
             <Icon as={MdArrowBack } color='secondaryGray.500' h='18px' w='18px' cursor={"pointer"} onClick={()=>setConsul(false)} />
             <Text fontSize='22px'
                fontWeight='700' ml="50px" mr="10px">Diallo Amadou oury</Text>
             <Icon as={MdCheckCircle } color="green.500" h='18px' w='18px'/>
             <Text    fontSize='22px'
               fontWeight='700' ml={"10px"}>Conclusions</Text>
             </Box>
            <PatientConclusion/>
          </Box>
        )}
        <Box w={"25%"} >
          <MiniCalender />
          <Minidoc
             onclick={()=>setConsul(true)}
             bg={consul?"#179CBC":"white"}
          cursor={"pointer"}
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
                
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={consultation} w="32px" h="32px" />
              </Box>
            }
            name="Consultations"
            
          />

          <Minidoc
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
               
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={suivi} w="32px" h="32px" color="red" />
              </Box>
            }
            name="Suivie Diabète"
          />
          <Minidoc
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
                
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={decoudiabete} w="32px" h="32px" />
              </Box>
            }
            name="Découverte du diabète"
          />
        </Box>
      </SimpleGrid>
  
      <MapPatient />
     
      
    </Box>
  );
};

export default PatientDetail;
