import React, { useEffect, useState } from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Ministatistic from "./Component/Ministatistic";
import consultation from "../../Icones/consultation.png";
import fcomplication from "../../Icones/diagnosis.png";
import glycemi from "../../Icones/hyperglycemia.png";
import hypo from "../../Icones/hypoglycemia.png";
import TopBar from "../../TopBar/TopBar";
import DiabeteEvolu from "../Statistic/DiabeteEvolu";
import CasVille from "../Statistic/CasVille";
import ListePatien from "./Component/ListePatien";
import PieCard from "../Statistic/PieCard";
import { columnsDataCheck } from "../variable/columnsData";
import tableDataCheck from "../variable/tableDataCheck.json";
import axios from "axios";
import EvolutionDiabiete from "../Statistic/EvolutionDiabiete";

const Acceuil = () => {
  const [countcons, setCountcons] = useState();
  {/*useEffect(() => {
    const getCountConsultaion = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/bi/consultations`
      );
      setCountcons(data);
    };
    getCountConsultaion();
  }, []);*/}
  return (
    <Box w="100%">
      <TopBar />
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} mt="-50px">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap="20px"
          mb="20px"
          mr="10px"
        >
          <Ministatistic
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
                ml="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={consultation} w="32px" h="32px" />
              </Box>
            }
            name="Nbre Consultations"
            value={countcons ? countcons : 0}
          />
          <Ministatistic
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
                ml="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={fcomplication} w="32px" h="32px" />
              </Box>
            }
            name="Nbre Hospitalisations"
            value="320"
          />
          <Ministatistic
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
                ml="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={glycemi} w="32px" h="32px" />
              </Box>
            }
            name="Nbre Glycemie en jeun"
            value="320"
          />
          <Ministatistic
            startContent={
              <Box
                w="53px"
                h="56px"
                bg="#e8f9fd"
                borderRadius="50%"
                ml="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={hypo} w="32px" h="32px" />
              </Box>
            }
            name="Nbre de glycemie post prandial"
            value="320"
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <EvolutionDiabiete />
          <CasVille />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <ListePatien
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
          <PieCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Acceuil;
