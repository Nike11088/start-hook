import React from "react";
import PropTypes from "prop-types";

const ComponentsList = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const config = {
            ...child.props,
            num: ++i
        };

        return React.cloneElement(child, config);
    });
};

ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ComponentsList;
