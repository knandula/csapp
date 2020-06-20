import React from 'react';
import { withStyles, Grid, Container, Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import SideNav from '../components/SideNav';
// import AvailableFields from '../components/AvailableFields'

const styles = () => ({
    root: {
        padding: 0,
    },
});


const Layout = ({ history, classes, children, match }) => {
    return (
        <Container maxWidth={false} className={classes.root} color="primary">
            <Grid container direction="row">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Header history={history} match={match} />
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item lg={2} md={2}>
                    <Hidden smDown>
                        <SideNav history={history} match={match} />
                    </Hidden>
                </Grid>
                <Grid item lg={10} md={10} sm={12} >
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
};

Layout.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(Layout);
