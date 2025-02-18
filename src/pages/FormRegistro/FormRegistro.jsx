import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./FormRegistro.css";

const FormRegistro = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario para registrar:", form);

    setSuccessMessage("¡Registro exitoso! Ahora recibirás nuestras notificaciones.");


    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <div className="form-container">
        <h2 className="form-title">¡Únete a Borcelle!</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">Nombre</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                onChange={handleChange}
                value={form.firstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Apellido</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                onChange={handleChange}
                value={form.lastName}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">
              Registrarse
            </button>
            {successMessage && <div className="success-message">{successMessage}</div>}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export { FormRegistro };
