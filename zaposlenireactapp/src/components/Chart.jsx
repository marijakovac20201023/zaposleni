import './ChartStyle.css'
import {
 XYPlot,
 LineSeries,
 XAxis,
 YAxis,
 VerticalGridLines,
 HorizontalGridLines,
} from "react-vis";

const Chart = ({zaposleni,smene}) => {
  const data = [
   
  
  ];
  function brojSatiRadnika(id){
    var suma=0;
    for(var i=0;i<smene.length;i++){
      console.log(smene[i].radnik.id)
        if(smene[i].radnik.id===id){
          suma+=8;
           
        } 
    }
    return suma;
  }
  
  for(var i=0;i<zaposleni.length;i++){
    console.log(brojSatiRadnika(zaposleni[i].id))
    console.log(zaposleni[i].id)

    data.push({x:zaposleni[i].id,y: brojSatiRadnika(zaposleni[i].id)})
      console.log(data)
  }





 return (
   <div style={{ margin: "15px" }}>
     <XYPlot height={300} width={300}>
       <VerticalGridLines />
       <HorizontalGridLines />
       <XAxis />
       <YAxis />
       <LineSeries data={data} color="red" />
       <LineSeries data={data} color="purple" />
       <LineSeries data={data} color="yellow" />
     </XYPlot>
   </div>
 );
};

export default Chart;
