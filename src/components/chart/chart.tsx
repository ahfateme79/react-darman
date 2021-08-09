import { Scale } from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";


const Chartsec=styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    height:auto;
`


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'admin',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const Chart: React.FC = () => {
  return (
      <Chartsec>
      <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20,
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          type={{type:"bar"}}
          style={{transform:'Scale(.8)'}}
        />
        </Chartsec>
  )
};
export default Chart;
