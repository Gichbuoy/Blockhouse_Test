import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const Dashboard = () => {
    const [candlestickData, setCandlestickData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    const [barChartData, setBarChartData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const candlestickRes = await axios.get('http://localhost:8000/api/candlestick-data/');
                const lineChartRes = await axios.get('http://localhost:8000/api/line-chart-data/');
                const barChartRes = await axios.get('http://localhost:8000/api/bar-chart-data/');
                const pieChartRes = await axios.get('http://localhost:8000/api/pie-chart-data/');

                setCandlestickData(candlestickRes.data.data);
                setLineChartData(lineChartRes.data);
                setBarChartData(barChartRes.data);
                setPieChartData(pieChartRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Candlestick Chart</h3>
                {/* Render candlestick chart using candlestickData */}
            </div>
            <div>
                <h3>Line Chart</h3>
                <LineChart width={600} height={300} data={lineChartData.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>
            <div>
                <h3>Bar Chart</h3>
                <BarChart width={600} height={300} data={barChartData.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
            <div>
                <h3>Pie Chart</h3>
                <PieChart width={400} height={400}>
                    <Pie data={pieChartData.data} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;
