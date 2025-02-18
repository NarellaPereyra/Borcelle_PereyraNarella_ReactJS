import { loginWithGoogle, logout } from '../../config/auth';
import { useUser } from '../../context/UserContext';
import './Login.css';
import { Layout } from '../../components/Layout/Layout';

const Login = () => {
  const { user, setUser } = useUser();

  const handleLogin = async () => {
    try {
      const loggedInUser = await loginWithGoogle();
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null)
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <div className="login-card">
          <h2>Bienvenido a Borcelle</h2>
          {user ? (
            <div className="welcome-message">
              <p>Bienvenido, {user.displayName}</p>
              <button className="google-login-btn" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="google-login-btn">
              Iniciar sesión con Google
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export { Login };