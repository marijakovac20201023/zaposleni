import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DodajSmenu = () => {

    const [productData,setProductData]=useState({
        radnikID:1,
        datum:'2022-03-01',
        tipSmeneID:1,
        pocetak:8, 
    });
    function handleInput(e){  
        let newProductData = productData;  
        newProductData['radnikID']=window.sessionStorage.getItem("auth_id");
        newProductData[e.target.name]=e.target.value;
        console.log(newProductData);
        console.log(e.target.name)
        console.log(e.target.value)
        setProductData(newProductData);  
       
    }
    let navigate = useNavigate();
    function handleAdd(e){
     
      
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/smene", productData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
                .then((res)=>{  
                    console.log(res.data);
                     alert("USPESNO")
                     navigate("/raspored");
                })
                .catch(function (error) {
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



  return (
    <div className='register'>
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
                <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Dodaj novu smenu</h2>
                        <form onSubmit={handleAdd}>
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="ID RADNIKA" name="radnikID" defaultValue={window.sessionStorage.getItem("auth_id")} readOnly  />
                            </div>
          
                          
                          
                            <div className="input-group">
                                 <select  className="input--style-3" name="tipSmeneID" id="1" onInput={handleInput}>
                                     
                                    <option  className="input--style-3" value="1" id={1} >Od kuce</option>
                                    <option className="input--style-3" value="2" id={2} >Iz kancelarije</option> 
                                 </select>
                                    
                            </div>

                        
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Datum (gggg-mm-dd)" name="datum" required onInput={handleInput}/>
                            </div>
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Pocetak smene" name="pocetak "required onInput={handleInput}/>
                            </div>
                        
                            <div className="p-t-10">
                                <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Submit</button>
                            </div>

                            <br/><br/>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DodajSmenu