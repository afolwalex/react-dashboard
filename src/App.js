import React, {useState} from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chart from './components/Chart'

import arrowUp from './assets/arrow-up.png'
import arrowDown from './assets/arrow-down.png'
import Table from './components/Table'
import Rating from './components/Rating'

const App = () => {
    
    const stats = [
        {
            name: 'Registered companies',
            number: 849,
            percent: 5.25,
            arrow: arrowUp,
            style: 'one',
            pstyle: 'green'
        },
        {
            name: 'New application',
            number: 508,
            percent: 5.25,
            arrow: arrowDown,
            style: 'two',
            pstyle: 'red'
        },
        {
            name: 'Total projects done',
            number: 1043,
            percent: 1.23,
            arrow: arrowDown,
            style: 'three',
            pstyle: 'red'
        },
        {
            name: 'New projects',
            number: 38,
            percent: 5.25,
            arrow: arrowUp,
            style: 'four',
            pstyle: 'green'
        }
    ]

    const [open, setOpen] = useState(false)

    const toggle = (e) => {
        e.preventDefault()
        setOpen (!open)
    }

    return (
        <div className="wrapper">
            <Sidebar open={open} />
            <div className="content">
                <Header openMenu={toggle} />
                <main className="main mb-5">
                    <div className="container overview">
                        <h5>Overview</h5>
                        <div className="row mt-3">
                            {stats.map((stat, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                                    <div className={`box ${stat.style}`}>
                                        <h6>{stat.name}</h6>
                                        <p className="stat">{stat.number}</p>
                                        <p className={`percent ${stat.pstyle}`}>
                                            <img src={stat.arrow} alt="arrow" />
                                            <span>{stat.percent}%</span>
                                        </p>
                                        <p>Since last week</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section id="chart-section" className="mt-4 mb-4">
                        <Chart />
                    </section>
                    <section id="table-section">
                        <div className="container">
                            <div className="row">
                                <Table />
                                <Rating />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default App