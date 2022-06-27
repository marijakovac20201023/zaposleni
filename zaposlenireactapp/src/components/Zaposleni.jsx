import React, { useEffect, useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import jsPDF from "jspdf";
import "jspdf-autotable";
import './Zaposleni.css';
import axios from 'axios';
 
const Zaposleni = ({zaposleni}) => { 
        const [RSDEUR, setRSDEUR] = useState(0);
        useEffect(() => {
          axios({
            method: "GET",
            url:
              "https://free.currconv.com/api/v7/convert?q=EUR_RSD&compact=ultra&apiKey=ccf4b20e3c691e9010c9",
          })
            .then((response) => {
              console.log(response.data.EUR_RSD);
              setRSDEUR(response.data.EUR_RSD);
              console.log(RSDEUR);
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);







      const [datatable, setDatatable] = React.useState({
       
        columns: [
          {
            label: 'id',
            field: 'id',
            width: 200,
          },
          {
            label: 'name',
            field: 'name',
            width: 250,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'email',
            field: 'email',
            width: 200,
          },
          {
            label: 'kontakt',
            field: 'phone',
            width: 270,
          },
          {
            label: 'datum rodjenja',
            field: 'birthdate',
            width: 270,
          },
          {
            label: 'mesto',
            field: 'mesto',
            width: 270
          },
          {
            label: 'kvalifikacija',
            field: 'kvalifikacija',
            width: 270
          }, 
        ],
        rows:  zaposleni.map(p=>{
               
            return{
                id:p.id,
                name: p.name,
                email: p.email,
                phone: p.phone,
                birthdate: p.birthdate,
                mesto: p.mesto,
                kvalifikacija: p.kvalifikacija.nazivKvalifikacije ,
                


            }
            

        })
       
    })      
    function exportPDF() {
      const unit = "pt";
      const size = "A4"; // Use A1, A2, A3 or A4
      const orientation = "landscape"; // portrait or landscape
  
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);
  
      doc.setFontSize(15);
  
      const title = "Spisak svih zaposlenih";
      const headers = [["NAME", "EMAIL","PHONE","BIRTHDATE","PLATA"]];
  
      const data = zaposleni.map(elt=> [elt.name, elt.email,elt.phone, elt.birthdate,elt.plata*RSDEUR]);
      console.log(RSDEUR.EUR_RSD)
      let content = {
        startY: 50,
        head: headers,
        body: data
      };
  
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("report.pdf")
    }
    
      return <div>
              
               
                <div className='tabelaPoruka'> 
                    <MDBDataTableV5 hover entriesOptions={[5, 10, 25]} entries={5} pagesAmount={4} data={datatable} />
                </div>


                <div>
                  <button className="btn btn--pill btn--green" onClick={() => exportPDF()}>Generate Report</button>
                </div>


        </div>
         
    }

export default Zaposleni