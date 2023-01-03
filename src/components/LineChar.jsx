import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartMainData } from '../data';
import { FiSearch } from "react-icons/fi";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function LineChar() {

  const [chartData, setChartData] = useState(chartMainData);
  


  const searchBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

  const searchArea = {
    display: 'flex',
    flexDirection: 'row'
  }

  const searchIcon = {
    width: '44px',
    backgroundColor: '#dce4ff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '19px',
    height: '60px',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  }

  const input = {
    border: 'none',
    backgroundColor: '#dce4ff',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    color: '#464646',
    outline: 'none',
    height: '30px',
    outline: 'none',
    height: '60px',
    borderRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',

    
  }




  const fetchChartData = (searchItem) => {
   if (searchItem === '') {
      setChartData(chartMainData)
    } else {
      setChartData(chartMainData.filter(el => el.data.Name.toLowerCase().startsWith(searchItem.toLowerCase())))
    }
  }

  


  return (
    <>
      <div style={{ marginBottom: '0px' }} className="container">


        <div style={searchBox} className="searchBox">
          <h1 style={{ paddingBottom: '30px' }}>Line Chart</h1>
          <div style={searchArea} className="searchArea">
            <div style={searchIcon} className="searchIcon">
              <FiSearch />
            </div>
            <input style={input} type="text" onChange={(e) => fetchChartData(e.target.value)} placeholder="Search Your Query" />
          </div>
        </div>


        <Line style={{ width: '100%', height: '200%' }}

          data={{
            labels: ['Warmth', 'Reasoning', 'Emotional_Stability', 'Dominance', 'Liveliness', 'Rule_Conciousness', 'Social_Boldness', 'Sensitivity', 'Vigilance', 'Abstractedness', 'Privateness', 'Apprehension', 'Openness_to_change', 'Self_Reliance', 'Perfectionism', 'Tension'],
            datasets: chartData,
          }}


          options={{
            responsive: true,
            plugins: {
              legend: {
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart',
              },
            },
          }}


        />
      </div>

    </>
  )
}
