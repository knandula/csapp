import React from 'react';
import { withStyles, Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const styles = () => ({
    root: {
        padding: 0,
    },
});

const Layout = ({ history, classes, children, match }) => <Container maxWidth={false} className={classes.root} color="primary">
    <Grid container direction="row">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Header history={history} match={match}/>
        </Grid>
    </Grid>
    <Grid container direction="row">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            {children}
        </Grid>
    </Grid>
</Container>;

Layout.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(Layout);
