import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale
} from "chart.js";
import {Bar} from 'react-chartjs-2';
import {useEffect, useState} from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)
const products = [
    {name: 'Milk', price: '200'},
    {name: 'Cola', price: '300.22'},
    {name: 'Beer', price: '400'},
    {name: 'product7', price: '200.44'},
    {name: 'product1', price: '854'},
    {name: 'product2', price: '121'},
    {name: 'product3', price: '15.99'},
    {name: 'product4', price: '1236'},
    {name: 'product5', price: '222'},
    {name: 'product6', price: '100'},
]
const API_KEY = process.env.REACT_APP_COIN_KEY;
const baseUrl =  "https://api.coinranking.com/v2/coins/?limit=10";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const BarChart = () => {

    const [chart, setChart] = useState([]);

   const data =  {
        labels: products?.map(pr => pr.name),
            datasets: [{
        label: 'Prices of products',
        data: products?.map(pr => pr.price),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
    };

   const options = {
       maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
       legend: {
           labels: {
               fontSize: 26,
           }
       }
    };

   /*useEffect(() => {
        const fetchCoins = async() => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `coinranking5f1ae195135d7ad5128794819b44f0bd371db5e936ae9386`,
                    'Access-Control-Allow-Origin': "*"
                }
            })
                .then((response) => {
                    if (response.ok) {
                        response.json().then((json) => {
                            console.log(json.data);
                            setChart(json.data)
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                });
        }
       fetchCoins();
   },[])*/
    console.log("chart", chart);
    return(
        <div>
            <Bar
             type={"bar"}
             data={data}
             height={400}
             options={options}
            />
        </div>
    )
}