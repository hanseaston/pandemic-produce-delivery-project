import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectProductsInCategory } from "../../redux/shop/shopSelector.js";
import "./product-collections.scss";

const ProductCollection = ({ products }) => {
  const { title, items } = products;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const matchStateToProps = (state, otherProps) => ({
  products: selectProductsInCategory(otherProps.match.params.collectionId)(
    state
  ),
});

export default connect(matchStateToProps)(ProductCollection);
