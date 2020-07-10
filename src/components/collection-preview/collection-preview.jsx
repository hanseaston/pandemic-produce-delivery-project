import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((_item, idx) => idx < 4)
        .map((item) => {
          console.log("item is", item);
          return <CollectionItem key={item.id} item={item} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
