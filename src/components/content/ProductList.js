import React from "react";
import "../../styles/css/content-styles.css";
import "../../styles/css/product-styles.css";

export class ProductList extends React.Component {
    render() {
        const items = this.props.items;
        const itemMap = items.map(item => {
            return (
                <div className="menu-item">
                    <img className="productPic" src={item.image}/>
                    <p>{item.itemName} <br/> ${item.price}</p>
                </div>
            )
        })

        return itemMap;
    }
}