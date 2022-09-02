import { Box, Button, FormControl, FormLabel, Heading,  Input,  VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Card from "../Components/Acceuil/Component/Card"
import TopBar from '../TopBar/TopBar'




const AjoutAdmin = () => {
  const [nom,setNom]=useState("");
  const [login,setLogin]=useState("");
  const [password,setPassword]=useState("");
  console.log(nom)
  console.log(login)
  console.log(password)
  
     
  return (
    <Box w={"100%"}>
     <TopBar/>

      <VStack as={"form"}
    w={{base:"90%",md:500}}
    justifyContent="center"
    mx={"auto"}
    >
       <Card m="10px">
      <Heading>Ajout un Admin</Heading>
      <FormControl>
        <FormLabel>Nom Complet</FormLabel>
        <Input value={nom}  onChange={(e)=>setNom(e.target.value)} placeholder='veuillez saisir le nom complet'/>
      </FormControl>
      <FormControl>
        <FormLabel>Login</FormLabel>
        <Input  value={login}  onChange={(e)=>setLogin(e.target.value)}  placeholder='veuillez saisir le login'/>
      </FormControl>
      <FormControl>
        <FormLabel>Mot de passe</FormLabel>
        <Input type={"password"}  value={password}  onChange={(e)=>setPassword(e.target.value)}  placeholder='veuillez saissir le mot de passe '/>
      </FormControl>
      <Button bg="#179CBC" color={"white"} _hover="none" mt="10px">Ajouter</Button>
      </Card>
    </VStack>

      
    

    </Box>
  )
}

export default AjoutAdmin