import React, { Component } from "react";
import Chart from "react-apexcharts";

const MyChart = (props) => {
 
    const dt = []
    const prices = []
    const amounts = []

    for(const key in props.data){
        dt.push({
          dt: props.data[key].dt,
        })
      }
    
      
      const valuesDt = dt.map((item) => item.dt)
      const uniqueDt = [...new Set(valuesDt)]
      

      for(const key in props.data){
        prices.push({
          prices: props.data[key].price,
        })
      }

      const valuesPrices = prices.map((item) => item.prices)

      for(const key in props.data){
        amounts.push({
          amounts: props.data[key].amount,
        })
      }

      const valuesAmounts = amounts.map((item) => item.amounts)
      
      
    
    const chart_options = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: uniqueDt
        }
      },
      series: [
        {
          name: "price",
          data: valuesPrices
        },

        {
            name: "amount",
            data: valuesAmounts
        }
      ],
      
    };
  

 
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={chart_options.options}
              series={chart_options.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
    }

export default MyChart;