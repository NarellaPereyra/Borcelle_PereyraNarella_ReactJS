import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-brand">Borcelle ~ Tienda de moda</h5>
            <p className="footer-description">
              Descubre las últimas tendencias en moda, con ropa para todos los estilos y ocasiones. ¡Visítanos hoy!
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Navegación</h5>
            <ul className="footer-nav">
              <li>
                <Link className="footer-link" to="/">Inicio</Link>
              </li>
              <li>
                <Link className="footer-link" to="/products">Productos</Link>
              </li>
              <li>
                <Link className="footer-link" to="/registro">Registrate</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Síguenos</h5>
            <ul className="footer-social">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; 2025 Borcelle ~ Tienda de moda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };