import logo from './logo.svg'
import './header.css'


function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <p>LangueSelectionComponant</p>
        </header>
    )
}

export default Header