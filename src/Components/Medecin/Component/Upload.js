import React from 'react'
import Dropzone from './Dropzone'
import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "../../Acceuil/Component/Card";
  import { MdUpload } from "react-icons/md";
  import diplome from '../../../Icones/diploma.jpg'
const Upload = (props) => {
    const { used, total, ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const brandColor = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    return (
      <Card {...rest} mb='20px' align='center' p='20px'>
        <Flex h='100%' direction={{ base: "column", "2xl": "row" }} >
        <Dropzone
            w={{ base: "100%", "2xl": "268px" }}
            me='36px'
            maxH={{ base: "100%", lg: "100%", "2xl": "100%" }}
            minH={{ base: "100%", lg: "100%", "2xl": "100%" }}
            align="10px"
            content={""
              
            }
          >
          <Image src={diplome} w="100%" h="100%"/>
          </Dropzone>
          
         {/* <Flex direction='column' pe='44px'>
            
           
              <Button
                me='100%'
             
                w='100px'
                minW='140px'
                mt={{ base: "2  0px", "3xl": "auto" }}
                variant='brand'
                fontWeight='100'>
                Publish now
              </Button>
             
           
           
          </Flex>*/}
        </Flex>
      </Card>
    );
}

export default Upload