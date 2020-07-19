/**
 * @class
 *
 */

/**
 * @libaries
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**
 * @selector
 */
import { selectProductsForPreview } from "../../redux/shop/shopSelector.js";

/**
 * @components
 */
import CollectionPreview from "../collection-preview/collection-preview";

/**
 * @styles
 */
import "./collection-overview.scss";

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectProductsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
