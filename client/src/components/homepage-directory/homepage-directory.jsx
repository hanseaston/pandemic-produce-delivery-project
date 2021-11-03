/**
 * @Libraries
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**
 * @Selectors
 */
import { selectDirectorySections } from "../../redux/frontpage-directory/directorySelector";

/**
 * @Component
 */
import MenuItem from "../menu-item/menu-item";

/**
 * @Styles
 */
import "./homepage-directory.scss";

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
