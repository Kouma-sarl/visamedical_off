import React from 'react'
import {
    Flex,
    Stat,
    StatLabel,
   
  } from "@chakra-ui/react";
  // Custom components
  import Card from "../../Acceuil/Component/Card";

const Minidoc = (props) => {
    const { startContent,  name,onclick,bg ,cursor} = props;
   
    const textColorSecondary = "secondaryGray.600";
  
    return (
      <Card py='15px' bg={bg} ml="5px" mr="5px" br="10px" borderRadius="10px" mb="10px" onClick={onclick} cursor={cursor}>
        <Flex
          my='auto'
          h='100%'
          align={{ base: "center", xl: "start" }}
          justify={{ base: "center", xl: "center" }}>
          {startContent}
  
          <Stat my='auto' ms={startContent ? "18px" : "0px"}>
            <StatLabel
              lineHeight='100%'
              color={textColorSecondary}
              fontSize={{
                base: "sm",
              }}>
              {name}
            </StatLabel>
           
            
          </Stat>
          {onclick}
        </Flex>
      </Card>
    );
}

export default Minidoc