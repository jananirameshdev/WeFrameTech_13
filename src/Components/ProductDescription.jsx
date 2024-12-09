"use client";
import React from "react";
import "../Styles/global.css";

const ProductDescription = () => {
    const productDescription = `
       Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table.
    `;

    return (
        <div className="product-description-container">
            <div className="description-section">
                <h2>Description produit</h2>
                <p>{productDescription}</p>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-item" style={{ display: "flex" }}>
                    <h3>LIVRAISONS</h3>
                    <button className="sidebar-button" >+</button>
                </div>
                <div className="sidebar-item" style={{ display: "flex" }}>
                    <h3>QUESTIONS</h3>
                    <button className="sidebar-button">+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
