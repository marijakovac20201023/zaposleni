import React from 'react'
import Chart from './Chart';
import "./AdminDashboard.css";

const AdminDashboard = ({smene,zaposleni}) => {

  function brojRadnika(){
    return zaposleni.length;
  }

  function prosecnaPlata(){
    var suma=0;
    for(var i=0;i<zaposleni.length;i++){
      suma+=zaposleni[i].plata;
    }
    return suma/brojRadnika();
  }

  function prosecnanBrojRadnihSatiNedeljno(){
    
    
    return smene.length*8/brojRadnika()/7;
  }

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }
  return (
    <main>

<div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        {/* <img src={hello} alt="hello" /> */}
        <div className="main__greeting">
          <h1>Hello </h1>
          <p>Welcome to your admin dashboard</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}

 
      {/* <!-- MAIN CARDS ENDS HERE --> */}

      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              <p>Cupertino, California, USA</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <Chart zaposleni={zaposleni} smene={smene} />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              <p>Beograd, Srbija</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>

          <div className="charts__right__cards">
            <div className="card1">
              <h1>Broj zaposlenih</h1>
              <p> {brojRadnika()}</p>
            </div>

            <div className="card2">
              <h1>Prosecna plata</h1>
              <p>{roundToTwo(prosecnaPlata())} [EUR]</p>
            </div>

            <div className="card3">
              <h1>Prosecan br. radnih sati nedeljno po radniku</h1>
              <p>{ roundToTwo(prosecnanBrojRadnihSatiNedeljno())}</p>
            </div>

             
          </div>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  </main>
    

      
   
);
   
}

export default AdminDashboard