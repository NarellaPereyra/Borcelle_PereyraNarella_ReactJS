import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home.jsx"
import { Products } from "../pages/Products/Products.jsx"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { FormRegistro } from "../pages/FormRegistro/FormRegistro.jsx"
import { Login } from "../pages/Login/Login.jsx"
import { Dashboard } from "../components/Dashboard/Dashboard.jsx"
import { PrivateRoute } from "../components/PrivateRoute.jsx"

const RouterApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/registro" element={<FormRegistro />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
                />
            </Routes>
        </Router>
    )
}

export { RouterApp }