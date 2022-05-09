import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const milkPrice = ['10','30','55.5', '453','22','94','22','100'];
const year = ['2001','2002','2003','2004','2005','2006','2007','2008'];

export const LineChart = () => {
    const [chart, setChart] = useState({})

    /*useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
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
        };
        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])*/

    const data = {
        labels: year,
        datasets: [{
            label: `Milk price`,
            data: milkPrice,
            fill:true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#000',
            pointBackgroundColor: '#000',
            borderWidth: 1,
            tension: 0.2, //плавность графика
        }]
    };

    const options = {
        maintainAspectRatio: false,
        radius:5,
        responsive: true,
        hitRadius:30, //чтобы точно не надо было на точку наводить
        hoverRadius:12, //увеличиваем точку при наведении
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return "$" + value + "m"; //подпись верстикальной оси
                    }
                }
            }
        },
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    }

    return (
        <div>
            <Line
                type={"line"}
                data={data}
                height={400}
                options={options}

            />
        </div>
    )
}
