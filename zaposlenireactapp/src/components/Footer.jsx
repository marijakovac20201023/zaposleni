import React    from 'react';
import {BsFillEnvelopeFill } from "react-icons/bs";
import {Link} from "react-router-dom";
 
function Footer( ) {
    return (
        <div className="footer">
        <div className="footerItem">
            <ul>
               <strong>Kontaktirajte nas</strong>  
                <li>+381 11 123 456</li>
                <li>zaposleni@gmail.com</li>
                <li className="footerlink"><BsFillEnvelopeFill/><Link to="/kontakt" className="footerlink"> Pišite nam... </Link></li>
            </ul>
        </div>
        <div className="footerItem">
            <ul>
               <strong>Možete nas pronaći na sledecim lokacijama</strong>  
                <li>Bulevar Mihajla Pupina 74a, Novi Beograd</li>
                <li>Cara Dušana 92, Zemun</li>
                <li>Vojvode Knićanina 12/b, Novi Sad</li>

            </ul>
        </div>
        <div className="footerItem">
            <ul>
                <strong>Developed by:</strong> 
              
               
                <li> <a href=" " target="_blank"> </a></li> 
            </ul>
        </div>  
      
    </div>
      );
}
export default Footer;