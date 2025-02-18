import React, { useState } from "react";
import "./TarjetaInfo.css";

const TarjetaInfo = ({ product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = () => {
        setSelectedProduct(product);
    };

    const closePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div className=" d-flex justify-content-center">
            <div className="tarjeta-info" onClick={handleProductClick}>
                <h2 className="titulo">{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p className="precio">${product.price}</p>
            </div>

            {selectedProduct && (
                <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.7)" }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.name}</h5>
                                <button type="button" className="btn-close" onClick={closePopup} aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                                <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-img mb-3" />
                                <p>${selectedProduct.price}</p>
                                <p>{selectedProduct.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-comprar">Comprar</button>
                                <button className="btn btn-secondary" onClick={closePopup}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { TarjetaInfo };