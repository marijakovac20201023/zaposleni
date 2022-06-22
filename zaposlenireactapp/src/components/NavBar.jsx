import axios from "axios";
import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
 
function NavBar({token}) {

  function handleLogout(){ 
    console.log("USAO")
     
    var config = {
      method: 'post',
      url: '/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        
      },
    };
    console.log(window.sessionStorage.getItem("auth_token"))
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }



  return (
    <div className="navbar">
      <Link to="/"  className="navbar-items" >Početna strana</Link>
       
        {token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
            <>  
                <Link to="/login"  className="navbar-items" >Uloguj se  </Link>
               
                
             
             
             </> 
             :  //ako jeste ulologovan treba da vidimo da li je admin ili nije admin
             <>  
             
                {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                //admin moze da vidi poruke i da dodaje nove proizvode
                    <> 
                      <Link to="/admin"  className="navbar-items" >Dashboard </Link>
                       <Link to="/admin/zaposleni"  className="navbar-items" >Zaposleni </Link>
                       <Link to="/admin/register"  className="navbar-items" >Dodaj zaposlenog  </Link>
                       <Link to="/admin/azurirajObrisi"  className="navbar-items" >Azuriraj ili obrisi zaposlenog  </Link>

                    </>
                : //ulogovani korisnici koji nisu admin mogu da vide raspored, da dodaju nove smene  
                    <>
                     <Link to="/raspored"  className="navbar-items" >Raspored trenutna nedelja </Link>
                     <Link to="/rasporedSledecaNedelja"  className="navbar-items" >Raspored sledeca nedelja </Link>

                    <Link to="/dodajSmenu" className="navbar-items" > Dodaj smenu  </Link>
                   
                    </>
                
                //svi korisnici mogu da se odloguju
                }
                 <a href="/" className="navbar-items" onClick={handleLogout}> Odjavi se </a>
                
             </>
              
        }
        
       

 
    </div>
  );
}
export default NavBar;