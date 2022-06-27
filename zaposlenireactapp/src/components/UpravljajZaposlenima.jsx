import { MDBDataTableV5 } from 'mdbreact';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Zaposleni.css';
 


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
 








const UpravljajZaposlenima = (( ) => {
 
  
    const [u, setUser] = useState([{}]);
 
    const [userData,setUserData]=useState({
        id:0,
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:"",
        mesto:"Beograd",
        kvalifikacijaID:""
        
    });
    function handleInput(e){  
      let newUserData = userData;  
      newUserData[e.target.name]=e.target.value;
        if(userData.id!==0){
            axios.get("http://127.0.0.1:8000/api/users/"+userData.id).then((res)=>{
                console.log(res.data.data);
                setUser(res.data.data);
            
                })  .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

                });
        }





      console.log(newUserData); 
      setUserData(newUserData);  
  }
  let navigate = useNavigate();
  function obrisiRadnika(e){
    e.preventDefault();   
    
    axios.delete("http://127.0.0.1:8000/api/users/" +  userData.id, 
    { headers: { 'authorization': localStorage.getItem('auth_token') } }
    )
    alert("USPESNO")
  }
  function azurirajRadnika(e){
    e.preventDefault();   
    let stringupit= userData.id+"/?";
    if(userData.email!==""){
      stringupit+="email=";
      stringupit+=userData.email;
      stringupit+="&";
    }else{
        stringupit+="email=";
        stringupit+=u.email;
        stringupit+="&";
    }
    if(userData.birthdate!==""){
      stringupit+="birthdate=";
      stringupit+=userData.birthdate;
      stringupit+="&";
    }else{
        stringupit+="birthdate=";
        stringupit+=u.birthdate;
        stringupit+="&";
    }
    if(userData.name!==""){
      stringupit+="name=";
      stringupit+=userData.name;
      stringupit+="&";
    }else{
        stringupit+="name=";
        stringupit+=u.name;
        stringupit+="&";
    }
    if(userData.phone!==""){
      stringupit+="phone=";
      stringupit+=userData.phone;
      stringupit+="&";
    }else{
        stringupit+="phone=";
        stringupit+=u.phone;
        stringupit+="&";
    }
    if(userData.mesto!==""){
      stringupit+="mesto=";
      stringupit+=userData.mesto;
      stringupit+="&";
    }else{
        stringupit+="mesto=";
        stringupit+=u.mesto;
        stringupit+="&";
    }
    if(userData.kvalifikacijaID!==""){
      stringupit+="kvalifikacijaID=";
      stringupit+=userData.kvalifikacija;
      stringupit+="&";
    }else{
        stringupit+="kvalifikacijaID=";
        stringupit+=u.kvalifikacija.id;
        stringupit+="&";
    }
    stringupit+="1=1";
    console.log('http://127.0.0.1:8000/api/users/'+  stringupit);
    axios({
      method: 'put',
      url: 'http://127.0.0.1:8000/api/users/'+  stringupit,
      data: userData,
      config: { 'authorization': localStorage.getItem('auth_token')  }
    })
     .then(function (response) {
       if (response.status === 200) {
         console.log("Update Success");
          alert("USPESNO")
       }
     })
     .catch(function (response) {
       console.log(response);
        
     });
  }
          
    
      return <div>
            <div className='crudRadnik'>
                
                <form onSubmit={azurirajRadnika}>
                                  <div className="input-group">
                                      <input className="input--style-3" type="text" name='id' placeholder='Unesi ID radnika'  onInput={handleInput}/>
                                  </div>

                                  <div className="input-group">
                                      <input className="input--style-3" type="text" placeholder="Name" name="name" id='name' defaultValue={u.name} onInput={handleInput}/>
                                  </div>

                                  <div className="input-group">
                                      <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthdate" id='birthdate' onInput={handleInput} defaultValue={u.birthdate}/>
                                      <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                  </div>
                                  
                                  <div className="input-group">
                                      <input className="input--style-3" type="email" placeholder="Email" name="email" id="email" defaultValue={u.email}   onInput={handleInput}/>
                                  </div>
                              
                                  <div className="input-group">
                                      <input className="input--style-3" type="text" placeholder="Phone" name="phone" id='phone' defaultValue={u.phone} onInput={handleInput}/>
                                  </div>

                                  <div className="input-group">
                                      <select  className="input--style-3" name="sss" id="1"    onInput={handleInput}>
                                   
                                         <option  className="input--style-3" value="1" id={1} >Bez kvalifikacija</option>
                                         <option className="input--style-3" value="2" id={2} >Opsta kvalifikacija</option>
                                         <option className="input--style-3" value="3" id={3} >Strucna kvalifikacije</option>
                                         <option className="input--style-3" value="4" id={4} >Akademska kvalifikacije</option>
                                         <option className="input--style-3" value="5" id={5} >Strukovna kvalifikacije</option>

                                      </select>
                                  
                                  </div>
                                  <div className="p-t-10">
                                       <button className="btn btn--pill btn--green" type="submit" id="azurirajRadnika" name="azurirajRadnika" >Azuriraj radnika</button>
                                  </div>

                  </form>




                  <div className="p-t-10">
                   <button className="btn btn--pill btn--green" type="submit" id="obrisiRadnika" name="obrisiRadnika" onClick={obrisiRadnika}>Obrisi radnika</button>
                  </div>
                  
              </div>
               
                


        </div>
         
    }
)
export default UpravljajZaposlenima