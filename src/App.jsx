import { RouterApp } from "./router/RouterApp.jsx";
import { UserProvider } from './context/UserContext';
function App() {

  return (
    <>
      <UserProvider>
        <RouterApp />
      </UserProvider>
    </>
  )
}

export { App };
