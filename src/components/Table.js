import approvedIcon from '../assets/approved.png'
import pendingIcon from '../assets/pending.png'
import declinedIcon from '../assets/declined.png'

import cregital from '../assets/Cregital.png'
import intelia from '../assets/intelia.png'
import optisoft from '../assets/optisoft.png'
import imperialsoft from '../assets/imperialsoft.png'
import altechma from '../assets/altechma.png'
import talosmart from '../assets/talosmart.png'
import atlassian from '../assets/atlassian.png'
import weevil from '../assets/weevil.png'
import cloudnet from '../assets/cloudnet.png'
import enyata from '../assets/enyata.png'

const Table = () => {

    const content = [
        { name: 'Cregital', image: cregital, status: 'Approved'},
        { name: 'Intellia', image: intelia, status: 'Approved' },
        { name: 'Optisoft', image: optisoft, status: 'Approved' },
        { name: 'Imperialsoft', image: imperialsoft, status: 'Declined'},
        { name: 'Altechma', image: altechma, status: 'Pending'},
        { name: 'Talosmart', image: talosmart, status: 'Declined' },
        { name: 'Atlassian', image: atlassian, status: 'Declined'},
        { name: 'Weevil Company', image: weevil, status: 'Approved'},
        { name: 'CloudNetIQ Labs', image: cloudnet, status: 'Approved'},
        { name: 'Enyata', image: enyata, status: 'Approved'},
    ]
    return (
        <div className="col-lg-8 mb-3">
            <div className="box-table">
                <div className="space-flex">
                    <div className="switch mt-2">
                        <a href="#" className="active">All</a>
                        <a href="#">
                            <img src={approvedIcon} alt="approved" />
                            Approved
                        </a>
                        <a href="#">
                            <img src={pendingIcon} alt="pending" />
                            Pending
                        </a>
                        <a href="#">
                            <img src={declinedIcon} alt="declined" />
                            Declined
                        </a>
                    </div>
                    <div className="sort mt-2">
                        <select>
                            <option value="">Sort</option>
                        </select>
                    </div>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>Company Name</th>
                                <th>Company size</th>
                                <th>Yes of inc.</th>
                                <th>Revenue</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map((c, i) => (
                                <tr key={i}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td className="name">
                                        <img src={c.image} alt={c.name} />
                                        {c.name}
                                    </td>
                                    <td>234</td>
                                    <td>5</td>
                                    <td>NGN 1,000,000</td>
                                    <td className={`${c.status}`}>
                                        <span>
                                            {c.status === 'Approved' 
                                                ? <img src={approvedIcon} alt="approved" /> 
                                                : c.status === 'Pending' ? <img src={pendingIcon} alt="pending" />
                                                : <img src={declinedIcon} alt="declined" /> }
                                            {c.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="paginate text-center">
                    <a href="#">&lt;</a>
                    <a href="#" className="color active">1</a>
                    <a href="#" className="color">2</a>
                    <a href="#" className="color">3</a>
                    <a href="#">...</a>
                    <a href="#" className="color">200</a>
                    <a href="#">&gt;</a>
                </div>
            </div>
        </div>
    )
}

export default Table