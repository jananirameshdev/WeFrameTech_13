"use client";
import { useState } from "react";
import "../Styles/global.css";

const productsData = [
    {
        id: 1,
        image: "https://i.ibb.co/R4xkrdv/Table-ronde-165cm-Festi-1-removebg-preview.png",
        heart: "https://i.ibb.co/p3nGpvb/Icons.png",
        unheart: "https://i.ibb.co/K63RHf0/Icons.png",
        art: "ART DE LA TABLE",
        title: "Title",
        rupees: "0€",
        piece: "0,35€/Pièce · RÉF : VABGN5",
        nopiece: "20 pièces",
    },
    {
        id: 2,
        image: "https://i.ibb.co/R4xkrdv/Table-ronde-165cm-Festi-1-removebg-preview.png",
        heart: "https://i.ibb.co/p3nGpvb/Icons.png",
        unheart: "https://i.ibb.co/K63RHf0/Icons.png",
        art: "ART DE LA TABLE",
        title: "Title",
        rupees: "0€",
        piece: "0,35€/Pièce · RÉF : VABGN5",
        nopiece: "20 pièces",
    },
    {
        id: 3,
        image: "https://i.ibb.co/R4xkrdv/Table-ronde-165cm-Festi-1-removebg-preview.png",
        heart: "https://i.ibb.co/p3nGpvb/Icons.png",
        unheart: "https://i.ibb.co/K63RHf0/Icons.png",
        art: "ART DE LA TABLE",
        title: "Title",
        rupees: "0€",
        piece: "0,35€/Pièce · RÉF : VABGN5",
        nopiece: "20 pièces"
    },
    {
        id: 4,
        image: "https://i.ibb.co/R4xkrdv/Table-ronde-165cm-Festi-1-removebg-preview.png",
        heart: "https://i.ibb.co/p3nGpvb/Icons.png",
        unheart: "https://i.ibb.co/K63RHf0/Icons.png",
        art: "ART DE LA TABLE",
        title: "Title",
        rupees: "0€",
        piece: "0,35€/Pièce · RÉF : VABGN5",
        nopiece: "20 pièces"
    },
    {
        id: 5,
        image: "https://i.ibb.co/R4xkrdv/Table-ronde-165cm-Festi-1-removebg-preview.png",
        heart: "https://i.ibb.co/p3nGpvb/Icons.png",
        unheart: "https://i.ibb.co/K63RHf0/Icons.png",
        art: "ART DE LA TABLE",
        title: "Title",
        rupees: "0€",
        piece: "0,35€/Pièce · RÉF : VABGN5",
        nopiece: "20 pièces"
    },
    {
        id: 6,
        image: "https://i.ibb.co/R4xkrdv/Table-ronde-165cm-Festi-1-removebg-preview.png",
        heart: "https://i.ibb.co/p3nGpvb/Icons.png",
        unheart: "https://i.ibb.co/K63RHf0/Icons.png",
        art: "ART DE LA TABLE",
        title: "Title",
        rupees: "0€",
        piece: "0,35€/Pièce · RÉF : VABGN5",
        nopiece: "20 pièces"
    }
];

function ProductCarousel() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [heart, setHeart] = useState({});

    function handleClick(id) {
        setHeart((prevHeart) => ({
            ...prevHeart,
            [id]: !prevHeart[id],
        }));
    }

    const showNextItems = () => {
        if (currentPosition < productsData.length - 3) {
            setCurrentPosition(currentPosition + 3);
        }
    };

    const showPreviousItems = () => {
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 3);
        }
    };

    return (
        <div className="product-section">
            <div className="product_txli">
                <div className="product_text">Articles similaires</div>
                <a href="#" className="lin">Voir toute la collection</a>
            </div>

            <div className="product-scroll-container">
                <div
                    className="product-items"
                    style={{
                        transform: `translateX(-${(currentPosition / productsData.length) * 100}%)`,
                        display: "flex",
                    }}
                >
                    {productsData.map((product) => (
                        <div className="items" key={product.id}>
                            <div className="itm_text">
                                <div className="item1">
                                    <div className="ar">
                                        <img
                                            src={heart[product.id] ? product.heart : product.unheart}
                                            alt="Heart Icon"
                                            onClick={() => handleClick(product.id)}
                                            className="heart"
                                        />
                                        <div className="art">{product.art}</div>
                                    </div>
                                    <img src={product.image} className="img1" />
                                </div>
                                <div className="tlt">{product.title}</div>
                                <div className="rs">{product.rupees}</div>
                                <div className="pc">
                                    <div className="pc_text">{product.piece}</div>
                                    <div className="nopc">{product.nopiece}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="nav-arrow arrow-left" onClick={showPreviousItems}>
                    ←
                </div>
                <div className="nav-arrow arrow-right" onClick={showNextItems}>
                    →
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
