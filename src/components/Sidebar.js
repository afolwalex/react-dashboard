
import homeIcon from '../assets/home.png'
import companyIcon from '../assets/companies.png'
import projectIcon from '../assets/project.png'
import messageIcon from '../assets/message.png'
import settingsIcon from '../assets/settings.png'

const Sidebar = (props) => {

    const menu = [
        {name: 'Dashboard', icon: homeIcon},
        {name: 'Companies', icon: companyIcon},
        {name: 'Projects', icon: projectIcon},
        {name: 'Messages', icon: messageIcon},
        {name: 'Settings', icon: settingsIcon}
    ]
    return (
        <nav className={`sidebar ${props.open ? 'open-m' : ''}`}>
            <div className="nav-wrapper">
                <ul>
                    {menu.map((m, i) => (
                        <li key={i}>
                            <a href="#">
                                <img src={m.icon} alt={m.name} />
                                <span>{m.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar