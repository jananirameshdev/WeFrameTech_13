import "../Styles/global.css";
import Product_details from "./Product_details";
import Product_Card from "./Product_Card";
function Products(props) {
    return (
        <div className="product">
            <div className="product_txli">
                <div className="product_text">
                    Ces produits pourraient vous intéresser
                </div>
                <a href="#" className="lin">Voir toute la collection</a>
            </div>
            <div className="items">
                {Product_details.map(pro => <Product_Card key={pro.id} {...pro} />)}

            </div>
        </div>
    )
}
export default Products;