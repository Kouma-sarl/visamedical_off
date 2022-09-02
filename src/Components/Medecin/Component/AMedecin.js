import React from 'react'
import {
    Box,
    Flex,
    Icon,
    Image,
    Img,
    Link,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "../../Acceuil/Component/Card";
  import { MdEdit } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const AMedecin = (props) => {
    const { first_name,last_name,profession,ville, image,link,alt, ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
  
    const bg = useColorModeValue("white", "navy.700");
    return (
      <Link  as={RouterLink} to={link}  >
      <Card bg={bg} {...rest} p='14px'>
        <Flex align='center' direction={{ base: "column", md: "row" }}>
         
         { /*<Img h='90px' w='90px' src={{uri:image}}  borderRadius='8px' me='20px' crossorigin="anonymous" alt={alt} />
         <img src="http://165.232.156.106:3030/doctor/630cfa7eb763e8fd7e41d0f1/680cdc4c82e4e2d0789e86d0aec1bb7d0115c56583d4722ae2e887820d0a5c51.jpg" style={{height:'90px', with:'90px' }} crossOrigin="annymous"  />*/}
          <Box mt={{ base: "10px", md: "0" }}>
            <Text
              color={textColorPrimary}
              fontWeight='500'
              fontSize='md'
              mb='4px'>
              {first_name} {last_name}
            </Text>
            <Text
              fontWeight='500'
              color={textColorSecondary}
              fontSize='sm'
              me='4px'>
              {profession} 
             
            </Text>
            <Text
              fontWeight='500'
              color={textColorSecondary}
              fontSize='sm'
              me='4px'>
              {ville} 
             
            </Text>
          </Box>
          <Link
          
            variant='no-hover'
            me='16px'
            ms='auto'
            p='0px !important'>
            <Icon as={MdEdit} color='secondaryGray.500' h='18px' w='18px' />
          </Link>
        </Flex>
      </Card>
      </Link>
    );
}

export default AMedecin