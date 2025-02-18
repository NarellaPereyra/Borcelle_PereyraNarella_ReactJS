import { Layout } from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <h1 className="nombre-pagina">
          ~ BORCELLE ~ <br />
          Tienda de moda
        </h1>

        <section className="welcome-section">
          <h2 className="welcome-title">Bienvenidas a Borcelle</h2>
          <p className="welcome-text">
            Descubre un universo de moda creado especialmente para mujeres.
            <br /> Encuentra los estilos más elegantes, modernos y versátiles
            para cualquier ocasión.
            <br />Nuestro objetivo es realzar tu belleza y
            confianza con cada prenda.
          </p>
          <p className="img-tienda">
            <img className="img-size" src="https://img.freepik.com/fotos-premium/tienda-ropa-ropa-mujer-productos-diversos_943281-26815.jpg" />
            <img className="img-size" src="https://img.freepik.com/fotos-premium/tienda-ropa-productos-ropa-mujer-diversos_943281-27227.jpg" />
          </p>
        </section>

        <section className="cta-container">
          <div className="cta-section">
            <h2 className="cta-title">¡Explora la colección de Borcelle!</h2>
            <p className="cta-text">
              Sumérgete en un mundo lleno de moda femenina que se adapta a tu
              estilo y personalidad.Aquí encontrarás prendas elegantes,
              modernas y cómodas para cualquier ocasión, desde un look casual
              hasta una salida especial. Además, al realizar tu primera compra,
              disfruta de un 15% de descuento en todo tu pedido. No dejes pasar
              la oportunidad de renovar tu guardarropa con los productos más
              exclusivos. ¡Descubre la moda que te hará sentir única y
              empoderada!
            </p>
            <p>
              <Link className="cta-button" to={"/products"}>Explorar Todos los Productos</Link>
            </p>
          </div>

          <div className="cta-section">
            <h2 className="cta-title">¡Registrate!</h2>
            <p className="cta-text">
              ¡Únete a la familia Borcelle! Regístrate ahora y accede a las
              últimas tendencias de moda para mujeres. Crea tu cuenta para
              disfrutar de descuentos exclusivos, ofertas personalizadas y ser
              el primero en conocer nuestras nuevas colecciones. No pierdas la
              oportunidad de transformar tu estilo con las mejores prendas. ¡Es
              rápido, fácil y totalmente gratuito! Completa tu registro y
              empieza a disfrutar de todos los beneficios que Borcelle tiene
              para ti.
            </p>
            <p>
              <Link className="cta-button" to={"/registro"}>Regitrate Acá</Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export { Home };
