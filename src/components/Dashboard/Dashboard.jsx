import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./Dashboard.css";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        price: "",
        sku: "",
        description: "",
    });
    const [editingId, setEditingId] = useState(null);

    const productsCollection = collection(db, "products");

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getDocs(productsCollection);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            const productDoc = doc(db, "products", editingId);
            await updateDoc(productDoc, formData);
            setEditingId(null);
        } else {
            await addDoc(productsCollection, formData);
        }
        setFormData({ name: "", image: "", price: "", sku: "", description: "" });
        fetchProducts();
    };

    const handleDelete = async (id) => {
        if (confirm("¿Estás seguro de que quieres borrar el producto?")) {
            const productDoc = doc(db, "products", id);
            await deleteDoc(productDoc);
            fetchProducts();
        };
    };

    const handleEdit = (product) => {
        setFormData(product);
        setEditingId(product.id);
    };

    const handleClearForm = () => {
        setFormData({
            name: "",
            image: "",
            price: "",
            sku: "",
            description: "",
        });
        setEditingId(null)
    };

    return (
        <Layout>
            <div className="dashboard-container">
                <form className="dashboard-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Imagen (URL)</label>
                            <input type="text" name="image" value={formData.image} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>SKU</label>
                            <input type="text" name="sku" value={formData.sku} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn-submit">{editingId ? "Actualizar" : "Agregar"}</button>
                    {editingId && <button type="button" className="btn-cancel" onClick={handleClearForm}>Cancelar</button>}
                </form>

                {/* Tabla */}

                {products.length > 0 && (
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>SKU</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td><img src={product.image} alt={product.name} className="product-img" /></td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <p><button className="btn-edit" onClick={() => handleEdit(product)}>Editar</button></p>
                                        <p><button className="btn-delete" onClick={() => handleDelete(product.id)}>Eliminar</button></p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Layout>
    );
};

export { Dashboard };
