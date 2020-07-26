/**
 * @imports
 */
import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const numberOfPreviewItemsToDisplay = 4;

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((_item, idx) => idx < numberOfPreviewItemsToDisplay)
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
