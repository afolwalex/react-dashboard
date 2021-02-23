
import searchIcon from '../assets/search.png'
import notificationIcon from '../assets/notification.png'
import userIcon from '../assets/user.png'
import {FiMenu} from 'react-icons/fi'

const Header = (props) => {

    return(
        <header>
            <div className="container header">
                <div className="search d-none d-lg-inline-block">
                    <input type="text" placeholder="Search" />
                    <img src={searchIcon} alt="Search" />
                </div>
                <div className="d-lg-none">
                    <img src={searchIcon} alt="Search" />
                </div>
                <div className="icons">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={notificationIcon} alt="Notify" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={userIcon} alt="user" />
                            </a>
                        </li>
                        <li className="d-lg-none">
                            <a href="#" onClick={props.openMenu}>
                                <FiMenu />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </header>
    )
}

export default Header