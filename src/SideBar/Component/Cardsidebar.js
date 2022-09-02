import React from "react";
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
//import logoWhite from "assets/img/layout/logoWhite.png";
import logoWhite from "../../Icones/profile_patient.png";

const Cardsidebar = ({ display }) => {
  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg="#179CBC"
      borderRadius="30px"
      me="20px"
      position="relative"
      ml="5px"
      display={display}
    >
      <Flex
        border="5px solid"
        borderColor="white"
        bg="linear-gradient(135deg, #179CBC 0%, #179CBC 100%)"
        borderRadius="50%"
        w="94px"
        h="94px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <Image src={logoWhite} w="50px" h="50px" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="55px"
      >
        {/*<Text
        fontSize={{ base: "lg", xl: "18px" }}
        color='white'
        fontWeight='bold'
        lineHeight='150%'
        textAlign='center'
        px='10px'
        mb='14px'>
        Upgrade to PRO
  </Text>*/}
        <Text
          fontSize="14px"
          color={"white"}
          px="10px"
          mb="14px"
          fontWeight="bold"
          textAlign="center"
        >
          Ensemble nous changeons la vie de nos malades
        </Text>
      </Flex>
      <Link>
        <Button
          bg="whiteAlpha.300"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bottom="5px"
        >
          VISA PRO
        </Button>
      </Link>
    </Flex>
  );
};

export default Cardsidebar;
