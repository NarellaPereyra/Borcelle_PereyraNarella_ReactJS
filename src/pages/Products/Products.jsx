import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { TarjetaInfo } from "../TarjetaInfo/TarjetaInfo";
import { Layout } from "../../components/Layout/Layout.jsx"

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productosArray = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productosArray);
            } catch (error) {
                console.error("Error obteniendo productos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Layout>
            <div className="productos-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <TarjetaInfo key={product.id} product={product} />
                    ))
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>
        </Layout>
    );
};

export { Products };