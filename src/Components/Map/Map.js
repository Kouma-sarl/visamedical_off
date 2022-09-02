import React from "react";
//import {useJsApiLoader,GoogleMap} from '@react-google-maps/api'
import { Box, Text, Flex, Button } from "@chakra-ui/react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import marker from "../../Icones/mapmarke.png";
import TopBar from "../../TopBar/TopBar";
import { datas } from "./Component/data";
import Card from "../Acceuil/Component/Card";

const Map = (props) => {
  const { bg, image, ...rest } = props;
  const center = [11.300061, -10.716655];
 
  const mapConfig = {
    //maxZoom: 18,
    id: "mapbox/light-v10",
    url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    accessToken: `${process.env.REACT_APP_KEY_MAPBOX}`,
     
  };
  const MapIcon = new icon({
    iconUrl: marker,
    iconSize: [25, 40], // size of the icon
  });
  /*const dat = new Date();
  const m = dat.getMonth()
  
  const mon= ["JAN","FEV","MAR","AVR","MAI","JUIN","JUIL","AOUT","SEPT","OCT","NOV","DEC"]
  //console.log(mon[m])
  let statenfant = []

  const data ={"0":1,"1":3,"2":5}

  for (let i in mon){
    // console.log(i)
    statenfant[mon[i]]= data[i]
  }
  console.log(statenfant)
  const mont=mon[m]
  const year= dat.getFullYear()
  console.log(dat.getFullYear())
  const tab=[];
  tab.push(mont,year)
  console.log(tab)*/

  return (
    <Box w="100%" h="100vh" overflowX={"scroll"}>
      <TopBar />
      
      <Card
        mb="20px"
        {...rest}
        w="98%"
        h={"100%"}
        m="10px"
        columns={{ base: 1, md: 1, lg: 1 }}
      >
        <Flex align="center" w="100%" justify="space-between" mb="30px">
          <Text
            // color={textColorPrimary}
            fontWeight="bold"
            fontSize="2xl"
          >
            Indicateur par ville
          </Text>
        </Flex>

        <MapContainer
          center={center}
          zoom={7}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer {...mapConfig} />
          {datas.map((v) => {
            return (
              <Marker key={v.city} position={[v.lat, v.lng]} icon={MapIcon}>
                <Popup>
                  <Card bg={bg} {...rest} p="14px" borderRadius="10px">
                    <Flex align="center" direction={"row"}>
                      <Box mt={{ base: "10px", md: "0" }} ml="10px">
                        <Text
                          // color={textColorPrimary}
                          fontWeight="bold"
                          fontSize="md"
                          as={"h2"}
                        >
                          Dr Diallo Ibrahima Sory
                        </Text>
                        <Text
                          fontWeight="500"
                          // color={textColorSecondary}
                          fontSize="sm"
                          as={"h2"}
                          me="4px"
                        >
                          Diabetologue
                        </Text>
                        <Text fontWeight="bold" fontSize="18px" as={"h2"}>
                          Conclusion général:
                        </Text>
                        <Text fontSize="md" me="26px" as={"h2"} noOfLines={2}>
                          glycemie trop elevé jkhdhlklmm,vcwjlkfw......
                        </Text>
                      </Box>
                    </Flex>
                    <Button
                      bg={"#179CBC"}
                      color={"white"}
                      fontWeight="regular"
                      fontSize="sm"
                      minW="185px"
                      mt="10px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _hover={"none"}
                    >
                      Voir les details
                    </Button>
                  </Card>

                  {/* <Box w={"300px"} display={"flex"} h={"100px"}  >
                              <Image src={logoWhite} w='100px' h='100px'  />
                              
                              <VStack mt="-10px" ml="40px">
                                <Text as={"h2"}   fontSize="sm"
                  fontWeight="700" color="black">Dr diallo Ibrahima sory</Text>
                                 <Text as={"h2"}>Diabetologue</Text>
                                <Text as={"h2"}>621596031</Text>
                                <Text as={"h2"} color="black" >Glycemie:0.3</Text>
                                <Button bg={"#179CBC"} color={"white"} fontSize="sm" _hover={"none"}>Voir detail</Button>

                             <Text >{v.admin_name}</Text>
                            <Text >{v.city}</Text>
            <Text>{v.population}</Text>
                              </VStack>
                              </Box>*/}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </Card>

      {/*<SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} w="100%" h={"100%"}>
  <MapContainer center={center} zoom={7} style={{width:"100%",height:"90%"}} >
      <TileLayer {...mapConfig} />
      {
        datas.map((v,)=>{
            return(
                    <Marker key={v.city} position={[v.lat,v.lng]} icon={MapIcon} >
                        <Popup>
                            
                            <Text>{v.admin_name}</Text>
                            <Text>{v.city}</Text>
                           <Text>{v.population}</Text>
                         
            
                        </Popup>
                    </Marker>
            )
        })
      }
    </MapContainer> 
    </SimpleGrid>
 */}
    </Box>
  );
};

export default Map;
