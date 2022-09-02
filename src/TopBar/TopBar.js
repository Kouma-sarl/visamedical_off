import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Flex,
  Img,
  useColorModeValue,

  
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import patient from "../Icones/profile_patient.png";
import bell from "../Icones/bell.png";
import SideBar from "../SideBar/SideBar";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  let menuBg = useColorModeValue("white", "navy.800");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  useEffect(() => {
    const handlesize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
        setOpen(false);
      } else {
        setMobile(false);
        setOpen(false);
      }
    };
    window.addEventListener("resize", handlesize);
    return () => {
      window.removeEventListener("resize", handlesize);
    };
  }, []);
  return (
    <>
     
    <header
      style={{ position: "sticky", top: "0%", zIndex: "999" }}
      bg={menuBg}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
        {/*<IconButton
          background={"none"}
          display={!mobile && !open ? "none" : "block"}
         
          _hover={"none"}
          icon={<FiMenu />}
          onClick={() => {
            open? setOpen(false):
           setOpen(true)
          }}
        />*/}
       
            
        
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mr="30px"
          bg={"white"}
          borderRadius="50px"
          p={"3px"}
          mt="10px"
        >
          <InputGroup w={{ base: "100%", md: "200px" }} m="10px">
            <InputLeftElement
              children={
                <IconButton
                  bg="inherit"
                  borderRadius="inherit"
                  _hover="none"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                  icon={<SearchIcon w="15px" h="15px" />}
                ></IconButton>
              }
            />
            <Input
              variant="search"
              fontSize="sm"
              fontWeight="500"
              placeholder={"Rechercher..."}
              bg={inputBg}
              borderRadius="50px"
            />
          </InputGroup>
          <Menu>
            <MenuButton p="0px">
              <Img
                src={bell}
                w="18px"
                h="18px"
                mt="6px"
                me="10px"
                color="white"
              />
            </MenuButton>
            <MenuList
              // boxShadow={shadow}
              p="20px"
              borderRadius="20px"
              //bg={menuBg}
              border="none"
              mt="22px"
              me={{ base: "30px", md: "unset" }}
              minW={{ base: "unset", md: "400px", xl: "450px" }}
              maxW={{ base: "360px", md: "unset" }}
            >
              <Flex jusitfy="space-between" w="100%" mb="20px">
                <Text fontSize="md" fontWeight="600">
                  Notifications
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  // color={textColorBrand}
                  ms="auto"
                  cursor="pointer"
                >
                  Mark all read
                </Text>
              </Flex>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton p="0px">
              <Img
                src={patient}
                style={{ width: "30px", height: "30px", marginRight: "5px" }}
              />
            </MenuButton>
            <MenuList
              //boxShadow={shadow}
              p="0px"
              mt="10px"
              borderRadius="20px"
              // bg={menuBg}
              border="none"
            >
              <Flex w="100%" mb="0px">
                <Text
                  ps="20px"
                  pt="16px"
                  pb="10px"
                  w="100%"
                  borderBottom="1px solid"
                  // borderColor={borderColor}
                  fontSize="sm"
                  fontWeight="700"
                  // color={textColor}
                >
                  👋&nbsp; Bonjour, Dr Adela
                </Text>
              </Flex>
              <Flex flexDirection="column" p="10px">
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="red.400"
                  borderRadius="8px"
                  px="14px"
                >
                  <Text fontSize="sm">Log out</Text>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </header>

    {open && <SideBar/>}
    </>

  );
};

export default TopBar;
