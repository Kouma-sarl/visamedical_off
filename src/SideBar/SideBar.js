import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  IconButton,
  Divider,
  Link,
  Img,
  Icon,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { MdHome, MdMap } from "react-icons/md";
import medecin from "../Icones/medecin.png";
import patient from "../Icones/patient.png";

import admin from "../Icones/admin.png";

import "./sidebar.css";
import Cardsidebar from "./Component/Cardsidebar";

const SideBar = () => {
  const [open, setOpen] = useState("large");
  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handlesize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
        setOpen("small");
      } else {
        setMobile(false);
        setOpen("large");
      }
    };
    window.addEventListener("resize", handlesize);
    return () => {
      window.removeEventListener("resize", handlesize);
    };
  }, []);

  const menu = [
    {
      path: "/Acceuil",
      name: "Acceuil",
      icon: <Icon as={MdHome} width="15px" height="15px" color="#179CBC" />,
    },
    {
      path: "/Map",
      name: "Map",
      icon: <Icon as={MdMap} width="15px" height="15px" color="#179CBC" />,
    },
    {
      path: "/Medecin",
      name: "Medécin",
      icon: <Img src={medecin} width="15px" height="15px" />,
    },
    {
      path: "/Patient",
      name: "Patients",
      icon: <Img src={patient} width="15px" height="15px" />,
    },
    {
      path: "/AjoutAdmin",
      name: "Ajouter un Admin",
      icon: <Img src={admin} width="15px" height="15px" />,
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-between"
      position="sticky"
      top="0%"
      zIndex="999"
      w={open === "small" ? "20px" : "300px"}
      h="100vh"
      bg={open === "small" ? "transparent" : "white"}
    >
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
        <Text
          display={open === "large" ? "block" : "none"}
          m="20px"
          fontSize={mobile ? "2sm":"2xl"}
          color="black"
        >
          VISA MEDICAL
        </Text>
        <IconButton
          background={"none"}
          display={!mobile && open === "large" ? "none" : "block"}
          zIndex={open==="large" ? "3": "0"}
          _hover={"none"}
          ml="15px"
          mt="25px"
          size={100}
          
          icon={<FiMenu  />}
          onClick={() => {
            if (open === "small") {
              setOpen("large");
            } else {
              setOpen("small");
            }
          }}
        />
      </Box>
      <Divider display={open === "large" ? "block" : "none"} />
      <Box mt="-40px" ml={"30px"}>
        {menu.map((item, id) => {
          return (
            <Link as={RouterLink} to={item.path} key={id} className="link">
              <Box
                m="10px"
                display="flex"
                alignItems="center"
                className="active"
                onClick={() => setSelected(id)}
              >
                <Box display={open === "large" ? "block" : "none"}>
                  {item.icon}
                </Box>
                <Box
                  display={open === "large" ? "block" : "none"}
                  ml="15px"
                  fontWeight={selected === id ? "bold" : "none"}
                  color={selected === id ? "#179CBC" : "none"}
                >
                  {item.name}
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
      <Box>
        <Cardsidebar display={open === "large" ? "block" : "none"} />
      </Box>
    </Box>
  );
};

export default SideBar;
