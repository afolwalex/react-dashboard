import iconBlue from '../assets/blue.png'
import iconRed from '../assets/declined.png'
import { Line } from 'react-chartjs-2';

let lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Projects done',
        borderWidth: 1,
        backgroundColor: '#f7f9ff',
        borderColor: '#2979F2',
        data: [650, 650, 450, 450, 600, 450, 400, 500, 460, 650, 460, 650]
    }, {
        label: 'New applications',
        borderWidth: 1,
        backgroundColor: '#FDECE2',
        borderColor: '#FA5F1C',
        data: [560, 560, 280, 280, 340, 700, 340, 400, 600, 280, 280, 560]
    }]
};

const Chart = () => {
    return (
        <div className="container chart">
            <div className="space-flex mb-3">
                <select>
                    <option value="Monthly">Monthly</option>
                </select>
                <p className="d-in mt-2">
                    <span>
                        <img src={iconBlue} alt="blue" />
                        Projects done
                    </span>
                    <span>
                        <img src={iconRed} alt="red" />
                        New applications
                    </span>
                </p>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="campaign ct-charts">
                        <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                            <Line 
                                data={lineData} 
                                options={
                                    { 
                                        maintainAspectRatio: false, 
                                        legend: { 
                                            display: false, 
                                        }, 
                                        scales: { 
                                            yAxes: [
                                                { 
                                                    gridLines: { display: true }, 
                                                    ticks: {stepSize: 300, max: 900} 
                                                }
                                            ], 
                                            xAxes: [
                                                { 
                                                    gridLines: { display: false }, 
                                                }
                                            ] 
                                        } 
                                    }
                                } 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart
