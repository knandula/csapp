import React from 'react';
import PropTypes from 'prop-types';



const SideFilter = props => (
    <React.Fragment>
        <h2>Side Nav </h2>
    </React.Fragment>
);


SideFilter.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    history: PropTypes.arrayOf(PropTypes.string)
};

export default SideFilter;
