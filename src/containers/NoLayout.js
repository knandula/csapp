import React from 'react';
import { withStyles, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = () => ({
    root: {
        padding: 0,
        height: '100vh'
    },
});

const Layout = ({ classes, children }) => (
    <Container maxWidth={false} className={classes.root} color="primary">
        {children}
    </Container>
);

Layout.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(Layout);
