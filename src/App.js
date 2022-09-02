import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import SideBar from './SideBar/SideBar';
import Acceuil from './Components/Acceuil/Acceuil';
import Map from './Components/Map/Map';
import Medecin from './Components/Medecin/Medecin';
import Patients from './Components/Patient/Patients';

import {Box} from '@chakra-ui/react'
import PatientDetail from './Components/Patient/Component/PatientDetail';
import theme from './theme/theme'
import MedecinDetail from './Components/Medecin/Component/MedecinDetail';
import AjoutAdmin from './AjoutAdmin/AjoutAdmin';
import Login from "./Login/Login"
import { useState } from 'react';
function App() {
  const [auth,setAuth]=useState(false)
  
  return (
  <ChakraProvider theme={theme} >
    
    
    <BrowserRouter>
    {!auth ? (
      <Login setAuth={setAuth} />
    ):(
      <Box display='flex'>
      <SideBar/>
      

      
       <Routes>
        
       <Route  exact path='/' element={<Acceuil/>}/>
       <Route path='/Acceuil' element={<Acceuil/>}/>
       <Route path='/Map' element={<Map/>}/>
       <Route path='/Medecin' element={<Medecin/>}/>
       <Route path='/Medecin/:medecinid' element={<MedecinDetail/>}/>
       <Route path='/Patient' element={<Patients/>}/>
       <Route path='/Patient/:patientid' element={<PatientDetail/>}/>
       <Route path='/AjoutAdmin' element={<AjoutAdmin/>}/>
       
       
       </Routes>
       </Box>
    )}
   
   
  </BrowserRouter>
  
  </ChakraProvider>
    
  );
}

export default App;
