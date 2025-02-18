import { Link } from "react-router-dom"
import "./Header.css"
import { useUser } from "../../context/UserContext"
import { logout } from "../../config/auth"

const Header = () => {

    const { user, setUser } = useUser()

    const handleLogout = async () => {
        try {
            await logout()
            setUser(null)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <header>
            <div className="logo">
                <img src="https://marketplace.canva.com/EAFr-fM-LGM/1/0/1600w/canva-logo-tienda-de-moda-y-ropa-aesthetic-elegante-rosa-lCvIUsZGrmU.jpg" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Productos</Link>
                    </li>
                    {
                        user ? <>
                            <Link className="btn-header" to="/dashboard" >
                                Dashboard
                            </Link>
                            <button className="btn-header" onClick={handleLogout} >
                                Logout
                            </button>
                        </> : <Link className="btn-header" to="/login">Login</Link>
                    }
                </ul>
            </nav>
        </header>
    )
}
export { Header }