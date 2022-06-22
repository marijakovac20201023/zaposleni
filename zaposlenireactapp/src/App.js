 
import './App.css';
import React, { useEffect }   from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NotFound from './components/NotFound';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import WelcomePage from './components/WelcomePage';
import { useState } from "react";
import AdminDashboard from './components/AdminDashboard';
import axios from "axios";
import Raspored from './components/Raspored';
import DodajSmenu from './components/DodajSmenu';
import RasporedSledecaNedelja from './components/RasporedSledecaNedelja';
import Zaposleni from './components/Zaposleni';
import UpravljajZaposlenima from './components/UpravljajZaposlenima';


 

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
 
function App() {

  const [users, setUsers] = useState([{}]);
  const [smene, setSmene] = useState([{}]);
  const[token,setToken] = useState();
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/smene",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setSmene(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [ axiosInstance]);

  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/users",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setUsers(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [ axiosInstance]);















  function addToken(auth_token){
    setToken(auth_token);
}

 



  return  (
    <BrowserRouter className="App">
      

     
    <NavBar token={token}  ></NavBar>
  

    <Routes>
    <Route   path="/"  element={<WelcomePage></WelcomePage>}
        
      />
      
      
      
      
      <Route   path="/login"  element={<LoginPage addToken={addToken} />}/>
      <Route   path="/logout"  element={<LoginPage  />}/>
      <Route   path="/raspored"  element={<Raspored smene={smene}   />}/>
      <Route   path="/rasporedSledecaNedelja"  element={<RasporedSledecaNedelja smene={smene}   />}/>

      <Route   path="/dodajSmenu"  element={ <DodajSmenu></DodajSmenu> }/>

      <Route   path="/admin"  element={<AdminDashboard smene={smene} zaposleni={users}  />}/>
      <Route   path="/admin/zaposleni"  element={<Zaposleni zaposleni={users}  />}/>
      <Route   path="/admin/register"  element={<RegisterPage />}/>
      <Route   path="/admin/azurirajObrisi"  element={<UpravljajZaposlenima></UpravljajZaposlenima> }/>
 
       <Route path="/*" element={<NotFound></NotFound>}/>
        
    </Routes>
    
    <Footer></Footer>
</BrowserRouter>
  );
}

export default App;
