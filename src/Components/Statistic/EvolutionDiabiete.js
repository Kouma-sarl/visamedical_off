import React, { useEffect, useState } from 'react'
import Card from '../Acceuil/Component/Card'
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Chart from 'react-apexcharts'
import axios from 'axios';

const EvolutionDiabiete = (props) => {
    const { ...rest } = props;
    const [line,setLine]=useState([])

    // Chakra Color Mode
  
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const series = [
        {
            name: "Adult",
            data: [50, 64, 48, 66, 49, 68,30, 40, 24, 46, 20, 46],
          },
          {
            name: "Enfant",
            data: [30, 40, 24, 46, 20, 46,50, 64, 48, 66, 49, 68],
          },
      ];
      const options = {
        chart: {
            toolbar: {
              show: true,
            },
            dropShadow: {
              enabled: true,
              top: 13,
              left: 0,
              blur: 10,
              opacity: 0.1,
              color: "#4318FF",
            },
          },
          colors: ["#4318FF", "#39B8FF"],
          markers: {
            size: 0,
            colors: "white",
            strokeColors: "#7551FF",
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            showNullDataPoints: true,
          },
          tooltip: {
            theme: "dark",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            type: "line",
          },
          xaxis: {
            type: "text",
            categories:  ["JAN","FEV", "MAR", "AVR", "MAI", "JUIN", "JUIL", "AOU", "SEP", "OCT", "NOV", "DEC"],
            labels: {
              style: {
                colors: "#A3AED0",
                fontSize: "10px",
                fontWeight: "300",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          legend: {
            show: false,
          },
          grid: {
            show: false,
            column: {
              color: ["#7551FF", "#39B8FF"],
              opacity: 0.5,
            },
          },
          color: ["#7551FF", "#39B8FF"],
      };
      const data=[{"mois":"Jan","enfant":23,"adult":24},{"mois":"Jan","enfant":23,"adult":24}]
      useEffect(()=>{
        const mois= ["JAN","FEV","MAR","AVR","MAI","JUIN","JUIL","AOUT","SEPT","OCT","NOV","DEC"]
      
        const Adulte=[]
        const Enfant=[]
    
        const getData = async()=>{
          try {
            const {data}=await axios.get(`${process.env.REACT_APP_API_KEY}/bi/consultationbymonth`)
            setLine(data)
        
          console.log(line)

            for (let i in mois) {      
              Adulte[mois[i]] =  line.adult[i]
               Enfant[mois[i]]=line.enfant[i]
               }
              console.log(Adulte.length)
                  Adulte.forEach(ele=>{
                    console.log(ele)
                  })
         
         
              
          } catch (error) {
            console.log(error)
          }
           
        
           
           
         
       /* Adulte.forEach(row=>{
           const col = row.split(',')
           const mos= col[0];
           console.log(mos)

        })*/
          
            
        }
        getData();

      },[])

  return (
      <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      bg="white"
      ml="5px"
      borderRadius="10px"
      {...rest}
    >
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Evolution du Diabete
        </Text>
      </Flex>

      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Box minH="260px" minW="75%" mt="auto">
         <Chart options={options} series={series} type='line'
        width='100%'
        height='100%'  />
        </Box>
      </Flex>
    </Card>
  )
}

export default EvolutionDiabiete