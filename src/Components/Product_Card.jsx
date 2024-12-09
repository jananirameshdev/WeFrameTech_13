"use client";
import { useState } from "react";
import "../Styles/global.css";

function Product_Card(props) {
    const [heart, setHeart] = useState(false);
    function handleClick() {
        setHeart(!heart);
    }
    return (
        <div className="itm_text" >
            <div className="item1" >
                <div className="ar">
                    <img src={heart ? props.heart : props.unheart} alt="Icons" className="heart" onClick={handleClick} />
                    <div className="art">ART DE LA TABLE</div>
                </div>
                <img src={props.image} className="img1" />

            </div>
            <div className="tlt">{props.title}</div>
            <div className="rs">{props.rupees}</div>
            <div className="pc">
                <div className="pc_text">{props.piece}</div>
                <div className="nopc">{props.nopiece}</div>
            </div>
        </div>
    )
}
export default Product_Card;