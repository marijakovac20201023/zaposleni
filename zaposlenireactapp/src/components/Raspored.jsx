import React    from 'react';
import './Raspored.css';
 
function Raspored({smene} ) {
 
    const current = new Date(); //Danasnji datum
    const danUNedelji = current.getDay();
    const mesec = current.getMonth()+1;
    const godina = current.getFullYear();

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }

    function ispisiZaDan(brojDana){
        const trazeniDatum = addDays(current,brojDana); //30.5.
 
      
       var smeneOdredjenogDana = [];
        for(let i =0;i<smene.length;i++){
            var datumSmene = new Date(smene[i].datum) ;

            if(datumSmene.toDateString()===trazeniDatum.toDateString()){
                smeneOdredjenogDana.push(smene[i]);
            }
        }
        console.log(smeneOdredjenogDana)
        return smeneOdredjenogDana;
        
    }
   
   const trStyle = {
            display: "block",
            float:"left"
   }
   const tdStyle={
        display: "block",
   }
   const tdStyleKuca={
    display: "block",
    backgroundColor:"yellow",
}
const tdStylePosao={
    display: "block",
    backgroundColor:"orange",
}
    return (
        <div  >
            <h1 className='rasporedNaslov'>Raspored za tekucu nedelju {mesec}/{godina}</h1>

                <table className='raspored'>
                     
                    <tbody  >
                      
 
                         <tr style={trStyle}><th style={tdStyle}>Ponedeljak</th>{ispisiZaDan(-danUNedelji+1).map((s)=>  s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>
                         <tr style={trStyle}><th style={tdStyle}>Utorak</th>{ispisiZaDan(-danUNedelji+2).map((s)=>s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>
                         <tr style={trStyle}><th style={tdStyle}>Sreda</th>{ispisiZaDan(-danUNedelji+3).map((s)=>s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>
                         <tr style={trStyle}><th style={tdStyle}>Cetvrtak</th>{ispisiZaDan(-danUNedelji+4).map((s)=>s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>
                         <tr style={trStyle}><th style={tdStyle}>Petak</th>{ispisiZaDan(-danUNedelji+5).map((s)=>s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>
                         <tr style={trStyle}><th style={tdStyle}>Subota</th>{ispisiZaDan(-danUNedelji+6).map((s)=>s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>
                         <tr style={trStyle}><th style={tdStyle}>Nedelja</th>{ispisiZaDan(-danUNedelji+7).map((s)=>s.tip_smene.id==2?<td style={tdStyleKuca}    key={s.id}>{s.radnik.name}</td> :<td  style={tdStylePosao} key={s.id}>{s.radnik.name}</td>  )}</tr>

                         
                           
                            
                    </tbody>


                </table>




      
        </div>
      );
}
export default Raspored;