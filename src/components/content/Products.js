import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import {ProductList} from "./ProductList";
import "../../styles/css/content-styles.css";
import "../../styles/css/product-styles.css";

export class Products extends React.Component {
  render() {
    const data = require("../../catalog.json");
    const categories = data["categories"];
    const leftArrow = "<";
    const renderLeftArrow = () => <div>{leftArrow}</div>;
    const renderRightArrow = () => <div>></div>;

    const categoryList = categories.map((category, i) => {
      return (
        <div className="menu-bar">
          <h3>{category.categoryName}</h3>
          <ComponentSlider
            renderLeftArrow={renderLeftArrow}
            renderRightArrow={renderRightArrow}>
              <ProductList items={category.items}/>
          </ComponentSlider>
        </div>
      );
    });

    return (
      <div id="products">
        <div className="pageContainer">
          <h1 className="pageHeader">Browse our catalog!</h1>
          <p>
              Discontent is more than just a smoke shop, we're a lifestyle store that prides
              itself on being your one stop shop for all things GRASSroots! From pipes to papers, 
              wallets to wall art, and everything in between, Discontent has the spice of life! 
              Everything you see below is fully stocked on location!
          </p>
          {categoryList}
        </div>
      </div>
    );
  }
}
